import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const produtos = [
  { 
    id: '1', 
    nome: 'Vestido Nude Minimalist', 
    preco: 'R$ 139,90', 
    categoria: 'Vestidos', 
    imagem: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80' 
  },
  { 
    id: '2', 
    nome: 'Top Cropped Nude', 
    preco: 'R$ 69,90', 
    categoria: 'Tops', 
    imagem: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80' 
  },
  { 
    id: '3', 
    nome: 'Trench Coat Bege', 
    preco: 'R$ 229,90', 
    categoria: 'Casacos', 
    imagem: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&q=80' 
  },
  { 
    id: '4', 
    nome: 'Calça Alfaiataria Areia', 
    preco: 'R$ 159,90', 
    categoria: 'Calças', 
    imagem: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80' 
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brandTitle}>NUDE CONCEPT 🌾</Text>
        <Text style={styles.subTitle}>Elegância e tons neutros</Text>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            activeOpacity={0.85}
            style={styles.card}
            onPress={() => navigation.navigate('Details', { produto: item })}
          >
            <Image source={{ uri: item.imagem }} style={styles.productImage} />

            <View style={styles.cardInfo}>
              <Text style={styles.categoria}>{item.categoria}</Text>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>{item.preco}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf8f5', paddingHorizontal: 16, paddingTop: 10 },
  header: { marginBottom: 16, marginTop: 10, alignItems: 'center' },
  brandTitle: { fontSize: 24, fontWeight: '800', color: '#8c6d58', letterSpacing: 1.5 },
  subTitle: { fontSize: 13, color: '#a8907c', marginTop: 2 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#d6c7b8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f2e9e1',
  },
  productImage: { width: 80, height: 80, borderRadius: 12, marginRight: 14 },
  cardInfo: { flex: 1, justifyContent: 'center' },
  categoria: { color: '#b58a6f', fontSize: 11, fontWeight: '700', textTransform: 'uppercase', marginBottom: 2 },
  nome: { fontSize: 16, fontWeight: '600', color: '#4a3e3d' },
  preco: { fontSize: 16, color: '#8c6d58', fontWeight: '800', marginTop: 4 },
});