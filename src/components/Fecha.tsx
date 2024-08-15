import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Iconos
import AntDesign from '@expo/vector-icons/AntDesign';

export const Fecha: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View className='flex-row justify-between mt-10'>
      <Text className='text-base font-semibold'>Home</Text>
      <View className='flex flex-row items-center gap-2'>
        <AntDesign name="left" size={14} color="black" />
        <Text className='text-base font-semibold'>ago.2024</Text>
        <AntDesign name="right" size={14} color="black" />
      </View>
    </View>
  );
}



