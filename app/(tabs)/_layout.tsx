import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs, useRouter } from 'expo-router';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    // <View style={styles.container}>
    //   {/* Navbar */}
    //   <View style={styles.navbar}>
    //     <Image
    //         source={{ uri: 'https://ucarecdn.com/3e74fc85-432a-4f5f-852a-fb1fd2bbf9e4/-/format/auto/-/quality/smart/' }}
    //         style={styles.logo}
    //     />
    //     <TouchableOpacity>
    //         <Image
    //         source={{ uri: 'https://ucarecdn.com/fe9f6887-91d3-4c3d-880b-f2ed4c8e9600/-/format/auto/-/quality/smart/' }}
    //         style={styles.profileIcon}
    //         />
    //     </TouchableOpacity>
    //     </View>

    //   {/* Screen Content */}
    //   <View style={styles.content}>{children}</View>

    //   {/* Bottom Navigation */}
    //   <View style={styles.bottomNav}>

    //     <TouchableOpacity onPress={() => router.push('/routes')} style={styles.navItem}>
    //
    //       <Text style={styles.navText}>Rutas</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={() => router.push('/stops')} style={styles.navItem}>
    //       <FontAwesome5 name="map-marker-alt" size={24} color="#84CC16" />
    //       <Text style={styles.navText}>Paradas</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={() => router.push('/reports')} style={styles.navItem}>
    //       <FontAwesome5 name="clipboard" size={24} color="#ffd200" />
    //       <Text style={styles.navText}>Reportes</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <>
      <Tabs
        screenOptions={{
          headerShown: false
        }}
      >
        <Tabs.Screen name="card" options={{
          title: "Tarjeta",
          tabBarIcon: ({ color }) => <FontAwesome5 name="credit-card" size={24} color="#2563EB" />
        }} />
        <Tabs.Screen name="routes" options={{
          title: "Rutas",
          tabBarIcon: ({ color }) => <FontAwesome5 name="bus" size={24} color="#ffd200" />
        }} />
        <Tabs.Screen name="Paradas" options={{
          title: "Paradas",
          tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={24} color="#84CC16" />
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
