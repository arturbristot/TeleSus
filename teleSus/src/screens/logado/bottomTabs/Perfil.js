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
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { onSnapshot, query, where, } from "firebase/firestore";
import { collection, auth, database } from "../../../config/firebaseconfig";

export default function Perfil() {
  const navigation = useNavigation();
  const styles = getStyles();
  const [perfil, setPefil] = useState([]);

  function closeacount(){
    navigation.goBack()
    navigation.goBack()
  }

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuário não encontrado");
      return;
    }
    const consultaCollection = collection(database, "usuarios");
    const q = query(consultaCollection, where("usuarioUid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];

      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setPefil(list);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.vlogo}>
        <Image
          source={require("../../../images/perfil.png")}
          style={styles.perfil}
        />
      </View>

      <TouchableOpacity
        style={styles.lapisimg}
        onPress={() => console.log({ perfil })}
      >
        <Feather name="edit-2" size={25} color="#0D47A1" />
      </TouchableOpacity>

      <View style={styles.usuario}>
        {perfil.length > 0 && (
            <Text style={styles.usuarioemail}>{perfil[0].email}</Text>
        )}
      </View>

      <View style={styles.informacoes}>
        <TouchableOpacity
          style={styles.info1}
          onPress={() => navigation.navigate("Informações")}
        >
          <AntDesign name="user" size={24} color="black" />
          <Text style={[styles.text1]}>Informações </Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="#0D47A1"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.info2}
          onPress={() => navigation.navigate("Historico consultas")}
        >
          <MaterialCommunityIcons name="history" size={24} color="black" />
          <Text style={[styles.text1]}>Histórico de Consultas </Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="#0D47A1"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.info3}
          onPress={() => navigation.navigate("Privacidade")}
        >
          <AntDesign name="lock" size={24} color="black" />
          <Text style={[styles.text1]}>Privacidade e Segurança</Text>
          <AntDesign
            style={styles.iconset2}
            name="right"
            size={24}
            color="#0D47A1"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.info4} onPress={closeacount}>
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
        </TouchableOpacity>
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
    info1: {
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
    info2: {
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
    info3: {
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
    info4: {
      display: "flex",
      flexDirection: "row",
      position: "absolute",
      backgroundColor: "none",
      height: 50,
      width: "90%",
      borderBottomWidth: 1,
      borderBottomColor: "red",
      marginTop: 210,
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
      color: "black",
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
