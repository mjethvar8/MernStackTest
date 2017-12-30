import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";

// Import Components
import PostList from "../../components/PostList";
import PostCreateWidget from "../../components/PostCreateWidget/PostCreateWidget";

// Import Actions
import {
  addPostRequest,
  fetchPosts,
  deletePostRequest,
  fetchPost,
  setSearchBar
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

    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  setSearchBar(event) {
    this.props.dispatch(fetchPost(event.target.value.toLowerCase()));
  }

  render() {
    const { searchBar } = this.props;
    return (
      <div className={styles["listView"]}>
        <form>
          <input
            type="text"
            className={styles["lookUpUser"]}
            placeholder="Look up user"
            onChange={this.setSearchBar}
          />
        </form>
        <PostList
          setSearchBar={this.setSearchBar}
          posts={this.props.posts}
          searchBar={searchBar}
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
    posts: getPosts(state),
    searchBar: setSearchBar(state)
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
  dispatch: PropTypes.func.isRequired
};

PostListPage.contextTypes = {
  router: React.PropTypes.object
};

export default connect(mapStateToProps)(PostListPage);
