import { createStore, applyMiddleware, compose } from "redux";
import { loadState, saveState } from "../store/localStorage";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const middlewares = [thunk];
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  const devToolsExtension =
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

export default function configureStore(initialState) {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState, composedEnhancers);
  store.subscribe(() => {
    saveState({
      tests: store.getState().tests
    });
  });
  return store;
}
