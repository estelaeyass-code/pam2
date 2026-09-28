import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { CarrinhoProvider } from './navigation/CarrinhoContext';

export default function App() {
  return (
    <CarrinhoProvider>
      <AppNavigator />
    </CarrinhoProvider>
  );
}