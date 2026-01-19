from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from ultralytics import YOLO
import numpy as np
import cv2
import os
import gc

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Directory to store annotated images
OUTPUT_DIR = 'outputs'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Global model variable (Lazy Load)
model = None

@app.route("/")
def home():
    return "Backend is running! 🚀"

@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    global model
    
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    try:
        # Lazy Load Model (Only load when needed to save RAM on boot)
        if model is None:
            print("Loading Model...") 
            model = YOLO('new.pt')

        # Decode image
        file_bytes = np.frombuffer(file.read(), np.uint8)
        img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
        if img is None:
            return jsonify({"error": "Invalid image file"}), 400

        # RESIZE IMAGE TO SAVE MEMORY (Critical for Free Tier)
        # Use standard YOLO input size 640x640
        img = cv2.resize(img, (640, 640))

        # Run YOLO prediction
        results = model.predict(source=img, conf=0.5, imgsz=640)
        pred = results[0]

        # Annotate image
        annotated_image = pred.plot()

        # Save with fixed name and fixed extension
        annotated_filename = "annotated_output.jpg"
        annotated_path = os.path.join(OUTPUT_DIR, annotated_filename)
        cv2.imwrite(annotated_path, annotated_image)

        # Extract predictions
        output = []
        for box in pred.boxes:
            class_id = int(box.cls.item())
            conf = float(box.conf.item())
            output.append({
                "disease": model.names[class_id],
                "confidence": round(conf * 100, 2)
            })

        # Return response
        return jsonify({
            "predictions": output,
            "annotatedImageUrl": f"/outputs/{annotated_filename}"
        })

    except Exception as e:
        app.logger.exception("Error during prediction:")
        return jsonify({"error": str(e)}), 500
    finally:
        # Force garbage collection to free RAM
        gc.collect()

# Serve annotated images
@app.route('/outputs/<path:filename>')
def serve_annotated_image(filename):
    return send_from_directory(OUTPUT_DIR, filename)

if __name__ == "__main__":
    app.run(debug=True)
