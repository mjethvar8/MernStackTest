import React, { PropTypes } from "react";

// Import Components
import PostListItem from "./PostListItem/PostListItem";
import styles from "./PostList.css";

function PostList(props) {
  return (
    <div className={styles["listView"]}>
      {props.posts.map(post => <PostListItem post={post} key={post._id} />)}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      lastUpdated: PropTypes.string.isRequired,
      rankings: PropTypes.object(PropTypes.string),
      stats: PropTypes.array(PropTypes.string)
    })
  ).isRequired
};

export default PostList;
