import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetModal from '@gorhom/bottom-sheet';
import Feather from '@expo/vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const MainLayout: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);
  const snapPoints = ['65%'];  // Eliminamos el '0%'

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
    setOverlayVisible(true);
  };

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
    setOverlayVisible(false);
  };

  const handleSheetChanges = (index: number) => {
    if (index === -1) {  // Detecta cuando el Bottom Sheet está cerrado
      setOverlayVisible(false);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <TabNavigation />
        </View>

        {/* Botón flotante */}
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handleOpenBottomSheet}
        >
          <Feather name="plus" size={24} color="white" />
        </TouchableOpacity>

        {/* Overlay */}
        {isOverlayVisible && (
          <View style={styles.overlay} />
        )}

        {/* BottomSheetModal */}
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose={true}  // Habilita el deslizamiento hacia abajo para cerrar
          onDismiss={() => setOverlayVisible(false)}
          onChange={handleSheetChanges}
        >
          <View style={styles.sheetContent}>
            <View style={styles.inputContainer}>
              <FontAwesome5 name="calendar-day" size={24} color="#BBBBBB" />
              <TextInput style={styles.input} placeholder="Select Date" />
            </View>
             
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="currency-btc" size={24} color="#BBBBBB" />
              <TextInput style={styles.input} placeholder="Moneda" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="currency-btc" size={24} color="#BBBBBB" />
              <TextInput style={styles.input} placeholder="Valor de la moneda" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="currency-btc" size={24} color="#BBBBBB" />
              <TextInput style={styles.input} placeholder="Tiempo de compra" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="currency-btc" size={24} color="#BBBBBB" />
              <TextInput style={styles.input} placeholder="USDT actual" />
            </View>

            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="currency-btc" size={24} color="#BBBBBB" />
              <TextInput style={styles.input} placeholder="USDT con ganancias" />
            </View>

            <TouchableOpacity onPress={handleCloseBottomSheet} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 90,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: '#54C259',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sheetContent: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    height: 40,
  },
  sendButton: {
    backgroundColor: '#54C259',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainLayout;
