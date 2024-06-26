import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Suporte() {
  return (
    <View style={styles.container}>
      <View style={styles.centralizedContainer}>
        <View style={styles.fieldContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="phone" size={24} color="#2196F3" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.colorFont}>Telefone</Text>
            <Text style={styles.colorFont}>02227610846</Text>
          </View>
        </View>
      </View>
      <View style={styles.centralizedContainer}>
        <View style={styles.fieldContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="email" size={24} color="#2196F3" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.colorFont}>Email</Text>
            <Text style={styles.colorFont}>atendimento@support.com</Text>
          </View>
        </View>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinha os itens ao topo
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Background um pouco mais escuro
    padding: 20,
  },
  centralizedContainer: {
    width: '100%',
    alignItems: 'center', // Centraliza os itens na horizontal
    backgroundColor: 'lightgray',
    marginTop: 10,
    borderRadius: 10
  },
  fieldContainer: {
    flexDirection: 'row', // Alinha os itens horizontalmente
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  iconContainer: {
    marginRight: 10, // Espaço entre o ícone e o texto
  },
  textContainer: {
    flex: 1, // Ocupa todo o espaço disponível restante
    flexDirection: 'column', // Alinha os textos verticalmente
    alignItems: 'center', // Centraliza os textos na horizontal
  },
  colorFont: {
    color: '#2196F3',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center', // Centraliza o texto horizontalmente
  },
});