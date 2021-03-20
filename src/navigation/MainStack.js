import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../pages/Main';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Poke Apps" component={Main} />
    </Stack.Navigator>
  );
};

export default MainStack;
