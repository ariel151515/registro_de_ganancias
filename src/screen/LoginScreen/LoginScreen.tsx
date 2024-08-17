import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-white py-20 px-5'>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
      <Text className='text-4xl font-bold text-verde'>Welcome!</Text>
      <View className='py-10'>
        <TextInput placeholder='Email Address' className='border border-grisInput px-5 py-3 rounded-lg text-lg'/>
        <TextInput placeholder='Email Address' className='border border-grisInput px-5 py-3 rounded-lg text-lg my-4'/>
        <Text className='font-semibold pb-8 text-base text-verde'>Forgot Password?</Text>
        <TouchableOpacity className='w-full bg-verde rounded-md items-center py-2'>
          <Text className='text-white font-bold text-xl'>Login</Text>
        </TouchableOpacity>
        <Text className='font-semibold py-5 text-base text-verde'>Create a new account?</Text>
      </View>
    </SafeAreaView>
  );
}




