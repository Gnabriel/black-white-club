import { createStore, combineReducers } from "redux";
import sortingOptions from "./reducers/sortingOptions";
import currentAsset from "./reducers/currentAsset";

const store = createStore(combineReducers({ currentAsset }));

export default store;
