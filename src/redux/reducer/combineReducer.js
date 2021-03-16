import { combineReducers } from "redux";
import todosReducer from "./todosReducer"



export const rootReducer = combineReducers({
  todosReducer,
});