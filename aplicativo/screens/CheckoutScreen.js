import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function CheckoutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.checkIcon}>✨</Text>
        <Text style={styles.title}>Pedido Confirmado!</Text>
        <Text style={styles.sub}>Obrigado por comprar na Nude Concept.</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Resumo do Pedido #8492</Text>
          <Text style={styles.infoText}>• Pagamento: Pix (Aprovado)</Text>
          <Text style={styles.infoText}>• Entrega: 2 a 4 dias úteis</Text>
        </View>

        <TouchableOpacity 
          style={styles.btnInicio}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.btnTexto}>Voltar à Loja</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf8f5', padding: 16, justifyContent: 'center' },
  box: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#d6c7b8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  checkIcon: { fontSize: 50, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: '900', color: '#4a3e3d', marginBottom: 4 },
  sub: { fontSize: 13, color: '#a8907c', textAlign: 'center', marginBottom: 20 },
  infoCard: {
    backgroundColor: '#fcf8f5',
    width: '100%',
    padding: 14,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  infoTitle: { color: '#8c6d58', fontWeight: '800', fontSize: 12, marginBottom: 6 },
  infoText: { color: '#7a6a68', fontSize: 13, marginVertical: 2 },
  btnInicio: {
    backgroundColor: '#a88a74',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnTexto: { color: '#ffffff', fontWeight: '800', fontSize: 15 },
});