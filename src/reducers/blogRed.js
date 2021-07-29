import { SET_COMMENTS } from "actions/types";
import { SET_POSTS } from "actions/types";

const initialState = {
  posts: [],
  comments: []
};

function blogReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_POSTS: 
      return {
        ...state,
        posts: payload
      }
    case SET_COMMENTS: 
      return {
        ...state,
        comments: payload
      }
    default:
      return state;
  }
}

export default blogReducer;

