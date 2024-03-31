import counterReducer from "./counter/counter.reducer.js";
import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import postsReducer from "./post/post.reducer.js";

const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;