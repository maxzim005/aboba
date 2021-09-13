import { combineReducers, createStore } from "redux";
import formReducer from './form_1-reducer';

let reducers = combineReducers({
    formPage : formReducer,
});

let store = createStore(reducers);

export default store;