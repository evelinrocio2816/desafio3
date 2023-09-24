import {  FlatList, Pressable, Text, View } from 'react-native'
import styles from './Cart.style'
import cart from '../../data/cart'
import CartItem from './components/CartItem'

const Cart = () => {

  const renderItem =()=><CartItem/>

  return (
    <View style={styles.container}>
      <View>
        <FlatList data={cart} 
        keyExtractor={item => item.id}
        renderItem={renderItem}/>
      </View>
      <View>
     <Pressable>
      <Text>Confirm</Text>
      <View>
        <Text>{`Total $100`}</Text>
      </View>
     </Pressable>
      </View>
    </View>
  )
}

export default Cart

