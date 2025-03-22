import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function card() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu Tarjeta Prepago</Text>
            <Text style={styles.subtitle}>Consulta la información de tu Tarjeta Prepago</Text>

            <View style={styles.card}>
                <Text style={styles.saldoText}>Saldo Actual</Text>
                <Text style={styles.saldoAmount}>$39.50</Text>
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar} />
                </View>
                <Text style={styles.limitText}>Límite de saldo: $400</Text>

                <Text style={styles.transactionTitle}>Historial de Transacciones</Text>
                <View style={styles.transaction}>
                    <Text style={styles.transactionType}>Recarga</Text>
                    <Text style={styles.transactionDate}>22 Feb, 14:30</Text>
                    <Text style={styles.transactionAmountPositive}>+ $50.00</Text>
                </View>
                <View style={styles.transaction}>
                    <Text style={styles.transactionType}>Viaje en Ruta 25</Text>
                    <Text style={styles.transactionDate}>22 Feb, 16:15</Text>
                    <Text style={styles.transactionAmountNegative}>- $10.50</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <FontAwesome name="credit-card" size={20} color="white" />
                <Text style={styles.buttonText}> Recargar Tarjeta Prepago</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#F8F9FA" },
    title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
    subtitle: { fontSize: 14, textAlign: "center", color: "gray", marginBottom: 20 },
    card: { backgroundColor: "white", padding: 20, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 },
    saldoText: { fontSize: 14, textAlign: "center", color: "gray" },
    saldoAmount: { fontSize: 32, fontWeight: "bold", color: "purple", textAlign: "center" },
    progressBarContainer: { height: 10, backgroundColor: "#DDD", borderRadius: 5, marginVertical: 10 },
    progressBar: { width: "10%", height: "100%", backgroundColor: "purple", borderRadius: 5 },
    limitText: { fontSize: 12, textAlign: "center", color: "gray" },
    transactionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 20 },
    transaction: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
    transactionType: { fontSize: 14, fontWeight: "bold" },
    transactionDate: { fontSize: 12, color: "gray" },
    transactionAmountPositive: { fontSize: 14, color: "green" },
    transactionAmountNegative: { fontSize: 14, color: "red" },
    button: { flexDirection: "row", backgroundColor: "#0044FF", padding: 15, borderRadius: 5, alignItems: "center", justifyContent: "center", marginTop: 20 },
    buttonText: { color: "white", fontSize: 16, fontWeight: "bold", marginLeft: 10 }
});

