import { LEVELS } from "../../models/Levels.enum";
import { Task } from "../../models/Task.model";

let initialState = [];

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("adding task...");
      // Create new task
      const task = new Task(action.payload.name, LEVELS.NORMAL, action.payload.description, false);
      return [...state, task];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    default:
      return state;
  }
};
