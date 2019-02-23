import React from "react";
import styles from "./About.scss";

const About = props => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "25px" }}>HOW IT WORKS</b>
        <br />
        <span className={styles.text}>
          There are 68 teams to start March Madness, the cost of each team is
          $25.00....so 4 teams would be $100.00. You are slotted into a draw
          spot based on when your money is received.... if you pay first, you
          get first pick....BUT it is all LUCK OF THE DRAW FORMAT....all teams
          are picked by myself and 2 other people.
        </span>
        <br />
      </div>

      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "25px" }}>
          WINNINGS & DONATION BREAKDOWN
        </b>
        <br />
        <ul style={{ margin: "0" }}>
          <span className={styles.text}>
            <li>68 Teams $25.00/ea = $1,700.00</li>
            <li>$1,000.00 donated to local short term care facility</li>
            <li>$500.00 for the winner $200.00 for the runner up</li>
          </span>
        </ul>
      </div>

      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "25px" }}>CONTACT</b>
        <br />
        <span className={styles.text}>
          If you are interested or would like more information please call or
          text Richard{" "}
          <span style={{ textDecoration: "underline" }}>
            (905) - 802 - 1010
          </span>
          , or you can e-transfer your money to&nbsp;
          <a
            style={{ color: "#1b1b1b", textDecoration: "underline" }}
            href="mailto:hoops4straw@hotmail.com"
          >
            hoops4straw@hotmail.com
          </a>
          . When prompted for a security question please use "Hoops For Who"
          answer "Straw". To guarantee yourself a spot in the draw, all entries
          must be received by March 7th, 2019.
        </span>
        <br />
      </div>

      <div className={styles.paragraphContainer}>
        <span className={styles.text}>
          Thanks and good luck everyone,
          <br />
          Richard Stanbury
        </span>
      </div>
    </div>
  );
};

export default About;
