import axiosInstance from "@/config/axios";
import { CardDataType } from "@/types/cardData";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CardData from "./CardData";
import CustomUse from "./CustomUse";
import { FontAwesome } from "@expo/vector-icons";

export default function Card({cardId}: {cardId: string}) {

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
            <Pressable onPress={() => setRefreshing(prev => !prev)}>
                <Text>Click me</Text>
            </Pressable>
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
        flex: 3,
        padding: 20,
        backgroundColor: "#F8F9FA"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitle: {
        fontSize: 14,
        textAlign: "center",
        color: "gray",
        marginBottom: 30,
        marginTop: 20
    },
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    button: {
        flexDirection: "row",
        backgroundColor: "blue",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10
    }
});
