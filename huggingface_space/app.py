import gradio as gr
from ultralytics import YOLO
import cv2
import numpy as np
from PIL import Image

# Load the model
model = YOLO('new.pt')

def predict_image(image):
    """
    Predicts disease in the input image.
    """
    if image is None:
        return None, []
    
    # Convert PIL to numpy
    image = np.array(image)
    
    # Resize to 640x640
    image = cv2.resize(image, (640, 640))
    
    # Run prediction
    results = model.predict(source=image, conf=0.5)
    pred = results[0]
    
    # Generate annotated image
    annotated_img = pred.plot()
    annotated_img_rgb = cv2.cvtColor(annotated_img, cv2.COLOR_BGR2RGB)
    
    # Extract prediction data
    output = []
    for box in pred.boxes:
        class_id = int(box.cls.item())
        conf = float(box.conf.item())
        output.append({
            "disease": model.names[class_id],
            "confidence": round(conf * 100, 2)
        })
        
    return annotated_img_rgb, output

# Build App with Blocks for explicit API control
with gr.Blocks(title="Dental Disease Prediction API") as demo:
    gr.Markdown("# Dental Disease Prediction")
    
    with gr.Row():
        with gr.Column():
            input_image = gr.Image(type="pil", label="Upload Image")
            predict_btn = gr.Button("Predict Disease", variant="primary")
        
        with gr.Column():
            output_image = gr.Image(type="numpy", label="Annotated Result")
            output_json = gr.JSON(label="Predictions")
    
    # Connect the button - EXPLICITLY NAMING THE API ENDPOINT
    predict_btn.click(
        fn=predict_image, 
        inputs=input_image, 
        outputs=[output_image, output_json], 
        api_name="predict"
    )

if __name__ == "__main__":
    demo.launch()
