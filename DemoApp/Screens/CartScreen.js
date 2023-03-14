/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { FlatList } from 'react-native-gesture-handler';

import Lottie from 'lottie-react-native';

export default function CartScreen({ navigation }) {
    const [incremnetStepperValue, setData] = useState(0);

    const incrementValue = () => {
        // this.setState({
        //     incremnetStepperValue: this.state.incrementValue + 1
        // })
        incremnetStepperValue = incremnetStepperValue + 1
        setData(incremnetStepperValue + 1)
        // console.log("Value" + (this.state.incremnetStepperValue + 1))
        Alert.alert('value is', this.state.incremnetStepperValue);
      }
 
  return (
    <SafeAreaView>
        <ScrollView>
 <View style = {{ marginLeft: 10, marginRight: 10}} >
      <FlatList style={{height:550}} data={[
          {MedicineName: 'Panadol', price:'Rs. 18.00',srcImage:require('../Images/panadol.jpeg'), quantity: 2},
          {MedicineName: 'Amoxil 125 mg Syrup', price:'Rs. 128.00',srcImage:require('../Images/amoxil.png'), quantity: 1},
          {MedicineName: 'Arinac Forte', price:'Rs. 50.00',srcImage:require('../Images/arinac-forte.jpeg'),quantity: 3},
          {MedicineName: 'Telfast 120mg', price:'Rs. 75.00',srcImage:require('../Images/Telfast.jpeg'),quantity: 2},
       
        ]}
        renderItem={({item}) => 
       
        <View style = {{flex:1,padding: 10,flexDirection:'row'}}>
        {/* <Image source={{uri: item.srcImage}} style={{width: 60, height: 60}} />   */}
     <Image style={{width: 70, height: 70, aspectRatio: 1}} source={item.srcImage}/>
         <View style = {{flex:1,padding: 10,flexDirection:'column'}}>
              <Text style={{fontSize:15,fontWeight:'500'}}>{item.MedicineName}</Text> 
              <Text style={{fontSize:16,fontWeight:'500', marginTop: 10}}>{item.price}</Text> 
          </View>
          <View style={{flexDirection:'row',marginTop:20,justifyContent:'center'}}> 
                  
                    <TouchableOpacity style={{width: 20, height: 20, borderRadius: 10, backgroundColor: 'white',borderWidth:1,marginLeft:10,borderColor:'rgba(97,81,146,0.4)'}}
                     onPress={() => this.decrementValue}>
                        <Text style={{color:'rgba(97,81,146,1)', textAlign:'center', fontSize: 15}}>- </Text>
                    </TouchableOpacity>
                    {/* <TextInput value= {incremnetStepperValue} style={{marginLeft:10}}></TextInput> */}
                    <Text style={{marginLeft:10}}>{item.quantity}</Text>
                    <TouchableOpacity style={{width: 20, height: 20, borderRadius: 10, backgroundColor: 'rgba(97,81,146,1)',marginLeft:10}}
                     onPress={ () => this.incrementValue} >

                        <Text style={{color:'white', textAlign:'center', fontSize: 15}}>+ </Text>
                    </TouchableOpacity>
              </View>
      </View>
    
       } />
    </View>
      <View style={{marginLeft:20, marginRight: 20}}>
      <View style={styles.singleLineView}></View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{marginTop: 20}}>Total</Text>
                <Text style={{marginTop: 20}}>Rs. 464</Text>

        </View>
        <View style={styles.singleLineView}></View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.checkoutBtn}>
          <Text style={styles.loginText}>Proceed to Checkout</Text>
      </TouchableOpacity>
   
      </View>
      </ScrollView>
    </SafeAreaView>   

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textStyle:{
    borderWidth:0.5,
    padding:10,
    marginLeft:20,
    marginRight:20,
    marginTop:5,
    borderRadius:5,
    borderColor: 'lightgray'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  }, 
  checkoutBtn: {
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 40,
    backgroundColor: "rgba(216,202,236,1)'",
  },
  singleLineView: {
    height:1, width: '100%', backgroundColor:'lightgray',marginTop: 20
  },
  
  image1: {
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain'
},
});

//export default Login;
