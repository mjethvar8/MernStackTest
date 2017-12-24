import React, { PropTypes } from "react";
import { Link } from "react-router";
import { FormattedMessage } from "react-intl";

// Import Style
import styles from "./PostListItem.css";

function PostListItem(props) {
  return (
    <div className={styles["single-post"]}>
      <h3 className={styles["post-title"]}>{props.post.displayName}</h3>
      <p>{props.post.lastUpdated}</p>
      {props.post.rankings.map(ranks => (
        <div>
          <p>Rank: {ranks.rank}</p>
          <p>Type: {ranks.type}</p>
          <p>Rating: {ranks.rating}</p>
          <p>Games Played: {ranks.gamesPlayed}</p>
          <p>Top Percentile: {ranks.topPercentile}%</p>
        </div>
      ))}
      {props.post.stats.map(stat => (
        <div>
          <p>Saves: {stat.saves}</p>
          <p>Goals: {stat.goals}</p>
          <p>Wins: {stat.wins}</p>
        </div>
      ))}
      <p className={styles["post-action"]}>
        <a href="#" onClick={props.onDelete}>
          <FormattedMessage id="deletePost" />
        </a>
      </p>
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
