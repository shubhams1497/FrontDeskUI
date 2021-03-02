import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

// // do this only on DEV mode
// store.subscribe(() => {
//   console.log("store updated");
//   console.log(store.getState());
// });

console.log("environment :", process.env.NODE_ENV);
