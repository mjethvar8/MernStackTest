import {
  ADD_POST,
  ADD_POSTS,
  DELETE_POST,
  SET_SEARCH_BAR
} from "./PostActions";

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        data: [action.post, ...state.data]
      };

    case SET_SEARCH_BAR: {
      return { data: action.keyword };
    }

    case ADD_POSTS:
      return {
        data: action.posts
      };

    case DELETE_POST:
      return {
        data: state.data.filter(post => post.displayName !== action.displayName)
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, displayName) =>
  state.posts.data.filter(post => post.displayName === displayName)[0];

// Export Reducer
export default PostReducer;
