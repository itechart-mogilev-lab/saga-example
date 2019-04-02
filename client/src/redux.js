import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import reducer from "./reducers";
import saga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default createStore(
  combineReducers({
    ...reducer,
    router: connectRouter(history)
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

sagaMiddleware.run(saga);
