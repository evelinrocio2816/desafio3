import {  Text, View , Image} from 'react-native'
import React from 'react'
import { Header } from '../../components'

import styles from './Details.style'

const Details = ({route, navigation}) => {
  const {Products}=route.params
  return (
    <View style={styles.container}>
        <Header title={'Detalles'} navigation={navigation}/>
       <Image style={styles.image} source={{uri: Products.images[0] }}/>
      <Text style={styles.titulo}>{Products.title}</Text>
      <Text style={styles.description}>{Products.description} </Text>
      <Text style={styles.price}>{`$ ${Products.price}`} </Text>
  </View>
  )
}

export default Details

