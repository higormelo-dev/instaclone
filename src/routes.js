import * as React from 'react';
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/instagram.png';

const Stack = createStackNavigator();

import Feed from './pages/Feed';

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: <Image source={logo} />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#f5f5f5'
           }
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}

export default Routes;