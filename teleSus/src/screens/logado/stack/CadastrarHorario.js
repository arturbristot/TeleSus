import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

const CadastrarHorario = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  function submitCadastro() {
    // Função para submeter cadastro
    console.log("Data Selecionada: ", selectedDate);
    console.log("Hora Selecionada: ", selectedTime);
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
        <View style={styles.horarios}>
          <Picker
            selectedValue={selectedTime}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedTime(itemValue)}
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
        </View>

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
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#fff'
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
  picker: {
    height: 200,
    width: 130,
  },
  cadastrarUsuario: {
    marginTop: 10,
    width: 100,
    height: 40,
    borderRadius: 4,
    borderColor: "#2195F3",
    backgroundColor: "#2195F3",
    borderWidth: 2,
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
    flexDirection: "row",
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
});

export default CadastrarHorario;
