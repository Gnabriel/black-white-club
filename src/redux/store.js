import { createStore, combineReducers } from "redux";
import currentAsset from "./reducers/currentAsset";

const store = createStore(combineReducers({ currentAsset }));

export default store;
