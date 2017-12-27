import React, { PropTypes } from "react";
import { Link } from "react-router";
import { FormattedMessage } from "react-intl";

// Import Style
import styles from "./PostListItem.css";

function PostListItem(props) {
  //src={require("../../../../../../images/ranks/" +
  //ranks.rankImage +
  //".png")}
  return (
    <div className={styles["single-post"]}>
      <div className={styles["heading"]}>
        <h3 className={styles["post-title"]}>{props.post.displayName}</h3>
      </div>
      <div className={styles["heading"]}>
        <p>{props.post.lastUpdated}</p>
      </div>
      {props.post.stats.map(stat => (
        <div className={styles["statsDiv"]}>
          <div className={styles["background"]}>
            <span className={styles["value"]}>{stat.wins}</span>
            <span className={styles["title"]}>Wins</span>
          </div>
          <div className={styles["background"]}>
            <span className={styles["value"]}>{stat.goals}</span>
            <span className={styles["title"]}>Goals</span>
          </div>
          <div className={styles["background"]}>
            <span className={styles["value"]}>{stat.saves}</span>
            <span className={styles["title"]}>Saves</span>
          </div>
        </div>
      ))}
      {props.post.rankings.map(ranks => (
        <div className={styles["ranked"]}>
          <div className={styles["rankType"]}>
            <p>{ranks.type}</p>
          </div>
          <div className={styles["rankInfo"]}>
            <div className={styles["rankedItems"]}>
              <span className={styles["value"]}>{ranks.gamesPlayed}</span>
              <p className={styles["subTitle"]}>Games Played</p>
            </div>
            <div className={styles["rankedItems"]}>
              <span className={styles["value"]}>{ranks.topPercentile}%</span>
              <p className={styles["subTitle"]}>Top Percentile</p>
            </div>
            <div className={styles["endSection"]}>
              <div className={styles["rankedImage"]}>
                <div className={styles["rankRating"]}>
                  <span className={styles["value"]}>{ranks.rating}</span>
                  <p className={styles["subTitle"]}>{ranks.rank}}</p>
                </div>

                <img className={styles["img"]} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    rankings: PropTypes.object(PropTypes.string),
    stats: PropTypes.array(PropTypes.string)
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};
export default PostListItem;
