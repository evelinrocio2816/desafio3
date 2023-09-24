import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from '../Features/counter/counterSlice'
import shopSlice from '../Features/Shop/shopSlice'


 

export const store = configureStore({

  reducer: {
    counter: counterSlice,
    shop: shopSlice,
    
  
  },

})