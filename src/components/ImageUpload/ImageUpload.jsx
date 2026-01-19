import React, { useState } from 'react';
import axios from 'axios';
import styles from './ImageUpload.module.css';

const ImageUpload = ({ onImageUpload, onResults }) => {
  const [preview, setPreview] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setUploadedFile(file);
        onImageUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    if (e.target.files.length) {
      handleFile(e.target.files[0]);
    }
  };

  const handlePredict = async () => {
    setLoading(true);
    try {
      if (!uploadedFile) throw new Error("No file selected!");

      const formData = new FormData();
      formData.append('file', uploadedFile);

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/predict`, formData);

      const { predictions, annotatedImageUrl } = response.data;
      const fullAnnotatedUrl = annotatedImageUrl.startsWith('http')
        ? annotatedImageUrl
        : `${apiUrl}${annotatedImageUrl}`;

      console.log("✅ Prediction Response:", response.data);

      onResults({
        predictions,
        annotatedImage: fullAnnotatedUrl, // Ensure correct key is passed
      });

    } catch (error) {
      console.error("❌ Prediction Error:", error);
      alert("Prediction failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${styles.uploadContainer} ${dragActive ? styles.dragActive : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <div className={styles.uploadArea}>
        {preview ? (
          <div className={styles.previewContainer}>
            <img src={preview} alt="Preview" className={styles.preview} />
            <button className={styles.resetButton} onClick={() => {
              setPreview(null);
              setUploadedFile(null);
            }}>
              Choose Different Image
            </button>
          </div>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className={styles.fileInput}
              id="file-upload"
            />
            <label htmlFor="file-upload" className={styles.uploadLabel}>
              <svg className={styles.uploadIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p>Drag and drop your X-ray image here or click to browse</p>
              <span className={styles.supportedFormats}>
                Supported formats: PNG, JPG, JPEG
              </span>
            </label>
          </>
        )}
      </div>
      {preview && (
        <button
          className={styles.predictButton}
          onClick={handlePredict}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Disease"}
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
