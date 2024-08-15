import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetModal from '@gorhom/bottom-sheet';
import Feather from '@expo/vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native'; // Importa NavigationContainer
import TabNavigation from './TabNavigation'; // Tu TabNavigator

const MainLayout: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);
  const snapPoints = ['30%'];

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
    setOverlayVisible(true);
  };

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close();
    setOverlayVisible(false);
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
          onDismiss={() => setOverlayVisible(false)}
        >
          <View style={styles.sheetContainer}>
            <Text>¡Contenido del BottomSheetModal!</Text>
            <Button title="Cerrar BottomSheet" onPress={handleCloseBottomSheet} />
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
    backgroundColor: '#007bff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sheetContainer: {
    padding: 20,
    alignItems: 'center',
  },
});

export default MainLayout;
