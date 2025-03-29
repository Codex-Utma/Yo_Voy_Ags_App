import SurvayFeedback from "@/components/Feedback/Survey";
import Form from "@/components/Report/Form";
import axiosInstance from "@/config/axios";
import { UsedLastHourType } from "@/types/cardUsedLastHour";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native";

const RealTimeData = () => {

  const [usedLastHourData, setUsedLastHourData] = useState<UsedLastHourType | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {

    async function getLastUsedData() {
      try {
        setLoading(true);
        const code = await AsyncStorage.getItem("code");
        const response = await axiosInstance.get(`transactions/usedLastHour/${code}`);
        setUsedLastHourData(response.data.cardUsed);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    getLastUsedData();
  }, [refreshing]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text> Loading </Text>
      </View>
    );
  }

  if (!usedLastHourData) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.refreshButton} onPress={() => setRefreshing(prev => !prev)}>
          <FontAwesome name="refresh" size={20} color="white" />
          <Text style={styles.refreshButtonText}>Actualizar</Text>
        </TouchableOpacity>
        <Text style={styles.warningText}>
          Esta función solo está disponible si has usado tu tarjeta de prepago en las últimas 2 horas.
        </Text>
      </View>
    );
  }

  return (
    <>
      {/* <SurvayFeedback usedLastHourData={usedLastHourData} /> */}
      <SurvayFeedback busId={usedLastHourData.Bus.id} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 3,
    width: "90%",
    alignSelf: "center",
    marginTop: 75,
  },
  warningText: {
    color: "#D8000C", // Rojo oscuro
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  refreshButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8, // Espacio entre el icono y el texto
},
refreshButton: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#28A745", // Verde elegante para indicar actualización
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 8,
  marginBottom: 15, // Espacio extra para separarlo del resto del contenido
},
});

export default RealTimeData;
