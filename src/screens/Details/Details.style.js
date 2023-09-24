import { StyleSheet } from "react-native"


export default styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    imageContainer:{
      borderWidth:1,
      borderRadius:10,
     borderColor:'#000',
     width:'60%',
    
     marginLeft:'10%',
     marginTop:50,

    },
    image:{
        width: '50%',
        height: 150,
        margin:30,
        borderRadius:10,
        borderWidth:1,
        borderColor: '#000',
        
        
    },

    titulo:{
        fontSize:20,
        padding:10,
      marginHorizontal:30,
        
    },
    description:{
        fontSize:15,
        padding:1,
      marginHorizontal:30,
    },
    price:{
        fontSize:20,
        fontWeight:'bold',
        padding:1,
      marginHorizontal:30,
    },
    counterText:{
      fontSize:50,
      marginLeft:25
    }
})