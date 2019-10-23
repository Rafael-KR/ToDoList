import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import {addTodo, setTodoText, updateTodo} from '../actions';

class TodoForm extends Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  onPress() {
    const {todo} = this.props;
    if (todo.id) {
      this.props.dispatchUpdateTodo(todo);
    } else {
      const {text} = todo;
      this.props.dispatchAddTodo(text);
    }
  }

  render() {
    const {text} = this.props.todo;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <StatusBar backgroundColor="#146AD2" />
          <Input onChangeText={text => this.onChangeText(text)} value={text} />
        </View>
        <View style={styles.buttonContainer}>
          <Icon
            name="plus-circle"
            color="#ddd"
            size={40}
            onPress={() => this.onPress()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  inputContainer: {
    flex: 7,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
});

const mapStateToProps = state => {
  return {
    todo: state.editTodo,
  };
};

export default connect(
  mapStateToProps,
  {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo,
  },
)(TodoForm);
