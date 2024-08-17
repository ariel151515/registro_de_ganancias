import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Animated } from 'react-native';
import { Audio } from 'expo-av';
import gracias from './../../../assets/gracias.png'; 
import dinero from './../../../assets/sounds/dinero.mp3'; // Archivo de audio local

export const GananciasScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const playSound = async () => {
      try {
        // Cargar el archivo de audio local
        const { sound } = await Audio.Sound.createAsync(dinero);

        // Ajustar el volumen al máximo (1.0 es el volumen máximo)
        await sound.setVolumeAsync(1.0);

        // Reproducir el sonido
        await sound.playAsync();

        // Opcional: Puedes usar una función de retorno para manejar cuando el sonido termine
        sound.setOnPlaybackStatusUpdate(status => {
          if (status.didJustFinish) {
            console.log('Sound finished playing');
          }
        });
      } catch (error) {
        console.error('Error al cargar o reproducir el sonido:', error);
      }
    };

    playSound();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Image source={gracias} style={styles.image} />
        <Text style={styles.title}>¡USDT Ganados!</Text>
        <Text style={styles.amount}>6.4534</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DAF1DB',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
