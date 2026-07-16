import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ fullScreen = false }) => {
  return (
    <div className={`${styles.container} ${fullScreen ? styles.fullScreen : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
