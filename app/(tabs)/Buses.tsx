import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import MapView, { Geojson, Marker } from "react-native-maps";
import { routes } from "@/assets/buses/buses"
import { FeatureCollection } from 'geojson';
import RouteCard from "@/components/Route/RouteCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BusLocationType } from "@/types/route";
import BusIcon from "@/components/Route/BusIcon";

const BusRoutesScreen = () => {

  const [selectedRoute, setSelectedRoute] = useState<FeatureCollection | null>(null);
  const [busLocations, setBusLocations] = useState<BusLocationType[] | null>(null);

  const [origin] = useState({
    latitude: 21.883311,
    longitude: -102.292611
  });

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Encuentra tus Rutas</Text>
      <Text style={styles.screenSubtitle}>Encuentra la ruta ideal y optimiza tu tiempo de viaje</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
      >
        {
          selectedRoute && (
            <Geojson
              geojson={selectedRoute}
              strokeColor="#5D99F3"
              strokeWidth={5}
              markerComponent={<MaterialCommunityIcons name="home-variant" size={32} color="black" />}
            />
          )
        }
        {
          busLocations && busLocations.map((bus, index) => (
            <Marker
              coordinate={bus.location}
              key={index}
              pinColor="blue"
              style={{ width: 'auto', height: 'auto' }}
            >
              <BusIcon busId={bus.id} />
            </Marker>
          ))
        }
      </MapView>
      <ScrollView>
        {
          routes.map((route, index) => (
            <RouteCard
              key={index}
              routeName={route.name}
              from={route.from}
              to={route.to}
              frequency={route.frequency}
              schedule={route.schedule}
              color={route.color}
              linkColor={route.color}
              setSelectedRoute={setSelectedRoute}
              busLocations={busLocations}
              setBusLocations={setBusLocations}
            />
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
    marginTop: 30,
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 6,
  },
  screenSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  searchBox: {
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  map: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    marginBottom: 20,
  }
});

export default BusRoutesScreen;
