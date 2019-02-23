import React from "react";
import styles from "./Home.scss";

import hoopsCheque from "../../assets/hoopsCheque.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.paragraphContainer}>
        <b style={{ color: "grey", fontSize: "25px" }}>HOOPS FOR STRAW</b>
        <br />
        <span className={styles.text}>
          In September of 2016 my brother, Robert passed away of Cancer at the
          young age of 58. His love of running pools for pretty much any
          sporting event got me to launch the first annual 'Hoops For Straw
          March Madness' fundraiser in 2017. The First annual Hoops For Straw
          was a massive success... raising $1,000.00 that was donated to a local
          short term care facility, with the winner of the pool taking home
          $500.00 and the runner up receiving $200.00.
        </span>
        <br />
        <span className={styles.text}>
          My goal for the 2nd annual Hoops For Straw fundraiser is donating a
          minimum of $2,000.00 to a local short term care facility.
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={hoopsCheque} className={styles.pic} />
      </div>
    </div>
  );
};

export default Home;
