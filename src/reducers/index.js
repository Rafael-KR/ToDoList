import {combineReducers} from 'redux';

import todoListReducer from './todoListReducer';
import editTodoReducer from './editTodoReducer';

const rootReducer = combineReducers({
  todos: todoListReducer,
  editTodo: editTodoReducer,
});

export default rootReducer;
