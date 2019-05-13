import { combineReducers } from "redux";
import playList, * as playListSelectors from "./playList";
import activeVideoId, * as activeVideoSelectors from "./activeVideoId";

export default combineReducers({
  playList,
  activeVideoId
});

export const getPlayList = state =>
  playListSelectors.getPlayList(state.playList);

export const getActiveVideo = state =>
  playListSelectors.getActiveVideo(state.playList, state.activeVideoId);

export const getNextVideoId = state =>
  playListSelectors.getNextVideoId(state.playList, state.activeVideoId);

export const getActiveVideoId = state =>
  activeVideoSelectors.getActiveVideoId(state.activeVideoId);
