import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import cartNavigator from "./CartNavigator";
import Navigator from "./Navigator";
import OrdersNavigator from "./OrdersNavigator"
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import Feather from '@expo/vector-icons/Feather'

const BottomTab=createBottomTabNavigator()
    
function BottomTabNavigator(){
    return(
        <BottomTab.Navigator initialRouteName="Shop"
         screenOptions={{
            headerShown:false, 
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            }}>
            <BottomTab.Screen name="Shop" component={Navigator} 
            options={{
                tabBarIcon:({focused})=>(
                    <Feather name="shopping-bag" size={25}color={focused ? '#000000': colors.colors5} /> 
                )
            }}
            />
            <BottomTab.Screen name="Cart" component={cartNavigator} 
             options={{
                tabBarIcon:({focused})=>(
                    <Feather name="shopping-cart" size={25}color={focused ? '#000000': colors.colors5} /> 
                )
            }}
            />
             <BottomTab.Screen name="Orders" component={OrdersNavigator} 
             options={{
                tabBarIcon:({focused})=>(
                    <Feather name="list" size={25}color={focused ? '#000000': colors.colors5} /> 
                )
            }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator


const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.colors1,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    }
       
  });
