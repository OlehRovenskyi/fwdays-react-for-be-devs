import counterReducer from "./counter/counter.reducer.js";
import {createStore} from "redux";

export const store = createStore(counterReducer);

export default store;