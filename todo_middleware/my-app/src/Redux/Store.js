import { createStore,applyMiddleware,compose } from "redux";
import { rootReducer } from "./reducer";
import thunk from "redux-thunk";
const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const thunk = (store) => (next) => (action) => {
//     return typeof action === "function"
//       ? action(store.dispatch, store.getState)
//       : next(action);
//   };
export const store = createStore(rootReducer,createComposer(applyMiddleware(thunk)))