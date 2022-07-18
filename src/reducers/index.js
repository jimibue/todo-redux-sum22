//TODO
import { combineReducers } from "redux";
import filter from "./filter";
import nextId from "./nextId";
import todos from './todos'
import user from "./user";

const rootReducer = combineReducers({
    todos,
    nextId,
    filter, 
    user, 
})

export default rootReducer