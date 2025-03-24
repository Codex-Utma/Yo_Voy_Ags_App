import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/* Navbar superior (Logo y perfil) */}
      <View style={styles.navbar}>
        <Image
          source={{ uri: 'https://ucarecdn.com/3e74fc85-432a-4f5f-852a-fb1fd2bbf9e4/-/format/auto/-/quality/smart/' }}
          style={styles.logo}
        />
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://ucarecdn.com/fe9f6887-91d3-4c3d-880b-f2ed4c8e9600/-/format/auto/-/quality/smart/' }}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Contenido de la pantalla */}
        <Tabs screenOptions={{ headerShown: false }}>
                <Tabs.Screen 
                  name="index" 
                  options={{
                    title: "Casa",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={24} color={color} />
                  }} 
                />
                <Tabs.Screen 
                  name="card" 
                  options={{
                    title: "Tarjeta",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="credit-card" size={24} color={color} />
                  }} 
                />
                <Tabs.Screen 
                  name="routes" 
                  options={{
                    title: "Rutas",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="bus" size={24} color={color} />
                  }} 
                />
                <Tabs.Screen 
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
                />
              </Tabs>

      {/* Navbar inferior (Casa, Rutas, etc.) */}
    </View>
  );
}

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
    flex: 1,
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