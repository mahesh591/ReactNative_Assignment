import React, { useState } from 'react';
import {AsyncStorage} from 'react-native';


const AppContext = React.createContext()

export const AppProvider = ({children}) => {
    const [isAuthenticated, setAuthenticated] = useState(false)

const updateValue = () => {
    AsyncStorage.getItem('isLoggedIn', function (err, value) {
        if(err){
            setAuthenticated(false)
                console.log('Error in getting data');
        } else {
                setAuthenticated(JSON.parse(value))   // boolean false
        }
    });
}

const LoggedIn = () => {
    AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))
    updateValue()
}

const LoggedOut = () => {
    AsyncStorage.setItem('isLoggedIn', JSON.stringify(false))
    updateValue()
}


    
    return(
        <AppContext.Provider value={{ isAuthenticated, setAuthenticated, updateValue, LoggedIn, LoggedOut}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;