import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook
import {
  collection,
  addDoc,
  auth,
  database,
} from "../../../config/firebaseconfig";

const Agendamentos = () => {

  async function obterHorarios() {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const consultaCollection = collection(database, "consultas");

  }
};

export default function Config() {
  const navigation = useNavigation(); // Instancie o hook

  return (
    <View style={styles.container}>
      <FlatList></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
