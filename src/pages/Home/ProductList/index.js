import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../styles';

const Tab = createMaterialTopTabNavigator();

export default function ProductList({}) {

  const [api, setApi] = useState([
    {
      id: 1,
      name: 'Popular',
      items: [
        {
          id: 1,
          product: 'Banana',
          price: '3.99'
        },
        {
          id: 2,
          product: 'Potato',
          price: '5.29'
        },
        {
          id: 3,
          product: 'Banana',
          price: '3.99'
        },
        {
          id: 4,
          product: 'Apple',
          price: '4.29'
        }
      ]
    },
    {
      id: 2,
      name: 'Fruits',
      items: [
        {
          id: 1,
          product: 'Banana',
          price: '3.99'
        },
        {
          id: 2,
          product: 'Apple',
          price: '4.29'
        }
      ]
    },
    {
      id: 3,
      name: 'Vegetables',
      items: [
        {
          id: 1,
          product: 'Tomato',
          price: '3.99'
        },
        {
          id: 2,
          product: 'Potato',
          price: '5.29'
        }
      ]
    }
  ])

  function List(products) {

    function ProductCard(product, price) {
      return (
        <View style={styles.productCard}>
          <TouchableOpacity onPress={() => alert('Adicionar')} style={styles.addCartButton}>
            <Icon name='plus' size={24} style={styles.addIcon}/>
          </TouchableOpacity>
          <View style={styles.infosContainer}>
            <Text style={styles.productText}>{product}</Text>
            <Text style={styles.productText}>$ {price}</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          contentContainerStyle={styles.flatlistContainer}
          columnWrapperStyle={styles.columnStyle}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            ProductCard(item.product, item.price)
          )}
        />
      </View>
    )
  }

  return (
    <Tab.Navigator 
      tabBarOptions={{
        scrollEnabled: true, 
        activeTintColor: colors.black, 
        inactiveTintColor: colors.grey,
        indicatorStyle: styles.tabIndicator,
        tabStyle: styles.tabStyle,
        style: styles.tabBarStyle,
        labelStyle: styles.labelStyle
      }}
    >
      {api.map(item => {
        return (
          <Tab.Screen key={item.id} name={item.name}>
            {() => List(item.items)}
          </Tab.Screen>
        )
      })}
    </Tab.Navigator>
  )
}