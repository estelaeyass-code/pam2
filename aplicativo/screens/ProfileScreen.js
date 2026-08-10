import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const produto = route.params?.produtoSelecionado || {
    nome: 'Seu Carrinho está vazio',
    preco: 'R$ 0,00',
    imagem: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80'
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Meu Carrinho 🛍️</Text>

      <View style={styles.itemCard}>
        <Image source={{ uri: produto.imagem }} style={styles.itemImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.itemNome}>{produto.nome}</Text>
          <Text style={styles.itemQtd}>Quantidade: 1</Text>
        </View>
        <Text style={styles.itemPreco}>{produto.preco}</Text>
      </View>

      <View style={styles.resumoBox}>
        <View style={styles.linhaResumo}>
          <Text style={styles.resumoTexto}>Subtotal</Text>
          <Text style={styles.resumoValor}>{produto.preco}</Text>
        </View>
        <View style={styles.linhaResumo}>
          <Text style={styles.resumoTexto}>Frete</Text>
          <Text style={styles.freteGratis}>GRÁTIS</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.linhaResumo}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.totalValor}>{produto.preco}</Text>
        </View>
      </View>

      <TouchableOpacity 
        activeOpacity={0.9} 
        style={styles.btnFinalizar}
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.btnFinalizarTexto}>Ir para o Pagamento →</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btnVoltar}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.btnVoltarTexto}>Continuar Comprando</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf8f5', padding: 16 },
  header: { fontSize: 24, fontWeight: '900', color: '#8c6d58', marginBottom: 16, marginTop: 10 },
  itemCard: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#d6c7b8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  itemImage: { width: 50, height: 50, borderRadius: 10, marginRight: 12 },
  itemNome: { fontSize: 15, fontWeight: '700', color: '#4a3e3d' },
  itemQtd: { fontSize: 12, color: '#a8907c', marginTop: 2 },
  itemPreco: { fontSize: 15, fontWeight: '800', color: '#8c6d58' },
  resumoBox: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  linhaResumo: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 4 },
  resumoTexto: { color: '#7a6a68', fontSize: 13 },
  resumoValor: { color: '#4a3e3d', fontSize: 13, fontWeight: '600' },
  freteGratis: { color: '#b58a6f', fontSize: 13, fontWeight: '800' },
  divider: { height: 1, backgroundColor: '#f2e9e1', marginVertical: 10 },
  totalTexto: { color: '#4a3e3d', fontSize: 16, fontWeight: '800' },
  totalValor: { color: '#8c6d58', fontSize: 18, fontWeight: '900' },
  btnFinalizar: {
    backgroundColor: '#a88a74',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnFinalizarTexto: { color: '#ffffff', fontWeight: '800', fontSize: 15 },
  btnVoltar: { marginTop: 12, alignItems: 'center', padding: 8 },
  btnVoltarTexto: { color: '#a8907c', fontSize: 13, fontWeight: '600' },
});