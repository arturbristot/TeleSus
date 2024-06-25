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
import { useEffect, useState } from "react";
import { onSnapshot, query, where } from "firebase/firestore";

export default function Config() {
  const [horarios, setHorarios] = useState([]); 
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuário não encontrado");
      return;
    }

    const consultaCollection = collection(database, "consultas");
    const q = query(consultaCollection, where("usuarioUid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const list = [];

      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setHorarios(list);
    });

    return () => unsubscribe();

  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={horarios}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
