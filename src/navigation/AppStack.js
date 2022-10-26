import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import Notes from '../screens/Notes';
import Search from '../screens/Search';
import LabelsList from '../components/LabelsList';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="LabelsList" component={LabelsList} />
    </Stack.Navigator>
  );
};

export default AppStack;
