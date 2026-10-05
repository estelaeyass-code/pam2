import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const produto = route.params?.produtoSelecionado;

  // Se o carrinho estiver vazio
  if (!produto) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFF8FA"
        />

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ROSÉA</Text>
            <Text style={styles.logoSubtitle}>FASHION</Text>
          </View>

          <View style={styles.headerSpace} />
        </View>

        {/* CARRINHO VAZIO */}
        <View style={styles.emptyContainer}>
          <View style={styles.emptyCircle}>
            <Text style={styles.emptyIcon}>♡</Text>
          </View>

          <Text style={styles.emptyTitle}>
            Seu carrinho está vazio
          </Text>

          <Text style={styles.emptyText}>
            Explore nossa coleção e encontre peças
            que combinam com você.
          </Text>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.shopButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.shopButtonText}>
              EXPLORAR COLEÇÃO
            </Text>

            <Text style={styles.shopArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const quantidade = produto.quantidade || 1;
  const tamanho = produto.tamanho || 'M';

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
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Text style={styles.logo}>ROSÉA</Text>
            <Text style={styles.logoSubtitle}>FASHION</Text>
          </View>

          <View style={styles.headerSpace} />
        </View>

        {/* ================= TÍTULO ================= */}

        <View style={styles.titleSection}>
          <View>
            <Text style={styles.pageTitle}>
              Meu Carrinho
            </Text>

            <Text style={styles.pageSubtitle}>
              Revise suas escolhas antes de finalizar
            </Text>
          </View>

          <View style={styles.itemBadge}>
            <Text style={styles.itemBadgeText}>
              {quantidade} {quantidade === 1 ? 'item' : 'itens'}
            </Text>
          </View>
        </View>

        {/* ================= PRODUTO ================= */}

        <View style={styles.productCard}>

          <View style={styles.imageContainer}>
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

          <View style={styles.productInfo}>

            <Text style={styles.productCategory}>
              {produto.categoria || 'MODA'}
            </Text>

            <Text
              style={styles.productName}
              numberOfLines={2}
            >
              {produto.nome}
            </Text>

            <View style={styles.productDetails}>

              <View style={styles.detailBox}>
                <Text style={styles.detailLabel}>
                  TAMANHO
                </Text>

                <Text style={styles.detailValue}>
                  {tamanho}
                </Text>
              </View>

              <View style={styles.detailBox}>
                <Text style={styles.detailLabel}>
                  QUANTIDADE
                </Text>

                <Text style={styles.detailValue}>
                  {quantidade}
                </Text>
              </View>

            </View>

            <Text style={styles.productPrice}>
              {produto.preco}
            </Text>

          </View>
        </View>

        {/* ================= BENEFÍCIOS ================= */}

        <View style={styles.benefitsContainer}>

          <View style={styles.benefitItem}>

            <View style={styles.benefitIcon}>
              <Text>✓</Text>
            </View>

            <View style={styles.benefitTextContainer}>
              <Text style={styles.benefitTitle}>
                Compra segura
              </Text>

              <Text style={styles.benefitSubtitle}>
                Seus dados estão protegidos
              </Text>
            </View>

          </View>

          <View style={styles.benefitItem}>

            <View style={styles.benefitIcon}>
              <Text>↻</Text>
            </View>

            <View style={styles.benefitTextContainer}>
              <Text style={styles.benefitTitle}>
                Troca fácil
              </Text>

              <Text style={styles.benefitSubtitle}>
                Até 30 dias após a compra
              </Text>
            </View>

          </View>

          <View style={styles.benefitItem}>

            <View style={styles.benefitIcon}>
              <Text>♡</Text>
            </View>

            <View style={styles.benefitTextContainer}>
              <Text style={styles.benefitTitle}>
                Frete grátis
              </Text>

              <Text style={styles.benefitSubtitle}>
                Entrega para todo o Brasil
              </Text>
            </View>

          </View>

        </View>

        {/* ================= RESUMO ================= */}

        <View style={styles.summaryCard}>

          <Text style={styles.summaryTitle}>
            RESUMO DO PEDIDO
          </Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Subtotal
            </Text>

            <Text style={styles.summaryValue}>
              {produto.preco}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Frete
            </Text>

            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>
                GRÁTIS
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <View>
              <Text style={styles.totalLabel}>
                Total
              </Text>

              <Text style={styles.totalSmall}>
                Impostos inclusos
              </Text>
            </View>

            <Text style={styles.totalValue}>
              {produto.preco}
            </Text>
          </View>

        </View>

        {/* ================= ENTREGA ================= */}

        <View style={styles.deliveryCard}>

          <View style={styles.deliveryIcon}>
            <Text>⌖</Text>
          </View>

          <View style={styles.deliveryInfo}>
            <Text style={styles.deliveryTitle}>
              Entrega estimada
            </Text>

            <Text style={styles.deliveryText}>
              Seu pedido será entregue em 2 a 4 dias úteis.
            </Text>
          </View>

        </View>

        {/* ================= BOTÃO PAGAMENTO ================= */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.checkoutButton}
          onPress={() =>
            navigation.navigate('Checkout', {
              produtoSelecionado: produto,
            })
          }
        >
          <Text style={styles.checkoutText}>
            IR PARA O PAGAMENTO
          </Text>

          <Text style={styles.checkoutArrow}>
            →
          </Text>
        </TouchableOpacity>

        {/* ================= CONTINUAR COMPRANDO ================= */}

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.continueButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.continueText}>
            ← Continuar comprando
          </Text>
        </TouchableOpacity>

        {/* ================= FOOTER ================= */}

        <View style={styles.footer}>
          <Text style={styles.footerLogo}>
            ROSÉA
          </Text>

          <Text style={styles.footerText}>
            Moda para destacar a sua essência.
          </Text>

          <Text style={styles.footerHeart}>
            ♡
          </Text>
        </View>

      </ScrollView>
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
    paddingBottom: 35,
  },

  /* ================= HEADER ================= */

  header: {
    height: 75,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F3DEE5',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
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

  headerSpace: {
    width: 42,
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

  /* ================= TÍTULO ================= */

  titleSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  pageTitle: {
    color: '#3F2931',
    fontSize: 25,
    fontWeight: '900',
  },

  pageSubtitle: {
    color: '#A9828E',
    fontSize: 11,
    marginTop: 4,
  },

  itemBadge: {
    backgroundColor: '#FCE8EE',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  itemBadgeText: {
    color: '#A53F62',
    fontSize: 10,
    fontWeight: '800',
  },

  /* ================= PRODUTO ================= */

  productCard: {
    marginHorizontal: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F0DCE3',
    shadowColor: '#B9788C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  imageContainer: {
    width: 115,
    height: 145,
    borderRadius: 15,
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
    top: 8,
    left: 8,
    backgroundColor: '#B9476C',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 8,
  },

  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 0.8,
  },

  productInfo: {
    flex: 1,
    paddingLeft: 14,
    justifyContent: 'center',
  },

  productCategory: {
    color: '#B05D78',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginBottom: 5,
    textTransform: 'uppercase',
  },

  productName: {
    color: '#3F2931',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
  },

  productDetails: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 18,
  },

  detailBox: {
    minWidth: 55,
  },

  detailLabel: {
    color: '#B99AA6',
    fontSize: 7,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  detailValue: {
    color: '#594047',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 3,
  },

  productPrice: {
    color: '#A64265',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 12,
  },

  /* ================= BENEFÍCIOS ================= */

  benefitsContainer: {
    marginHorizontal: 18,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: '#F0DCE3',
  },

  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
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

  benefitTextContainer: {
    flex: 1,
  },

  benefitTitle: {
    color: '#4A3038',
    fontSize: 11,
    fontWeight: '800',
  },

  benefitSubtitle: {
    color: '#B28A98',
    fontSize: 9,
    marginTop: 2,
  },

  /* ================= RESUMO ================= */

  summaryCard: {
    marginHorizontal: 18,
    marginTop: 15,
    padding: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#F0DCE3',
  },

  summaryTitle: {
    color: '#A35A73',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginBottom: 12,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },

  summaryLabel: {
    color: '#8E6D78',
    fontSize: 13,
  },

  summaryValue: {
    color: '#4A3038',
    fontSize: 13,
    fontWeight: '700',
  },

  freeBadge: {
    backgroundColor: '#FCEEF2',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 8,
  },

  freeBadgeText: {
    color: '#B04F70',
    fontSize: 9,
    fontWeight: '900',
  },

  divider: {
    height: 1,
    backgroundColor: '#F1E1E6',
    marginVertical: 13,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    color: '#3F2931',
    fontSize: 16,
    fontWeight: '900',
  },

  totalSmall: {
    color: '#B99AA6',
    fontSize: 8,
    marginTop: 2,
  },

  totalValue: {
    color: '#A64265',
    fontSize: 20,
    fontWeight: '900',
  },

  /* ================= ENTREGA ================= */

  deliveryCard: {
    marginHorizontal: 18,
    marginTop: 15,
    padding: 15,
    borderRadius: 17,
    backgroundColor: '#FCECF1',
    flexDirection: 'row',
    alignItems: 'center',
  },

  deliveryIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  deliveryInfo: {
    flex: 1,
  },

  deliveryTitle: {
    color: '#5B3542',
    fontSize: 11,
    fontWeight: '900',
  },

  deliveryText: {
    color: '#A47787',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
  },

  /* ================= CHECKOUT ================= */

  checkoutButton: {
    marginHorizontal: 18,
    marginTop: 20,
    height: 55,
    borderRadius: 18,
    backgroundColor: '#C85F82',
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

  checkoutText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },

  checkoutArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 12,
  },

  /* ================= CONTINUAR ================= */

  continueButton: {
    alignItems: 'center',
    paddingVertical: 15,
  },

  continueText: {
    color: '#A45B74',
    fontSize: 12,
    fontWeight: '700',
  },

  /* ================= VAZIO ================= */

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35,
  },

  emptyCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FCE8EE',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyIcon: {
    color: '#C85F82',
    fontSize: 42,
  },

  emptyTitle: {
    color: '#3F2931',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 20,
  },

  emptyText: {
    color: '#A9828E',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    marginTop: 8,
  },

  shopButton: {
    marginTop: 25,
    backgroundColor: '#C85F82',
    borderRadius: 18,
    paddingHorizontal: 22,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  shopButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

  shopArrow: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
  },

  /* ================= FOOTER ================= */

  footer: {
    marginTop: 25,
    backgroundColor: '#FCECF1',
    alignItems: 'center',
    paddingVertical: 28,
  },

  footerLogo: {
    color: '#A53F62',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 6,
  },

  footerText: {
    color: '#A9828E',
    fontSize: 10,
    marginTop: 6,
  },

  footerHeart: {
    color: '#C85F82',
    fontSize: 18,
    marginTop: 8,
  },

});