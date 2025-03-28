import { CardUseType } from "@/types/cardData";
import { Text, View, StyleSheet } from "react-native";

const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    date.setHours(date.getHours() - 6);

    return new Intl.DateTimeFormat("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).format(date);
};

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
                <Text style={styles.transactionDate}>{formatDate(use.createdAt)}</Text>
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
                <Text style={styles.transactionDate}>{formatDate(use.createdAt)}</Text>
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
