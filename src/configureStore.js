import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";

const configureStore = () => {
  const middlewares = [];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;
