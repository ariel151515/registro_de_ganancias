import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart } from "react-native-chart-kit";

export const ChartUsdtAcumulados: React.FC = () => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.chartWrapper}>
      <Text style={styles.chartTitle}>USDT acumulados</Text>
      <ScrollView horizontal>
        <BarChart
          data={{
            labels: [
              "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
              "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ],
            datasets: [
              {
                data: [
                  120, 150, 170, 200, 180, 160, 140, 130, 180, 220, 190, 210
                ]
              }
            ]
          }}
          width={screenWidth * 2} // Duplicamos el ancho para que los meses tengan más espacio
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#ffffff", // Fondo blanco
            backgroundGradientFrom: "#ffffff", // Fondo blanco
            backgroundGradientTo: "#ffffff", // Fondo blanco
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(84, 194, 89, ${opacity})`, // Color de las barras #54C259
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color de las etiquetas
            style: {
              borderRadius: 16
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
          showValuesOnTopOfBars={true} // Muestra los valores en la parte superior de las barras
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  chartWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 2,
  },
});
