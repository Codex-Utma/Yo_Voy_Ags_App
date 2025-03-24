import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function BusStopsScreen() {
  return (
    <View style={styles.container}>
  {/* Título */}
  <Text style={styles.title}>Encuentra tus Paradas</Text>
  <Text style={styles.subtitle}>
    Encuentra fácilmente las paradas de camión más cercanas a tu ubicación
  </Text>

  {/* Barra de búsqueda */}
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="Buscar por ubicación"
      placeholderTextColor="#999"
    />
    <Entypo name="magnifying-glass" size={20} color="#666" />
  </View>

  {/* Recuadro gris para la imagen */}
  <View style={styles.imagePlaceholder}>
    <Text style={styles.placeholderText}>Aquí va la imagen</Text>
  </View>

  {/* Tarjeta de paradas */}
  <View style={styles.stopCard}>
    <View style={styles.rowContainer}>
      <View style={styles.stopInfoContainer}>
        <Text style={styles.stopTitle}>Mercado Central</Text>
        <Text style={styles.stopDetails}>450m - Ruta 19, 23</Text>
      </View>
      <View style={styles.busInfoContainer}>
        <Text style={[styles.nextBusTitle, { color: "#84CC16" }]}>Próximo bus:</Text>
        <Text style={styles.nextBusDetails}>
          19 → 2 min {"\n"} 23 → 15 min
        </Text>
      </View>
    </View>
  </View>
  <View style={styles.stopCard}>
    <View style={styles.rowContainer}>
      <View style={styles.stopInfoContainer}>
        <Text style={styles.stopTitle}>Plaza Mayor</Text>
        <Text style={styles.stopDetails}>300m - Ruta 15, 42</Text>
      </View>
      <View style={styles.busInfoContainer}>
        <Text style={[styles.nextBusTitle, { color: "#3B82F6" }]}>Próximo bus:</Text>
        <Text style={styles.nextBusDetails}>
        15 → 5 min {"\n"} 42 → 12 min
        </Text>
      </View>
    </View>
  </View>
</View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 40,
    width: "100%",
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    padding: 8,
  },
  stopCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  stopTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  stopDetails: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },

  busInfoText: {
    alignItems: "flex-end",
  },
  nextBusTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 0,
  },
  nextBusDetails: {
    fontSize: 14,
    color: "#333",
    textAlign: "right",
    marginTop: 0,
  },
    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5, // Espacio entre la fila y los detalles
      },
      rowContainer: {
        flexDirection: "row", // Coloca los contenedores en una fila
        justifyContent: "space-between", // Espacia los contenedores a los lados
        alignItems: "flex-start", // Alinea los elementos en la parte superior
      }, 
      stopInfoContainer: {
        flexDirection: "column", // Alinea el texto (nombre y distancia) en vertical
        alignItems: "flex-start", // Alinea los textos a la izquierda
      },
      busInfoContainer: {
        flexDirection: "column", // Alinea "Próximo bus" y los tiempos en vertical
        alignItems: "flex-end", // Alinea los textos a la derecha
      },
      imagePlaceholder: {
        width: "100%", // Ancho completo del contenedor
        height: 150, // Altura del recuadro
        backgroundColor: "#e0e0e0", // Color gris claro
        justifyContent: "center", // Centra el contenido verticalmente
        alignItems: "center", // Centra el contenido horizontalmente
        marginBottom: 20, // Espacio entre el recuadro y las tarjetas de paradas
        borderRadius: 8, // Bordes redondeados
      },
      placeholderText: {
        fontSize: 16,
        color: "#666", // Color del texto
        fontStyle: "italic", // Estilo de texto cursiva
      },
});
