import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTaskForm } from './AddTaskForm'
import { FilterOptions } from './FilterOptions'
import { TaskList } from './TaskList'


export const ToDoApp = () => {
  return (
    <div>
        <TaskList/>
        <AddTaskForm/>
        <FilterOptions/>
    </div>
  )
}
