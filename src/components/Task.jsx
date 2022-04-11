import React from "react";
import PropTypes from "prop-types";

function TaskComponent(props) {
  return (
    <div className="TaskComponent" onClick={props.completeTask}>
      <h3>{props.task.name}</h3>
      <h4>{props.task.description}</h4>
      {props.task.completed ? <h4 className="green">Complete</h4> : <h4 className="red">Pending</h4>}
    </div>
  );
}

TaskComponent.propTypes = {};

export default TaskComponent;
