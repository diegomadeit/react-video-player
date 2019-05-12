import { combineReducers } from "redux";
import playList, * as playListSelectors from "./playList";

export default combineReducers({
  playList
});

export const getPlayList = state =>
  playListSelectors.getPlayList(state.playList);
