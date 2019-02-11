import React from "react";
import styles from "./Team.scss";

import { DragSource } from "react-dnd";

const Team = props => {
  const { teamName, score } = props;

  return (
    <li className={[styles.team, styles.teamTop].join(" ")}>
      TEST TEAM<span className={styles.score}>123</span>
    </li>
  );
};

export default Team;
