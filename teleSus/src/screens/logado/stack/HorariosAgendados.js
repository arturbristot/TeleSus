import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { collection, auth, database } from "../../../config/firebaseconfig";
import { useEffect, useState } from "react";
import { onSnapshot, query, where, doc, deleteDoc } from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HorariosAgendados() {
  const [horarios, setHorarios] = useState([]);
  const navigation = useNavigation();

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
        list.push({ id: doc.id, ...doc.data() });
      });
      setHorarios(list);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    const docRef = doc(database, "consultas", id);
    await deleteDoc(docRef);
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={horarios}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemtd}>
              <TouchableOpacity>
                <AntDesign name="calendar" size={22} color="white" />
              </TouchableOpacity>
              <Text style={styles.text}>{item.medico}</Text>
              <View style={styles.acoes}>
                <TouchableOpacity
                  style={styles.icone}
                  onPress={() =>
                    navigation.navigate("Editar", {
                      id: item.id,
                      data: item.data,
                      medico: item.medico,
                    })
                  }
                >
                  <AntDesign name="edit" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.icone}
                  onPress={() => handleDelete(item.id)}
                >
                  <AntDesign name="delete" size={22} color="white" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bottomItem}>
              {item.observação ? (
                <Text style={{ color: "white" }}>{item.observação}</Text>
              ) : (
                /* Usamos um operador ternário (condição ? valorSeVerdadeiro : valorSeFalso) dentro do View com style={styles.bottomItem}.
                  item.observação ? ... : ... verifica se item.observação é verdadeiro (ou seja, se tem algum valor).  */
                <Text style={{ color: "white" }}>Nenhuma observação</Text>
              )}
              <Text style={{ color: "white" }}>{item.data}</Text>
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
    marginVertical: 3,
    marginHorizontal: 16,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
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
  icone: {
    marginLeft: 15,
  },
  itemtd: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    backgroundColor: "#006FFD",
    padding: 20,
    borderRadius: 8,
  },
  bottomItem: {
    backgroundColor: "#006FFD",
    width: "100%",
    padding: 10,
    top: -8,
    borderBottomLeftRadius: 8, // Define o raio do canto inferior esquerdo
    borderBottomRightRadius: 8, // Define o raio do canto inferior direito

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
