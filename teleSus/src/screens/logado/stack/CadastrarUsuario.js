import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook
import { useState } from "react";
import { auth, collection, database, addDoc } from "../../../config/firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function CadastrarUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const NovoUsuario = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
      Alert.alert("conta criada");
      navigation.navigate("Login");
    } catch (error) {
      //console.error('Error signing up:', error);
      Alert.alert("Error", error.message);
    }

    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const usuarioCollection = collection(database, "usuarios");
    await addDoc(usuarioCollection, {
      usuarioUid: user.uid,
    });
  };

  const navigation = useNavigation(); // Instancie o hook

  return (
    <View style={styles.container}>
      <View style={styles.vlogo}>
        <View style={styles.casetxt}>
          <Text style={styles.tittle}>TeleSUS</Text>
          <Text style={styles.description}>
            Seu atendimento. Rápido e na hora certa.
          </Text>
        </View>
      </View>

      <View style={styles.vform}>
        <Text style={styles.intro}>Ótimo ter você aqui</Text>
        <View style={styles.vinput}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            NovoUsuario();
          }}
          style={styles.btlogin}
        >
          <Text style={styles.txtlogin}>Criar conta</Text>
        </TouchableOpacity>

        <View style={styles.barra}></View>
      </View>

      <View style={styles.vlogin}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  vlogo: {
    display: "flex",
    marginTop: 55,
    backgroundColor: "white",
    height: 300,
    width: "85%",
  },
  tittle: { fontSize: 75, color: "#006FFD", marginTop: 10 },
  description: { fontSize: 15, color: "#7F7F7F" },
  casetxt: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginTop: "20%",
  },

  vform: {
    height: 300,
    width: "85%",

    display: "flex",
    alignItems: "center",
  },
  intro: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    color: "#006FFD",
  },
  vinput: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 10,

    borderColor: "#c5c6cc",
    borderWidth: 1,
    borderStyle: "dotted",

    marginTop: 23,
    paddingLeft: 10,
  },
  recuperar: {
    color: "#006FFD",
    marginTop: 23,
    marginBottom: 23,
    fontSize: 14,
    fontWeight: "bold",
  },

  btlogin: {
    backgroundColor: "#006FFD",
    width: "100%",
    height: 50,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 23,
  },
  txtlogin: {
    color: "white",
    fontSize: 14,
  },
  criar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  txtcriar: {
    color: "#006FFD",
    fontSize: 14,
    marginTop: 15,
  },
  barra: {
    display: "flex",
    backgroundColor: "#c5c6cc",
    width: "100%",
    height: 0.8,
    marginTop: 50,
    opacity: 0.5,
  },
  vlogin: {
    marginTop: 50,
    height: 200,
    width: "85%",

    display: "flex",
    alignItems: "center",
  },
  continuar: {
    color: "#c5c6cc",
    marginTop: 20,
  },
});
