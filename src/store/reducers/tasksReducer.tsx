import { LEVELS } from "../../models/Levels.enum";
import { Task } from "../../models/Task.model";

let initialState: Task[] = [];

interface Action {
  type: string;
  payload: any;
}

export const tasksReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    // ADD_TODO action
    case "ADD_TODO":
      console.log("adding task...");
      // Determine what id goes next
      const id = state.length + 1
      // Create new task
      const task = new Task(id, action.payload.name, LEVELS.NORMAL, action.payload.description, false);
      return [...state, task];

    // TOGGLE_TODO action
    case "TOGGLE_TODO":
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );

    default:
      return state;
  }
};
