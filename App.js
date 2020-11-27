import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [price, setPrice] = useState()
  const [discount, setDiscount] = useState()
  const [calDiscount, setCalDiscount] = useState()
  const [disable, setDisable] = useState(true)
  const [screen, setScreen] = useState(0)

  const [history, setHistory] = useState([{ price: "100", save: "20", off: "20%" }])

  const changePrice = (text) => {
    if (text >= 0) {
      setPrice(text);
    } else {
      alert("Enter Price In Positive")
      setPrice(0)
    }

  }
  const changeDiscount = (text) => {
    setDiscount(text)
  }
  const calculateDiscount = () => {
    if (discount > 0 && discount <= 100) {
      var calculation = price * (discount * 0.01)

      setCalDiscount(calculation.toFixed(2));
      setDisable(false);
    } else {
      alert("Enter Discount between 1-100");
      setDiscount()
    }

  }
  const save = (history, object) => {
    console.log("Array Length" + history.length);
    console.log(...history)
    setHistory([object, ...history])
    setDisable(true);
  }

  const screen1 = (
    <View>

      {history.map((value, index) => {
        console.log(value);
        return (
          <TouchableOpacity
            key={index}
            style={{ flexDirection: "row" }}

          >
            <Text style={{ fontSize: 25 }}>Price :{value.price}</Text>
            <Text style={{ fontSize: 25 }}>--Saves:{value.save}</Text>
            <Text style={{ fontSize: 25 }}>--Price After Discount:{value.price - value.save}</Text>
            <Text style={{ fontSize: 25 }}>--Discount:{value.off}</Text>
          </TouchableOpacity>
        )
      })}
      <Button  onPress={()=> setScreen(0)} title="Back"/>
    </View>
  )

  const reset=()=>{
    setCalDiscount(0)
    setPrice(0)
    setDiscount(0)
    setDisable(true)
  }
const screen0=(
  <View style={styles.container}>
  <Text style={{ fontSize: 30 }}> Discount Calculator</Text>
  <View >
    <TextInput style={{ marginTop: 20, marginBottom: 20, padding: 5, width: 300, fontSize: 30, borderWidth: 3 }}
      placeholder="Enter Price"
      keyboardType='numeric'
      onChangeText={(text) => changePrice(text)}
      value={price}
    />
    <TextInput style={{ marginBottom: 20, padding: 5, width: 300, fontSize: 30, borderWidth: 3 }}
      placeholder="Enter Discount"
      keyboardType='numeric'
      onChangeText={(text) => {
        changeDiscount(text)
        console.log(discount);
        // calculateDiscount();
      }}
      value={discount}
    />
  </View>
  <Button disabled={!(disable)} onPress={calculateDiscount} title="Calculate" />
  <View style={{marginTop:20}}><Button disabled={disable} onPress={reset} title="Add new" /></View>
  <Text style={{ marginTop: 10, fontSize: 30 }}>Result:</Text>
  <Text style={{ fontSize: 30 }}>You Save:{calDiscount}</Text>
  <Text style={{ fontSize: 30 }}>Original Price:{price}</Text>
  <Text style={{ fontSize: 30 }}>Price after discount:{price - calDiscount}</Text>
  <View style={{ flexDirection: "row", marginTop: 25 }}>
    <View style={{ width: 100, marginRight: 20 }}>

      <Button disabled={disable} onPress={() => {
        var object = {
          price: price,
          save: calDiscount,
          off: discount + "%"
        }
        save(history, object)
      }} title="Save" />
    </View>
    <View>

      <Button
        onPress={()=> setScreen(1)}
        title="View History" />
    </View>
  </View>
  
</View> 
)
  return (
    <View style={styles.container}>
      {screen==0?screen0:screen1}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
