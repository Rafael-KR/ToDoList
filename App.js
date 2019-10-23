import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import AppTodos from './src/AppTodos';
import Tutorial from './src/Tutorial';
import CustomDrawer from './src/components/CustomDrawer/index';

const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Instruções: {
        screen: Tutorial,
      },
      'To Do List': {
        screen: AppTodos,
      },
    },
    {
      initialRouteName: 'Instruções',
      contentComponent: CustomDrawer,
      contentOptions: {
        activeTintColor: '#1476D2',
        activeBackgroundColor: 'rgba(20, 118, 210, 0.1)',
        itemsContainerStyle: {
          marginRight: 8,
        },
        itemStyle: {
          borderBottomEndRadius: 30,
          borderTopEndRadius: 30,
        },
      },
    },
  ),
);

export default Routes;
