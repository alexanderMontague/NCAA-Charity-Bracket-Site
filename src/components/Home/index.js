import React from "react";
import styles from "./Home.scss";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "20px" }}>HOOPS FOR STRAW</b>
        <br />
        In September of 2016 my brother, Robert passed away of Cancer at the
        young age of 58. His love of running pools for pretty much any sporting
        event got me to launch the first annual 'Hoops For Straw March Madness'
        fundraiser in 2017. The First annual Hoops For Straw was a massive
        success... raising $1,000.00 that was donated to a local short term care
        facility, with the winner of the pool taking home $500.00 and the runner
        up receiving $200.00.
        <br />
        My goal for the 2nd annual Hoops For Straw fundraiser is donating a
        minimum of $2,000.00 to a local short term care facility.
      </div>

      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "20px" }}>HOW IT WORKS</b>
        <br />
        There are 68 teams to start March Madness, the cost of each team is
        $25.00....so 4 teams would be $100.00. You are slotted into a draw spot
        based on when your money is received.... if you pay first, you get first
        pick....BUT it is all LUCK OF THE DRAW FORMAT....all teams are picked by
        myself and 2 other people.
        <br />
      </div>

      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "20px" }}>
          WINNINGS & DONATION BREAKDOWN
        </b>
        <br />
        <ul style={{ margin: "0" }}>
          <li>68 Teams $25.00/ea = $1,700.00</li>
          <li>$1,000.00 donated to local short term care facility</li>
          <li>$500.00 for the winner $200.00 for the runner up</li>
        </ul>
      </div>

      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "20px" }}>CONTACT</b>
        <br />
        If you are interested or would like more information please call or text
        Richard{" "}
        <span style={{ textDecoration: "underline" }}>(905) - 802 - 1010</span>,
        or you can e-transfer your money to&nbsp;
        <a
          style={{ color: "#1b1b1b", textDecoration: "underline" }}
          href="mailto:hoops4straw@hotmail.com"
        >
          hoops4straw@hotmail.com
        </a>
        . When prompted for a security question please use "Hoops For Who"
        answer "Straw". To guarantee yourself a spot in the draw, all entries
        must be received by March 7th, 2019.
        <br />
      </div>

      <div className={styles.paragraphContainer}>
        Thanks and good luck everyone,
        <br />
        Richard Stanbury
      </div>
    </div>
  );
};

export default Home;
