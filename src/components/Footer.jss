import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Link to="/about" className={styles.link}>About Us</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
          <Link to="/" className={styles.link}>Privacy Policy</Link>
        </div>
        <p className={styles.copy}>&copy; {currentYear} XTRO Maker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
