import React from 'react';
import { Text } from 'react-native';

export default function Home({ navigation }) {
  return (
		<Text onPress={() => navigation.navigate('Cart')}>Home, aperte</Text>
	)
}