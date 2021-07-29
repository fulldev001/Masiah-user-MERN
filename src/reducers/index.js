import { combineReducers } from 'redux';
import blogRed from "./blogRed";

export default combineReducers({
  blog: blogRed
});
