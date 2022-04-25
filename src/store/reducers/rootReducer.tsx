import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { tasksReducer } from "./tasksReducer";

export const rootReducer = combineReducers(
    {
        // state name : reducer that will control it
        tasks: tasksReducer,
        filter: filterReducer,
    }
)