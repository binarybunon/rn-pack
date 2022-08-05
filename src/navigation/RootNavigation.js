import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Settings, Home, About } from '../screens';
import useTabSetting from './customize/useTabSetting';
import DrawarNavigation from './DrawarNavigation';



const RootNavigation = () => {

    const Tab = createBottomTabNavigator();
    const { TabSetting } = useTabSetting()

  return (
    <NavigationContainer>
          <Tab.Navigator
             
        screenOptions={TabSetting}>
        <Tab.Screen name="Main" component={DrawarNavigation} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation