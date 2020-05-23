import { createStore, applyMiddleware, compose } from "redux";
// import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";
import reducers from "../reducers";

// const logger = createLogger({
//   predicate: (getState, action) => true,
//   collapsed: true,
//   duration: true,
//   diff: true
// });

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  window.store = store;
  sagaMiddleware.run(sagas);

  return store;
}
