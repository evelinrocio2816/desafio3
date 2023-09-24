import { createSlice } from "@reduxjs/toolkit";
import dataCategories from "../../data/dataCategories";
import Products from "../../data/Products";

const initialState = {

    categories: dataCategories,
    products: Products,
    productsFilterByCategory:[],
    categorySelected:null,
    productIdSelected: null,

}
export const shopSlice =createSlice({
    name: 'shop',
    initialState,
    reducers:{
        setCategorySelected :()=>{},
        setProductIdSelected: ()=>{},
    },
});

export const {setCategorySelected, setProductIdSelected}= shopSlice.actions

export default shopSlice.reducer