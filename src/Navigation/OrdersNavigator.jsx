
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders} from "../screens";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
   
      <Stack.Navigator
        initialRouteName="Orders"
        screenOptions={({ route}) => ({ headerShown: false })}
      >
        <Stack.Screen name="Orders" component={Orders} />
      
      </Stack.Navigator>
  
  );
};
export default OrdersNavigator;