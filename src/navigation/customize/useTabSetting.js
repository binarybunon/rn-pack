import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
const useTabSetting = () => {

    const TabSetting = ({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Main') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'cloud-sharp' : 'cloud-outline';
        } else {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={25} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'black',
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#ffc125',
      },
    });
 

    
  return {TabSetting}
}

export default useTabSetting;
