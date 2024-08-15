// AppNavigator.js
import React, {useContext, StyleSheet, useState} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// contexto login
//import { ContextoUser } from './../context/contextoUser'; // Import the context

// Screen
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';
import { DataScreen } from './../screen/DataScreen/DataScreen';
import { LoginScreen } from './../screen/LoginScreen/LoginScreen';
import { SettingScreen } from './../screen/SettingScreen/SettingScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
//const {isAuthenticated} = useContext(ContextoUser); // Asegúrate de usar correctamente el contexto
const [isAuthenticated] = useState(true);

  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#086BEF',
            tabBarInactiveTintColor: '#ccc',
            tabBarStyle: { 
            display: 'flex', 
            backgroundColor: '#fff',
            height: '8%',
            paddingTop: 9,
            paddingBottom: 9,
            borderTopLeftRadius:0,
            borderTopRightRadius:0,
            },
        }}
    >

<Tab.Screen 
    name="Home" 
    component={isAuthenticated ? HomeScreen : LoginScreen} 
    options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
                name="today-outline" 
                size={size} 
                color={color}
            />
        ),
        tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0 }}>
                HOME
            </Text>
        ),
        headerShown: false,
        headerTitle: false
    }}
/>



    <Tab.Screen 
           name="Data" 
           component={isAuthenticated ? DataScreen : LoginScreen} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                     name="today-outline" 
                     size={size} 
                     color={color}
                    />
                   ),
                   tabBarLabel: ({ focused, color }) => (
                    <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                        DATA
                    </Text>
                ),
                }}
           />

      <Tab.Screen 
           name="SettingScreen" 
           component={isAuthenticated ? SettingScreen : LoginScreen} 
           options={{
            tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcons 
                          name="calendar-week-begin" 
                          size={size} 
                          color={color} />
                      ),
                      tabBarLabel: ({ focused, color }) => (
                        <Text style={{ fontSize: 12, marginBottom:0, color: color, marginTop:0}}>
                            SETTING
                        </Text>
                    ),
             }}
                   
           />


    </Tab.Navigator>
  );
}


export default TabNavigation;