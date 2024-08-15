import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen Imports
import TabNavigation from './TabNavigation'; // Verifica que este archivo exista y esté correctamente nombrado
import {CreateAccountScreen} from '../screen/CreateAccount/CreateAccountScreen';
import {LoginScreen} from '../screen/LoginScreen/LoginScreen'; // Asegúrate de que este sea el archivo correcto
import {SettingScreen} from '../screen/SettingScreen/SettingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  // Usa useContext para acceder al contexto
  //const { isAuthenticated } = useContext(ContextoUser); // Asegúrate de usar correctamente el contexto
  const [isAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tabs" 
          component={isAuthenticated ? TabNavigation : LoginScreen}  
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerTitle: ' ' }}
        />
        <Stack.Screen 
          name="CreateAccountScreen" 
          component={CreateAccountScreen} 
          options={{ headerTitle: ' ' }}
        />
        <Stack.Screen 
          name="SettingScreen" 
          component={SettingScreen} 
          options={{ headerTitle: ' ' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
