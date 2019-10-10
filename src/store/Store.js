import { applyMiddleware, createStore, compose } from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducer from "../reducers/Reducer";

const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, loggerMiddleware];
}
export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
