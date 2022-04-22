import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Task } from "../models/Task.model";
import { TaskComponent } from './TaskComponent';

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
  const tasks = useSelector<Task[], Task[]>(state => state)

  // Return tasks list from store
  return <div>
    {tasks.map((task, i) => {
      console.log(task)
      return (
        <TaskComponent key={i} task={task} />
      )
    })}
  </div>;
};
