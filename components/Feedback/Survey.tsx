import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import axiosRealTimeInstance from "@/config/axiosRealTime";
import { useNavigation } from "expo-router";

export default function EvaluarViaje({ busId }: { busId: number }) {

  const navigate = useNavigation();

  const [tiempoEspera, setTiempoEspera] = useState("");
  const [ocupacionBus, setOcupacionBus] = useState<number | null>(null);
  const [conductaChofer, setConductaChofer] = useState<number | null>(null);
  const [formaManejo, setFormaManejo] = useState<number | null>(null);
  const [experienciaGeneral, setExperienciaGeneral] = useState<number | null>(null);

  const handlePress = async () => {
    try {
      if (!tiempoEspera || ocupacionBus === null || conductaChofer === null || formaManejo === null || experienciaGeneral === null) {
        alert("Por favor completa todos los campos antes de enviar la evaluación.");
        return;
      }
      await axiosRealTimeInstance.post("encuestas", {
        idCamion: Number(busId),
        tiempoEspera: Number(tiempoEspera),
        calificacionCupo: Number(ocupacionBus + 1),
        calificacionConductor: Number(conductaChofer + 1),
        calificacionConduccion: Number(formaManejo + 1),
        calificacionServicio: Number(experienciaGeneral + 1)
      });
      setTiempoEspera("");
      setOcupacionBus(null);
      setConductaChofer(null);
      setFormaManejo(null);
      setExperienciaGeneral(null);
      alert("Evaluación enviada con éxito. ¡Gracias por tu feedback!");
      navigate.goBack();
    } catch (error) {
      alert("Ocurrió un error al enviar la evaluación. Por favor intenta nuevamente más tarde.");
    }
  }

  const opcionesOcupacion = [
    { label: "Vacío", icon: "chair" },
    { label: "Pocas personas", icon: "user" },
    { label: "Moderado", icon: "people-arrows" },
    { label: "Lleno", icon: "user-friends" },
    { label: "Saturado", icon: "users" }
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
    { label: "Riesgoso", icon: "exclamation" },
    { label: "Neutral", icon: "hand-paper" },
    { label: "Seguro", icon: "check" },
    { label: "Muy seguro", icon: "shield-alt" }
  ];

  const opcionesExperiencia = [
    { label: "Terrible", icon: "times-circle" },
    { label: "Mala", icon: "thumbs-down" },
    { label: "Regular", icon: "adjust" },
    { label: "Buena", icon: "thumbs-up" },
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
      <Text style={styles.label}>Ocupación del autobús</Text>
      {renderOpciones(opcionesOcupacion, ocupacionBus, setOcupacionBus, "#EC4899")}

      <Text style={styles.label}>Conducta del chofer</Text>
      {renderOpciones(opcionesConducta, conductaChofer, setConductaChofer, "#84CC16")}

      <Text style={styles.label}>Forma de manejo</Text>
      {renderOpciones(opcionesFormaManejo, formaManejo, setFormaManejo, "#2563EB")}

      <Text style={styles.label}>Experiencia en general</Text>
      {renderOpciones(opcionesExperiencia, experienciaGeneral, setExperienciaGeneral, "#F6CA00")}

      <TouchableOpacity style={styles.button}
        onPress={handlePress}
      >
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
    marginBottom: 24,
  },
  opcionesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
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
