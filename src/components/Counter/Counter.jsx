import { Pressable, Text, TextInput, View } from "react-native";
import styles from './Counter.style'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementByAmound,
  decrement,
} from "../../Features/counter/counterSlice";


const Counter = () => {
  const [inputToAdd, setInputToAdd] = useState(0);

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //const counter = 5;
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable
          style={styles.counterButtons}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.signs}>-</Text>
        </Pressable>

        <Text style={styles.signs}>{counter}</Text>

        <Pressable
          style={styles.counterButtons}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.signs}>+</Text>
        </Pressable>
      </View>

      <View style={styles.inputContaienr}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="cantidad a sumar"
          value={inputToAdd}
          onChangeText={(value) => setInputToAdd(Number(value))}
        />

        <Pressable onPress={() => dispatch(incrementByAmound(inputToAdd))}>
          <Text>add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

