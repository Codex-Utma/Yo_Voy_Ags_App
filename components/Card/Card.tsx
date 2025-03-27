import axiosInstance from "@/config/axios";
import { CardDataType } from "@/types/cardData";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardData from "./CardData";
import CustomUse from "./CustomUse";
import { FontAwesome } from "@expo/vector-icons";

export default function Card({ cardId }: { cardId: string }) {

    const [cardData, setCardData] = useState<CardDataType>({} as CardDataType);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response: AxiosResponse = await axiosInstance.get(`transactions/data/${cardId}`);

                setCardData(response.data.response.cardData);
            } catch (error) {
                console.log(error);
                alert("Error al cargar la información de la tarjeta");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [refreshing]);

    if (loading) {
        return <Text>Cargando...</Text>
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Tu Tarjeta Prepago</Text>
            <TouchableOpacity style={styles.refreshButton} onPress={() => setRefreshing(prev => !prev)}>
                <FontAwesome name="refresh" size={20} color="white" />
                <Text style={styles.refreshButtonText}>Actualizar</Text>
            </TouchableOpacity>

            <Text style={styles.subtitle}>Consulta la información de tu Tarjeta Prepago</Text>

            <View style={styles.card}>
                <CardData cardData={cardData} />
                {
                    cardData && cardData.cardUses.length > 0 ? cardData.cardUses.map((use, index) => {
                        return <CustomUse key={index} use={use} />
                    }) :
                        <Text>No hay transacciones</Text>
                }

            </View>

            <TouchableOpacity style={styles.button}>
                <FontAwesome name="credit-card" size={20} color="white" />
                <Text style={styles.buttonText}> Recargar Tarjeta Prepago</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F8F9FA",
        paddingBottom: 20, // Agregar espacio extra en la parte inferior
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        marginTop: 30, // Ajustar para que no quede demasiado arriba
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#666",
        marginBottom: 20,
    },
    card: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    button: {
        flexDirection: "row",
        backgroundColor: "#007BFF",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginBottom: 30, // Espacio extra para evitar que se solape con las tabs
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "600",
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
