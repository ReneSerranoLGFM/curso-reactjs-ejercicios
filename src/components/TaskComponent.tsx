import React from 'react'
import { Task } from '../models/Task.model'
import { useDispatch } from 'react-redux';

// interface TaskComponentProps {
//   task: Task;
//   onClick: (message: string) => void;
// } 

export const TaskComponent = ({ task }: { task:Task }) => {

  // Get redux action dispatch function
  const dispatch = useDispatch();

  // Toggle Completed func
  const toggleCompleted = (id: number) => {
    console.log(id)
    dispatch({
      type: "TOGGLE_TODO",
      payload: {
        id: id,
      }
    })
  }

  return (
    <div className="TaskComponent" onClick={() => toggleCompleted(task.id)}>
      <h3>{task.name}</h3>
      <h4>{task.description}</h4>
      <h4>{task.priority}</h4>
      {task.completed ? <h4 className="green">Complete</h4> : <h4 className="red">Pending</h4>}
    </div>
  )
}
