
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";

const Stack = createNativeStackNavigator();

const cartNavigator = () => {
  return (
   
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={({ route}) => ({ headerShown: false })}
      >
        <Stack.Screen name="Cart" component={Cart} />
      
      </Stack.Navigator>
  
  );
};
export default cartNavigator;
