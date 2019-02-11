import React from "react";
import styles from "./Header.scss";

import wavLogo from "../../assets/logo.png";

const Header = props => {
  return (
    <div className={styles.headerBar}>
      <img className={styles.logo} src={wavLogo} alt="NCAA" />
      NCAA Bracket Site
    </div>
  );
};

export default Header;
