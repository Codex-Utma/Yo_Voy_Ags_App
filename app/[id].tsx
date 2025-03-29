import axiosRealTimeInstance from "@/config/axiosRealTime";
import { RealTimeDataType } from "@/types/realTimeData";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const opciones = {
    calificacionConduccion: {
        label: "Conducción",
        values: [
            { label: "Agresivo", icon: "skull-crossbones", color: "#D32F2F" },
            { label: "Riesgoso", icon: "exclamation-triangle", color: "#FFA000" },
            { label: "Neutral", icon: "hand-paper", color: "#FBC02D" },
            { label: "Seguro", icon: "check-circle", color: "#388E3C" },
            { label: "Muy seguro", icon: "shield-alt", color: "#1976D2" }
        ]
    },
    calificacionConductor: {
        label: "Calificación del Conductor",
        values: [
            { label: "Terrible", icon: "angry", color: "#D32F2F" },
            { label: "Mala", icon: "frown", color: "#FFA000" },
            { label: "Regular", icon: "meh", color: "#FBC02D" },
            { label: "Buena", icon: "smile", color: "#388E3C" },
            { label: "Excelente", icon: "grin", color: "#1976D2" }
        ]
    },
    calificacionLlegada: {
        label: "Puntualidad",
        values: [
            { label: "Terrible", icon: "times-circle", color: "#D32F2F" },
            { label: "Mala", icon: "thumbs-down", color: "#FFA000" },
            { label: "Regular", icon: "adjust", color: "#FBC02D" },
            { label: "Buena", icon: "thumbs-up", color: "#388E3C" },
            { label: "Excelente", icon: "star", color: "#1976D2" }
        ]
    },
    servicioGeneral: {
        label: "Servicio General",
        values: [
            { label: "Terrible", icon: "times-circle", color: "#D32F2F" },
            { label: "Mala", icon: "thumbs-down", color: "#FFA000" },
            { label: "Regular", icon: "adjust", color: "#FBC02D" },
            { label: "Buena", icon: "thumbs-up", color: "#388E3C" },
            { label: "Excelente", icon: "star", color: "#1976D2" }
        ]
    }
};

export default function RealTimeData() {
    const [realTimeData, setRealTimeData] = useState<RealTimeDataType | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await axiosRealTimeInstance.get(`promedios/${id}`);
                setRealTimeData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id, refreshing]);

    if (loading) {
        return <ActivityIndicator size="large" color="#007BFF" style={styles.loader} />;
    }

    if (!realTimeData) {
        return (
            <View style={styles.container}>
                <Text style={styles.cardTitle}>No se encontraron datos</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Datos en Tiempo Real</Text>
                <Text style={styles.subTitle}>ID del Camión: {id}</Text>

                {Object.entries(opciones).map(([key, { label, values }]) => {
                    const index = realTimeData[key as keyof RealTimeDataType] - 1;
                    const option = values[index] || values[2];

                    return (
                        <View key={key} style={styles.row}>
                            <FontAwesome5 name={option.icon} size={24} color={option.color} />
                            <Text style={[styles.text, { color: option.color }]}>
                                {label}: {option.label}
                            </Text>
                        </View>
                    );
                })}

                <View style={styles.row}>
                    <FontAwesome5 name="clock" size={24} color="#007BFF" />
                    <Text style={styles.text}>Tiempo de espera: {realTimeData.tiempoEspera} min</Text>
                </View>
                <TouchableOpacity style={styles.refreshButton} onPress={() => setRefreshing(prev => !prev)}>
                    <FontAwesome name="refresh" size={20} color="white" />
                    <Text style={styles.refreshButtonText}>Actualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F4F6",
        padding: 20,
    },
    loader: {
        marginTop: 50,
    },
    card: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        width: "90%",
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5,
    },
    subTitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 15,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
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
    refreshButtonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 8, // Espacio entre el icono y el texto
    },
});
