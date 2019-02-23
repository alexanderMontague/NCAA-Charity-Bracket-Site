import React, { Component } from "react";
import styles from "./Bracket.scss";

import Header from "../../components/Header";
import Bracket from "../Bracket";
import Team from "../../components/Team";
import Footer from "../../components/Footer";

class BracketLayout extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Header headerTitle="Hoops for Straw" />
        <div className={styles.contentContainer}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default BracketLayout;
