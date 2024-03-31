import counterReducer from "./counter/counter.reducer.js";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import postsReducer from "./post/post.reducer.js";
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools()
// );
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;