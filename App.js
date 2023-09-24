import Fonts from "./src/global/Fonts";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/Navigation/BotonTabNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store";


export default function App() {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
 </Provider>
    
  );
}
