import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook
import { useState, useEffect } from "react";
import { auth, onAuthStateChanged } from "../config/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigation = useNavigation(); // Instancie o hook

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const LoginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      navigation.navigate("Home", { idUser: userCredential.user.uid });
    } catch (error) {
//      console.error("Error logging in:", error);
      Alert.alert('Email ou senha invalida');
      setError(true);
    }
  };
  
  
  useEffect(() => {
    const statusAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Home", { idUser: user.uid });
      }
    });

    return () => statusAuth();
  }, []);
  

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
        <Text style={styles.intro}>Bem vindo</Text>
        <View style={styles.vinput}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => {LoginUser()}}
          style={styles.btlogin}
        >
          <Text style={styles.txtlogin}>Login</Text>
        </TouchableOpacity>
        <View style={styles.criar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Cadastrar Usuario");
            }}
          >
            <Text style={styles.recuperar}>Criar conta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.barra}></View>
      </View>

      <View style={styles.vlogin}>
        <Text style={styles.continuar}>ou continue com</Text>
      </View>
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
    marginTop: 19,
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
