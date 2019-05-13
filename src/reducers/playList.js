import { ActionTypes } from "../actions";
import { combineReducers } from "redux";
import playListVideo from "./playListVideo";

const byId = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_VIDEO:
    case ActionTypes.SELECT_VIDEO:
      return {
        ...state,
        [action.id]: playListVideo(state[action.id], action)
      };
    default:
      return state;
  }
};

const idList = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.CREATE_VIDEO:
      return [...state, action.id];
    default:
      return state;
  }
};

const playList = combineReducers({
  byId,
  idList
});

export default playList;

export const getPlayList = state => state.idList.map(id => state.byId[id]);

export const getActiveVideo = (state, id) => state.byId[id];

export const getNextVideoId = (state, id) => {
  const activeVideoIndex = state.idList.findIndex(videoId => videoId === id);

  if (activeVideoIndex === -1 || state.idList.length === 1) {
    return;
  }

  if (activeVideoIndex === state.idList.length - 1) {
    return state.idList[0];
  }

  return state.idList[activeVideoIndex + 1];
};
