
import { useState } from "react";
import { Home, Products } from "./src/screens";
import {StyleSheet} from "react-native";
import Fonts from "./src/global/Fonts";


import { useFonts } from 'expo-font';

export default function App(){
const [categorySelected, setCategorySelected]=useState(null)
const [fontsLoaded] = useFonts(Fonts);


if (!fontsLoaded) {
  return null
}

  return( 
  
    categorySelected ? <Products category={categorySelected} setCategorySelected={setCategorySelected}/>:  <Home setCategorySelected={setCategorySelected}/>
    

  )
}


const styles = StyleSheet.create({})