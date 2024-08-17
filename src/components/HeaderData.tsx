import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Iconos
import AntDesign from '@expo/vector-icons/AntDesign';

export const HeaderData: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View className='flex-row justify-between mt-10'>
      <Text className='text-base font-semibold'>Analitica</Text>
      <TouchableOpacity className='flex flex-row items-center gap-3'>
        <AntDesign name="left" size={24} color="black" />
        <Text className='text-base font-semibold'>ago.2024</Text>
        <AntDesign name="right" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
