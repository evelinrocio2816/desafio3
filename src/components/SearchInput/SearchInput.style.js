import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    paddingTop: 20,
    
  },
  Input: {
    color: 'white',
    backgroundColor: colors.colors3,
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    width: '80%',
    fontSize: 20,
  },
})