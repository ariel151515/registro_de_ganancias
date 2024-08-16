import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Iconos
import AntDesign from '@expo/vector-icons/AntDesign';

const ItemBox: React.FC = () => {
    const navigation = useNavigation();
    return (
      <View className='flex w-full p-2 rounded-md bg-grisItem mt-1'>
        <View className='flex flex-row justify-between items-center'>
            <Text className='text-sm text-grisTexto'>Lunes 15 de ago</Text>
            <View className='flex flex-row justify-between gap-5 items-center'>
                <Text className='text-verde text-sm'>0.65</Text>
               <View className='p-2 bg-grisItemDos rounded-md'>
                 <Text className='text-verde text-sm'>13%</Text>
               </View>
            </View>
        </View>
      </View>
    );
  }


export const BoxContenido: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View className='flex w-full bg-white pt-1 pb-2 px-2 mt-2 rounded-md'style={{height:'75%', marginBottom:'5%'}} >
        <ScrollView>
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
            <ItemBox />
        </ScrollView>
    </View>
  );
}
