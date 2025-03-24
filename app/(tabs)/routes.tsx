import { bus_routes } from "@/assets/maps/bus_routes";
import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";


// Componente reutilizable para mostrar cada ruta
const RouteCard = ({ routeNumber, start, end, frequency, schedule, color, linkColor }: any) => {
  return (
    <View style={[styles.routeCard, { borderLeftColor: color }]}>
      <Text style={[styles.routeTitle, { color }]}>{`Ruta ${routeNumber}`}</Text>
      <Text style={styles.routeText}>{`${start} → ${end}`}</Text>
      <Text style={styles.routeText}>Frecuencia: {frequency}</Text>
      <Text style={styles.routeText}>Horario: {schedule}</Text>
      <TouchableOpacity>
        <Text style={[styles.routeLink, { color: linkColor }]}>{`Ver mapa de la ruta ${routeNumber}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Pantalla principal con las rutas de autobuses
const BusRoutesScreen = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      {/* Título y descripción */}
      <Text style={styles.screenTitle}>Encuentra tus Rutas</Text>
      <Text style={styles.screenSubtitle}>Encuentra la ruta ideal y optimiza tu tiempo de viaje</Text>

      {/* Barra de búsqueda */}
      <View style={styles.searchBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por número de ruta"
          placeholderTextColor="#999" // Color tenue para el placeholder
        />
      </View>

      {/* Espacio reservado para el mapa */}
      <View style={styles.mapPlaceholder} />

      {/* Tarjetas de rutas */}
      <RouteCard
        routeNumber={20}
        start="Estación Central"
        end="Plaza Mayor"
        frequency="Cada 10-15 min"
        schedule="6:00 - 22:00"
        color="#D81B60"
        linkColor="#D81B60" // Color rosa para la ruta 20
      />
      <RouteCard
        routeNumber={40}
        start="Mercado Central"
        end="Terminal Norte"
        frequency="Cada 15-20 min"
        schedule="6:00 - 21:30"
        color="#1E88E5"
        linkColor="#1E88E5" // Color azul para la ruta 40
      />
    </ScrollView>
  );
};

// Estilos organizados
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  screenSubtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  searchBox: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 16,
  },
  searchInput: {
    fontSize: 16,
    color: "#333",
  },
  mapPlaceholder: {
    height: 180,
    backgroundColor: "#DDD",
    borderRadius: 12,
    marginBottom: 16,
  },
  routeCard: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 12,
    borderLeftWidth: 5,
  },
  routeTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  routeText: {
    fontSize: 14,
    color: "#444",
    marginTop: 2,
  },
  routeLink: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default BusRoutesScreen;