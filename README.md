# 🦷 Dental Disease Detection & Classification using YOLOv8

**Detecting and Classifying Common Dental Diseases (e.g., Caries, Periapical Lesions) from X-ray Images.**

[![GitHub last commit](https://img.shields.io/github/last-commit/Mayank1x/Dental-Disease-Detection-Classification-using-YOLO?color=blue)](https://github.com/Mayank1x/Dental-Disease-Detection-Classification-using-YOLO/commits/main)
[![Stars](https://img.shields.io/github/stars/Mayank1x/Dental-Disease-Detection-Classification-using-YOLO?style=social)](https://github.com/Mayank1x/Dental-Disease-Detection-Classification-using-YOLO/stargazers)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.9+-blue)](https://www.python.org/)
[![YOLOv8](https://img.shields.io/badge/Model-YOLOv8-red)](https://docs.ultralytics.com/)

---

## 🎯 Overview

This project implements a **YOLOv8 (You Only Look Once, Version 8)** object detection model to accurately detect and classify various dental pathologies directly from radiographic images. This system is designed to act as an initial screening tool, assisting dental professionals in rapid identification of potential problem areas.

### Key Diseases Detected:

* **Caries** (Tooth Decay)
* **Periapical Lesions** (Infections at the root tip)
* **Periodontitis** (Gum disease indicators)
* *(Customize this list based on your dataset/model)*

## ✨ Features

* **Real-time Detection:** Utilizes the highly efficient YOLOv8 architecture for fast inference times.
* **Classification:** Provides bounding boxes and confidence scores for various disease classes.
* **Custom Training:** Includes all necessary files and instructions to re-train the model on a custom dataset.
* **Data Preprocessing:** Scripts for handling image data and converting annotations to the required YOLO format.

## 🖼️ Demo and Results

*(**Action Item:** Replace the placeholder below with a GIF or screenshot of your model detecting a dental disease, showing bounding boxes and labels.)*

**Example of Disease Detection:**

| Input X-ray Image | Model Output (Detection) |
| :---: | :---: |
|  |  |

---

## ⚙️ Technologies Used

The project is built entirely on open-source libraries and frameworks.

| Category | Tool / Library | Purpose |
| :--- | :--- | :--- |
| **Model** | **YOLOv8 (Ultralytics)** | State-of-the-art object detection framework. |
| **Language** | **Python** (3.9+) | Primary development language. |
| **Deep Learning** | **PyTorch** | Underlying framework for YOLOv8. |
| **Data Handling** | `Pandas`, `NumPy` | Data manipulation and numerical operations. |
| **Utilities** | `OpenCV` (cv2) | Image processing and visualization. |

---

## 🚀 Installation and Setup

Follow these steps to get your local development environment running.

### Prerequisites

* Python 3.9 or higher
* pip (Python package installer)

### Step 1: Clone the Repository

```bash
git clone [https://github.com/Mayank1x/Dental-Disease-Detection-Classification-using-YOLO.git](https://github.com/Mayank1x/Dental-Disease-Detection-Classification-using-YOLO.git)
cd Dental-Disease-Detection-Classification-using-YOLO
