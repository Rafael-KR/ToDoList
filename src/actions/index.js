export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
  type: ADD_TODO,
  text,
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = todoId => ({
  type: TOGGLE_TODO,
  todoId,
});

export const SET_TODO_TEXT = 'SET_TODO_TEXT';
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text,
});

export const SET_EDIT_TODO = 'SET_EDIT_TODO';
export const setEditTodo = todo => ({
  type: SET_EDIT_TODO,
  todo,
});

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = todo => ({
  type: UPDATE_TODO,
  todo,
});
