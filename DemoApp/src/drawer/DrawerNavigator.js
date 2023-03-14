import { View, Text } from "react-native";
import React from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from "../../Screens/Main";
import Home from "../../Screens/Home";
import CartScreen from "../../Screens/CartScreen";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}  />
            <Drawer.Screen name="Order History" component={CartScreen} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;