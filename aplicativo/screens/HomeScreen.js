import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';

const produtos = [
  { 
    id: '1', 
    nome: 'Vestido Azul Minimalist', 
    preco: 'R$ 139,90', 
    categoria: 'Vestidos', 
    imagem: 'https://i.pinimg.com/736x/c1/8a/b2/c18ab2f581f415a58aaadd06ea07f7c6.jpg' 
  },
  { 
    id: '2', 
    nome: 'Top 2 Cropped Básico', 
    preco: 'R$ 69,90', 
    categoria: 'Tops', 
    imagem: 'https://i.pinimg.com/736x/51/33/5d/51335d6a929d6d85349d372a09f3dd1a.jpg' 
  },
  { 
    id: '3', 
    nome: 'Trench Coat Branco', 
    preco: 'R$ 229,90', 
    categoria: 'Casacos', 
    imagem: 'https://i.pinimg.com/736x/3f/bb/8a/3fbb8a7ea770b89f64043c3566dd01b2.jpg' 
  },
  { 
    id: '4', 
    nome: 'Calça Alfaiataria Vinho', 
    preco: 'R$ 159,90', 
    categoria: 'Calças', 
    imagem: 'https://i.pinimg.com/736x/6f/da/ed/6fdaed2983ab2c9451338a555c5352ef.jpg' 
  },
  { 
    id: '5', 
    nome: 'Blazer Rosa', 
    preco: 'R$ 189,90', 
    categoria: 'Blazers', 
    imagem: 'https://i.pinimg.com/736x/43/d7/ce/43d7ce0fdb13eb85f4b87897a3a4abdb.jpg' 
  },
  { 
    id: '6', 
    nome: 'Saia Midi Evasê', 
    preco: 'R$ 119,90', 
    categoria: 'Saias', 
    imagem: 'https://images.unsplash.com/photo-1583496661160-fb5886a0a6e7?w=400&q=80' 
  },
];

export default function HomeScreen({ navigation }) {
  const renderProduto = ({ item, index }) => (
    <TouchableOpacity 
      activeOpacity={0.85}
      style={styles.card}
      onPress={() => navigation.navigate('Details', { produto: item })}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.imagem }} style={styles.productImage} />
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>NEW</Text>
        </View>
        <TouchableOpacity style={styles.heartButton}>
          <Text style={styles.heartIcon}>♡</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.categoria}>{item.categoria}</Text>
        <Text style={styles.nome} numberOfLines={2}>{item.nome}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.preco}>{item.preco}</Text>
          <View style={styles.addButton}>
            <Text style={styles.addIcon}>+</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfbf7" />
      
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={[styles.menuLine, styles.menuLineShort]} />
            <View style={styles.menuLine} />
          </View>
          <Text style={styles.brandTitle}>NUDE</Text>
          <View style={styles.cartIcon}>
            <Text style={styles.cartText}>♡</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Coleção Cápsula • Verão 2024</Text>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        renderItem={renderProduto}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fdfbf7', 
  },
  
  // Header
  header: { 
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  menuIcon: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: 24,
    height: 2,
    backgroundColor: '#8b7355',
    borderRadius: 1,
  },
  menuLineShort: {
    width: 16,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '300',
    color: '#5c4a3e',
    letterSpacing: 8,
  },
  cartIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f5ede3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    fontSize: 16,
    color: '#8b7355',
  },
  subTitle: {
    fontSize: 11,
    color: '#b8a38c',
    fontWeight: '400',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  
  // List
  listContent: { 
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  
  // Card
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    width: '48.5%',
    marginBottom: 16,
    shadowColor: '#d4c4b0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f5ede3',
    overflow: 'hidden',
  },
  
  // Image
  imageWrapper: {
    position: 'relative',
    backgroundColor: '#faf5ef',
    padding: 12,
  },
  productImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#e8d5c4',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  discountText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#8b7355',
    letterSpacing: 1,
  },
  heartButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  heartIcon: {
    fontSize: 14,
    color: '#c4a882',
    marginTop: 1,
  },
  
  // Info
  infoContainer: {
    padding: 12,
  },
  categoria: {
    color: '#b8a38c',
    fontSize: 9,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  nome: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4a3830',
    lineHeight: 18,
    marginBottom: 10,
    height: 36,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preco: {
    fontSize: 15,
    color: '#8b7355',
    fontWeight: '600',
  },
  addButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#f5ede3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    fontSize: 18,
    color: '#8b7355',
    fontWeight: '300',
    marginTop: -1,
  },
});