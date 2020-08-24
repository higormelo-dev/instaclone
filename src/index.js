import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes'

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f4" />
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
