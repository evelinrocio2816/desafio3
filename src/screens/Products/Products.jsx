import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Header, SearchInput } from "../../components";
import React, { useEffect, useState } from "react";

import allProducts from "../../data/Products";
import styles from "./Products.style";

const Products = ({ category, setProductSelected, setCategorySelected }) => {
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );
      const productsFiltered = products.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setArrProducts(productsFiltered);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <Header title={category} />
      <View style={styles.SearchContainer}>
        <SearchInput onSearch={setKeyword} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setProductSelected(item)}>
              <Text style={styles.textItem}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style ={styles.containerButton}>
          <Button title="Volver" onPress={() => setCategorySelected(null)} />
        </View>
      </View>
    </View>
  );
};

export default Products;
