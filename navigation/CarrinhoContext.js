import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((atual) => {
      const existente = atual.find(
        (item) => item.nome === produto.nome
      );

      if (existente) {
        return atual.map((item) =>
          item.nome === produto.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...atual,
        {
          ...produto,
          quantidade: 1,
        },
      ];
    });
  }

  function aumentarQuantidade(nome) {
    setCarrinho((atual) =>
      atual.map((item) =>
        item.nome === nome
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  function diminuirQuantidade(nome) {
    setCarrinho((atual) =>
      atual
        .map((item) =>
          item.nome === nome
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function limparCarrinho() {
    setCarrinho([]);
  }

  const quantidadeTotal = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const valorTotal = carrinho.reduce(
    (total, item) =>
      total +
      Number(item.preco.replace('R$', '').replace(',', '.')) *
        item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        limparCarrinho,
        quantidadeTotal,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}