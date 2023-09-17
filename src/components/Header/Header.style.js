import { StyleSheet } from "react-native"
import { colors } from "../../constants/colors"


export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colors1,
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: 'space-evenly',
    flexDirection:'row'
  },
  text: {
    fontSize: 30,
    fontFamily: 'Oswald-Bold',
    color:'#ffffff'
  },
});