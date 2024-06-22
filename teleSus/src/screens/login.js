import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook

export default function Login() {
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
        <Text style={styles.intro}>Bem vindo</Text>
        <View style={styles.vinput}>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Senha" style={styles.input} />
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("CadastrarUsuario")}}>
          <Text style={styles.recuperar}>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}} style={styles.btlogin}>
          <Text style={styles.txtlogin}>Login</Text>
        </TouchableOpacity>
        <View style={styles.criar}>
          <TouchableOpacity>
            <Text style={styles.txtcriar}>Criar conta</Text>
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
