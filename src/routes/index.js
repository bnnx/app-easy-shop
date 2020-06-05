import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

const Stack = createStackNavigator();

import Home from '../pages/Home';
import Cart from '../pages/Cart';

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false
      }}
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}