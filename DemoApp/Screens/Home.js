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
  Image,
  Alert,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import DrawerNavigator from '../src/drawer/DrawerNavigator';



export default function Home({ navigation }) {


  return (

        // <View style ={{flex: 1}}>
        //   <DrawerNavigator/>
        //   {/* <Text>
        //     Welcome to this Screen
        //   </Text> */}
        // </View>

    <View style = {{ marginLeft: 10, marginRight: 10}} >
      <FlatList data={[
          {MedicineName: 'Panadol', price:'Rs. 18.00',srcImage:require('../Images/panadol.jpeg')},
          {MedicineName: 'Amoxil 125 mg Syrup', price:'Rs. 128.00',srcImage:require('../Images/amoxil.png')},
          {MedicineName: 'Arinac Forte', price:'Rs. 50.00',srcImage:require('../Images/arinac-forte.jpeg')},
          {MedicineName: 'Telfast 120mg', price:'Rs. 75.00',srcImage:require('../Images/Telfast.jpeg')},
          {MedicineName: 'Risek 40 Tablet', price:'Rs. 120.00',srcImage:require('../Images/Risek.png')},
          {MedicineName: 'Cofeb Cough Syrup', price:'Rs. 90.00',srcImage:require('../Images/coferb.jpeg')},
          {MedicineName: 'Gastorin', price:'Rs. 131.00',srcImage:require('../Images/gastorin.png')},
          {MedicineName: 'Paracetamol', price:'Rs. 167.00',srcImage:require('../Images/paracetamol.jpeg')},
          {MedicineName: 'HoreanSyrap', price:'Rs. 78.00',srcImage:require('../Images/horeanSyrap.jpeg')},
          {MedicineName: 'GitSyrap', price:'Rs. 96.00',srcImage:require('../Images/gitSyrap.jpeg')}
        ]}
        numColumns={2}
        renderItem={({item}) => 
        <TouchableOpacity onPress={ () => navigation.navigate('ProductDetail',{item:item})}>
        <View style = {{flex:1,padding: 10, borderWidth: 1,borderColor: 'lightgray', borderRadius: 15, 
        marginTop: 20, marginLeft:10, alignItems:'center',backgroundColor:'rgba(244,238,252,1)'}}>
        {/* <Image source={{uri: item.srcImage}} style={{width: 60, height: 60}} />   */}
     <Image style={{width:150, height:150, aspectRatio: 1}} source={item.srcImage}/>
      <View style={{height:1,width:'100%', backgroundColor: 'lightgray',marginTop:5}}></View>
          <Text style={{fontSize:15,fontWeight:'500',color:'rgba(110,80,159,1)'}}>{item.MedicineName}</Text> 
          <Text style={{fontSize:11,fontWeight:'500',color:'rgba(110,80,159,1)'}}>{item.price}</Text> 
      </View>
      </TouchableOpacity>
       } />
    </View>

  );
  actionOnRow = (item) => {
    navigation.navigate('ProductDetail')
    // Alert.alert('Selected Item :',item.userName);
  //  console.log('Selected Item :',item);
  }
};

const styles = StyleSheet.create({
  image1: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1 // You
    
},
fontStyles: {
   fontSize: 30
},container: {
  flex: 0.8,
  paddingTop: 22
 },
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
  loginBtn: {
    width: "80%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 40,
    backgroundColor: "#cad7ec",
  },
  socialIcons: {
    width: "40%",
    borderRadius: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderColor: "#cad7ec",
    borderWidth: 1
  },
  image1: {
    flex: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain'
},
});

//export default Login;
