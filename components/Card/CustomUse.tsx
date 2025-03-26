import { CardUseType } from "@/types/cardData";
import { Text, View, StyleSheet } from "react-native";

export default function CustomUse({ use }: { use: CardUseType }) {

    if (use.amount > 0) {
        return <Recharge use={use} />
    }
    return <Used use={use} />
}

function Recharge({ use }: { use: CardUseType }) {
    return (
        <View style={styles.transaction}>
            <View>
                <Text style={styles.transactionType}>Recarga</Text>
                <Text style={styles.transactionDate}>{use.createdAt}</Text>
            </View>
            <Text style={styles.transactionAmountPositive}>${use.amount}</Text>
        </View>
    )
}

function Used({ use }: { use: CardUseType }) {
    return (
        <View style={styles.transaction}>
            <View>
                <Text style={styles.transactionType}>Viaje en {use.Transfer?.Bus.Route.name}</Text>
                <Text style={styles.transactionDate}>{use.createdAt}</Text>
            </View>
            <Text style={styles.transactionAmountNegative}>{use.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    transaction: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10
    },
    transactionType: {
        fontSize: 14,
        fontWeight: "bold"
    },
    transactionDate: {
        fontSize: 12,
        color: "gray"
    },
    transactionAmountPositive: {
        fontSize: 14,
        color: "green"
    },
    transactionAmountNegative: {
        fontSize: 14,
        color: "red"
    },
});
