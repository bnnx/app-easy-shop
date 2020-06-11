import React, { useState } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../../styles';

export default function Cart({ navigation }) {

  const [products, setProducts] = useState(
    [
      {
        id: 1,
        name: 'Apple',
        url: 'https://media.gazetadopovo.com.br/2019/03/04330279e3c5551ef98b4e48c609d286-gpMedium.jpg',
        quantity: 5,
        totalPrice: 15.29
      },
      {
        id: 2,
        name: 'Tomato',
        url: 'https://www.grupocultivar.com.br/ativemanager/uploads/galeria/07e31-ParonNTY1_mobile.png',
        quantity: 10,
        totalPrice: 21.99
      },
      {
        id: 3,
        name: 'Alface',
        url: 'https://www.ativosaude.com/uploads/2018/07/10091731/alface-crespa.jpg',
        quantity: 10,
        totalPrice: 21.99
      },
      {
        id: 4,
        name: 'Rúcula',
        url: 'https://blog.biologicus.com.br/wp-content/uploads/2019/02/benef%C3%ADcios-da-r%C3%BAcula.jpg',
        quantity: 10,
        totalPrice: 21.99
      },
      {
        id: 5,
        name: 'Couve',
        url: 'https://img.huffingtonpost.com/asset/5c3350051d0000e50131b87e.jpeg?ops=1778_1000',
        quantity: 10,
        totalPrice: 21.99
      },
      {
        id: 6,
        name: 'Couve',
        url: 'https://img.huffingtonpost.com/asset/5c3350051d0000e50131b87e.jpeg?ops=1778_1000',
        quantity: 10,
        totalPrice: 21.99
      },
      {
        id: 7,
        name: 'Couve',
        url: 'https://img.huffingtonpost.com/asset/5c3350051d0000e50131b87e.jpeg?ops=1778_1000',
        quantity: 10,
        totalPrice: 21.99
      },
    ]
  );

  function RenderItems() {

    function Items(name, quantity, totalPrice, url) {
      return (
        <View style={styles.item}>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: url }}/>
          </View>

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Text style={styles.xText}> x</Text>
            <Text style={styles.nameText}>{name}</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>${totalPrice}</Text>
          </View>

        </View>
      )
    }

    return (
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          Items(item.name, item.quantity, item.totalPrice, item.url)
        )}
      />
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.iconsContainer}>
        <Icon name='arrow-left' onPress={() => navigation.goBack()} size={22} style={styles.headerIcons}/>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Order</Text>
      </View>
      
      <View style={styles.itemsContainer}>
        <RenderItems/>
      </View>

      <View style={styles.bottomContainer}>

        <View style={styles.line}/>

        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalPriceText}>$25.97</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
	)
}