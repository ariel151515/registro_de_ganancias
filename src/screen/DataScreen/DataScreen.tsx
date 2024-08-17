import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HeaderData } from './../../components/HeaderData'
import { ChartUsdtAcumulados } from '../../components/ChartUsdtAcumulados'
import { ChartUsdtGanancias } from '../../components/ChartUsdtGanancias'

import { ScrollView } from 'react-native-gesture-handler';

const BoxGrafico: React.FC = () => {
  return (
      <View className='mt-5'>
        <View>
         <ChartUsdtAcumulados />
        </View>
        <View className='mt-5'>
         <ChartUsdtGanancias />
        </View>
      </View>
  );
}

export const DataScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className='flex p-3'>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
      <HeaderData />
      <BoxGrafico />
    </SafeAreaView>
  );
}


