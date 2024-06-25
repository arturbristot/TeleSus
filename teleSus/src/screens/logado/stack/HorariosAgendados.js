import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  collection,
  addDoc,
  auth,
  database,
} from "../../../config/firebaseconfig";
import { useEffect, useState } from "react";
import { onSnapshot, query, where } from "firebase/firestore";

import { AntDesign } from "@expo/vector-icons";

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
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => openModal(item.horario)}><AntDesign name="calendar" size={22} color="white" />
            </TouchableOpacity>
            <Text style={styles.text}>{item.medico}</Text>
            <View style={styles.acoes}>
              <TouchableOpacity style={styles.icone}>
                <AntDesign name="edit" size={22} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icone}>
                <AntDesign name="delete" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#0D47A1",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  acoes: {
    display: "flex",
    flexDirection: "row",
  },
  icone:{
    marginLeft: 15,
  }
});
