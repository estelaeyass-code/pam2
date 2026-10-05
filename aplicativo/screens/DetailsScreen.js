import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const produto = route.params?.produto || {
    nome: 'Produto',
    preco: 'R$ 0,00',
    categoria: 'Moda',
    imagem:
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=85',
  };

  const [tamanhoSelecionado, setTamanhoSelecionado] = useState('M');
  const [quantidade, setQuantidade] = useState(1);
  const [favorito, setFavorito] = useState(false);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const adicionarAoCarrinho = () => {
    navigation.navigate('Profile', {
      produtoSelecionado: {
        ...produto,
        tamanho: tamanhoSelecionado,
        quantidade: quantidade,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF8FA"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* ================= HEADER ================= */}

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ROSÉA</Text>
            <Text style={styles.logoSubtitle}>FASHION</Text>
          </View>

          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setFavorito(!favorito)}
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

        </View>

        {/* ================= FOTO ================= */}

        <View style={styles.imageSection}>

          <Image
            source={{ uri: produto.imagem }}
            style={styles.productImage}
          />

          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>
              NOVO
            </Text>
          </View>

        </View>

        {/* ================= INFORMAÇÕES ================= */}

        <View style={styles.content}>

          <Text style={styles.category}>
            {produto.categoria}
          </Text>

          <View style={styles.titleRow}>

            <Text style={styles.title}>
              {produto.nome}
            </Text>

            <Text style={styles.price}>
              {produto.preco}
            </Text>

          </View>

          <View style={styles.divider} />

          {/* ================= DESCRIÇÃO ================= */}

          <Text style={styles.sectionTitle}>
            SOBRE A PEÇA
          </Text>

          <Text style={styles.description}>
            Uma peça pensada para trazer elegância,
            conforto e personalidade ao seu look.
            Seu design versátil permite criar
            diferentes combinações para diversas
            ocasiões.
          </Text>

          {/* ================= BENEFÍCIOS ================= */}

          <View style={styles.benefits}>

            <View style={styles.benefit}>

              <View style={styles.benefitIcon}>
                <Text>✓</Text>
              </View>

              <View>
                <Text style={styles.benefitTitle}>
                  Compra segura
                </Text>

                <Text style={styles.benefitText}>
                  Pagamento protegido
                </Text>
              </View>

            </View>

            <View style={styles.benefit}>

              <View style={styles.benefitIcon}>
                <Text>↻</Text>
              </View>

              <View>
                <Text style={styles.benefitTitle}>
                  Troca fácil
                </Text>

                <Text style={styles.benefitText}>
                  Até 30 dias
                </Text>
              </View>

            </View>

            <View style={styles.benefit}>

              <View style={styles.benefitIcon}>
                <Text>♡</Text>
              </View>

              <View>
                <Text style={styles.benefitTitle}>
                  Frete grátis
                </Text>

                <Text style={styles.benefitText}>
                  Para todo o Brasil
                </Text>
              </View>

            </View>

          </View>

          {/* ================= TAMANHO ================= */}

          <View style={styles.sizeHeader}>

            <Text style={styles.sectionTitle}>
              TAMANHO
            </Text>

            <Text style={styles.sizeGuide}>
              Guia de tamanhos
            </Text>

          </View>

          <View style={styles.sizes}>

            {['PP', 'P', 'M', 'G', 'GG'].map((tamanho) => {

              const selecionado =
                tamanhoSelecionado === tamanho;

              return (
                <TouchableOpacity
                  key={tamanho}
                  activeOpacity={0.8}
                  style={[
                    styles.sizeButton,
                    selecionado &&
                      styles.sizeButtonActive,
                  ]}
                  onPress={() =>
                    setTamanhoSelecionado(tamanho)
                  }
                >
                  <Text
                    style={[
                      styles.sizeText,
                      selecionado &&
                        styles.sizeTextActive,
                    ]}
                  >
                    {tamanho}
                  </Text>
                </TouchableOpacity>
              );

            })}

          </View>

          {/* ================= QUANTIDADE ================= */}

          <View style={styles.quantitySection}>

            <Text style={styles.sectionTitle}>
              QUANTIDADE
            </Text>

            <View style={styles.quantityControl}>

              <TouchableOpacity
                style={styles.quantityButton}
                onPress={diminuirQuantidade}
              >
                <Text style={styles.quantityButtonText}>
                  −
                </Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>
                {quantidade}
              </Text>

              <TouchableOpacity
                style={styles.quantityButton}
                onPress={aumentarQuantidade}
              >
                <Text style={styles.quantityButtonText}>
                  +
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </ScrollView>

      {/* ================= BOTÃO ================= */}

      <View style={styles.bottomBar}>

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.addToCartButton}
          onPress={adicionarAoCarrinho}
        >
          <Text style={styles.addToCartText}>
            ADICIONAR AO CARRINHO
          </Text>

          <Text style={styles.arrow}>
            →
          </Text>
        </TouchableOpacity>

      </View>

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

  scrollContent: {
    paddingBottom: 110,
  },

  /* ================= HEADER ================= */

  header: {
    height: 75,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3DEE5',
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backIcon: {
    color: '#9E3F61',
    fontSize: 34,
    fontWeight: '300',
    marginTop: -4,
  },

  favoriteIcon: {
    color: '#9E3F61',
    fontSize: 23,
  },

  favoriteActive: {
    color: '#C44770',
  },

  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    color: '#A53F62',
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 6,
  },

  logoSubtitle: {
    color: '#C67A92',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 3,
    marginTop: 2,
  },

  /* ================= IMAGEM ================= */

  imageSection: {
    margin: 18,
    height: 430,
    borderRadius: 24,
    backgroundColor: '#F9EDF1',
    overflow: 'hidden',
    position: 'relative',
  },

  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  newBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#B9476C',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 12,
  },

  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  /* ================= CONTEÚDO ================= */

  content: {
    paddingHorizontal: 20,
  },

  category: {
    color: '#B05D78',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 7,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 15,
  },

  title: {
    flex: 1,
    color: '#3F2931',
    fontSize: 23,
    lineHeight: 29,
    fontWeight: '800',
  },

  price: {
    color: '#A64265',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#EFDCE3',
    marginVertical: 20,
  },

  sectionTitle: {
    color: '#4A3038',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  description: {
    color: '#8E6D78',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 10,
  },

  /* ================= BENEFÍCIOS ================= */

  benefits: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    marginTop: 22,
    padding: 15,
    borderWidth: 1,
    borderColor: '#F1DCE3',
  },

  benefit: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },

  benefitIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FCE8EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
  },

  benefitIconText: {
    color: '#A53F62',
  },

  benefitTitle: {
    color: '#4A3038',
    fontSize: 11,
    fontWeight: '800',
  },

  benefitText: {
    color: '#B28A98',
    fontSize: 10,
    marginTop: 2,
  },

  /* ================= TAMANHO ================= */

  sizeHeader: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sizeGuide: {
    color: '#B05D78',
    fontSize: 10,
    textDecorationLine: 'underline',
  },

  sizes: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 9,
  },

  sizeButton: {
    width: 49,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6CCD5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sizeButtonActive: {
    backgroundColor: '#C85F82',
    borderColor: '#C85F82',
  },

  sizeText: {
    color: '#8E5E70',
    fontSize: 11,
    fontWeight: '800',
  },

  sizeTextActive: {
    color: '#FFFFFF',
  },

  /* ================= QUANTIDADE ================= */

  quantitySection: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6CCD5',
    borderRadius: 14,
    overflow: 'hidden',
  },

  quantityButton: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantityButtonText: {
    color: '#A53F62',
    fontSize: 20,
  },

  quantityText: {
    color: '#4A3038',
    fontSize: 13,
    fontWeight: '800',
    minWidth: 25,
    textAlign: 'center',
  },

  /* ================= BARRA FINAL ================= */

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingTop: 12,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: '#F1DCE3',
  },

  addToCartButton: {
    height: 55,
    backgroundColor: '#C85F82',
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#9E3F61',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 7,
    elevation: 4,
  },

  addToCartText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 12,
  },

});