import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Reminders from '../screens/Reminders';
import Labels from '../screens/Labels';
import Archive from '../screens/Archive';
import Deleted from '../screens/Deleted';
import Settings from '../screens/Settings';
import DrawerContainer from '../components/DrawerContainer';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#fff' /* font color for active screen label */,
        activeBackgroundColor: '#68f' /* bg color for active screen */,
        inactiveTintColor: 'grey' /* Font color for inactive screens' labels */,
      }}
      drawerContent={props => <DrawerContainer props={props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Reminders"
        component={Reminders}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Labels"
        component={Labels}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Archive"
        component={Archive}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Deleted"
        component={Deleted}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{header: () => null}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
