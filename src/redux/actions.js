// src/redux/actions.js
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
