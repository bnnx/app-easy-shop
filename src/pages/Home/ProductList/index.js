import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '../../../styles';

const Tab = createMaterialTopTabNavigator();

export default function ProductList({ navigation }) {

  const [api, setApi] = useState([
    {
      id: 1,
      name: 'Popular',
      items: [
        {
          id: 1,
          product: 'Banana',
          description: 'Banana = top, The bests and cheapest smartphones of the WORLD! ',
          price: '3.99',
          rating: 5,
          weight: '70 - 120 grams (g)'
        },
        {
          id: 2,
          product: 'Potato',
          description: 'Potato = top, The bests and cheapest smartphones of the WORLD! ',
          price: '5.29',
          rating: 3,
          weight: '78 - 95 grams (g)'
        },
        {
          id: 3,
          product: 'Apple',
          description: 'Apple = top, The bests and cheapest smartphones of the WORLD! ',
          price: '4.29',
          rating: 4,
          weight: '78 - 125 grams (g)'
        },
        {
          id: 4,
          product: 'Lemonade',
          description: 'Lemons are high in vitamin C, fiber, and various beneficial plant compounds. These nutrients are responsible for several health benefits. In fact, lemons may support hear health, weight control, and digestive health.',
          price: '2.29',
          rating: 5,
          weight: '58 - 65 grams (g)'
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
          description: 'Banana = top, The bests and cheapest smartphones of the WORLD! ',
          price: '3.99',
          rating: 5,
          weight: '70 - 120 grams (g)'
        },
        {
          id: 2,
          product: 'Apple',
          description: 'Apple = top, The bests and cheapest smartphones of the WORLD! ',
          price: '4.29',
          rating: 4,
          weight: '78 - 125 grams (g)'
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
          description: 'Tomato = top, The bests and cheapest smartphones of the WORLD! ',
          price: '3.99',
          rating: 2,
          weight: '68 - 85 grams (g)'
        },
        {
          id: 2,
          product: 'Potato',
          description: 'Potato = top, The bests and cheapest smartphones of the WORLD! ',
          price: '5.29',
          rating: 3,
          weight: '78 - 95 grams (g)'
        }
      ]
    }
  ])

  function onPressProduct(product, description, price, rating, weight) {
    return navigation.navigate('Product', { 
      product: product, 
      description: description, 
      price: price, 
      rating: rating, 
      weight: weight
    })
  }

  function List(products) {

    function ProductCard(product, description, price, rating, weight) {
      return (
        <TouchableOpacity onPress={() => onPressProduct(product, description, price, rating, weight)} style={styles.productCard}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.addCartButton}>
            <Icon name='plus' size={24} style={styles.addIcon}/>
          </TouchableOpacity>
          <View style={styles.infosContainer}>
            <Text style={styles.productText}>{product}</Text>
            <Text style={styles.productText}>$ {price}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatlistContainer}
          columnWrapperStyle={styles.columnStyle}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            ProductCard(item.product, item.description, item.price, item.rating, item.weight)
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