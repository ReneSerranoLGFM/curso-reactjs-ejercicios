import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Task } from "../models/task.class";

function AddTaskForm(props) {
  const initialValues = {
    name: "",
    description: "",
    completed: false,
  };

  const addTaskSchema = Yup.object().shape({
    name: Yup.string().min(1, "Task name too short").max(20, "Task name too long").required("Task name is required"),
    description: Yup.string().max(50, "Task description too long"),
  });

  const onSubmit = (values) => {
    // Create new task
    const newTask = new Task(values.name, values.description, values.completed);

    // Add task to state
    props.addTask(newTask);

    console.log("Added task");
  };

  return (
    <div>
      <h4>Add Task Formik</h4>
      <Formik initialValues={initialValues} validationSchema={addTaskSchema} onSubmit={onSubmit}>
        {({ touched, errors }) => (
          <Form>
            {/* Task Name Input */}
            <label htmlFor="name">Task Name</label>
            <Field id="name" type="text" name="name" placeholder="Task name..." />

            {/* Task Name Errors */}
            {errors.name && touched.name && <ErrorMessage name="name" component="div"></ErrorMessage>}

            {/* Description Input */}
            <label htmlFor="description">Task Description</label>
            <Field id="description" type="text" name="description" placeholder="Task description..." />

            {/* Description Errors */}
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div"></ErrorMessage>
            )}

            <button type="submit">Add Task</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

AddTaskForm.propTypes = {};

export default AddTaskForm;
