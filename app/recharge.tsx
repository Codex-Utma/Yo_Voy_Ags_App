import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "@/config/axios";
import { useNavigation } from "expo-router";

export default function Recharge() {

    const navigate = useNavigation();

    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardholderName, setCardholderName] = useState("");
    const [amount, setAmount] = useState("");

    const handleExpiryDateChange = (text: string) => {
        let formattedText = text.replace(/\D/g, "");

        if (formattedText.length > 2) {
            formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2, 4)}`;
        }

        setExpiryDate(formattedText);
    };

    const handleSubmit = async () => {
        try {
            if (!cardNumber || !expiryDate || !cvv || !cardholderName || !amount) {
                alert("Por favor completa todos los campos.");
                return;
            }

            const cardId = await AsyncStorage.getItem("code");
            if (!cardId) {
                alert("No se encontró el ID de la tarjeta. Por favor escanea el código de barras nuevamente.");
                return;
            }

            await axiosInstance.post("transactions/recharge", {
                cardId: Number(cardId),
                amount: Number(amount),
            });

            alert("Recarga exitosa!");
            navigate.goBack();
        } catch (error) {
            console.error(error);
            alert("Error al procesar la recarga. Por favor intenta de nuevo.");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recarga con Tarjeta</Text>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="dollar-sign" size={20} color="#555" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Cantidad a recargar"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="credit-card" size={20} color="#555" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Número de tarjeta"
                    keyboardType="numeric"
                    maxLength={16}
                    value={cardNumber}
                    onChangeText={setCardNumber}
                />
            </View>

            <View style={styles.row}>
                <View style={[styles.inputContainer, styles.halfWidth]}>
                    <FontAwesome5 name="calendar-alt" size={20} color="#555" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="MM/AA"
                        keyboardType="numeric"
                        maxLength={5}
                        value={expiryDate}
                        onChangeText={handleExpiryDateChange}
                    />
                </View>

                <View style={[styles.inputContainer, styles.halfWidth]}>
                    <FontAwesome5 name="lock" size={20} color="#555" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="CVV"
                        keyboardType="numeric"
                        maxLength={3}
                        secureTextEntry
                        value={cvv}
                        onChangeText={setCvv}
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome5 name="user" size={20} color="#555" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nombre del propietario"
                    value={cardholderName}
                    onChangeText={setCardholderName}
                />
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>💳 Recargar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F3F4F6",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#DDD",
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: "#333",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    halfWidth: {
        width: "48%",
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
        shadowColor: "#007BFF",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});
