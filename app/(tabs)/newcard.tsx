import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const newcard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Tarjeta Prepago</Text>
      <Text style={styles.subtitle}>Ingresa los datos de tu tarjeta a continuación</Text>
      
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Número de Tarjeta Prepago</Text>
        <Text style={styles.cardText}>Escanea el código de barras en el reverso de tu Tarjeta Prepago para obtener el número de tarjeta</Text>
        <TouchableOpacity style={styles.cameraButton}>
          <Text style={styles.cameraButtonText}>Abrir cámara</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Registrar tarjeta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      alignItems: 'center', 
      padding: 20, 
      backgroundColor: 'white' 
    },
    title: { 
      fontSize: 22, 
      fontWeight: 'bold', 
      marginBottom: 10, 
      textAlign: 'center', // Esto asegura que el texto esté centrado horizontalmente
      width: '100%'       // Esto permite que `textAlign` funcione correctamente en todos los tamaños
    },
    subtitle: { 
      fontSize: 14, 
      color: 'gray', 
      marginBottom: 20, 
      textAlign: 'center', // Igualmente, centra horizontalmente el texto
      width: '100%' 
    },
    cardContainer: { 
      backgroundColor: '#E6E6FA', 
      padding: 20, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: '#800080', 
      width: '100%', 
      alignItems: 'center' 
    },
    cardTitle: { 
      fontSize: 16, 
      fontWeight: 'bold', 
      marginBottom: 5 
    },
    cardText: { 
      fontSize: 14, 
      textAlign: 'center', 
      color: 'gray', 
      marginBottom: 15 
    },
    cameraButton: { 
      backgroundColor: '#32CD32', 
      padding: 10, 
      borderRadius: 5, 
      width: '80%', 
      alignItems: 'center' 
    },
    cameraButtonText: { 
      color: 'white', 
      fontSize: 16, 
      fontWeight: 'bold' 
    },
    registerButton: { 
      backgroundColor: '#0000FF', 
      padding: 15, 
      borderRadius: 5, 
      width: '100%', 
      alignItems: 'center', 
      marginTop: 20 
    },
    registerButtonText: { 
      color: 'white', 
      fontSize: 16, 
      fontWeight: 'bold' 
    },
  });

export default newcard;