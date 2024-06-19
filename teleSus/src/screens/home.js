import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import medicine_icon from '../../assets/imgs/medicine_icon.png'; // Certifique-se que o caminho e a extensão estão corretos


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={medicine_icon} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastrarHorario')}>
          <Text style={styles.txtbutton}>Cadastrar Horário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Teste')}>
          <Text style={styles.txtbutton}>Horários Agendados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Suporte')}>
          <Text style={styles.txtbutton}>Suporte</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  txtbutton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
