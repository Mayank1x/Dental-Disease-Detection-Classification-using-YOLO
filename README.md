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

### Key Diseases and Structures Detected:

* **Caries / Tooth Decay** (Coronal, Proximal, or Cervical Lesions)
* **Periapical Lesions** (Radiolucency around the root apex, indicating infection/abscess)
* **Periodontal Bone Loss** (Indicators of gum disease)
* **Dental Fillings / Restorations**
* **Crowns / Prosthetics**
* **Root Canal Treatment (RCT)** (Endodontic fillings)
* **Missing Teeth / Edentulous Areas**
* **Impacted Teeth** (e.g., wisdom teeth)

## 📊 Model Performance & Training Summary

The model was trained from scratch using the YOLOv8 architecture on a custom-labeled dataset of dental X-rays, achieving high precision and recall, demonstrating strong capability for clinical assistance.

| Metric | Value | Detail |
| :--- | :--- | :--- |
| **mAP@0.5** | **92%** | Mean Average Precision at an IoU threshold of 0.5. (Primary metric for object detection accuracy) |
| **Recall** | **0.8194** | The model’s ability to find all relevant instances (all actual dental diseases) in the dataset. |

## ✨ Features

* **Real-time Detection:** Utilizes the highly efficient YOLOv8 architecture for fast inference times.
* **Classification:** Provides bounding boxes and confidence scores for various disease classes.
* **Custom Training:** Includes all necessary files and instructions to re-train the model on a custom dataset.
* **Data Preprocessing:** Scripts for handling image data and converting annotations to the required YOLO format.

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

