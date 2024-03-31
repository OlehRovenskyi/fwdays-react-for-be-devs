import counterReducer from "./counter/counter.reducer.js";
import {createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";

export const store = createStore(counterReducer, composeWithDevTools());

export default store;