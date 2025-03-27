import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const EvaluarViaje = () => {
  const [tiempoEspera, setTiempoEspera] = useState(3);
  const [ocupacionBus, setOcupacionBus] = useState(3);
  const [conductaChofer, setConductaChofer] = useState(3);
  const [formaManejo, setFormaManejo] = useState(3);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.centeredHeader}>
        <Text style={styles.headerText}>Evalúa tu Viaje</Text>
        <Text style={styles.description}>
          Comparte tu experiencia y ayuda a mejorar el servicio calificando tu viaje
        </Text>
      </View>
    </View>

      <View style={styles.form}>
        <Text style={styles.label}>Tiempo de espera (Corto a Largo)</Text>
        <View style={styles.sliderContainer}>
          <FontAwesome5 name="running" size={20} color="#84CC16" />
          <Slider
            minimumValue={1}
            maximumValue={5}
            value={tiempoEspera}
            onValueChange={(value) => setTiempoEspera(value)}
            step={1} // Movimiento fluido y ajustado
            style={styles.slider}
            minimumTrackTintColor="#D1D5DB" // Gris claro
            maximumTrackTintColor="#D1D5DB" // Gris claro
            thumbTintColor="#2563EB" // Azul del círculo
          />
          <FontAwesome name="clock-o" size={20} color="#EC4899" />
        </View>

        {/* Ocupación del autobús */}
        <Text style={styles.label}>Ocupación del autobús (Vacío a Lleno)</Text>
        <View style={styles.sliderContainer}>
          <FontAwesome name="user" size={20} color="#84CC16" />
          <Slider
            minimumValue={1}
            maximumValue={5}
            value={ocupacionBus}
            onValueChange={(value) => setOcupacionBus(value)}
            step={1}
            style={styles.slider}
            minimumTrackTintColor="#D1D5DB"
            maximumTrackTintColor="#D1D5DB"
            thumbTintColor="#2563EB"
          />
          <FontAwesome name="users" size={20} color="#EC4899" />
        </View>

        {/* Conducta del chofer */}
        <Text style={styles.label}>Conducta del chofer (Excelente a Mala)</Text>
        <View style={styles.sliderContainer}>
          <FontAwesome5 name="smile" size={20} color="#84CC16" />
          <Slider
            minimumValue={1}
            maximumValue={5}
            value={conductaChofer}
            onValueChange={(value) => setConductaChofer(value)}
            step={1}
            style={styles.slider}
            minimumTrackTintColor="#D1D5DB"
            maximumTrackTintColor="#D1D5DB"
            thumbTintColor="#2563EB"
          />
          <FontAwesome5 name="angry" size={20} color="#EC4899" />
        </View>

        {/* Forma de manejo */}
        <Text style={styles.label}>Forma de manejo (Seguro a Agresivo)</Text>
        <View style={styles.sliderContainer}>
          <FontAwesome name="shield" size={20} color="#84CC16" />
          <Slider
            minimumValue={1}
            maximumValue={5}
            value={formaManejo}
            onValueChange={(value) => setFormaManejo(value)}
            step={1}
            style={styles.slider}
            minimumTrackTintColor="#D1D5DB"
            maximumTrackTintColor="#D1D5DB"
            thumbTintColor="#2563EB"
          />
          <FontAwesome name="exclamation-triangle" size={20} color="#EC4899" />
        </View>

        {/* Botón de enviar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar Evaluación</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 16,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12, // Ajustado para reducir espacio
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  centeredHeader: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    flexGrow: 1, // Permite que crezca sin dejar tanto espacio arriba
    marginTop: 40, // Reducido de 100 a 20
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 4,
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  slider: {
    flex: 1,
  },
  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default EvaluarViaje;