import React, { useMemo, useRef, useState } from 'react';
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
  ScrollView,
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
    nome: 'Top 2 Cropped Básico',
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
      'https://images.unsplash.com/photo-1583496661160-fb5886a0a6e7?w=600&q=85',
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
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [favoritos, setFavoritos] = useState([]);

  const listaRef = useRef(null);

  const produtosFiltrados = useMemo(() => {
    return produtos.filter((produto) => {
      const pertenceCategoria =
        categoriaSelecionada === 'Todos' ||
        produto.categoria === categoriaSelecionada;

      const correspondeBusca =
        produto.nome.toLowerCase().includes(busca.toLowerCase()) ||
        produto.categoria.toLowerCase().includes(busca.toLowerCase());

      return pertenceCategoria && correspondeBusca;
    });
  }, [categoriaSelecionada, busca]);

  const alternarFavorito = (id) => {
    setFavoritos((listaAtual) =>
      listaAtual.includes(id)
        ? listaAtual.filter((item) => item !== id)
        : [...listaAtual, id]
    );
  };

  const selecionarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);

    listaRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const renderProduto = ({ item }) => {
    const favorito = favoritos.includes(item.id);

    return (
      <View style={styles.productCard}>

        {/* IMAGEM */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() =>
            navigation.navigate('Details', {
              produto: item,
            })
          }
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.imagem }}
              style={styles.productImage}
            />

            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NOVO</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* FAVORITO */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.favoriteButton}
          onPress={() => alternarFavorito(item.id)}
        >
          <Text
            style={[
              styles.favoriteIcon,
              favorito && styles.favoriteActive,
            ]}
          >
            {favorito ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>

        {/* INFORMAÇÕES */}
        <View style={styles.productInfo}>
          <Text style={styles.productCategory}>
            {item.categoria}
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                produto: item,
              })
            }
          >
            <Text style={styles.productName} numberOfLines={2}>
              {item.nome}
            </Text>
          </TouchableOpacity>

          <View style={styles.bottomProductRow}>
            <Text style={styles.productPrice}>
              {item.preco}
            </Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.addButton}
              onPress={() =>
                navigation.navigate('Details', {
                  produto: item,
                })
              }
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF8FA"
      />

      {/* ================= HEADER ================= */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLineShort} />
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Text style={styles.logo}>ROSÉA</Text>
          <Text style={styles.logoSubtitle}>FASHION</Text>
        </View>

        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.cartIcon}>♡</Text>

          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>
              {favoritos.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* ================= CONTEÚDO ================= */}
      <FlatList
        ref={listaRef}
        data={produtosFiltrados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderProduto}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.productsRow}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={

          <View>

            {/* ================= HERO ================= */}
            <View style={styles.hero}>

              <Image
                source={{ uri: produtos[0].imagem }}
                style={styles.heroImage}
              />

              <View style={styles.heroOverlay} />

              <View style={styles.heroContent}>
                <Text style={styles.heroSmall}>
                  NOVA COLEÇÃO
                </Text>

                <Text style={styles.heroTitle}>
                  THE PINK
                </Text>

                <Text style={styles.heroTitle}>
                  EDIT
                </Text>

                <Text style={styles.heroDescription}>
                  Feminilidade, elegância e peças
                  para você criar seu próprio estilo.
                </Text>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.heroButton}
                  onPress={() => {
                    setCategoriaSelecionada('Todos');
                    setBusca('');

                    setTimeout(() => {
                      listaRef.current?.scrollToOffset({
                        offset: 360,
                        animated: true,
                      });
                    }, 100);
                  }}
                >
                  <Text style={styles.heroButtonText}>
                    VER COLEÇÃO
                  </Text>

                  <Text style={styles.heroArrow}>
                    →
                  </Text>
                </TouchableOpacity>
              </View>

            </View>

            {/* ================= BUSCA ================= */}
            <View style={styles.searchContainer}>
              <Text style={styles.searchIcon}>⌕</Text>

              <TextInput
                value={busca}
                onChangeText={setBusca}
                placeholder="O que você está procurando?"
                placeholderTextColor="#B996A3"
                style={styles.searchInput}
              />

              {busca.length > 0 && (
                <TouchableOpacity
                  onPress={() => setBusca('')}
                  style={styles.clearSearch}
                >
                  <Text style={styles.clearSearchText}>
                    ×
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* ================= CATEGORIAS ================= */}
            <View style={styles.categorySection}>

              <View style={styles.sectionTitleRow}>
                <View>
                  <Text style={styles.sectionTitle}>
                    Categorias
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Encontre seu estilo
                  </Text>
                </View>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={
                  styles.categoriesContainer
                }
              >
                {categorias.map((categoria) => {
                  const selecionada =
                    categoriaSelecionada === categoria;

                  return (
                    <TouchableOpacity
                      key={categoria}
                      activeOpacity={0.8}
                      style={[
                        styles.categoryButton,
                        selecionada &&
                          styles.categoryButtonActive,
                      ]}
                      onPress={() =>
                        selecionarCategoria(categoria)
                      }
                    >
                      <Text
                        style={[
                          styles.categoryText,
                          selecionada &&
                            styles.categoryTextActive,
                        ]}
                      >
                        {categoria}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            {/* ================= DESTAQUES ================= */}
            <View style={styles.featuredHeader}>

              <View>
                <Text style={styles.featuredTitle}>
                  Destaques
                </Text>

                <Text style={styles.featuredSubtitle}>
                  Peças escolhidas para você
                </Text>
              </View>

              <Text style={styles.productCount}>
                {produtosFiltrados.length} peças
              </Text>

            </View>

          </View>
        }

        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>♡</Text>

            <Text style={styles.emptyTitle}>
              Nenhuma peça encontrada
            </Text>

            <Text style={styles.emptyText}>
              Tente pesquisar outro produto ou
              escolher outra categoria.
            </Text>

            <TouchableOpacity
              style={styles.emptyButton}
              onPress={() => {
                setBusca('');
                setCategoriaSelecionada('Todos');
              }}
            >
              <Text style={styles.emptyButtonText}>
                VER TODOS OS PRODUTOS
              </Text>
            </TouchableOpacity>
          </View>
        }

        ListFooterComponent={
          <View style={styles.footer}>

            <Text style={styles.footerLogo}>
              ROSÉA
            </Text>

            <Text style={styles.footerText}>
              Moda para destacar a sua essência.
            </Text>

            <View style={styles.footerLine} />

            <Text style={styles.footerCopyright}>
              © 2026 ROSÉA • FASHION
            </Text>

          </View>
        }
      />
    </SafeAreaView>
  );
}

/* =====================================================
   ESTILOS
===================================================== */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
  },

  /* ================= HEADER ================= */

  header: {
    height: 82,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#F5E2E8',
  },

  menuButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF0F4',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  menuLine: {
    width: 18,
    height: 2,
    backgroundColor: '#9E3F61',
    borderRadius: 2,
  },

  menuLineShort: {
    width: 12,
    height: 2,
    backgroundColor: '#9E3F61',
    borderRadius: 2,
    alignSelf: 'flex-start',
    marginLeft: 12,
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    color: '#A53F62',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 7,
  },

  logoSubtitle: {
    color: '#C67A92',
    fontSize: 7,
    fontWeight: '700',
    letterSpacing: 4,
    marginTop: 3,
  },

  cartButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF0F4',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  cartIcon: {
    fontSize: 24,
    color: '#9E3F61',
    marginTop: -2,
  },

  cartBadge: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#C85F82',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
  },

  /* ================= LISTA ================= */

  listContent: {
    paddingBottom: 20,
  },

  /* ================= HERO ================= */

  hero: {
    height: 300,
    marginHorizontal: 18,
    marginTop: 20,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#E8B1C1',
  },

  heroImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  heroOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(111, 36, 62, 0.48)',
  },

  heroContent: {
    position: 'absolute',
    left: 26,
    top: 32,
    width: '55%',
  },

  heroSmall: {
    color: '#FFEAF0',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 10,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 35,
    lineHeight: 36,
    fontWeight: '900',
    letterSpacing: 1,
  },

  heroDescription: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 12,
    maxWidth: 250,
  },

  heroButton: {
    marginTop: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  heroButtonText: {
    color: '#A53F62',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  heroArrow: {
    color: '#A53F62',
    fontSize: 16,
    marginLeft: 9,
    fontWeight: '700',
  },

  /* ================= BUSCA ================= */

  searchContainer: {
    height: 50,
    marginHorizontal: 18,
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F1D5DE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
  },

  searchIcon: {
    fontSize: 25,
    color: '#B87990',
    marginRight: 8,
    transform: [{ rotate: '-20deg' }],
  },

  searchInput: {
    flex: 1,
    height: 48,
    color: '#4A3038',
    fontSize: 13,
  },

  clearSearch: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#F9E4EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  clearSearchText: {
    color: '#A53F62',
    fontSize: 18,
    lineHeight: 20,
  },

  /* ================= CATEGORIAS ================= */

  categorySection: {
    marginTop: 25,
  },

  sectionTitleRow: {
    paddingHorizontal: 18,
  },

  sectionTitle: {
    color: '#3F2931',
    fontSize: 20,
    fontWeight: '800',
  },

  sectionSubtitle: {
    color: '#B28A98',
    fontSize: 11,
    marginTop: 3,
  },

  categoriesContainer: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 3,
  },

  categoryButton: {
    height: 36,
    paddingHorizontal: 17,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EACBD5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  categoryButtonActive: {
    backgroundColor: '#C85F82',
    borderColor: '#C85F82',
  },

  categoryText: {
    color: '#9B6074',
    fontSize: 11,
    fontWeight: '600',
  },

  categoryTextActive: {
    color: '#FFFFFF',
    fontWeight: '800',
  },

  /* ================= DESTAQUES ================= */

  featuredHeader: {
    marginTop: 28,
    marginBottom: 14,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  featuredTitle: {
    color: '#3F2931',
    fontSize: 21,
    fontWeight: '800',
  },

  featuredSubtitle: {
    color: '#B28A98',
    fontSize: 11,
    marginTop: 3,
  },

  productCount: {
    color: '#B05D78',
    fontSize: 11,
    fontWeight: '700',
  },

  /* ================= PRODUTOS ================= */

  productsRow: {
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },

  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F2DDE4',
    shadowColor: '#B9788C',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
  },

  imageContainer: {
    height: 205,
    backgroundColor: '#F9EDF1',
    overflow: 'hidden',
  },

  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  newBadge: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: '#B9476C',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
  },

  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
  },

  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.94)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  favoriteIcon: {
    color: '#B05D78',
    fontSize: 20,
    lineHeight: 22,
  },

  favoriteActive: {
    color: '#C44770',
  },

  productInfo: {
    padding: 13,
  },

  productCategory: {
    color: '#B78394',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 1.3,
    textTransform: 'uppercase',
    marginBottom: 5,
  },

  productName: {
    color: '#432D35',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
    minHeight: 36,
  },

  bottomProductRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  productPrice: {
    color: '#A64265',
    fontSize: 14,
    fontWeight: '800',
  },

  addButton: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#C85F82',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '300',
    lineHeight: 23,
  },

  /* ================= SEM RESULTADO ================= */

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingVertical: 60,
  },

  emptyIcon: {
    fontSize: 45,
    color: '#D995AA',
  },

  emptyTitle: {
    color: '#4A3038',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10,
  },

  emptyText: {
    color: '#A9828E',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 6,
  },

  emptyButton: {
    backgroundColor: '#C85F82',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 11,
    marginTop: 18,
  },

  emptyButtonText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  /* ================= FOOTER ================= */

  footer: {
    marginTop: 25,
    paddingVertical: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#FCECF1',
  },

  footerLogo: {
    color: '#A53F62',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 6,
  },

  footerText: {
    color: '#A9828E',
    fontSize: 11,
    marginTop: 7,
  },

  footerLine: {
    width: 70,
    height: 1,
    backgroundColor: '#DCA9BA',
    marginVertical: 17,
  },

  footerCopyright: {
    color: '#B78A99',
    fontSize: 8,
    letterSpacing: 1,
  },

});