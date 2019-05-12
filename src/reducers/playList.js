import { ActionTypes } from "../actions";
import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_VIDEO:
      return {
        ...state,
        [action.id]: action.video
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
