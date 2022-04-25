import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "../models/Task.model";
import { TaskComponent } from "./TaskComponent";

interface GlobalState {
  tasks: Task[];
  filter: string;
}

export const TaskList = () => {
  // Get redux action dispatch function
  const dispatch = useDispatch();

  // Dispatch two new example tasks on init
  useEffect(() => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: "Example Task 1",
        description: "This is my first example task",
      },
    });
    dispatch({
      type: "ADD_TODO",
      payload: {
        name: "Example Task 2",
        description: "This is my second example task",
      },
    });
  }, []);

  // Get all tasks
  const tasks = useSelector<GlobalState, Task[]>((state) => {
    switch (state.filter) {
      case "SHOW_ALL":
        return state.tasks;
      case "ONLY_PENDING":
        return state.tasks.filter((task) => !task.completed);
      case "ONLY_COMPLETED":
        return state.tasks.filter((task) => task.completed);
      default:
        return state.tasks;
    }
  });

  // Return tasks list from store
  return (
    <div>
      {tasks.map((task) => {
        return <TaskComponent key={task.id} task={task} />;
      })}
    </div>
  );
};
