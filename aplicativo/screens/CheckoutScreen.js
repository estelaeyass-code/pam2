import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from 'react-native';

// Produtos do pedido
const produtos = [
  {
    id: '1',
    nome: 'Blusa Nude',
    quantidade: 1,
    preco: 89.90,
  },
  {
    id: '2',
    nome: 'Calça Wide Leg',
    quantidade: 1,
    preco: 159.90,
  },
  {
    id: '3',
    nome: 'Bolsa Minimalista',
    quantidade: 1,
    preco: 119.90,
  },
];

// FUNÇÃO para calcular o total
function calcularTotal() {
  return produtos.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );
}

// FUNÇÃO para formatar o preço
function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

// FUNÇÃO para mostrar mensagem de entrega
function mensagemEntrega() {
  return 'Seu pedido chegará entre 2 e 4 dias úteis.';
}

export default function CheckoutScreen({ navigation }) {

  // Função para voltar para a loja
  function voltarParaLoja() {
    navigation.popToTop();
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.box}>

        {/* ÍCONE DE CONFIRMAÇÃO */}
        <View style={styles.iconCircle}>
          <Text style={styles.checkIcon}>✓</Text>
        </View>

        <Text style={styles.title}>
          Pedido Confirmado!
        </Text>

        <Text style={styles.sub}>
          Obrigado por comprar na Nude Concept.
        </Text>

        {/* RESUMO DO PEDIDO */}
        <View style={styles.infoCard}>

          <Text style={styles.infoTitle}>
            RESUMO DO PEDIDO #8492
          </Text>

          {/* FLATLIST */}
          <FlatList
            data={produtos}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.produto}>
                
                <View>
                  <Text style={styles.nomeProduto}>
                    {item.nome}
                  </Text>

                  <Text style={styles.quantidade}>
                    Quantidade: {item.quantidade}
                  </Text>
                </View>

                <Text style={styles.preco}>
                  {formatarPreco(item.preco)}
                </Text>

              </View>
            )}
          />

          <View style={styles.divider} />

          {/* PAGAMENTO */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Pagamento
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Pix • Aprovado
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* ENTREGA */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>
              Entrega
            </Text>

            <Text style={styles.infoValue}>
              2 a 4 dias úteis
            </Text>
          </View>

          <View style={styles.divider} />

          {/* TOTAL */}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>
              Total
            </Text>

            <Text style={styles.totalValue}>
              {formatarPreco(calcularTotal())}
            </Text>
          </View>

        </View>

        {/* MENSAGEM GERADA POR FUNÇÃO */}
        <Text style={styles.entregaMensagem}>
          {mensagemEntrega()}
        </Text>

        {/* BOTÃO DE NAVEGAÇÃO */}
        <TouchableOpacity
          style={styles.btnInicio}
          activeOpacity={0.85}
          onPress={voltarParaLoja}
        >
          <Text style={styles.btnTexto}>
            Voltar à Loja
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fcf8f5',
    padding: 20,
    justifyContent: 'center',
  },

  box: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',

    shadowColor: '#c9b6a3',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.18,
    shadowRadius: 16,

    elevation: 4,

    borderWidth: 1,
    borderColor: '#f2e9e1',
  },

  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,

    backgroundColor: '#f4ede6',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 16,

    borderWidth: 1,
    borderColor: '#e8d9cb',
  },

  checkIcon: {
    fontSize: 34,
    color: '#a88a74',
    fontWeight: '700',
  },

  title: {
    fontSize: 23,
    fontWeight: '800',
    color: '#3d3230',
    marginBottom: 6,
    letterSpacing: 0.2,
  },

  sub: {
    fontSize: 13.5,
    color: '#a8907c',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 19,
  },

  infoCard: {
    backgroundColor: '#fcf8f5',
    width: '100%',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,

    borderWidth: 1,
    borderColor: '#f2e9e1',
  },

  infoTitle: {
    color: '#a8907c',
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 0.8,
    marginBottom: 12,
  },

  /* ITEM DA FLATLIST */
  produto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 8,
  },

  nomeProduto: {
    color: '#4a3e3d',
    fontSize: 14,
    fontWeight: '700',
  },

  quantidade: {
    color: '#a8907c',
    fontSize: 12,
    marginTop: 3,
  },

  preco: {
    color: '#4a3e3d',
    fontSize: 14,
    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 6,
  },

  infoLabel: {
    color: '#8c6d58',
    fontSize: 13.5,
    fontWeight: '600',
  },

  infoValue: {
    color: '#4a3e3d',
    fontSize: 13.5,
    fontWeight: '600',
  },

  divider: {
    height: 1,
    backgroundColor: '#f2e9e1',
    marginVertical: 8,
  },

  badge: {
    backgroundColor: '#eaf5ec',
    borderRadius: 8,

    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  badgeText: {
    color: '#3f8557',
    fontSize: 12,
    fontWeight: '700',
  },

  /* TOTAL */
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 5,
  },

  totalLabel: {
    color: '#3d3230',
    fontSize: 16,
    fontWeight: '800',
  },

  totalValue: {
    color: '#a88a74',
    fontSize: 18,
    fontWeight: '800',
  },

  /* MENSAGEM */
  entregaMensagem: {
    color: '#a8907c',
    fontSize: 12.5,
    textAlign: 'center',
    marginBottom: 15,
  },

  /* BOTÃO */
  btnInicio: {
    backgroundColor: '#a88a74',

    width: '100%',

    paddingVertical: 15,

    borderRadius: 14,

    alignItems: 'center',

    shadowColor: '#a88a74',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 2,
  },

  btnTexto: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 15,
    letterSpacing: 0.3,
  },

});