import {Button, Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'


const Header = ({title , navigation}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >{title}</Text>
      <Button onPress={()=>navigation.goBack()} title={'Back'} color={'#000000'}/>
    </View>
  )
}

export default Header

