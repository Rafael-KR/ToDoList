import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import TodoListItem from './TodoListItem';
import {toggleTodo, setEditTodo} from '../actions';

const TodoList = ({todos, dispatchToggleTodo, dispatchSetEditTodo}) => (
  <View style={{paddingBottom: 10}}>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onPressTodo={() => dispatchToggleTodo(todo.id)}
        onLongPressTodo={() => dispatchSetEditTodo(todo)}
      />
    ))}
  </View>
);

const mapStateToProps = state => {
  const {todos} = state;
  return {todos};
};

export default connect(
  mapStateToProps,
  {
    dispatchToggleTodo: toggleTodo,
    dispatchSetEditTodo: setEditTodo,
  },
)(TodoList);
