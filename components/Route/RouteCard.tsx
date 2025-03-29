import { FeatureCollection } from 'geojson';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { routes } from "@/assets/buses/buses"
import { BusLocationType } from '@/types/route';
import { Link } from 'expo-router';
import { useState } from 'react';

interface RouteCardProps {
    routeName: string,
    from: string,
    to: string,
    frequency: string,
    schedule: string,
    color: string,
    linkColor: string,
    setSelectedRoute: (featureCollection: FeatureCollection) => void,
    busLocations: BusLocationType[] | null,
    setBusLocations: (busLocations: BusLocationType[]) => void,
}

const RouteCard = ({ routeName, from, to, frequency, schedule, color, linkColor, setSelectedRoute, setBusLocations, busLocations }: RouteCardProps) => {

    const [busesList, setBusesList] = useState<BusLocationType[]>([])

    const handlePress = () => {
        setSelectedRoute(routes.find(route => route.name === routeName)?.way!)
        setBusLocations(routes.find(route => route.name === routeName)?.buses!)
        setBusesList(routes.find(route => route.name === routeName)?.buses!)
    }

    return (
        <View style={[styles.routeCard, { borderLeftColor: color }]}>
            <Text style={[styles.routeTitle, { color }]}>{routeName}</Text>
            <Text style={styles.routeText}>{`${from} → ${to}`}</Text>
            <Text style={styles.routeText}>Frecuencia: {frequency}</Text>
            <Text style={styles.routeText}>Horario: {schedule}</Text>
            <TouchableOpacity style={styles.routeButton}
                onPress={handlePress}
            >
                <Text style={[styles.routeLink, { color: linkColor }]}>{`Ver mapa de la ruta ${routeName}`}</Text>
            </TouchableOpacity>
            {
                busesList && busesList.length > 0 ? (
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.routeText}>Buses en ruta:</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.busScrollView}>
                            {busesList.map(bus => (
                                <Link href={`/${bus.id}`} key={bus.id} style={styles.busButton}>
                                    <Text style={styles.busButtonText}>{bus.id}</Text>
                                </Link>
                            ))}
                        </ScrollView>
                    </View>
                ) : null
            }
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
    },
    busScrollView: {
        marginTop: 8,
        flexDirection: 'row',
    },
    busButton: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 6,
        marginRight: 10,
    },
    busButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
