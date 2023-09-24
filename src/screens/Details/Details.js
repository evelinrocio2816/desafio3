import { SafeAreaView, Text, View , Image} from 'react-native'

import { Header } from '../../components'

import styles from './Details.style'
import { useSelector } from 'react-redux'
import Counter from '../../components/Counter/Counter'


const Details = ({route, navigation}) => {
  const {Products}=route.params
  const counter = useSelector(state => state.counter.value)
  return (
<>
    <SafeAreaView style={styles.container}>
        <Header title={'Detalles'} navigation={navigation}/>
        <View style={styles.imageContainer}>
       <Image
       style={styles.image} 
       source={{uri: Products.images[0] }}
       resizeMode='cover'/>
     
      <Text style={styles.titulo}>{Products.title}</Text>
      <Text style={styles.description}>{Products.description} </Text>
      <Text style={styles.price}>{`$ ${Products.price}`} </Text>
      <Text style={styles.counterText}>{counter}</Text>
        <Counter/>
       </View>
      
  </SafeAreaView>
  
  </>
  )
}

export default Details

