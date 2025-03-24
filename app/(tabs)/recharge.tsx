import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Recharge = () => {
  const [monto, setMonto] = useState('');
  const [montoSeleccionado, setMontoSeleccionado] = useState<number | null>(null);
  const [metodoPago, setMetodoPago] = useState('');

  const seleccionarMonto = (valor: number) => {
    setMontoSeleccionado(valor);
    setMonto('');
  };

  const cambiarOtroMonto = (valor: string) => {
    setMonto(valor);
    setMontoSeleccionado(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recarga tu Tarjeta Prepago</Text>
      <Text style={styles.subtitle}>
        Consulta tu saldo disponible y realiza recargas de forma rápida y segura
      </Text>

       {/* Opciones de Recarga */}
       <View style={styles.card}>
        <Text style={styles.sectionTitle}>Recarga</Text>
        <View style={styles.amountContainer}>
          {[10, 20, 50].map((valor: number) => (
            <TouchableOpacity
              key={valor}
              style={[
                styles.amountBox,
                montoSeleccionado === valor && styles.selectedAmount,
              ]}
              onPress={() => seleccionarMonto(valor)}
            >
              <Text style={styles.amountText}>${valor}</Text>
              {valor === 10 && <Text style={styles.amountSubtext}>Recarga mínima</Text>}
              {valor === 50 && <Text style={styles.amountSubtext}>Más popular</Text>}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Otro Monto</Text>
        <TextInput
          style={styles.input}
          placeholder="$ Ingresa el monto"
          keyboardType="numeric"
          value={monto}
          onChangeText={cambiarOtroMonto}
        />
      </View>

      {/* Método de Pago */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Método de Pago</Text>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setMetodoPago('credito')}
        >
          <MaterialIcons
            name={metodoPago === 'credito' ? "radio-button-checked" : "radio-button-unchecked"}
            size={20}
            color={metodoPago === 'credito' ? "blue" : "gray"}
          />
          <FontAwesome name="credit-card" size={20} color="black" style={styles.icon} />
          <Text style={styles.paymentText}>Tarjeta de Crédito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => setMetodoPago('debito')}
        >
          <MaterialIcons
            name={metodoPago === 'debito' ? "radio-button-checked" : "radio-button-unchecked"}
            size={20}
            color={metodoPago === 'debito' ? "blue" : "gray"}
          />
          <FontAwesome name="credit-card" size={20} color="black" style={styles.icon} />
          <Text style={styles.paymentText}>Tarjeta de Débito</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.addPaymentMethod}>+ Agregar nuevo método de pago</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de recarga */}
      <TouchableOpacity style={styles.rechargeButton}>
        <Text style={styles.rechargeButtonText}>Recargar Ahora</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: 'white', alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', width: '100%' },
    subtitle: { fontSize: 14, color: 'gray', marginBottom: 20, textAlign: 'center', width: '100%' },
    sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 5, textAlign: 'left', width: '100%' },
    card: { backgroundColor: '#F9F9F9', padding: 15, borderRadius: 10, width: '100%', marginBottom: 15 },
    amountContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
    amountBox: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      width: '30%',
      backgroundColor: 'white',
    },
    selectedAmount: {
      borderColor: '#7E22CE', // Resaltar selección
      borderWidth: 2,
    },
    amountText: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', width: '100%' },
    amountSubtext: {  // 🔹 Aquí está la nueva propiedad
      fontSize: 10, 
      color: 'gray', 
      textAlign: 'center',
      marginTop: 2, 
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      textAlign: 'left',
      width: '100%',
      backgroundColor: 'white',
    },
    paymentOption: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      width: '100%',
      backgroundColor: 'white',
    },
    icon: { marginHorizontal: 10 },
    paymentText: { fontSize: 16, textAlign: 'left', flex: 1 },
    addPaymentMethod: { color: '#2563EB', textAlign: 'center', width: '100%', marginTop: 10 },
    rechargeButton: { backgroundColor: '#7E22CE', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
    rechargeButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center', width: '100%' },
  });
  

export default Recharge;