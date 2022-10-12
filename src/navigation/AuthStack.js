import React, {useState, useEffect} from 'react';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgetPassword';
import NewPassword from '../screens/NewPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  // const [value, setValue] = useState(true);
  // if (value === true) {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '622390970991-56m97fq6buiijd50s7jpghfolfug42gl.apps.googleusercontent.com',
  //   });
  // } else {
  //   setValue(null);
  // }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '622390970991-jijc0b4sdl2jmas5r8hak7qmp4oacbs5.apps.googleusercontent.com',
    });
  });

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
