import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../pages/Main';
import Details from '../pages/Details';
import CompareButton from '../components/atoms/button/compare';
import Compare from '../pages/Compare';

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Poke Apps"
        component={Main}
        options={{
          headerRight: () => <CompareButton action={'Navigation'} />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => {
          return {title: route.params.name};
        }}
      />
      <Stack.Screen
        name="Compare"
        component={Compare}
        options={{
          headerTitle: 'Compare Pokemon',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
