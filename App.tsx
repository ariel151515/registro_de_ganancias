import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheetModal from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

// Define el tipo para la referencia del BottomSheetModal
type BottomSheetRef = BottomSheetModal | null;

export default function App() {
  // Referencia al BottomSheetModal
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  // Estado para controlar la visibilidad del overlay
  const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);

  // Definir los puntos de anclaje (snap points)
  const snapPoints: string[] = ['30%'];

  // Función para abrir el BottomSheetModal en el primer snap point (30%)
  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand(); // Abre el BottomSheetModal al primer snap point
    setOverlayVisible(true); // Mostrar overlay
  };

  // Función para cerrar el BottomSheetModal
  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.close(); // Cierra el BottomSheetModal
    setOverlayVisible(false); // Ocultar overlay
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Registro de gastos!</Text>
        <StatusBar style="auto" />
        
        {/* Botón flotante */}
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={handleOpenBottomSheet}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Overlay */}
      {isOverlayVisible && (
        <View style={styles.overlay} />
      )}

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}  // Inicialmente cerrado
        onDismiss={() => setOverlayVisible(false)}  // Ocultar overlay cuando se cierra el BottomSheetModal
        enablePanDownToClose={false} // Deshabilitar el deslizamiento hacia abajo para cerrar
        enableOverDrag={false} // Deshabilitar el arrastre hacia arriba
      >
        <View style={styles.sheetContainer}>
          <Text>¡Contenido del BottomSheetModal SIIIII!</Text>
          <Button title="Cerrar BottomSheet" onPress={handleCloseBottomSheet} />
        </View>
      </BottomSheetModal>
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
    zIndex: -1, // Asegura que el overlay esté detrás del BottomSheetModal
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30, // Ajusta según sea necesario
    right: 30,  // Ajusta según sea necesario
    width: 60,
    height: 60,
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
