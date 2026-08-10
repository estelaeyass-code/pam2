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
      <View style={styles.headerRow}>
        <Text style={styles.header}>Meu Carrinho</Text>
        <View style={styles.headerBadge}>
          <Text style={styles.headerBadgeText}>1 item</Text>
        </View>
      </View>

      <View style={styles.itemCard}>
        <Image source={{ uri: produto.imagem }} style={styles.itemImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.itemNome} numberOfLines={1}>{produto.nome}</Text>
          <Text style={styles.itemQtd}>Quantidade: 1</Text>
        </View>
        <Text style={styles.itemPreco}>{produto.preco}</Text>
      </View>

      <View style={styles.resumoBox}>
        <Text style={styles.resumoTitle}>RESUMO DO PEDIDO</Text>

        <View style={styles.linhaResumo}>
          <Text style={styles.resumoTexto}>Subtotal</Text>
          <Text style={styles.resumoValor}>{produto.preco}</Text>
        </View>
        <View style={styles.linhaResumo}>
          <Text style={styles.resumoTexto}>Frete</Text>
          <View style={styles.freteBadge}>
            <Text style={styles.freteGratis}>GRÁTIS</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.linhaResumo}>
          <Text style={styles.totalTexto}>Total</Text>
          <Text style={styles.totalValor}>{produto.preco}</Text>
        </View>
      </View>

      <TouchableOpacity 
        activeOpacity={0.85} 
        style={styles.btnFinalizar}
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.btnFinalizarTexto}>Ir para o Pagamento</Text>
        <Text style={styles.btnSeta}>→</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        activeOpacity={0.7}
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 8,
  },
  header: { fontSize: 23, fontWeight: '800', color: '#3d3230' },
  headerBadge: {
    backgroundColor: '#f4ede6',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  headerBadgeText: {
    color: '#8c6d58',
    fontSize: 12,
    fontWeight: '700',
  },
  itemCard: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#c9b6a3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  itemImage: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginRight: 14,
    backgroundColor: '#f4ede6',
  },
  itemNome: { fontSize: 15, fontWeight: '700', color: '#3d3230' },
  itemQtd: { fontSize: 12, color: '#a8907c', marginTop: 3 },
  itemPreco: { fontSize: 15, fontWeight: '800', color: '#a88a74' },
  resumoBox: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  resumoTitle: {
    color: '#a8907c',
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  linhaResumo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  resumoTexto: { color: '#8c6d58', fontSize: 13.5, fontWeight: '600' },
  resumoValor: { color: '#4a3e3d', fontSize: 13.5, fontWeight: '600' },
  freteBadge: {
    backgroundColor: '#eaf5ec',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  freteGratis: { color: '#3f8557', fontSize: 12, fontWeight: '700' },
  divider: { height: 1, backgroundColor: '#f2e9e1', marginVertical: 12 },
  totalTexto: { color: '#3d3230', fontSize: 16, fontWeight: '800' },
  totalValor: { color: '#a88a74', fontSize: 19, fontWeight: '900' },
  btnFinalizar: {
    backgroundColor: '#a88a74',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#a88a74',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 2,
  },
  btnFinalizarTexto: { color: '#ffffff', fontWeight: '800', fontSize: 15, letterSpacing: 0.3 },
  btnSeta: { color: '#ffffff', fontSize: 16, fontWeight: '800', marginLeft: 6 },
  btnVoltar: { marginTop: 14, alignItems: 'center', padding: 8 },
  btnVoltarTexto: { color: '#a8907c', fontSize: 13, fontWeight: '600' },
});