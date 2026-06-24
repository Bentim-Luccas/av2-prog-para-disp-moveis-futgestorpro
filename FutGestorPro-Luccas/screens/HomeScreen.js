import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

export default function HomeScreen({ navigation }) {

  const [emPartida, setEmPartida] = useState(false);

  // Alerta inicial ao carregar a tela
  useEffect(() => {
    Alert.alert(
      'Sucesso',
      'Dados do plantel sincronizados com o servidor!'
    );
  }, []);

  // Loga mudanças de status no console
  useEffect(() => {
    console.log(
      `O status do elenco mudou para ${
        emPartida ? 'Em Partida' : 'Em Treinamento'
      }`
    );
  }, [emPartida]);

  // Lista de jogadores
  const jogadores = [
    { nome: 'Carlos Silva', posicao: 'Atacante', gols: 8 },
    { nome: 'Pedro Santos', posicao: 'Meio Campo', gols: 4 },
    { nome: 'João Almeida', posicao: 'Zagueiro', gols: 1 }
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: emPartida ? 'green' : '#1f3b5c' }
      ]}
    >
      <Text style={styles.titulo}>
        {emPartida ? 'Em Partida Oficial' : 'Em Treinamento'}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setEmPartida(!emPartida)}
      >
        <Text style={styles.textoBotao}>Alterar Status</Text>
      </TouchableOpacity>

      {jogadores.map((jogador, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('Detalhes', jogador)}
        >
          <Text>{jogador.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  botao: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },
  textoBotao: {
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  }
});