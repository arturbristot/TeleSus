import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,  } from "react-native";
import { Calendar } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  collection, 
  addDoc,
  auth,
  database,
} from "../../../config/firebaseconfig";
import { TextInput } from "react-native-gesture-handler";

const CadastrarHorario = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMedico, setSelectedMedico] = useState("");
  const [observação, setObservação] = useState("");

  const data = selectedDate + " " + selectedTime;

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  async function submitCadastro() {
    // Função para submeter cadastro
    console.log("Data Selecionada: ", data);
    const user = auth.currentUser;
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    const consultaCollection = collection(database, "consultas");
    await addDoc(consultaCollection, {
      data: data,
      medico: selectedMedico,
      observação: observação,
      usuarioUid: user.uid,
    });
    navigation.goBack();
    
  }

  return (
    <View style={styles.container}>
      <View>
        <Calendar
          style={styles.calendar}
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: "#2195F3" },
          }}
        />
      </View>
      <View style={styles.barra}></View>
      <View style={styles.cad}>
        <View style={styles.pickers}>
          <Picker
            selectedValue={selectedTime}
            style={styles.pickerh}
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

          <View style={styles.smed}>
            <Picker
              selectedValue={selectedMedico}
              style={{ height: 50, width: 180 }}
              itemStyle={{ fontSize: 16 }}
              onValueChange={(itemValue) => setSelectedMedico(itemValue)}
            >
              <Picker.Item label="C.Geral" value="C.Geral" />
              <Picker.Item label="Cardiologista" value="Cardiologista" />
              <Picker.Item label="Dermatologista" value="Dermatologista" />
              <Picker.Item label="Endocrinologista" value="Endocrinologista" />
              <Picker.Item label="Ginecologista" value="Ginecologista" />
            </Picker>
          </View>
        </View>

        <TextInput
          placeholder="Observação..."
          style={styles.input}
          onChangeText={(text) => setObservação(text)}
        />

        <View>
          <TouchableOpacity
            onPress={submitCadastro}
            style={styles.cadastrarUsuario}
          >
            <Text style={styles.textoCadastro}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  texto: {
    fontSize: 18,
    textAlign: "center",
  },

  calendar: {
    margin: 10,
    width: 350,
    height: 350,
  },
  pickerh: {
    height: 200,
    width: 130,
    fontSize: 2,
  },
  pickers: {
    display: "flex",
    flexDirection: "row",
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
  cad: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  barra: {
    display: "flex",
    backgroundColor: "#c5c6cc",
    width: "100%",
    height: 0.8,
    marginTop: 19,
    opacity: 0.5,
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#2195F3",
    borderRadius: 4,
  },
});

export default CadastrarHorario;
