import React from 'react';
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/Mapoofano"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github <span className={styles.username}>Mapoofano</span>
      </a>
    </footer>
  );
};

export default Footer;
