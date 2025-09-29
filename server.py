from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from ultralytics import YOLO
import numpy as np
import cv2
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

# Directory to store annotated images
OUTPUT_DIR = 'outputs'
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Load trained model
model = YOLO('new.pt')  # Make sure this file exists

@app.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    try:
        # Decode image
        file_bytes = np.frombuffer(file.read(), np.uint8)
        img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
        if img is None:
            return jsonify({"error": "Invalid image file"}), 400

        # Run YOLO prediction
        results = model.predict(source=img, conf=0.5)
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

        # Return static image path (with anti-cache param)
        return jsonify({
            "predictions": output,
            "annotatedImageUrl": f"/outputs/{annotated_filename}"
        })

    except Exception as e:
        app.logger.exception("Error during prediction:")
        return jsonify({"error": str(e)}), 500

# Serve annotated images
@app.route('/outputs/<path:filename>')
def serve_annotated_image(filename):
    return send_from_directory(OUTPUT_DIR, filename)

if __name__ == "__main__":
    app.run(debug=True)
