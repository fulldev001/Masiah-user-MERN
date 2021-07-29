import api from "utils/api"
import { SET_POSTS } from "./types";

export const getAllPostsAct = () => dispatch => {
  api.get("/posts/getAll")
  .then(res => {
    dispatch({
      type: SET_POSTS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err);
  })
}