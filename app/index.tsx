import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('../assets/images/yovoy.png')}
      />

      <Link href={'/(tabs)/Card'} style={styles.loginButton}>
        <TouchableOpacity>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </Link>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}> ¿No tienes una cuenta?</Text>
        <Text style={styles.registerButtonText2}> Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  loginButton: {
    backgroundColor: '#FF4081',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 5,
    marginTop: 40,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'medium',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#6200EA',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginTop: 40,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'medium',
    textAlign: 'center',
  },
  registerButtonText2: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 130,
    marginTop: 20,

  },
});

export default index;
