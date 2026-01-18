import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.9 2 10 2.9 10 4V6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6V4C14 2.9 13.1 2 12 2Z" fill="currentColor" />
              <path d="M12 8C9.24 8 7 10.24 7 13V18C7 20.21 8.79 22 11 22H13C15.21 22 17 20.21 17 18V13C17 10.24 14.76 8 12 8Z" fill="currentColor" />
            </svg>
            <span className={styles.logoText}>DentalAI</span>
          </div>
        </div>

        <h1 className={styles.title}>
          Dental Disease Detection & Classification System
        </h1>

        <p className={styles.subtitle}>
          Advanced YOLOv8-based detection and classification of dental pathologies from radiographic images
        </p>

        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Detection Speed</span>
            <span className={styles.statValue}>Real-time</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Model Accuracy</span>
            <span className={styles.statValue}>92% mAP</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Framework</span>
            <span className={styles.statValue}>YOLOv8</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;