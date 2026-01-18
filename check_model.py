from ultralytics import YOLO
import cv2
import os

# Paths
model_path = 'new.pt'
image_path = r'C:/Users/HP/.gemini/antigravity/brain/caf323e2-96c2-42d0-912a-792113811ee2/uploaded_image_1768769075836.png'

def check_model():
    if not os.path.exists(model_path):
        print(f"Error: Model not found at {model_path}")
        return
    if not os.path.exists(image_path):
        print(f"Error: Image not found at {image_path}")
        return

    print("Loading model...")
    model = YOLO(model_path)
    
    print(f"Running prediction on {os.path.basename(image_path)}...")
    results = model.predict(source=image_path, conf=0.25) # Using 0.25 confidence threshold
    
    result = results[0]
    
    if len(result.boxes) == 0:
        print("\nNo diseases detected.")
        return

    print(f"\nFound {len(result.boxes)} detections:")
    print("-" * 30)
    for box in result.boxes:
        class_id = int(box.cls.item())
        class_name = model.names[class_id]
        confidence = float(box.conf.item()) * 100
        print(f"• {class_name}: {confidence:.1f}% confidence")
    print("-" * 30)

if __name__ == "__main__":
    check_model()
