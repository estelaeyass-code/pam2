import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useCarrinho } from '../CarrinhoContext';

export default function CarrinhoScreen() {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    valorTotal,
  } = useCarrinho();

  if (carrinho.length === 0) {
    return (
      <View style={styles.vazio}>
        <Text style={styles.vazioEmoji}>🛒</Text>

        <Text style={styles.vazioTitulo}>
          Seu carrinho está vazio
        </Text>

        <Text style={styles.vazioTexto}>
          Adicione produtos deliciosos para fazer seu pedido.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {carrinho.map((item) => (
          <View style={styles.item} key={item.nome}>
            <View style={styles.imagem}>
              <Text style={styles.emoji}>
                {item.emoji}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.preco}>
                {item.preco}
              </Text>

              <View style={styles.controles}>
                <TouchableOpacity
                  style={styles.botaoQuantidade}
                  onPress={() => diminuirQuantidade(item.nome)}
                >
                  <Text style={styles.botaoTexto}>−</Text>
                </TouchableOpacity>

                <Text style={styles.quantidade}>
                  {item.quantidade}
                </Text>

                <TouchableOpacity
                  style={styles.botaoQuantidade}
                  onPress={() => aumentarQuantidade(item.nome)}
                >
                  <Text style={styles.botaoTexto}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.resumo}>
        <View style={styles.totalLinha}>
          <Text style={styles.totalLabel}>
            Total
          </Text>

          <Text style={styles.total}>
            R$ {valorTotal.toFixed(2).replace('.', ',')}
          </Text>
        </View>

        <TouchableOpacity style={styles.finalizar}>
          <Text style={styles.finalizarTexto}>
            Finalizar pedido
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  item: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 15,
    padding: 12,
    borderRadius: 16,
    flexDirection: 'row',
  },

  imagem: {
    width: 90,
    height: 90,
    borderRadius: 14,
    backgroundColor: '#FFF0EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emoji: {
    fontSize: 48,
  },

  info: {
    flex: 1,
    marginLeft: 14,
  },

  nome: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222',
  },

  preco: {
    color: '#FF5A36',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },

  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  botaoQuantidade: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF5A36',
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  quantidade: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 14,
  },

  resumo: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  totalLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  totalLabel: {
    fontSize: 18,
    color: '#555',
  },

  total: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },

  finalizar: {
    backgroundColor: '#FF5A36',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  finalizarTexto: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  vazio: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  vazioEmoji: {
    fontSize: 80,
  },

  vazioTitulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
  },

  vazioTexto: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
});