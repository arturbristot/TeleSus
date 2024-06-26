import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../../config/firebaseconfig";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { Calendar } from "react-native-calendars";

export default function EditScreen({ route }) {
  const navigation = useNavigation();
  const { id, data, medico } = route.params;
  const [novoMedico, setNovoMedico] = useState(medico);
  const [selectedTime, setSelectedTime] = useState(data.split(" ")[1]);
  const [selectedDate, setSelectedDate] = useState(data.split(" ")[0]);

  const handleUpdate = async () => {
    const docRef = doc(database, "consultas", id);
    const novaData = `${selectedDate} ${selectedTime}`;
    await updateDoc(docRef, { medico: novoMedico, data: novaData });
    navigation.goBack();
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#2195F3" },
        }}
      />
      <View style={styles.barra} />
      <View style={styles.escolha}>
        <Picker
          selectedValue={selectedTime}
          style={styles.picker}
          itemStyle={{ fontSize: 16 }}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
        >
          <Picker.Item label="08:00" value="08:00" />
          <Picker.Item label="09:00" value="09:00" />
          <Picker.Item label="10:00" value="10:00" />
          <Picker.Item label="11:00" value="11:00" />
          <Picker.Item label="12:00" value="12:00" />
          <Picker.Item label="13:00" value="13:00" />
          <Picker.Item label="14:00" value="14:00" />
          <Picker.Item label="15:00" value="15:00" />
          <Picker.Item label="16:00" value="16:00" />
          <Picker.Item label="17:00" value="17:00" />
          <Picker.Item label="18:00" value="18:00" />
          <Picker.Item label="19:00" value="19:00" />
          <Picker.Item label="20:00" value="20:00" />
          <Picker.Item label="21:00" value="21:00" />
        </Picker>
        <Picker
          selectedValue={novoMedico}
          style={styles.picker}
          itemStyle={{ fontSize: 16 }}
          onValueChange={(itemValue) => setNovoMedico(itemValue)}
        >
          <Picker.Item label="C.Geral" value="C.Geral" />
          <Picker.Item label="Cardiologista" value="Cardiologista" />
          <Picker.Item label="Dermatologista" value="Dermatologista" />
          <Picker.Item label="Endocrinologista" value="Endocrinologista" />
          <Picker.Item label="Ginecologista" value="Ginecologista" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.cadastrarUsuario} onPress={handleUpdate}>
        <Text style={styles.textoCadastro}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  calendar: {
    marginBottom: 20,
  },
  escolha: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    height: 190,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  calendar: {
    margin: 10,
    width: 350,
    height: 350,
  },
  cadastrarUsuario: {
    marginTop: 10,
    width: 100,
    height: 40,
    borderRadius: 4,
    backgroundColor: "#006FFD",
    justifyContent: "center",
    alignItems: "center",
  },
  textoCadastro: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
  },
  barra: {
    display: "flex",
    backgroundColor: "#c5c6cc",
    width: "100%",
    height: 0.8,
    marginTop: 19,
    opacity: 0.5,
  },
});
