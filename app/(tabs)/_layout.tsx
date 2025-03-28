import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false
        }}
      >
        <Tabs.Screen name="Card" options={{
          title: "Tarjeta",
          tabBarIcon: ({ color }) => <FontAwesome5 name="credit-card" size={24} color="#2563EB" />
        }} />
        <Tabs.Screen name="Buses" options={{
          title: "Rutas",
          tabBarIcon: ({ color }) => <FontAwesome5 name="bus" size={24} color="#ffd200" />
        }} />
        <Tabs.Screen name="RealTime" options={{
          title: "Feedback",
          tabBarIcon: ({ color }) => <MaterialIcons name="feedback" size={24} color="#84CC16" />
        }} />
        <Tabs.Screen name="Reportes" options={{
          title: "Reportes",
          tabBarIcon: ({ color }) => <FontAwesome5 name="clipboard" size={24} color="#EC4899" />
        }} />
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
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navItem: {
    flex: 1, // Cada elemento ocupa 1/5 del ancho total
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  navText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default AppLayout;
