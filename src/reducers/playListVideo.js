import { ActionTypes } from "../actions";

const playListVideo = (state, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_VIDEO:
      return {
        id: action.id,
        data: action.video
      };
    default:
      return state;
  }
};

export default playListVideo;
