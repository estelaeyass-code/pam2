import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';

const produtos = [
  {
    id: '1',
    nome: 'Vestido Azul Minimalist',
    preco: 'R$ 139,90',
    categoria: 'Vestidos',
    imagem:
      'https://i.pinimg.com/736x/c1/8a/b2/c18ab2f581f415a58aaadd06ea07f7c6.jpg',
  },
  {
    id: '2',
    nome: 'Top Cropped Básico',
    preco: 'R$ 69,90',
    categoria: 'Tops',
    imagem:
      'https://i.pinimg.com/736x/51/33/5d/51335d6a929d6d85349d372a09f3dd1a.jpg',
  },
  {
    id: '3',
    nome: 'Trench Coat Branco',
    preco: 'R$ 229,90',
    categoria: 'Casacos',
    imagem:
      'https://i.pinimg.com/736x/3f/bb/8a/3fbb8a7ea770b89f64043c3566dd01b2.jpg',
  },
  {
    id: '4',
    nome: 'Calça Alfaiataria Vinho',
    preco: 'R$ 159,90',
    categoria: 'Calças',
    imagem:
      'https://i.pinimg.com/736x/6f/da/ed/6fdaed2983ab2c9451338a555c5352ef.jpg',
  },
  {
    id: '5',
    nome: 'Blazer Rosa',
    preco: 'R$ 189,90',
    categoria: 'Blazers',
    imagem:
      'https://i.pinimg.com/736x/43/d7/ce/43d7ce0fdb13eb85f4b87897a3a4abdb.jpg',
  },
  {
    id: '6',
    nome: 'Saia Midi Evasê',
    preco: 'R$ 119,90',
    categoria: 'Saias',
    imagem:
      'https://images.unsplash.com/photo-1583496661160-fb5886a0a6e7?w=400&q=80',
  },
];

const categorias = [
  'Todos',
  'Vestidos',
  'Tops',
  'Calças',
  'Casacos',
  'Blazers',
  'Saias',
];

export default function HomeScreen({ navigation }) {

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState('Todos');

  const [pesquisa, setPesquisa] = useState('');

  const [favoritos, setFavoritos] = useState([]);

  // FILTRAR PRODUTOS
  const produtosFiltrados = produtos.filter((produto) => {

    const pertenceCategoria =
      categoriaSelecionada === 'Todos' ||
      produto.categoria === categoriaSelecionada;

    const correspondePesquisa =
      produto.nome
        .toLowerCase()
        .includes(pesquisa.toLowerCase());

    return pertenceCategoria && correspondePesquisa;
  });

  // FAVORITAR / DESFAVORITAR
  function alternarFavorito(id) {

    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((item) => item !== id));
    } else {
      setFavoritos([...favoritos, id]);
    }
  }

  // ADICIONAR PRODUTO
  function adicionarProduto(produto) {

    Alert.alert(
      'Produto adicionado 🛍️',
      `${produto.nome} foi adicionado à sua sacola.`
    );
  }

  // CARD DO PRODUTO
  function renderProduto({ item }) {

    const favorito = favoritos.includes(item.id);

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.card}
        onPress={() =>
          navigation.navigate('Details', {
            produto: item,
          })
        }
      >

        {/* IMAGEM */}
        <View style={styles.imageWrapper}>

          <Image
            source={{ uri: item.imagem }}
            style={styles.productImage}
          />

          {/* NOVO */}
          <View style={styles.newBadge}>
            <Text style={styles.newText}>
              NOVO
            </Text>
          </View>

          {/* FAVORITO */}
          <TouchableOpacity
            style={styles.heartButton}
            onPress={() => alternarFavorito(item.id)}
          >
            <Text
              style={[
                styles.heartIcon,
                favorito && styles.heartActive,
              ]}
            >
              {favorito ? '♥' : '♡'}
            </Text>
          </TouchableOpacity>

        </View>

        {/* INFORMAÇÕES */}
        <View style={styles.infoContainer}>

          <Text style={styles.categoria}>
            {item.categoria}
          </Text>

          <Text
            style={styles.nome}
            numberOfLines={2}
          >
            {item.nome}
          </Text>

          <View style={styles.priceRow}>

            <Text style={styles.preco}>
              {item.preco}
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => adicionarProduto(item)}
            >
              <Text style={styles.addIcon}>
                +
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </TouchableOpacity>
    );
  }

  // CABEÇALHO DA HOME
  function renderHeader() {

    return (
      <View>

        {/* HEADER */}
        <View style={styles.header}>

          <View style={styles.headerTop}>

            <TouchableOpacity style={styles.menuButton}>
              <Text style={styles.menuText}>
                ☰
              </Text>
            </TouchableOpacity>

            <View style={styles.logoContainer}>

              <Text style={styles.logo}>
                NUDE
              </Text>

              <Text style={styles.logoSub}>
                CONCEPT
              </Text>

            </View>

            <TouchableOpacity style={styles.cartButton}>
              <Text style={styles.cartIcon}>
                🛍
              </Text>

              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>
                  {favoritos.length}
                </Text>
              </View>

            </TouchableOpacity>

          </View>

          <Text style={styles.welcome}>
            Vista sua essência.
          </Text>

          <Text style={styles.headerDescription}>
            Moda minimalista para quem transforma
            simplicidade em estilo.
          </Text>

        </View>

        {/* BANNER */}
        <View style={styles.banner}>

          <View style={styles.bannerContent}>

            <Text style={styles.bannerSmall}>
              NOVA COLEÇÃO
            </Text>

            <Text style={styles.bannerTitle}>
              ESSENTIAL
            </Text>

            <Text style={styles.bannerDescription}>
              Peças que combinam com você.
            </Text>

            <TouchableOpacity
              style={styles.bannerButton}
              onPress={() => setCategoriaSelecionada('Todos')}
            >
              <Text style={styles.bannerButtonText}>
                COMPRAR AGORA
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* PESQUISA */}
        <View style={styles.searchContainer}>

          <Text style={styles.searchIcon}>
            🔎
          </Text>

          <TextInput
            style={styles.searchInput}
            placeholder="O que você está procurando?"
            placeholderTextColor="#9B7A70"
            value={pesquisa}
            onChangeText={setPesquisa}
          />

        </View>

        {/* CATEGORIAS */}
        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>
            Categorias
          </Text>

        </View>

        <FlatList
          horizontal
          data={categorias}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          renderItem={({ item }) => {

            const selecionada =
              categoriaSelecionada === item;

            return (
              <TouchableOpacity
                style={[
                  styles.categoryButton,
                  selecionada &&
                    styles.categorySelected,
                ]}
                onPress={() =>
                  setCategoriaSelecionada(item)
                }
              >

                <Text
                  style={[
                    styles.categoryText,
                    selecionada &&
                      styles.categoryTextSelected,
                  ]}
                >
                  {item}
                </Text>

              </TouchableOpacity>
            );
          }}
        />

        {/* TÍTULO DOS PRODUTOS */}
        <View style={styles.sectionHeader}>

          <View>

            <Text style={styles.sectionTitle}>
              Destaques
            </Text>

            <Text style={styles.sectionSubtitle}>
              Escolhas para o seu estilo
            </Text>

          </View>

          <Text style={styles.productCount}>
            {produtosFiltrados.length} peças
          </Text>

        </View>

      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#321D1A"
      />

      <FlatList
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        renderItem={renderProduto}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>

            <Text style={styles.emptyIcon}>
              ♡
            </Text>

            <Text style={styles.emptyTitle}>
              Nenhum produto encontrado
            </Text>

            <Text style={styles.emptyText}>
              Tente pesquisar por outro produto.
            </Text>

          </View>
        }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  /* CONTAINER */

  container: {
    flex: 1,
    backgroundColor: '#FFF8F4',
  },

  listContent: {
    paddingBottom: 35,
  },

  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },

  /* HEADER */

  header: {
    backgroundColor: '#321D1A',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#4A2B26',
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuText: {
    color: '#FFF8F4',
    fontSize: 22,
  },

  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '800',
    letterSpacing: 7,
  },

  logoSub: {
    color: '#D99A88',
    fontSize: 8,
    fontWeight: '600',
    letterSpacing: 4,
    marginTop: 2,
  },

  cartButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#4A2B26',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartIcon: {
    fontSize: 18,
  },

  cartBadge: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: '#D8796B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },

  welcome: {
    color: '#D99A88',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 25,
  },

  headerDescription: {
    color: '#E8D7D0',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
    maxWidth: 290,
  },

  /* BANNER */

  banner: {
    marginHorizontal: 14,
    marginTop: 16,
    height: 180,
    borderRadius: 22,
    backgroundColor: '#8E5147',
    overflow: 'hidden',
  },

  bannerContent: {
    padding: 22,
  },

  bannerSmall: {
    color: '#F9DDD4',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 4,
  },

  bannerDescription: {
    color: '#F8E8E2',
    fontSize: 12,
    marginTop: 2,
  },

  bannerButton: {
    backgroundColor: '#FFF8F4',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 10,
    marginTop: 15,
  },

  bannerButtonText: {
    color: '#5A302A',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  /* SEARCH */

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 14,
    marginTop: 16,
    height: 48,
    borderRadius: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#EAD7D0',
  },

  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    color: '#432925',
    fontSize: 13,
  },

  /* SECTIONS */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 22,
    marginBottom: 10,
  },

  sectionTitle: {
    color: '#321D1A',
    fontSize: 20,
    fontWeight: '800',
  },

  sectionSubtitle: {
    color: '#A47B70',
    fontSize: 11,
    marginTop: 2,
  },

  productCount: {
    color: '#A47B70',
    fontSize: 11,
    fontWeight: '600',
  },

  /* CATEGORIAS */

  categoryList: {
    paddingHorizontal: 14,
  },

  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E8D4CC',
  },

  categorySelected: {
    backgroundColor: '#8E5147',
    borderColor: '#8E5147',
  },

  categoryText: {
    color: '#79564D',
    fontSize: 11,
    fontWeight: '700',
  },

  categoryTextSelected: {
    color: '#FFFFFF',
  },

  /* CARD */

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    width: '48%',
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EBDDD7',
  },

  imageWrapper: {
    position: 'relative',
    backgroundColor: '#F2E5DF',
    padding: 8,
  },

  productImage: {
    width: '100%',
    height: 175,
    borderRadius: 13,
    resizeMode: 'cover',
  },

  /* NOVO */

  newBadge: {
    position: 'absolute',
    top: 17,
    left: 17,
    backgroundColor: '#321D1A',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
  },

  newText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1,
  },

  /* FAVORITO */

  heartButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heartIcon: {
    fontSize: 20,
    color: '#8E5147',
  },

  heartActive: {
    color: '#D55D62',
  },

  /* INFO */

  infoContainer: {
    padding: 12,
  },

  categoria: {
    color: '#B27D70',
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 5,
  },

  nome: {
    fontSize: 13,
    fontWeight: '700',
    color: '#321D1A',
    lineHeight: 18,
    marginBottom: 11,
    height: 36,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  preco: {
    fontSize: 15,
    color: '#8E5147',
    fontWeight: '800',
  },

  addButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#8E5147',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '400',
  },

  /* SEM RESULTADO */

  emptyContainer: {
    alignItems: 'center',
    paddingTop: 45,
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 45,
    color: '#D29A8C',
  },

  emptyTitle: {
    color: '#321D1A',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 10,
  },

  emptyText: {
    color: '#A47B70',
    fontSize: 12,
    marginTop: 5,
  },

});