import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./reducers";

export const generateStore = (preload = {}) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    preload,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

  if (module.hot) {
    module.hot.accept("./reducers", () =>
      store.replaceReducer(require("./reducers"))
    );
  }

  return store;
};
