import React, { useState } from "react";
import PropTypes from "prop-types";
import { Task } from "../models/task.class";
import TaskComponent from "./Task";

function TaskList(props) {
  const task1 = new Task("task 1", "example task 1", false);
  const task2 = new Task("task 2", "example task 2", false);
  const task3 = new Task("task 3 with long name", "example task 3 with long description", false);

  const [tasks, setTasks] = useState([task1, task2, task3]);

  return (
    <div>
      <h1>Your tasks:</h1>
      {tasks.map((task) => {
        return <TaskComponent task={task} />;
      })}
    </div>
  );
}

TaskList.propTypes = {};

export default TaskList;
