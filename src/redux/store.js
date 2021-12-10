import { createStore, combineReducers } from "redux";
import currentAsset from "./reducers/currentAsset";
import marketingPostList from "./reducers/marketingPostList";

const store = createStore(combineReducers({ currentAsset, marketingPostList }));

export default store;
