import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const[price,setPrice]=useState()
  const[discount,setDiscount]=useState()
  const[calDiscount,setCalDiscount]=useState()
  const[history,setHistory]=useState([{save:"",originalPrice:""}])

  const changePrice=(text)=>{
    if(text>=0){
      setPrice(text);
    }else{
      alert("Enter Price In Positive")
      setPrice(0)
    }
      
  }
  const changeDiscount=(text)=>{
   
      setDiscount(text)
   
    
    
  }

  const calculateDiscount=()=>{
      if(discount>0 && discount<=100){
        var calculation=price*(discount*0.01)
        
        setCalDiscount(calculation.toFixed(2));
      } else{
        alert("Enter Discount between 1-100");
        setDiscount()
      }
        
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30}}> Discount Calculator</Text> 
      <View >
      <TextInput style={{marginTop:20,marginBottom:20,padding:5,width:300,fontSize: 30 ,borderWidth:3}}
        placeholder="Enter Price"
        keyboardType='numeric'
        onChangeText={(text) => changePrice(text)}
        value={price}
      /> 
      <TextInput style={{ marginBottom:20,padding:5,width:300, fontSize: 30,borderWidth:3 }}
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
      <Button  onPress={calculateDiscount} title="Calculate"/>
      <Text style={{marginTop:10,fontSize:30}}>Result:</Text>
      <Text style={{fontSize:30}}>You Save:{calDiscount}</Text>
      <Text style={{fontSize:30}}>Original Price:{price}</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:25,
    padding:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
