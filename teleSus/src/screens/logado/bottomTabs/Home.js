import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../../images/logo.png')} style={styles.logo} />
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },
  buttonContainer: {
    width: '75%',
  },
  button: {
    backgroundColor: '#006FFD',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  txtbutton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
