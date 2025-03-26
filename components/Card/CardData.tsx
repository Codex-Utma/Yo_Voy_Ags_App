import { CardDataType } from "@/types/cardData";
import { StyleSheet, Text, View } from "react-native";

export default function CardData({ cardData }: { cardData: CardDataType }) {
    const progress = Math.min((cardData.balance / 400) * 100, 100); // Asegura que no supere el 100%

    return (
        <>
            <Text style={styles.saldoText}>Saldo Actual</Text>
            <Text style={styles.saldoAmount}>${cardData.balance}</Text>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${progress}%` }]} />
            </View>
            <Text style={styles.limitText}>Límite de saldo: $400</Text>

            <Text style={styles.transactionTitle}>Historial de Transacciones</Text>
        </>
    );
}

const styles = StyleSheet.create({
    saldoText: {
        fontSize: 14,
        textAlign: "center",
        color: "gray"
    },
    saldoAmount: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#9333EA",
        textAlign: "center"
    },
    progressBarContainer: {
        height: 10,
        backgroundColor: "#DDD",
        borderRadius: 5,
        marginVertical: 10,
        width: "100%",
        overflow: "hidden"
    },
    progressBar: {
        height: "100%",
        backgroundColor: "#EC4899",
        borderRadius: 5
    },
    limitText: {
        fontSize: 12,
        textAlign: "center",
        color: "gray"
    },
    transactionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20
    },
});
