
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Home, Products } from "../screens";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
   
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route}) => ({ headerShown: false })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    
  );
};
export default Navigator;
