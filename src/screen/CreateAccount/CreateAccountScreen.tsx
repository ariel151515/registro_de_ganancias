import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

export const CreateAccountScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1 bg-white py-20 px-5'>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
      <Text className='text-4xl font-bold text-verde'>Create Account</Text>
      <View className='py-10'>
        <TextInput placeholder='Name' className='border border-grisInput px-5 py-3 rounded-lg text-lg'/>
        <TextInput placeholder='Email Address' className='border border-grisInput px-5 py-3 rounded-lg text-lg my-4'/>
        <TextInput placeholder='Password' className='border border-grisInput px-5 py-3 rounded-lg text-lg my-4'/>
        <TextInput placeholder='Confirm Password' className='border border-grisInput px-5 py-3 rounded-lg text-lg my-4'/>
        <TouchableOpacity className='w-full bg-verde rounded-md items-center py-2'>
          <Text className='text-white font-bold text-xl'>Login</Text>
        </TouchableOpacity>
        <Text className='font-semibold py-5 text-base text-verde'>Already registered? Login</Text>
      </View>
    </SafeAreaView>
  );
}




