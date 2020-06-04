import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import Home from '../pages/Home'
import Cart from '../pages/Cart';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}