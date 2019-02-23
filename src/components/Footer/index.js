import React from "react";
import styles from "./Footer.scss";

import {
  FaPhone,
  FaFacebook,
  FaEnvelope,
  FaBasketballBall
} from "react-icons/fa";

const Footer = props => {
  return (
    <div className={styles.footer}>
      <span>
        <FaPhone />
        &nbsp; 905 - 802 - 1010
      </span>
      <span className={styles.footerItem}>
        <FaEnvelope />
        &nbsp; hoops4straw@hotmail.com
      </span>
      <span className={styles.footerItem}>
        <FaBasketballBall />
        &nbsp; Hoops for Straw {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
