import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function AppLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        {/* <Tabs.Screen
          name="index"
          options={{
            title: "Casa",
            tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />
          }}
        /> */}
        <Tabs.Screen
          name="newcard"
          options={{
            title: "Tarjeta",
            tabBarIcon: ({ color }) => <FontAwesome5 name="credit-card" size={24} color={color} />
          }}
        />
        {/* <Tabs.Screen
          name="routes"
          options={{
            title: "Rutas",
            tabBarIcon: ({ color }) => <FontAwesome5 name="bus" size={24} color={color} />
          }}
        /> */}
        {/* <Tabs.Screen
          name="stops"
          options={{
            title: "Paradas",
            tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={24} color={color} />
          }}
        />
        <Tabs.Screen
          name="reports"
          options={{
            title: "Reportes",
            tabBarIcon: ({ color }) => <FontAwesome5 name="clipboard" size={24} color={color} />
          }}
        /> */}
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  logo: {
    width: 70,
    height: 35,
    resizeMode: 'contain',
  },
  profileIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});