import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const SettingScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#F3F3F3" />
      <Text>SettingScreen</Text>
      <Button
        title="Ir a pantalla fuera de tabs"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#086BEF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
  },
});

