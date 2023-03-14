/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
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

import AppContext from '../src/store/auth-context';
import Lottie from 'lottie-react-native';
import { StackActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Signup=({ navigation }) => {
 const [isLoading, setIsLoading] = useState(true);

 const [userName, setUserName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("")
 const {  LoggedIn } = useContext(AppContext);


 const userSignUp=()=> {
   
  if(email==0 && password == 0) {
     Alert.alert('Please enter username and passworde')
      return 
  }

  auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
      LoggedIn();
        // navigation.replace("Home");
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

}

  return (
 <SafeAreaView>
      <View>
        <Text style={{fontSize:20,fontWeight:'700',color:'lightblue',textAlign:'center'}}>Sign Up</Text>
        <Text style={{marginTop:60,marginLeft:25}}> Full Name</Text>
        <TextInput style={styles.textStyle} placeholder="Full Name"  onChangeText={(userName) => setUserName(userName)} 
        value={userName}></TextInput>
        <Text style={{marginTop:20,marginLeft:25}}> Email</Text>
        <TextInput style={styles.textStyle} placeholder="Username" onChangeText={(email) => setEmail(email)}
        value={email}></TextInput>
        <Text style={{marginTop:20,marginLeft:25}}> Password</Text>
        <TextInput style={styles.textStyle} placeholder="Password" secureTextEntry={true} 
        onChangeText={(password) => setPassword(password)}
        value={password}></TextInput>
        <Text style={{marginTop:20,marginLeft:25}}> Confirm Password</Text>
        <TextInput style={styles.textStyle} placeholder="Enter confirm Password" 
        secureTextEntry={true} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        value={confirmPassword} ></TextInput>
        
        <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())} >
          <Text style={{textAlign:'center',marginTop:20}}>Already have an account ?</Text>
       </TouchableOpacity>

        <TouchableOpacity onPress={userSignUp} style={styles.loginBtn}>
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>     
      </View>
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

export default Signup;
