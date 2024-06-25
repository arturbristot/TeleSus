import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from '@expo/vector-icons'; 
 

export default function Perfil() {
  const navigation = useNavigation();
  const [isTextInputVisible, setIsTextInputVisible] = useState(false);
  const [isTextInputVisible2, setIsTextInputVisible2] = useState(false);
  const [isTextInputVisible3, setIsTextInputVisible3] = useState(false);
  const [isTextInputVisible4, setIsTextInputVisible4] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.vlogo}>
        <Image source={require('../../images/perfil.png')} style={styles.perfil} />
        {isTextInputVisible && (
          <TextInput
            style={styles.textInput}
            placeholder="Digite suas novas informações ..."
            value={inputValue}
            onChangeText={setInputValue}
          />
        )}
        {isTextInputVisible2 && (
          <TextInput
            style={styles.textInput2}
            placeholder="Digite suas novas informações ..."
            value={inputValue}
            onChangeText={setInputValue}
            
          />
          
        )}
        {isTextInputVisible3 && (
          <TextInput
            style={styles.textInput3}
            placeholder="Digite suas novas informações ..."
            value={inputValue}
            onChangeText={setInputValue}
          />
        )}
        {isTextInputVisible4 && (
          <TextInput
            style={styles.textInput4}
            placeholder="Digite suas novas informações ..."
            value={inputValue}
            onChangeText={setInputValue}
          />
        )}
        <TouchableOpacity 
          style={styles.lapisimg} 
        >
          <Feather name="edit-2" size={25} color="#0D47A1" />
        </TouchableOpacity>
      </View>
      <View style={styles.usuario}>
        <Text style={styles.usuarioemail}>usuario@gmail.com</Text>
        <Text style={styles.usuarionome}>Usuario da Silva</Text>
      </View>
      <View style={styles.informacoes}>

        <View style={styles.info1}>
          <Text style={[styles.text1, isTextInputVisible && styles.hidden]}>Nome de exibição</Text>
          <TouchableOpacity style={[styles.Touchable]} onPress={() => setIsTextInputVisible(!isTextInputVisible)} ><AntDesign style={styles.iconset} name="arrowright" size={24} color="black" /></TouchableOpacity>
        </View>

        <View style={styles.info2}>
          <Text style={[styles.text1, isTextInputVisible2 && styles.hidden]}>Nome de exibição</Text>
          <TouchableOpacity style={[styles.Touchable]} onPress={() => setIsTextInputVisible2(!isTextInputVisible2)} ><AntDesign style={styles.iconset} name="arrowright" size={24} color="black" /></TouchableOpacity>
        </View>

        <View style={styles.info3}>
          <Text style={[styles.text1, isTextInputVisible3 && styles.hidden]}>Nome de exibição</Text>
          <TouchableOpacity style={styles.Touchable} onPress={() => setIsTextInputVisible3(!isTextInputVisible3)} ><AntDesign style={styles.iconset} name="arrowright" size={24} color="black" /></TouchableOpacity>
        </View>

        <View style={styles.info4}>
          <Text style={[styles.text1, isTextInputVisible4 && styles.hidden]}>Nome de exibição</Text>
          <TouchableOpacity style={styles.Touchable} onPress={() => setIsTextInputVisible4(!isTextInputVisible4)} ><AntDesign style={styles.iconset} name="arrowright" size={24} color="black" /></TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Touchable: {
    position: 'absolute',
    marginLeft: 270,
  },
  text1: {
    marginLeft: 10,
    marginTop: 20,
  },
  iconset: {
    marginTop: 20,
  },
  info1: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'none',
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    marginTop: 30,
  },
  info2:{
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'none',
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    marginTop: 110,
  },
  info3: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'none',
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    marginTop: 190,
  },
  info4: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'none',
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    marginTop: 270,
  },
  informacoes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  usuario: {
    alignItems: 'center',
    marginTop: 20,
  },
  usuarionome: { 
    marginTop: 10,
  },
  usuarioemail: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  lapisimg: { 
    position: 'absolute',
    marginTop: 90,
    marginLeft: 230,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
  },
  hidden: {
    display: 'none',
  },
  vlogo: {
    marginTop: 120,
  },
  perfil: {
    marginLeft: 140,
    width: 120,
    height: 120,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    position: 'absolute',
    top: 225, // Ajuste conforme necessário para posicionar o TextInput acima do TouchableOpacity
    width: 300,
    height: 40,
    borderColor: 'gray',
    paddingLeft: 10,
    marginLeft: 45, // Centralizando com base na margem da imagem do perfil
  },
  textInput2: {
    position: 'absolute',
    top: 305, // Ajuste conforme necessário para posicionar o TextInput acima do TouchableOpacity
    width: 300,
    height: 40,
    borderColor: 'gray',
    paddingLeft: 10,
    marginLeft: 45, 
  },
  textInput3: {
    position: 'absolute',
    top: 385, // Ajuste conforme necessário para posicionar o TextInput acima do TouchableOpacity
    width: 300,
    height: 40,
    borderColor: 'gray',
    paddingLeft: 10,
    marginLeft: 45, 
  },
  textInput4: {
    position: 'absolute',
    top: 465, // Ajuste conforme necessário para posicionar o TextInput acima do TouchableOpacity
    width: 300,
    height: 40,
    borderColor: 'gray',
    paddingLeft: 10,
    marginLeft: 45, 
  },
});


