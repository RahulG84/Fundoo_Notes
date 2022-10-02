import React from 'react';
import {} from 'react-native';
import MainContainer from './MainContainer';
import {AuthProvide} from './AuthProvide';

const Index = () => {
  return (
    <AuthProvide>
      <MainContainer />
    </AuthProvide>
  );
};

export default Index;
