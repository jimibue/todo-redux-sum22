//TODO
import { combineReducers } from "redux";
import todos from './todos'

const rootReducer = combineReducers({
    todos:todos
})

export default rootReducer