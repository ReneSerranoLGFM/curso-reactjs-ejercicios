import React from 'react'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../models/Task.model';

interface GlobalState {
  tasks: Task[];
  filter: string;
}

export const FilterOptions = () => {

  const dispatch = useDispatch()

  const filterShowAll = () => {
    dispatch({
      type: "SET_FILTER",
      payload: "SHOW_ALL"
    })
  }

  const filterPending = () => {
    dispatch({
      type: "SET_FILTER",
      payload: "ONLY_PENDING"
    })
  }

  const filterCompleted = () => {
    dispatch({
      type: "SET_FILTER",
      payload: "ONLY_COMPLETED"
    })
  }

  // Get filter state
  const filter = useSelector<GlobalState, string>(state => state.filter)

  return (
    <div>
        <h4 style={{ textDecoration: 'underline' }}>Filter Options:</h4>
        <Button variant={filter === 'SHOW_ALL' ? "contained" : "outlined"} className='m-1' onClick={filterShowAll}>Show All</Button>
        <Button variant={filter === 'ONLY_PENDING' ? "contained" : "outlined"} className='m-1' onClick={filterPending}>Pending</Button>
        <Button variant={filter === 'ONLY_COMPLETED' ? "contained" : "outlined"} className='m-1' onClick={filterCompleted}>Completed</Button>
    </div>
  )
}
