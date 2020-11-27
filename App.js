import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const[price,setPrice]=useState()
  const[discount,setDiscount]=useState()
  return (
    <View style={styles.container}>
      <Text style={{fontSize:"50"}}> Discount Calculator</Text> 
      <TextInput style={{ marginTop: 10, fontSize: 30 }}
        placeholder="Enter Price"
        keyboardType='numeric'
        onChangeText={(text) => setPrice(text)}
        value={price}
      /> 
      <TextInput style={{ marginTop: 10, fontSize: 30 }}
      placeholder="Enter Discount"
        keyboardType='numeric'
        onChangeText={(text) => setDiscount(text)}
        value={discount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
