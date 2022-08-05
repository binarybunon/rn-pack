import { View, Text } from 'react-native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home } from '../screens';

const DrawarNavigation = () => {
    
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator >
      <Drawer.Screen  name='Home' component={Home} />
    </Drawer.Navigator>
  )
}

export default DrawarNavigation