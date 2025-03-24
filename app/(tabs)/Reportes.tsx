import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ReportForm = () => {
  const [route, setRoute] = useState(""); // Estado para la ruta
  const [description, setDescription] = useState(""); // Estado para la descripción

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevo Reporte</Text>

      {/* Campo Tipo de Reporte */}
      <Text style={styles.label}>
        Tipo de Reporte <Text style={styles.required}>*</Text>
      </Text>
      <View style={styles.selectField}>
        <Text style={styles.selectText}>Seleccione tipo</Text>
      </View>

      {/* Entrada de Ruta */}
      <Text style={styles.label}>
        Ruta <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese la ruta"
        placeholderTextColor="#AAA" // Color tenue para el placeholder
        value={route}
        onChangeText={setRoute}
      />

      {/* Entrada de Descripción */}
      <Text style={styles.label}>
        Descripción <Text style={styles.required}>*</Text>
      </Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describa los detalles del reporte"
        placeholderTextColor="#AAA" // Color tenue para el placeholder
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />

      {/* Botones de acción */}
      <TouchableOpacity style={styles.buttonSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCancel}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 3,
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  required: {
    color: "red",
  },
  selectField: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#FFF",
    justifyContent: "center",
    marginBottom: 12,
  },
  selectText: {
    fontSize: 14,
    color: "#AAA", // Color tenue para el placeholder
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    marginBottom: 12,
    backgroundColor: "#FFF",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  buttonSave: {
    backgroundColor: "#9333EA",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: "#2563EB",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ReportForm;
