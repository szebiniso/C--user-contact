import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import reducer from "./contactReducers";
import {composeWithDevTools} from "redux-devtools-extension";

const saveToLocalStorage = (state) => {
  try {
    const Data = JSON.stringify(state);
    localStorage.setItem("LocalState", Data);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const loadedState = localStorage.getItem("LocalState");
    if (loadedState === null) return undefined;
    return JSON.parse(loadedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
