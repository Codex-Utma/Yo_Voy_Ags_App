import { FeatureCollection } from 'geojson';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { routes } from "@/assets/buses/buses"

interface RouteCardProps {
    routeName: string,
    from: string,
    to: string,
    frequency: string,
    schedule: string,
    color: string,
    linkColor: string,
    setSelectedRoute: (featureCollection: FeatureCollection) => void,
}

const RouteCard = ({ routeName, from, to, frequency, schedule, color, linkColor, setSelectedRoute }: RouteCardProps) => {
    return (
        <View style={[styles.routeCard, { borderLeftColor: color }]}>
            <Text style={[styles.routeTitle, { color }]}>{routeName}</Text>
            <Text style={styles.routeText}>{`${from} → ${to}`}</Text>
            <Text style={styles.routeText}>Frecuencia: {frequency}</Text>
            <Text style={styles.routeText}>Horario: {schedule}</Text>
            <TouchableOpacity style={styles.routeButton}
                onPress={() => setSelectedRoute(routes.find(route => route.name === routeName)?.way!)}
            >
                <Text style={[styles.routeLink, { color: linkColor }]}>{`Ver mapa de la ruta ${routeName}`}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RouteCard;

const styles = StyleSheet.create({
    routeCard: {
        backgroundColor: "#FFF",
        padding: 18,
        borderRadius: 12,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        marginBottom: 14,
        borderLeftWidth: 6,
    },
    routeTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
    },
    routeText: {
        fontSize: 15,
        color: "#444",
        marginTop: 2,
    },
    routeButton: {
        marginTop: 10,
        paddingVertical: 6,
    },
    routeLink: {
        fontSize: 15,
        fontWeight: "bold",
        textDecorationLine: "underline",
    }
});
