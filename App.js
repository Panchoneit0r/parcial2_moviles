import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './componets/HomeScreen';
import StoreScreen from './componets/StoreScreen';
import SettingScreen from './componets/SettingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



export default function App() {
  return (

    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="Details" component={SettingScreen} options = {{drawerLabel: ()=> null }}/>
      </Drawer.Navigator>
   
    </NavigationContainer>

  );
}

