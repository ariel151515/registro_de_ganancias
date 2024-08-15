import React, { useState } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

// Screen Imports
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';
import { DataScreen } from './../screen/DataScreen/DataScreen';
import { LoginScreen } from './../screen/LoginScreen/LoginScreen';
import { SettingScreen } from './../screen/SettingScreen/SettingScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [isAuthenticated] = useState(true);

  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#086BEF',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: { 
          display: 'flex', 
          backgroundColor: '#fff',
          height: '8%',
          paddingTop: 9,
          paddingBottom: 9,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              return <Fontisto name={iconName} size={size} color={color} />;
            case 'Data':
              iconName = 'google-analytics';
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            case 'SettingScreen':
              iconName = 'settings';
              return <Ionicons name={iconName} size={size} color={color} />;
            default:
              return null;
          }
        },
        tabBarLabel: ({ focused, color }) => {
          let label;

          switch (route.name) {
            case 'Home':
              label = 'HOME';
              break;
            case 'Data':
              label = 'DATA';
              break;
            case 'SettingScreen':
              label = 'SETTING';
              break;
            default:
              label = '';
          }

          return <Text style={{ fontSize: 12, marginBottom: 0, color: color, marginTop: 0 }}>{label}</Text>;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={isAuthenticated ? HomeScreen : LoginScreen} 
      />
      <Tab.Screen 
        name="Data" 
        component={isAuthenticated ? DataScreen : LoginScreen} 
      />
      <Tab.Screen 
        name="SettingScreen" 
        component={isAuthenticated ? SettingScreen : LoginScreen} 
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
