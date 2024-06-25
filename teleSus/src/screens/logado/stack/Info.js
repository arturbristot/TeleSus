// Perfil.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Fontisto,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function Info() {
  const navigation = useNavigation();
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <View style={styles.vlogo}>
        <Image
          source={require("../../../images/perfil.png")}
          style={styles.perfil}
        />
      </View>

      <TouchableOpacity style={styles.lapisimg}>
        <Feather name="edit-2" size={25} color="#0D47A1" />
      </TouchableOpacity>

      <View style={styles.usuario}>
        <Text style={styles.usuarioemail}>usuario@gmail.com</Text>
        <Text style={styles.usuarionome}>Usuario da Silva</Text>
      </View>

      <View style={styles.informacoes}>
        <View style={styles.info0}>
          <SimpleLineIcons name="user" size={24} color="black" />
          <Text style={[styles.text1]}>Nome: </Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="#0D47A1"
          />
        </View>

        <View style={styles.info1}>
          <SimpleLineIcons name="pencil" size={24} color="black" />
          <Text style={[styles.text1]}>CPF: </Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="#0D47A1"
          />
        </View>

        <View style={styles.info2}>
          <Fontisto name="email" size={24} color="black" />
          <Text style={[styles.text1]}>E-mail: </Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="#0D47A1"
          />
        </View>

        <View style={styles.info3}>
          <SimpleLineIcons name="phone" size={24} color="black" />
          <Text style={[styles.text1]}>Telefone: </Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="#0D47A1"
          />
        </View>

        <View style={styles.info4}>
          <Ionicons
            name="exit-outline"
            style={styles.icon}
            size={24}
            color="red"
          />
          <Text style={[styles.text2]}>Sair da Conta: </Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="red"
          />
        </View>
      </View>
    </View>
  );
}

const getStyles = () =>
  StyleSheet.create({
    text1: {
      marginLeft: "5%",
      fontWeight: "bold",
    },
    text2: {
      marginLeft: "5%",
      fontWeight: "bold",
      color: "red",
    },
    icon: {
      marginLeft: "1%",
    },
    iconset2: {
      position: "absolute",
      marginLeft: "90%",
    },
    info0: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      backgroundColor: "none",
      height: 50,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      marginTop: 30,
      alignItems: "center",
    },
    info1: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      backgroundColor: "none",
      height: 50,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      marginTop: 90,
      alignItems: "center",
    },
    info2: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      backgroundColor: "none",
      height: 50,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      marginTop: 150,
      alignItems: "center",
    },
    info3: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      backgroundColor: "none",
      height: 50,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "lightgray",
      marginTop: 210,
      alignItems: "center",
    },
    info4: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      backgroundColor: "none",
      height: 50,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "red",
      marginTop: 270,
      alignItems: "center",
    },
    informacoes: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    usuario: {
      alignItems: "center",
      marginTop: 20,
    },
    usuarionome: {
      marginTop: 10,
    },
    usuarioemail: {
      fontSize: 17,
      fontWeight: "bold",
    },
    lapisimg: {
      position: "absolute",
      marginTop: "54%",
      marginLeft: "59%",
      backgroundColor: "#fff",
      padding: 5,
      borderRadius: 50,
    },
    hidden: {
      display: "none",
    },
    vlogo: {
      marginTop: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    perfil: {
      width: 120,
      height: 120,
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    infoButton: {
      marginTop: 300, // Ajuste conforme necessário
      backgroundColor: "#0D47A1",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    infoButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
