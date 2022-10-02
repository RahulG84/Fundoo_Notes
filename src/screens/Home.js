import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/Button';
import {AuthContext} from '../navigation/AuthProvide';

const Home = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Button text="Logout" onPress={() => logout()} />
    </View>
  );
};

export default Home;
