import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesScreen({ route }) {
  // Recupera os parâmetros enviados pela HomeScreen
  const { nome, posicao, gols } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Jogador</Text>

      <Text style={styles.info}>Nome: {nome}</Text>
      <Text style={styles.info}>Posição: {posicao}</Text>
      <Text style={styles.info}>Gols: {gols}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  info: {
    fontSize: 18,
    marginBottom: 10
  }
});