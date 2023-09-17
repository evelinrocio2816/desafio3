import Fonts from "./src/global/Fonts";
import { useFonts } from 'expo-font';
import Navigator from "./src/Navigation/Navigator";


export default function App(){
const [fontsLoaded] = useFonts(Fonts);


if (!fontsLoaded) {
  return null
}

  return <Navigator/>
  

  
}


