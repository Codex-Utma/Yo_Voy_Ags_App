import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { Link } from 'expo-router';

const Login = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>BIENVENIDO</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://ucarecdn.com/3e74fc85-432a-4f5f-852a-fb1fd2bbf9e4/-/format/auto/-/quality/smart/' }}
        />

        <Link 
          href="/(tabs)/newcard"
        >
      <TouchableOpacity style={styles.loginButton}>

        <Text style={styles.loginButtonText}
        
        >Iniciar sesión</Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  loginButton: {
    backgroundColor: '#FF4081',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginTop: 40,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'medium',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#6200EA',
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderRadius: 5,
    marginTop: 40,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'light',
    textAlign: 'center',
  },
  registerButtonText2: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height:100,
    marginBottom: 20,
    marginTop: 20,
    
  },
});

export default Login;