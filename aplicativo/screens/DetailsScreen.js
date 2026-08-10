import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { produto } = route.params || { 
    produto: { 
      nome: 'Produto', 
      preco: 'R$ 0,00', 
      imagem: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80' 
    } 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: produto.imagem }} style={styles.image} />

        <Text style={styles.title}>{produto.nome}</Text>
        <Text style={styles.preco}>{produto.preco}</Text>

        <View style={styles.divider} />

        <Text style={styles.descricaoTitle}>DETALHES DA PEÇA</Text>
        <Text style={styles.descricao}>
          Confeccionada em tecido de tom neutro, toque suave e caimento sofisticado. Ideal para compor looks atemporais.
        </Text>

        <TouchableOpacity 
          activeOpacity={0.9}
          style={styles.btnAdicionar}
          onPress={() => navigation.navigate('Profile', { produtoSelecionado: produto })}
        >
          <Text style={styles.btnAdicionarTexto}>Adicionar ao Carrinho ✨</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf8f5', padding: 16, justifyContent: 'center' },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#d6c7b8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  image: { width: '100%', height: 220, borderRadius: 14, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: '800', color: '#4a3e3d' },
  preco: { fontSize: 20, color: '#8c6d58', fontWeight: '800', marginTop: 4 },
  divider: { height: 1, backgroundColor: '#f2e9e1', marginVertical: 14 },
  descricaoTitle: { fontSize: 11, color: '#b58a6f', fontWeight: '800', letterSpacing: 1 },
  descricao: { color: '#7a6a68', fontSize: 13, lineHeight: 20, marginTop: 6, marginBottom: 20 },
  btnAdicionar: {
    backgroundColor: '#a88a74',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnAdicionarTexto: { color: '#ffffff', fontWeight: '800', fontSize: 15 },
});