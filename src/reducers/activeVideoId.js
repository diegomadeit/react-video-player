import { ActionTypes } from "../actions";

const activeVideoId = (state = "", action) => {
  switch (action.type) {
    case ActionTypes.CREATE_VIDEO:
      return "";
    case ActionTypes.SELECT_VIDEO:
      return action.id;
    default:
      return state;
  }
};

export default activeVideoId;

export const getActiveVideoId = state => state;
