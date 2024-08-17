import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Iconos

export const BoxBalance: React.FC = () => {
  return (
    <View className='flex w-full bg-white p-5 mt-4 rounded-md'>
       <Text className='text-base'>Total Balance (USDT)</Text>
       <Text className='text-base font-black text-4xl py-2 text-grisOscuro'>345.9854</Text>
    </View>
  );
}

