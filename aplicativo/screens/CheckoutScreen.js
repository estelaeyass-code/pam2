import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function CheckoutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.iconCircle}>
          <Text style={styles.checkIcon}>✓</Text>
        </View>

        <Text style={styles.title}>Pedido Confirmado!</Text>
        <Text style={styles.sub}>Obrigado por comprar na Nude Concept.</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>RESUMO DO PEDIDO #8492</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Pagamento</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Pix • Aprovado</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Entrega</Text>
            <Text style={styles.infoValue}>2 a 4 dias úteis</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.btnInicio}
          activeOpacity={0.85}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.btnTexto}>Voltar à Loja</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf8f5',
    padding: 20,
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#c9b6a3',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#f4ede6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e8d9cb',
  },
  checkIcon: {
    fontSize: 34,
    color: '#a88a74',
    fontWeight: '700',
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
    color: '#3d3230',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  sub: {
    fontSize: 13.5,
    color: '#a8907c',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 19,
  },
  infoCard: {
    backgroundColor: '#fcf8f5',
    width: '100%',
    padding: 18,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  infoTitle: {
    color: '#a8907c',
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  infoLabel: {
    color: '#8c6d58',
    fontSize: 13.5,
    fontWeight: '600',
  },
  infoValue: {
    color: '#4a3e3d',
    fontSize: 13.5,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#f2e9e1',
    marginVertical: 8,
  },
  badge: {
    backgroundColor: '#eaf5ec',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#3f8557',
    fontSize: 12,
    fontWeight: '700',
  },
  btnInicio: {
    backgroundColor: '#a88a74',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#a88a74',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 2,
  },
  btnTexto: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.3,
  },
});