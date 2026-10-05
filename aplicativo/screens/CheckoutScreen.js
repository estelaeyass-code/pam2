import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

function converterPreco(valor) {
  if (typeof valor === 'number') {
    return valor;
  }

  if (!valor) {
    return 0;
  }

  return Number(
    valor
      .replace('R$', '')
      .replace(/\./g, '')
      .replace(',', '.')
      .trim()
  );
}

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

export default function CheckoutScreen({ route, navigation }) {

  const produto = route.params?.produtoSelecionado;

  // Caso alguém entre no Checkout sem passar pelo carrinho
  if (!produto) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#FFF8FA"
        />

        <View style={styles.emptyContainer}>

          <View style={styles.emptyCircle}>
            <Text style={styles.emptyIcon}>♡</Text>
          </View>

          <Text style={styles.emptyTitle}>
            Nenhum pedido encontrado
          </Text>

          <Text style={styles.emptyText}>
            Escolha uma peça da coleção ROSÉA
            antes de finalizar sua compra.
          </Text>

          <TouchableOpacity
            style={styles.shopButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.shopButtonText}>
              VOLTAR À LOJA
            </Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    );
  }

  const quantidade = produto.quantidade || 1;

  const precoUnitario = converterPreco(produto.preco);

  const total = precoUnitario * quantidade;

  function voltarParaLoja() {
    navigation.popToTop();
  }

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
            <Text style={styles.logo}>
              ROSÉA
            </Text>

            <Text style={styles.logoSubtitle}>
              FASHION
            </Text>
          </View>

          <View style={styles.headerSpace} />

        </View>

        {/* ================= CONFIRMAÇÃO ================= */}

        <View style={styles.confirmation}>

          <View style={styles.checkCircle}>
            <Text style={styles.checkIcon}>
              ✓
            </Text>
          </View>

          <Text style={styles.title}>
            Pedido Confirmado!
          </Text>

          <Text style={styles.subtitle}>
            Obrigada por escolher a ROSÉA.
          </Text>

          <View style={styles.orderNumber}>
            <Text style={styles.orderNumberText}>
              PEDIDO #8492
            </Text>
          </View>

        </View>

        {/* ================= CARD DO PRODUTO ================= */}

        <View style={styles.productCard}>

          <View style={styles.productHeader}>
            <Text style={styles.sectionTitle}>
              SEU PEDIDO
            </Text>

            <Text style={styles.productCount}>
              {quantidade} {quantidade === 1 ? 'item' : 'itens'}
            </Text>
          </View>

          <View style={styles.productRow}>

            <View style={styles.productImagePlaceholder}>
              <Text style={styles.productImageIcon}>
                ♡
              </Text>
            </View>

            <View style={styles.productInfo}>

              <Text style={styles.category}>
                {produto.categoria || 'MODA'}
              </Text>

              <Text
                style={styles.productName}
                numberOfLines={2}
              >
                {produto.nome}
              </Text>

              <Text style={styles.productDetails}>
                Tamanho: {produto.tamanho || 'M'}
              </Text>

              <Text style={styles.productDetails}>
                Quantidade: {quantidade}
              </Text>

            </View>

            <Text style={styles.productPrice}>
              {formatarPreco(precoUnitario)}
            </Text>

          </View>

          {/* ================= PAGAMENTO ================= */}

          <View style={styles.divider} />

          <View style={styles.infoRow}>

            <View>
              <Text style={styles.infoLabel}>
                Forma de pagamento
              </Text>

              <Text style={styles.infoDescription}>
                Pagamento instantâneo
              </Text>
            </View>

            <View style={styles.pixBadge}>
              <Text style={styles.pixText}>
                ✓ Pix aprovado
              </Text>
            </View>

          </View>

          {/* ================= ENTREGA ================= */}

          <View style={styles.divider} />

          <View style={styles.infoRow}>

            <View>
              <Text style={styles.infoLabel}>
                Entrega
              </Text>

              <Text style={styles.infoDescription}>
                Frete grátis
              </Text>
            </View>

            <Text style={styles.deliveryValue}>
              2–4 dias úteis
            </Text>

          </View>

          {/* ================= TOTAL ================= */}

          <View style={styles.divider} />

          <View style={styles.totalRow}>

            <View>
              <Text style={styles.totalLabel}>
                Total
              </Text>

              <Text style={styles.totalDescription}>
                Valor final da compra
              </Text>
            </View>

            <Text style={styles.totalValue}>
              {formatarPreco(total)}
            </Text>

          </View>

        </View>

        {/* ================= ENTREGA ================= */}

        <View style={styles.deliveryCard}>

          <View style={styles.deliveryIcon}>
            <Text style={styles.deliveryIconText}>
              ♡
            </Text>
          </View>

          <View style={styles.deliveryInfo}>

            <Text style={styles.deliveryTitle}>
              Tudo certo com seu pedido!
            </Text>

            <Text style={styles.deliveryText}>
              Sua compra será preparada com carinho
              e chegará entre 2 e 4 dias úteis.
            </Text>

          </View>

        </View>

        {/* ================= BOTÃO ================= */}

        <TouchableOpacity
          style={styles.homeButton}
          activeOpacity={0.85}
          onPress={voltarParaLoja}
        >
          <Text style={styles.homeButtonText}>
            VOLTAR PARA A ROSÉA
          </Text>

          <Text style={styles.homeButtonArrow}>
            →
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
    color: '#A53F62',
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

  /* ================= CONFIRMAÇÃO ================= */

  confirmation: {
    alignItems: 'center',
    paddingTop: 28,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  checkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FCE8EE',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F2CBD7',
  },

  checkIcon: {
    color: '#C85F82',
    fontSize: 35,
    fontWeight: '900',
  },

  title: {
    color: '#3F2931',
    fontSize: 25,
    fontWeight: '900',
    marginTop: 15,
  },

  subtitle: {
    color: '#A9828E',
    fontSize: 12,
    marginTop: 5,
  },

  orderNumber: {
    backgroundColor: '#FCE8EE',
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 6,
    marginTop: 12,
  },

  orderNumberText: {
    color: '#A53F62',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },

  /* ================= PRODUTO ================= */

  productCard: {
    marginHorizontal: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
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

  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  sectionTitle: {
    color: '#A35A73',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
  },

  productCount: {
    color: '#B38A97',
    fontSize: 10,
    fontWeight: '700',
  },

  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  productImagePlaceholder: {
    width: 82,
    height: 100,
    borderRadius: 14,
    backgroundColor: '#FCECF1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  productImageIcon: {
    color: '#C85F82',
    fontSize: 30,
  },

  productInfo: {
    flex: 1,
    paddingHorizontal: 12,
  },

  category: {
    color: '#B05D78',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: 4,
  },

  productName: {
    color: '#3F2931',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
  },

  productDetails: {
    color: '#A9828E',
    fontSize: 10,
    marginTop: 3,
  },

  productPrice: {
    color: '#A64265',
    fontSize: 14,
    fontWeight: '900',
  },

  /* ================= INFORMAÇÕES ================= */

  divider: {
    height: 1,
    backgroundColor: '#F1E1E6',
    marginVertical: 15,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoLabel: {
    color: '#4A3038',
    fontSize: 12,
    fontWeight: '800',
  },

  infoDescription: {
    color: '#B28A98',
    fontSize: 9,
    marginTop: 3,
  },

  pixBadge: {
    backgroundColor: '#FCEEF2',
    borderRadius: 9,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  pixText: {
    color: '#B04F70',
    fontSize: 9,
    fontWeight: '900',
  },

  deliveryValue: {
    color: '#A64265',
    fontSize: 11,
    fontWeight: '800',
  },

  /* ================= TOTAL ================= */

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    color: '#3F2931',
    fontSize: 17,
    fontWeight: '900',
  },

  totalDescription: {
    color: '#B99AA6',
    fontSize: 8,
    marginTop: 2,
  },

  totalValue: {
    color: '#A64265',
    fontSize: 21,
    fontWeight: '900',
  },

  /* ================= ENTREGA ================= */

  deliveryCard: {
    marginHorizontal: 18,
    marginTop: 15,
    padding: 15,
    borderRadius: 18,
    backgroundColor: '#FCECF1',
    flexDirection: 'row',
    alignItems: 'center',
  },

  deliveryIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  deliveryIconText: {
    color: '#C85F82',
    fontSize: 21,
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

  /* ================= BOTÃO ================= */

  homeButton: {
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

  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
  },

  homeButtonArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 12,
  },

  /* ================= FOOTER ================= */

  footer: {
    marginTop: 25,
    backgroundColor: '#FCECF1',
    alignItems: 'center',
    paddingVertical: 25,
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
    marginTop: 7,
  },

  /* ================= SEM PEDIDO ================= */

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingHorizontal: 25,
    paddingVertical: 14,
  },

  shopButtonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },

});