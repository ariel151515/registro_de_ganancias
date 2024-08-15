import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetModal from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

// Componentes
import {Fecha} from './../../components/Fecha';
import {BoxBalance} from './../../components/BoxBalance';
import {BoxContenido} from './../../components/BoxContenido';

// Iconos
import Feather from '@expo/vector-icons/Feather';

export const HomeScreen: React.FC = () => {

  return (
    <GestureHandlerRootView className='flex-1 bg-base'>
      <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
          <View className="flex-1 w-full p-3" style={{marginBottom:'20%'}}>
           <Fecha />
           <BoxBalance />
           <BoxContenido />
          </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Para posicionar el botón flotante en relación con el contenedor
  },
  sheetContainer: {
    padding: 20,
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro con 50% de opacidad
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Ajusta según sea necesario
    right: 30,  // Ajusta según sea necesario
    width: 35,
    height: 35,
    backgroundColor: '#007bff', // Color del botón
    borderRadius: 30, // Redondear el botón
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
