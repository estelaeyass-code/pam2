import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },

          headerTintColor: '#A53F62',

          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 16,
          },

          headerShadowVisible: false,

          headerBackTitle: '',
        }}
      >

        {/* ================= HOME ================= */}

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* ================= DETALHES ================= */}

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* ================= CARRINHO ================= */}

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: 'Meu Carrinho',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFFFFF',
            },
            headerTintColor: '#A53F62',
          }}
        />

        {/* ================= CHECKOUT ================= */}

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}