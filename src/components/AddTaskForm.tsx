import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { useDispatch } from 'react-redux';
import { Button } from "@mui/material";

export function AddTaskForm() {
  const initialValues = {
    name: "",
    description: "",
    completed: false,
  };

  const addTaskSchema = Yup.object().shape({
    name: Yup.string().min(1, "Task name too short").max(20, "Task name too long").required("Task name is required"),
    description: Yup.string().max(50, "Task description too long"),
  });

  // Get redux action dispatch function
  const dispatch = useDispatch();

  const onSubmit = (values: FormikValues) => {

    // Add task to state
    // props.addTask(newTask);
    dispatch({
        type: "ADD_TODO",
        payload: {
          name: values.name,
          description: values.description,
        },
      });

    console.log("Added task");
  };

  return (
    <div>
      <h4 style={{ textDecoration: 'underline' }}>Add New Task:</h4>
      <Formik initialValues={initialValues} validationSchema={addTaskSchema} onSubmit={onSubmit}>
        {({ touched, errors }) => (
          <Form>
            {/* Task Name Input */}
            <label htmlFor="name" style={{width: 200, textAlign: "left"}}>Task Name:</label>
            <Field id="name" type="text" name="name" placeholder="Task name..." />

            {/* Task Name Errors */}
            {errors.name && touched.name && <ErrorMessage name="name" component="div"></ErrorMessage>}

            <br />

            {/* Description Input */}
            <label htmlFor="description" style={{width: 200, textAlign: "left"}}>Task Description:</label>
            <Field id="description" type="text" name="description" placeholder="Task description..." />

            {/* Description Errors */}
            {errors.description && touched.description && (
              <ErrorMessage name="description" component="div"></ErrorMessage>
            )}

            <br />

            <Button variant="contained" type="submit">Add Task</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
