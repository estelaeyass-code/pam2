import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useCarrinho } from '../CarrinhoContext';

export default function HomeScreen({ navigation }) {
  const { quantidadeTotal } = useCarrinho();

  const categorias = [
    '🍔 Hambúrguer',
    '🍕 Pizza',
    '🍣 Sushi',
    '🍟 Lanches',
  ];

  const produtos = [
    {
      nome: 'Burger Especial',
      descricao: 'Hambúrguer artesanal com queijo e bacon',
      preco: 'R$ 29,90',
      avaliacao: '4.9',
      tempo: '25-35 min',
      emoji: '🍔',
    },
    {
      nome: 'Pizza da Casa',
      descricao: 'Pizza de mussarela, tomate e manjericão',
      preco: 'R$ 39,90',
      avaliacao: '4.8',
      tempo: '30-40 min',
      emoji: '🍕',
    },
    {
      nome: 'Combo Crocante',
      descricao: 'Hambúrguer, batata frita e refrigerante',
      preco: 'R$ 34,90',
      avaliacao: '4.7',
      tempo: '20-30 min',
      emoji: '🍟',
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <View>
          <Text style={styles.smallText}>Entregar em</Text>
          <Text style={styles.location}>
            📍 Minha localização
          </Text>
        </View>

        <TouchableOpacity
          style={styles.cart}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.cartIcon}>🛒</Text>

          {quantidadeTotal > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>
                {quantidadeTotal}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* SAUDAÇÃO */}
      <View style={styles.greeting}>
        <Text style={styles.title}>Olá! 👋</Text>
        <Text style={styles.subtitle}>
          O que você quer comer hoje?
        </Text>
      </View>

      {/* BUSCA */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔎</Text>

        <TextInput
          placeholder="Buscar comida ou restaurante"
          placeholderTextColor="#999"
          style={styles.search}
        />
      </View>

      {/* CATEGORIAS */}
      <Text style={styles.sectionTitle}>
        Categorias
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        {categorias.map((categoria, index) => (
          <TouchableOpacity
            key={index}
            style={styles.category}
          >
            <Text style={styles.categoryText}>
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* BANNER */}
      <View style={styles.banner}>
        <View>
          <Text style={styles.bannerTitle}>
            Seu pedido favorito 🍔
          </Text>

          <Text style={styles.bannerText}>
            Peça agora e receba rapidinho!
          </Text>

          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>
              Pedir agora
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bannerEmoji}>🍔</Text>
      </View>

      {/* PRODUTOS */}
      <Text style={styles.sectionTitle}>
        Mais pedidos
      </Text>

      {produtos.map((produto, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Detalhes', {
              produto,
            })
          }
        >
          <View style={styles.foodImage}>
            <Text style={styles.foodEmoji}>
              {produto.emoji}
            </Text>
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.productName}>
              {produto.nome}
            </Text>

            <Text style={styles.description}>
              {produto.descricao}
            </Text>

            <View style={styles.infoRow}>
              <Text style={styles.rating}>
                ⭐ {produto.avaliacao}
              </Text>

              <Text style={styles.delivery}>
                🚚 {produto.tempo}
              </Text>
            </View>

            <Text style={styles.price}>
              {produto.preco}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  header: {
    backgroundColor: '#FF5A36',
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  smallText: {
    color: '#FFE5DF',
    fontSize: 13,
  },

  location: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },

  cart: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  cartIcon: {
    fontSize: 23,
  },

  cartBadge: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#222222',
    width: 21,
    height: 21,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },

  greeting: {
    paddingHorizontal: 20,
    paddingTop: 22,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },

  searchContainer: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  searchIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  search: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginHorizontal: 20,
    marginBottom: 12,
  },

  categories: {
    paddingLeft: 20,
    marginBottom: 20,
  },

  category: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginRight: 10,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },

  banner: {
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#FFE3DC',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bannerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
  },

  bannerText: {
    color: '#666',
    marginTop: 5,
    width: 200,
  },

  bannerButton: {
    backgroundColor: '#FF5A36',
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 12,
    alignSelf: 'flex-start',
  },

  bannerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  bannerEmoji: {
    fontSize: 65,
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 15,
    borderRadius: 18,
    padding: 12,
    flexDirection: 'row',
  },

  foodImage: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF0EB',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  foodEmoji: {
    fontSize: 55,
  },

  cardInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },

  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },

  description: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
    lineHeight: 18,
  },

  infoRow: {
    flexDirection: 'row',
    marginTop: 8,
  },

  rating: {
    fontSize: 13,
    color: '#555',
    marginRight: 15,
  },

  delivery: {
    fontSize: 13,
    color: '#555',
  },

  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FF5A36',
    marginTop: 6,
  },
});