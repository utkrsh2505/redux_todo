import {combineReducers} from "redux";
import { Auth_reducer } from "./Auth/Auth.reducer";
import { Todo_reducer } from "./Todo/Todo.reducer";

export const rootReducer = combineReducers({
    auth : Auth_reducer,
    todo : Todo_reducer
})