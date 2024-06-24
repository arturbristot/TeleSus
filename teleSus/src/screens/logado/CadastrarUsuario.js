import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook
import { useState  } from "react";
import { auth } from "../../config/firebaseconfig";
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
  };

  const navigation = useNavigation(); // Instancie o hook

  return (
    <View style={styles.container}>
      <Text>Cadastrar Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={NovoUsuario}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

});
