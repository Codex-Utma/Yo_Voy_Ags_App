import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SurvayFeedback = () => {
  const [tiempoEspera, setTiempoEspera] = useState("");
  const [ocupacionBus, setOcupacionBus] = useState<number | null>(null);
  const [conductaChofer, setConductaChofer] = useState<number | null>(null);
  const [formaManejo, setFormaManejo] = useState<number | null>(null);
  const [experienciaGeneral, setExperienciaGeneral] = useState<number | null>(null);

  const opcionesOcupacion = [
    { label: "Vacío", icon: "chair" },
    { label: "Pocas personas", icon: "user" },
    { label: "Moderado", icon: "user-friends" },
    { label: "Lleno", icon: "users" },
    { label: "Saturado", icon: "people-arrows" }
  ];

  const opcionesConducta = [
      { label: "Terrible", icon: "angry" },
      { label: "Mala", icon: "frown" },
      { label: "Regular", icon: "meh" },
      { label: "Buena", icon: "smile" },
      { label: "Excelente", icon: "grin" }
  ];

  const opcionesFormaManejo = [
      { label: "Agresivo", icon: "skull-crossbones" },
      { label: "Riesgoso", icon: "exclamation-circle" },
      { label: "Neutral", icon: "hand-paper" },
      { label: "Seguro", icon: "thumbs-up" },
      { label: "Muy seguro", icon: "shield-alt" }
  ];

  const opcionesExperiencia = [
      { label: "Terrible", icon: "skull-crossbones" },
      { label: "Mala", icon: "star-and-crescent" },
      { label: "Regular", icon: "star-of-life" },
      { label: "Buena", icon: "star-half-alt" },
      { label: "Excelente", icon: "star" }
  ];

  const renderOpciones = (
    opciones: { label: string; icon: string }[],
    seleccionado: number | null,
    setSeleccionado: React.Dispatch<React.SetStateAction<number | null>>,
    color: string
  ) => (
    <View style={styles.opcionesContainer}>
      {opciones.map((opcion, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.opcion,
            seleccionado === index && { backgroundColor: color + "30", borderColor: color, borderWidth: 1 }
          ]}
          onPress={() => setSeleccionado(index)}
        >
          <FontAwesome5 name={opcion.icon} size={24} color={seleccionado === index ? color : "#6B7280"} />
          <Text style={[styles.opcionTexto, { color: seleccionado === index ? color : "#374151" }]}>
            {opcion.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Evalúa tu Viaje</Text>
      <Text style={styles.subHeader}>Comparte tu experiencia y ayuda a mejorar el servicio calificando tu viaje.</Text>

      {/* Pregunta abierta */}
      <Text style={styles.label}>Tiempo de espera (Minutos)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tiempoEspera}
        onChangeText={setTiempoEspera}
        placeholder="Ingresa los minutos"
      />

      {/* Preguntas con opciones de selección */}
      <Text style={styles.label}>Ocupación del autobús (Vacío a Lleno)</Text>
      {renderOpciones(opcionesOcupacion, ocupacionBus, setOcupacionBus, "#EC4899")}

      <Text style={styles.label}>Conducta del chofer (Excelente a Mala)</Text>
      {renderOpciones(opcionesConducta, conductaChofer, setConductaChofer, "#84CC16")}

      <Text style={styles.label}>Forma de manejo (Seguro a Agresivo)</Text>
      {renderOpciones(opcionesFormaManejo, formaManejo, setFormaManejo, "#2563EB")}

      <Text style={styles.label}>Experiencia en general</Text>
      {renderOpciones(opcionesExperiencia, experienciaGeneral, setExperienciaGeneral, "#F6CA00")}

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar Evaluación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 16,
    marginTop: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  opcionesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  opcion: {
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  opcionTexto: {
    marginTop: 5,
    fontSize: 12,
    color: "#374151",
  },
  button: {
    backgroundColor: "#9333EA",
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

export default SurvayFeedback;
