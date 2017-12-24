import React, { PropTypes } from "react";

// Import Components
import PostListItem from "./PostListItem/PostListItem";

function PostList(props) {
  return (
    <div className="listView">
      {props.posts.map(post => (
        <PostListItem
          post={post}
          key={post._id}
          onDelete={() => props.handleDeletePost(post.cuid)}
        />
      ))}
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
  ).isRequired,
  handleDeletePost: PropTypes.func.isRequired
};

export default PostList;
