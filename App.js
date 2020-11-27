import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const[price,setPrice]=useState()
  const[discount,setDiscount]=useState()
  const[calDiscount,setCalDiscount]=useState()
  const[history,setHistory]=useState([{save:"",originalPrice:""}])

  const changePrice=(text)=>{
      setPrice(text);
  }
  const changeDiscount=(text)=>{
    setDiscount(text)
    
  }

  const calculateDiscount=()=>{
        var calculation=price*(discount*0.01)
        setCalDiscount(calculation);
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:50}}> Discount Calculator</Text> 
      <TextInput style={{ marginTop: 10, fontSize: 30 }}
        placeholder="Enter Price"
        keyboardType='numeric'
        onChangeText={(text) => changePrice(text)}
        value={price}
      /> 
      <TextInput style={{ marginTop: 10, fontSize: 30 }}
      placeholder="Enter Discount"
        keyboardType='numeric'
        onChangeText={(text) => {
          changeDiscount(text)
          console.log(discount);
          // calculateDiscount();
        }}
        value={discount}
      />
      <Button  onPress={calculateDiscount} title="Calculate"/>
      <Text style={{fontSize:30}}>Result:</Text>
      <Text style={{fontSize:30}}>You Save:{calDiscount}</Text>
      <Text style={{fontSize:30}}>Original Price:{price}</Text>
  
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
