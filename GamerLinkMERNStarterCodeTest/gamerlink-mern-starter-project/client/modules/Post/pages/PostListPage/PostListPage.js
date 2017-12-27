import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";

// Import Components
import PostList from "../../components/PostList";
import PostCreateWidget from "../../components/PostCreateWidget/PostCreateWidget";

// Import Actions
import {
  addPostRequest,
  fetchPosts,
  deletePostRequest
} from "../../PostActions";
import { toggleAddPost } from "../../../App/AppActions";

// Import Selectors
import { getShowAddPost } from "../../../App/AppReducer";
import { getPosts } from "../../PostReducer";
import { getPost } from "../../PostReducer";

import styles from "./../PostListPage/PostListPage.css";

class PostListPage extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm("Do you want to delete this post")) {
      // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return (
      <div className={styles["listView"]}>
        <div className={styles["inputRow"]}>
          <form>
            <input
              type="text"
              className={styles["lookUpUser"]}
              placeholder="Look up user"
            />
          </form>
        </div>
        <PostCreateWidget
          addPost={this.handleAddPost}
          showAddPost={this.props.showAddPost}
        />
        <PostList
          handleDeletePost={this.handleDeletePost}
          posts={this.props.posts}
        />
      </div>
    );
  }
}
// Actions required to provide data for this component to render in sever side.
PostListPage.need = [
  () => {
    return fetchPosts();
  }
];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state)
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      lastUpdated: PropTypes.string.isRequired,
      rankings: PropTypes.object(PropTypes.string),
      stats: PropTypes.array(PropTypes.string)
    })
  ).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

PostListPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps)(PostListPage);
