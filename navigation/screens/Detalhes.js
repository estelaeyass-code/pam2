import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function DetalhesScreen({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Text style={styles.emoji}>{produto.emoji}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.nome}>{produto.nome}</Text>

        <View style={styles.info}>
          <Text>⭐ {produto.avaliacao}</Text>
          <Text>🚚 {produto.tempo}</Text>
        </View>

        <Text style={styles.descricao}>
          {produto.descricao}
        </Text>

        <Text style={styles.label}>Sobre o produto</Text>

        <Text style={styles.texto}>
          Preparado com ingredientes selecionados e muito
          cuidado para deixar seu pedido delicioso.
        </Text>

        <View style={styles.bottom}>
          <View>
            <Text style={styles.precoLabel}>Preço</Text>
            <Text style={styles.preco}>{produto.preco}</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              🛒 Adicionar ao carrinho
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  imageContainer: {
    height: 280,
    backgroundColor: '#FFF0EB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emoji: {
    fontSize: 130,
  },

  content: {
    flex: 1,
    padding: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },

  info: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 12,
  },

  descricao: {
    fontSize: 16,
    color: '#666',
    marginTop: 18,
    lineHeight: 24,
  },

  label: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 25,
  },

  texto: {
    fontSize: 14,
    color: '#777',
    marginTop: 8,
    lineHeight: 21,
  },

  bottom: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },

  precoLabel: {
    fontSize: 13,
    color: '#777',
  },

  preco: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF5A36',
    marginTop: 3,
  },

  button: {
    backgroundColor: '#FF5A36',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});