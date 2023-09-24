import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
    container: {
      backgroundColor: colors.colors1,
      width:'60%',
      marginHorizontal:'10%',
      marginBottom:10,
      borderRadius:20
    },
  
    counterContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 40,
     
      
    },
    counterButtons: {
      backgroundColor: colors.colors2,
      width: "33%",
      height:30,
      justifyContent: "center",
      alignItems: "center",
      borderRadius:10,
    margin:5
    },
    signs: {
      fontSize: 20,
      color:'#FFF'
      
    },
   input: {
      backgroundColor: "white",
      width: "80%",
      height: 30,
      borderRadius:10,
      padding:3
    },
    inputContaienr: {
      flexDirection: "row",
      marginVertical: 10,
      padding: 10,
      justifyContent: 'space-between'
    },
  });
  