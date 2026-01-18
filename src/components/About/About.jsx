import React from 'react';
import styles from './About.module.css';

const About = () => {
  const detectedDiseases = [
    { name: 'Caries / Tooth Decay', description: 'Coronal, Proximal, or Cervical Lesions', category: 'Pathology' },
    { name: 'Periapical Lesions', description: 'Radiolucency around root apex indicating infection or abscess', category: 'Pathology' },
    { name: 'Periodontal Bone Loss', description: 'Indicators of gum disease and bone deterioration', category: 'Pathology' },
    { name: 'Dental Fillings', description: 'Restorations and existing dental work', category: 'Restoration' },
    { name: 'Crowns / Prosthetics', description: 'Dental crowns and prosthetic devices', category: 'Restoration' },
    { name: 'Root Canal Treatment', description: 'Endodontic fillings (RCT)', category: 'Treatment' },
    { name: 'Missing Teeth', description: 'Edentulous areas where teeth are absent', category: 'Structural' },
    { name: 'Impacted Teeth', description: 'Teeth unable to erupt properly (e.g., wisdom teeth)', category: 'Structural' },
  ];

  const technologies = [
    { category: 'Model Architecture', name: 'YOLOv8 (Ultralytics)', description: 'State-of-the-art object detection framework' },
    { category: 'Programming Language', name: 'Python 3.9+', description: 'Primary development language' },
    { category: 'Deep Learning Framework', name: 'PyTorch', description: 'Underlying neural network framework' },
    { category: 'Data Processing', name: 'Pandas & NumPy', description: 'Data manipulation and numerical operations' },
    { category: 'Image Processing', name: 'OpenCV (cv2)', description: 'Computer vision and image processing' },
    { category: 'API Framework', name: 'Flask', description: 'RESTful API for model inference' },
  ];

  return (
    <div className={styles.aboutContainer}>
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>System Overview</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.overviewGrid}>
          <div className={styles.overviewCard}>
            <h3 className={styles.cardTitle}>Purpose</h3>
            <p className={styles.cardText}>
              This system implements a YOLOv8-based object detection model trained from scratch
              on custom-labeled dental radiographs. It serves as an initial screening tool to
              assist dental professionals in rapid identification of potential pathologies and
              structural abnormalities.
            </p>
          </div>

          <div className={styles.overviewCard}>
            <h3 className={styles.cardTitle}>Capabilities</h3>
            <ul className={styles.capabilityList}>
              <li>Real-time detection and classification</li>
              <li>Bounding box localization with confidence scores</li>
              <li>Multi-class pathology identification</li>
              <li>High-precision clinical assistance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Model Performance</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.metricsContainer}>
          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <span className={styles.metricLabel}>Mean Average Precision</span>
              <span className={styles.metricBadge}>Primary Metric</span>
            </div>
            <div className={styles.metricValue}>92.0%</div>
            <div className={styles.metricSubtext}>mAP@0.5 (IoU threshold)</div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <span className={styles.metricLabel}>Recall Rate</span>
              <span className={styles.metricBadge}>Detection Coverage</span>
            </div>
            <div className={styles.metricValue}>81.94%</div>
            <div className={styles.metricSubtext}>Ability to find all relevant instances</div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricHeader}>
              <span className={styles.metricLabel}>Precision</span>
              <span className={styles.metricBadge}>Accuracy</span>
            </div>
            <div className={styles.metricValue}>High</div>
            <div className={styles.metricSubtext}>Strong clinical capability</div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Detectable Conditions</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionSubtitle}>
            The model identifies and localizes the following dental pathologies and structures
          </p>
        </div>

        <div className={styles.diseaseGrid}>
          {detectedDiseases.map((disease, idx) => (
            <div key={idx} className={styles.diseaseCard}>
              <div className={styles.diseaseHeader}>
                <h4 className={styles.diseaseName}>{disease.name}</h4>
                <span className={styles.diseaseCategory}>{disease.category}</span>
              </div>
              <p className={styles.diseaseDesc}>{disease.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.titleUnderline}></div>
        </div>

        <div className={styles.techGrid}>
          {technologies.map((tech, idx) => (
            <div key={idx} className={styles.techCard}>
              <div className={styles.techCategory}>{tech.category}</div>
              <div className={styles.techName}>{tech.name}</div>
              <div className={styles.techDesc}>{tech.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.disclaimerSection}>
        <div className={styles.disclaimerCard}>
          <div className={styles.disclaimerHeader}>
            <svg className={styles.disclaimerIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className={styles.disclaimerTitle}>Clinical Disclaimer</h3>
          </div>
          <p className={styles.disclaimerText}>
            This AI-powered detection system is designed as an <strong>initial screening tool</strong> for
            educational and research purposes. It is intended to assist dental professionals in the rapid
            identification of potential areas of concern. This system should not be used as a substitute
            for professional medical diagnosis. All findings should be verified by qualified dental
            healthcare professionals. Clinical decisions should be made based on comprehensive examination
            and professional judgment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;