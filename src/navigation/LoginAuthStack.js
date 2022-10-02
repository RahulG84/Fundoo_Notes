import React from 'react';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgetPassword';
import NewPassword from '../screens/NewPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const LoginAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default LoginAuthStack;
