import React, { useState } from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Fontisto, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

// Importar pantallas
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';
import { DataScreen } from '../screen/DataScreen/DataScreen';
import { LoginScreen } from '../screen/LoginScreen/LoginScreen';
import { CreateAccountScreen } from '../screen/CreateAccount/CreateAccountScreen';
import { SettingScreen } from '../screen/SettingScreen/SettingScreen';
import { GananciasScreen } from '../screen/GananciasScreen/GananciasScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [isAuthenticated] = useState(true);

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Tabs" 
        component={isAuthenticated ? TabNavigator : LoginScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerTitle: ' ' }} 
      />
      <Stack.Screen 
        name="CreateAccount" 
        component={CreateAccountScreen} 
        options={{ headerTitle: ' ' }} 
      />
      <Stack.Screen 
        name="Setting" 
        component={SettingScreen} 
        options={{ headerTitle: ' ' }} 
      />
     <Stack.Screen 
        name="Ganancias" 
        component={GananciasScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const [isAuthenticated] = useState(true);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#54C259',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: '8%',
          paddingTop: 9,
          paddingBottom: 9,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            return <Fontisto name={iconName} size={size} color={color} />;
          } else if (route.name === 'Data') {
            iconName = 'google-analytics';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'SettingScreen') {
            iconName = 'settings';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarLabel: ({ color }) => {
          let label;
          if (route.name === 'Home') {
            label = 'HOME';
          } else if (route.name === 'Data') {
            label = 'DATA';
          } else if (route.name === 'SettingScreen') {
            label = 'SETTING';
          }
          return <Text style={{ fontSize: 12, color }}>{label}</Text>;
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
};

export default TabNavigation;
