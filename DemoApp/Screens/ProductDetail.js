import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  Alert,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {AsyncStorage} from 'react-native';
import { Provider } from 'react-redux';

export default function ProductDetail({ navigation, route }) {
 const [isLoading, setIsLoading] = useState(true);
// state = {
//     incremnetStepperValue: 0
// }
const [incremnetStepperValue, setData] = useState(0);
const maxValue = 10;
const arrray = []
const incrementValue = () => {
    // this.setState({
    //     incremnetStepperValue: this.state.incrementValue + 1
    // })
    incremnetStepperValue = incremnetStepperValue + 1
    setData(incremnetStepperValue + 1)
    // console.log("Value" + (this.state.incremnetStepperValue + 1))
    Alert.alert('value is', this.state.incremnetStepperValue);
  }

  decrementValue = () => {
//     this.setState({
//         incremnetStepperValue: this.state.incrementValue + 1
//     })
//     console.log("Value" + (this.state.incremnetStepperValue + 1))
  }


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('cartItems')
      console.log(JSON.parse(jsonValue));
    } catch(e) {
      // error reading value
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('cartItems', jsonValue)
    } catch (e) {
      // saving error
    }
  }
  
  return (
     <View >
             <Image style={{width:350, height:350, aspectRatio: 1, justifyContent:'center', alignItems:'center'}} source={route.params.item.srcImage}/>
             <View style={{flexDirection:'row',justifyContent:'space-around',marginTop: 20}}>
              <Text style={{fontSize:20,fontWeight:'500',color:'rgba(110,80,159,1)'}}>{route.params.item.MedicineName}</Text> 
              <Text style={{fontSize:20,fontWeight:'500',color:'rgba(110,80,159,1)'}}>{route.params.item.price}</Text> 
              </View>
              <View style={{height:1,width:'100%', backgroundColor: 'lightgray',marginTop:25}}></View>

              <TextInput placeholder='Little description' style={{marginLeft:20,height:150}}></TextInput>

              <View style={{flexDirection:'row',marginTop:20,justifyContent:'center'}}> 
                    <Text style={{marginLeft: 20}}>Quantity</Text>
                    <TouchableOpacity style={{width: 20, height: 20, borderRadius: 10, backgroundColor: 'white',borderWidth:1,marginLeft:10,borderColor:'rgba(97,81,146,0.4)'}}
                     onPress={() => {
                            if(incremnetStepperValue > 0 ){
                                setData(incremnetStepperValue - 1)
                             }
                        }}>
                        <Text style={{color:'rgba(97,81,146,1)', textAlign:'center', fontSize: 15}}>- </Text>
                    </TouchableOpacity>
                    {/* <TextInput value= {incremnetStepperValue} style={{marginLeft:10}}></TextInput> */}
                    <Text style={{marginLeft: 5}}>{incremnetStepperValue}</Text>
                    <TouchableOpacity style={{width: 20, height: 20, borderRadius: 10, backgroundColor: 'rgba(97,81,146,1)',marginLeft:10}}
                     onPress={ () => {  
                        
                    //    const jsonValue = getData()
                    //    console.log("jdonb",jsonValue);


                        if (maxValue > incremnetStepperValue) {
                           setData(incremnetStepperValue + 1)
                     }
                     }} >

                        <Text style={{color:'white', textAlign:'center', fontSize: 15}}>+ </Text>
                    </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>

<TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={[styles.cartStyles,{backgroundColor:'rgba(195,183,213,1)'}]}>
    <Text style={styles.loginText}>Buy Now</Text>  
</TouchableOpacity>
<TouchableOpacity onPress={() =>{
        
console.log('Add to cart is pressed');
        
      //   let tempArry = getData;
      //   console.log(JSON.parse(getData));


      //   if (incremnetStepperValue > 0) {
      //   const obj = {MedicineName:route.params.item.MedicineName,Quantity:incremnetStepperValue};
      // arrray.push(obj);
        
      // storeData(arrray);
  
        
      //   } else {
      //       console.warn('Please add quantity');
      //   }



} } style={[styles.cartStyles,{backgroundColor:'rgba(233,182,107,1)'}]}>
    <Text style={styles.loginText}>Add to Cart</Text>
</TouchableOpacity>
</View>
</View> 
  
  );
};

const styles = StyleSheet.create({
  image1: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1 // You
    
},
textStyling: {
    fontSize: 30
}, cartStyles:{
    width:'40%',
    padding:20, marginLeft: 20,

    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#84A4FF",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
    backfaceVisibility: 'hidden'
}
});

//export default Login;
