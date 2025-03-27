import { View, Text, StyleSheet } from "react-native";

export default function BusIcon({ busId }: { busId: number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.busId}>{busId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0056AC",
        paddingHorizontal: 10,
        borderRadius: 6,
        minWidth: 80, // Asegura que no se recorte
        minHeight: 30,
        position: "absolute", // Evita que el mapa lo recorte
    },
    busId: {
        color: "white",
        fontSize: 8,
        fontWeight: "bold"
    },
});
