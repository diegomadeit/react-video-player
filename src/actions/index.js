import { v4 } from "uuid";

export const ActionTypes = {
  CREATE_VIDEO: "CREATE_VIDEO",
  SELECT_VIDEO: "SELECT_VIDEO"
};

export const createVideo = video => ({
  type: ActionTypes.CREATE_VIDEO,
  id: v4(),
  video
});

export const selectVideo = id => ({
  type: ActionTypes.SELECT_VIDEO,
  id
});
