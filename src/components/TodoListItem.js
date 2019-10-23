import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../components/Styles/TodoListItemStyles';

const TodoListItem = ({todo, onPressTodo, onLongPressTodo}) => (
  <TouchableOpacity onPress={onPressTodo} onLongPress={onLongPressTodo}>
    <View style={styles.line}>
      <Text
        style={[styles.lineText, todo.done ? styles.tarefaConcluida : null]}>
        {todo.text}
      </Text>
    </View>
  </TouchableOpacity>
);

export default TodoListItem;
