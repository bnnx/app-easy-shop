import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import ProductList from './ProductList';

export default function Home({ navigation }) {

  const [searchText, setSearchText] = useState('');

  function HeaderIcon({name, onPress}) {
    return (
      <Icon onPress={onPress} name={name} size={22} style={styles.headerIcons}/>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.iconsContainer}>
          <HeaderIcon onPress={() => alert('Abrir menu')} name='menu'/>
          <HeaderIcon onPress={() => alert('Abrir carrinho')} name='handbag'/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='What would you like?' 
            onChangeText={text => setSearchText(text)} 
            value={searchText}
          />
          <Icon onPress={() => alert('Pesquisar')} name='magnifier' size={20} style={styles.headerIcons}/>
        </View>
      </View>
      <ProductList/>
    </View>
	)
}