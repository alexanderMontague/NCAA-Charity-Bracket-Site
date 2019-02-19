import React, { Fragment } from "react";
import styles from "./Header.scss";
import { Link } from "react-router-dom";

import wavLogo from "../../assets/logo.png";

const Header = props => {
  return (
    <Fragment>
      <div className={styles.headerBar}>
        <img className={styles.logo} src={wavLogo} alt="NCAA" />
        <div className={styles.title}>{props.headerTitle}</div>
        <div className={styles.filler} />
      </div>
      <div className={styles.navBar}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/about" className={styles.navLink}>
          About
        </Link>
        <Link to="/bracket" className={styles.navLink}>
          Bracket
        </Link>
      </div>
    </Fragment>
  );
};

export default Header;
