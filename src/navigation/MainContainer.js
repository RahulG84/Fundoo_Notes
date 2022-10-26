import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvide';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Splash from '../screens/Splash';
import {Provider} from 'react-redux';
import {Store} from '../../redux/Store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const MainContainer = () => {
  const {user, setUser} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
};

export default MainContainer;
