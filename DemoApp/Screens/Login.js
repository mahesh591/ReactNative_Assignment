/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
  Image,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppContext from '../src/store/auth-context';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '@react-native-firebase/auth';
import {AsyncStorage} from 'react-native';
// import { auth } from './config'
import Lottie from 'lottie-react-native';

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  const [userName, setUserName] = useState("MAhesh");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const {  setLoggedInWith, updateValue, LoggedIn } = useContext(AppContext);

  useEffect(() => {
    updateValue()
    GoogleSignin.configure()
  },[])



  const login=()=> {
    if(email==0 && password == 0) {
       Alert.alert('Please enter username and passworde')
        return 
    }

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
       AsyncStorage.setItem('isLoggedInWith', 'Normal')
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

  const fbLogin = (resCallback) => {
    LoginManager.logOut();
    LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('result ==>>>>', result);
        if (result.declinedPermissions && result.declinedPermissions.includes("email")) {
          resCallback({ message: "Email is required" })
        }
        if (result.isCancelled) {
          console.log("error")
        } else {
          const infoRequest = new GraphRequest(
            '/me?fileds=email,name,picture,friend',
            null,
            resCallback
          );
          new GraphRequestManager().addRequest(infoRequest).start()
        }
      },
      function(error){
        console.log("Login fail with error: " + error)
      }
    )
  }

  const onFbLogin = async() => {
    try {
          await fbLogin(_responseInfoCallBack)
    } catch (error) {
          console.log("Error raised", error)
    }
  }

  const _responseInfoCallBack = async(error, result) => {
      if(error){
        console.log("error top", error)
        return;
      }
      else {
        const userData = result
        console.log("fb data++++",userData)
        AsyncStorage.setItem('isLoggedInWith', 'Fb')
        LoggedIn();

      }
  }

  const onGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // this.setState({ userInfo });
      console.log("user info", userInfo)
      AsyncStorage.setItem('isLoggedInWith', 'Google')
      LoggedIn();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error)
      } else {
        // some other error happened
        console.log(error)
      }
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{ marginTop: 120, marginLeft: 20 }}> Email</Text>
        <TextInput style={styles.textStyle} placeholder="Email"  onChangeText={newText => setEmail(newText)}></TextInput>
        <Text style={{ marginTop: 30, marginLeft: 20 }}> Password</Text>
        <TextInput style={styles.textStyle} placeholder="Password"
          secureTextEntry={true} onChangeText={newText => setPassword(newText)} ></TextInput>

        <TouchableOpacity onPress={() => navigation.push('Signup')} >
          <Text style={{ textAlign: 'center', marginTop: 20 }}>Don't have an account Sign up?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => login()} style={styles.loginBtn}>
          <Text style={styles.loginText}>SignIn</Text>
        </TouchableOpacity>


{/* Social logins */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={onGoogleLogin} style={styles.socialIcons}>
            {/* <Image style={styles.image1} source={require('./Images/googleIcon.png')}/> */}
            <Text style={styles.loginText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onFbLogin} style={styles.socialIcons}>
            {/* <Image style={styles.image1} source={require('./Images/facebookIcon.png')}/> */}
            <Text style={styles.loginText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textStyle: {
    borderWidth: 0.5,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    borderRadius: 5,
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



