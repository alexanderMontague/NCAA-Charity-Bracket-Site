import React, { Component } from "react";
import styles from "./Bracket.scss";

class Bracket extends Component {
  render() {
    return (
      <section id="bracket">
        <div className={styles.container}>
          <div className={[styles.split, styles.splitOne].join(" ")}>
            <div
              className={[styles.round, styles.roundOne, styles.current].join(
                " "
              )}
            >
              <div className={styles.roundDetails}>
                Round 1<br />
                <span className={styles.date}>March 16</span>
              </div>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Duke<span className={styles.score}>76</span>
                  <div className={styles.teamOwner}>Steve Montague</div>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Virginia<span className={styles.score}>82</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Wake Forest<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Clemson<span className={styles.score}>56</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  North Carolina<span className={styles.score}>68</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Florida State<span className={styles.score}>54</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  NC State<span className={styles.score}>74</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Maryland<span className={styles.score}>92</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Georgia Tech<span className={styles.score}>78</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Georgia<span className={styles.score}>80</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Auburn<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Florida<span className={styles.score}>63</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Kentucky<span className={styles.score}>70</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Alabama<span className={styles.score}>59</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Vanderbilt<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Gonzaga<span className={styles.score}>68</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Duke<span className={styles.score}>76</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Virginia<span className={styles.score}>82</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Wake Forest<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Clemson<span className={styles.score}>56</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  North Carolina<span className={styles.score}>68</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Florida State<span className={styles.score}>54</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  NC State<span className={styles.score}>74</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Maryland<span className={styles.score}>92</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Georgia Tech<span className={styles.score}>78</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Georgia<span className={styles.score}>80</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Auburn<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Florida<span className={styles.score}>63</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Kentucky<span className={styles.score}>70</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Alabama<span className={styles.score}>59</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Vanderbilt<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Gonzaga<span className={styles.score}>68</span>
                </li>
              </ul>
            </div>
            {/* <!-- END ROUND ONE --> */}

            <div className={[styles.round, styles.roundTwo].join(" ")}>
              <div className={styles.roundDetails}>
                Round 2<br />
                <span className={styles.date}>March 18</span>
              </div>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
            </div>
            {/* <!-- END ROUND TWO --> */}

            <div className={[styles.round, styles.roundThree].join(" ")}>
              <div className={styles.roundDetails}>
                Sweet Sixteen
                <br />
                <span className={styles.date}>March 22</span>
              </div>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
            </div>
            {/* <!-- END ROUND THREE -->		 */}
            <div className={[styles.round, styles.roundThree].join(" ")}>
              <div className={styles.roundDetails}>
                Elite Eight
                <br />
                <span className={styles.date}>March 22</span>
              </div>
              <div className={styles.finalFourContainer}>
                <ul className={styles.matchup}>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                </ul>
                <ul className={styles.matchup}>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={[styles.split, styles.splitTwo].join(" ")}>
            <div className={[styles.round, styles.roundThree].join(" ")}>
              <div className={styles.roundDetails}>
                Elite Eight
                <br />
                <span className={styles.date}>March 22</span>
              </div>
              <div className={styles.finalFourContainer}>
                <ul className={styles.matchup}>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                </ul>
                <ul className={styles.matchup}>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                  <li className={[styles.team, styles.teamTop].join(" ")}>
                    &nbsp;<span className={styles.score}>&nbsp;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={[styles.round, styles.roundThree].join(" ")}>
              <div className={styles.roundDetails}>
                Sweet Sixteen
                <br />
                <span className={styles.date}>March 22</span>
              </div>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
            </div>
            {/* <!-- END ROUND THREE -->	 */}

            <div className={[styles.round, styles.roundTwo].join(" ")}>
              <div className={styles.roundDetails}>
                Round 2<br />
                <span className={styles.date}>March 18</span>
              </div>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  &nbsp;<span className={styles.score}>&nbsp;</span>
                </li>
              </ul>
            </div>
            {/* <!-- END ROUND TWO --> */}
            <div
              className={[styles.round, styles.roundOne, styles.current].join(
                " "
              )}
            >
              <div className={styles.roundDetails}>
                Round 1<br />
                <span className={styles.date}>March 16</span>
              </div>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Minnesota<span className={styles.score}>62</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Northwestern<span className={styles.score}>54</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Michigan<span className={styles.score}>68</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Iowa<span className={styles.score}>66</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Illinois<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Wisconsin<span className={styles.score}>56</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Purdue<span className={styles.score}>36</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Boise State<span className={styles.score}>40</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Penn State<span className={styles.score}>38</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Indiana<span className={styles.score}>44</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Ohio State<span className={styles.score}>52</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  VCU<span className={styles.score}>80</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  USC<span className={styles.score}>58</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Cal<span className={styles.score}>59</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Virginia Tech<span className={styles.score}>74</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Dartmouth<span className={styles.score}>111</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Minnesota<span className={styles.score}>62</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Northwestern<span className={styles.score}>54</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Michigan<span className={styles.score}>68</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Iowa<span className={styles.score}>66</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Illinois<span className={styles.score}>64</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Wisconsin<span className={styles.score}>56</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Purdue<span className={styles.score}>36</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Boise State<span className={styles.score}>40</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Penn State<span className={styles.score}>38</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Indiana<span className={styles.score}>44</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Ohio State<span className={styles.score}>52</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  VCU<span className={styles.score}>80</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  USC<span className={styles.score}>58</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Cal<span className={styles.score}>59</span>
                </li>
              </ul>
              <ul className={styles.matchup}>
                <li className={[styles.team, styles.teamTop].join(" ")}>
                  Virginia Tech<span className={styles.score}>74</span>
                </li>
                <li className={[styles.team, styles.teamBottom].join(" ")}>
                  Dartmouth<span className={styles.score}>111</span>
                </li>
              </ul>
            </div>
            {/* <!-- END ROUND ONE -->          				 */}
          </div>
        </div>

        <div className={styles.finalsContainer}>
          <div className={styles.finalFourBottom}>
            <div className={styles.roundDetails}>
              Final Four
              <br />
              <span className={styles.date}>March 16</span>
            </div>
            <div className={styles.finalTeam}>TEST</div>
            <div className={styles.finalTeam}>TEST</div>
          </div>
          <div className={styles.finalsBottom}>
            <div className={styles.roundDetails}>
              Championship
              <br />
              <span className={styles.date}>March 24</span>
            </div>
            <div className={styles.finalTeam}>North Carolina</div>
            <span className={styles.vs}>vs</span>
            <div className={styles.finalTeam}>UCLA</div>
          </div>
          <div className={styles.finalFourBottom}>
            <div className={styles.roundDetails}>
              Final Four
              <br />
              <span className={styles.date}>March 16</span>
            </div>
            <div className={styles.finalTeam}>TEST</div>
            <div className={styles.finalTeam}>TEST</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bracket;
