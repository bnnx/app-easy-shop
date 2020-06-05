import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconStar from 'react-native-vector-icons/Entypo';
import IconBottom from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Product({ route, navigation }) {

  const [quantity, setQuantity] = useState(1);

  function HeaderIcon({name, onPress}) {
    return (
      <Icon onPress={onPress} name={name} size={22} style={styles.headerIcons}/>
    )
  }

  function StarRating() {
    let emptyStars = 5 - route.params.rating;
    return (
      <>
        {[...Array(route.params.rating)].map((item, i) => (
          <IconStar key={i} name='star' size={18} color='#FFF200'/>
        ))}
        {emptyStars != 0 ? (
          [...Array(emptyStars)].map((item, i) => (
            <IconStar key={i} name='star-outlined' size={18} color='#CCC'/>
            ))
          ) : (
            null
          )
        }
      </>
    )
  }

  function onPressMinus() {
    if(quantity == 1) {
      return quantity;
    } else {
        return (
          setQuantity(quantity - 1)
        )
    }
  }

  function onPressPlus() {
    return (
      setQuantity(quantity + 1)
    )
  }

  return (
    <View style={styles.container}>

      <View style={styles.topContainer}>
        <View style={styles.iconsContainer}>
          <HeaderIcon name='arrow-left' onPress={() => navigation.goBack()}/>
          <HeaderIcon name='handbag' onPress={() => navigation.navigate('Cart')}/>
        </View>
      </View>

      <View style={styles.bottomContainer}>

        <View style={styles.headerBottom}>
          <Text style={styles.title}>{route.params.product}</Text>
          <Text style={styles.price}>${route.params.price}</Text>
        </View>

        <View style={styles.starsContainer}>
          <StarRating/>
        </View>

        <Text style={styles.description}>{route.params.description}</Text>
      
        <View style={styles.infosContainer}>
          <View>
            <Text style={styles.weightTitle}>Weight</Text>
            <Text style={styles.weight}>{route.params.weight}</Text>
          </View>

          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => onPressMinus()} style={styles.quantityButton}>
              <IconBottom name='minus' size={22}/>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity onPress={() => onPressPlus()} style={styles.quantityButton}>
              <IconBottom name='plus' size={20}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.favButton}>
            <IconBottom name='heart' size={22} color={'#F00'}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  )
}