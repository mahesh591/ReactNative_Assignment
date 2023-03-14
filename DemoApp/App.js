// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

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
  Image,
  ImageBackground,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';

import { AppProvider } from './src/store/auth-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import LoginScreen from './Screens/Login'
import SignupScreen from './Screens/Signup'
import HomeScreen from './Screens/Home'
import DetailScreen from './Screens/ProductDetail'
import CartScreenn from './Screens/CartScreen'
// import { createDrawerNavigator } from '@react-navigation/drawer';
 
import Lottie from 'lottie-react-native';

import AppContext from './src/store/auth-context';
import {AsyncStorage} from 'react-native';

import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import Main from './Screens/Main';
import DrawerNavigator from './src/drawer/DrawerNavigator';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


function App() {
const [isLoading, setIsLoading] = useState(true);
 setTimeout(() => setIsLoading(false), 4000);

 componentDidMount=() => {
  console.log("The component has mounted successfully!");
  this.setState({
    loaded: true
  })
}

 if (isLoading) {
  return (
    <Lottie source={require('./src/assets/135765-clown.json')} autoPlay loop />
  );
 }
  return (
      <AppProvider>
            <Navigation/>
      </AppProvider>
  );
}


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

export default App;


function AuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Sign In" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} options= {{
   headerShown: false
}} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  // const authCtx = useContext(AuthContext);
  const { LoggedOut } = useContext(AppContext);
  const [isLoggedInWith, setLoggedInWith] = useState('')
const userLoggedInFrom = () => {
  AsyncStorage.getItem('isLoggedInWith', function (err, value) {
    if(err){
        
            console.log('Error in getting data');
    } else {
            console.log('......',value);
            setLoggedInWith(value)
            logoutFromApp();
    }
});
}

  const logoutFromApp = () => {
    if (isLoggedInWith == 'Fb') {
        console.log('logging out from FB');
        logoutFromFb();
        
    } else if (isLoggedInWith == 'Google'){
      console.log('logging out from Google');
      signOutOfGoogle()
    } else if (isLoggedInWith == 'Normal'){
        auth()
        .signOut()
        .then(() => {
                      LoggedOut()
                      
      });
    }
  }

  signOutOfGoogle = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      LoggedOut()
    } catch (error) {
      console.error(error);
    }
  };

  const logoutFromFb=()=> {
    LoginManager.logOut();
    LoggedOut();
  }

  return (
 
    <Stack.Navigator>
         {/* <Stack.Screen name="Main" component={Main} /> */}
       <Stack.Screen name="Home" component={DrawerNavigator} options= {{
   title: 'Products',
   headerTintColor: 'rgba(110,80,159,1)',
   headerRight: () => (
    <Button
      onPress={() => {
      userLoggedInFrom();
    }}
      title="Logout"
      color="gray"
    />)
}} />
      <Stack.Screen name="ProductDetail" component={DetailScreen} options= {{
   title: 'Products',
   headerTintColor: 'rgba(110,80,159,1)',
   headerRight: () => (
  <TouchableOpacity>
    
     {/* <Image style={{width:30, height:30, aspectRatio: 1}} source={require('./Images/shopping-cart.png')}/> */}
     <ImageBackground style={{width:30,height:30}} source={require('./Images/shopping-cart.png')}>
      <View style={{width:20,height:20,backgroundColor:'red',borderRadius:12.5,marginLeft:14,marginTop:-7}}>
                  <Text style={{color:'white',fontSize:10,textAlign:'center',marginTop:4}}>1</Text>
      </View>
          
     </ImageBackground>
  </TouchableOpacity>)
}} />
      <Stack.Screen name="CartScreen" component={CartScreenn} />
    </Stack.Navigator>
  );
}


function Navigation() {
  const { isAuthenticated } = useContext(AppContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}


