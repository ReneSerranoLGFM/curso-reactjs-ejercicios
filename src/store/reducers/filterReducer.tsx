import { LEVELS } from "../../models/Levels.enum";
import { Task } from "../../models/Task.model";

let initialState: string = 'SHOW_ALL';

interface Action {
  type: string;
  payload: any;
}

export const filterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    // Change filter action
    case 'SET_FILTER':
      console.log('setting filter to', action.payload);
      return action.payload

    default:
      return state;
  }
};
