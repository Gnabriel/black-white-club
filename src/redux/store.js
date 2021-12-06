import { createStore, combineReducers } from "redux";
import sortingOptions from "./reducers/sortingOptions";

const store = createStore(combineReducers({ sortingOptions }));

export default store;
