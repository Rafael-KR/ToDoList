import React, {Component} from 'react';
import {View, Text, ScrollView, StatusBar, ImageBackground} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Header} from 'native-base';
import rootReducer from './reducers';
import Icon from 'react-native-vector-icons/FontAwesome';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import styles from './components/Styles/AppTodosStyle';

const store = createStore(rootReducer);

export default class todos extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header style={styles.headerStyle}>
          <View style={styles.viewHeader}>
            <Icon
              name="bars"
              size={28}
              color="#fff"
              onPress={() => this.props.navigation.openDrawer()}
            />
            <Text style={styles.tituloHeader}>To Do List</Text>
            <Text style={{color: '#1476D2'}}>aaa</Text>
          </View>
        </Header>

        <ImageBackground
          style={styles.backgroundImg}
          source={require('./imgs/backgroundImg.png')}>
          <ScrollView>
            <StatusBar backgroundColor="#146AD2" />
            <Provider store={store}>
              <View>
                <TodoForm />
                <TodoList />
              </View>
            </Provider>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
