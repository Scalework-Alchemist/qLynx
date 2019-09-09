import { createStore, applyMiddleware, compose } from "redux";
//middleware
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';
//reducers
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(reduxImmutableStateInvariant(),thunk)
  );
  return createStore(rootReducer, initialState, enhancer);
}
