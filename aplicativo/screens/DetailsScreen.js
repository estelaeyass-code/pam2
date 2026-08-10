import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';

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
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: produto.imagem }} 
              style={styles.image}
              resizeMode="contain" // ← MOSTRA A IMAGEM INTEIRA
            />
          </View>

          <View style={styles.content}>
            <View style={styles.headerRow}>
              <Text style={styles.title}>{produto.nome}</Text>
              <Text style={styles.preco}>{produto.preco}</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.descricaoTitle}>DETALHES DA PEÇA</Text>
            <Text style={styles.descricao}>
              Confeccionada em tecido de tom neutro, toque suave e caimento sofisticado. Ideal para compor looks atemporais.
            </Text>

            <View style={styles.tagsRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Frete grátis</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Troca em 30 dias</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          activeOpacity={0.85}
          style={styles.btnAdicionar}
          onPress={() => navigation.navigate('Profile', { produtoSelecionado: produto })}
        >
          <Text style={styles.btnAdicionarTexto}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf8f5' },
  scrollContent: { padding: 16, paddingBottom: 8 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    overflow: 'hidden',
    shadowColor: '#c9b6a3',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  imageWrapper: {
    backgroundColor: '#f4ede6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // ← ESPAÇO AO REDOR DA IMAGEM
  },
  image: {
    width: '100%',
    height: 400, // ← ALTURA MAIOR PARA IMAGEM INTEIRA
    resizeMode: 'contain', // ← GARANTE QUE A IMAGEM INTEIRA APAREÇA
  },
  content: {
    padding: 22,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 21,
    fontWeight: '800',
    color: '#3d3230',
    flex: 1,
    marginRight: 12,
    lineHeight: 26,
  },
  preco: {
    fontSize: 19,
    color: '#a88a74',
    fontWeight: '800',
  },
  divider: { height: 1, backgroundColor: '#f2e9e1', marginVertical: 18 },
  descricaoTitle: {
    fontSize: 11,
    color: '#a8907c',
    fontWeight: '700',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  descricao: {
    color: '#7a6a68',
    fontSize: 13.5,
    lineHeight: 21,
    marginBottom: 18,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#fcf8f5',
    borderWidth: 1,
    borderColor: '#f2e9e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    color: '#8c6d58',
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    padding: 16,
    paddingTop: 8,
    backgroundColor: '#fcf8f5',
    borderTopWidth: 1,
    borderTopColor: '#f2e9e1',
  },
  btnAdicionar: {
    backgroundColor: '#a88a74',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#a88a74',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 2,
  },
  btnAdicionarTexto: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.3,
  },
});