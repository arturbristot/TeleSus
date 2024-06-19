import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CadastrarHorario = () => {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedTime;
    setShow(Platform.OS === 'ios');
    setSelectedTime(currentDate);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  const submitCadastro = () => {
    // Lógica para submeter o horário selecionado
    alert(`Horário marcado para: ${selectedTime.getHours()}:${selectedTime.getMinutes()}`);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Cadastro de Horários</Text>
      </View>

      <View style={styles.calendarContainer}>
        <TouchableOpacity onPress={showTimepicker} style={styles.botoes}>
          <Text style={styles.texto}>Selecionar Hora</Text>
        </TouchableOpacity>
        <Text style={styles.texto}>
          Hora Selecionada: {selectedTime.getHours().toString().padStart(2, '0')}:
          {selectedTime.getMinutes().toString().padStart(2, '0')}
        </Text>
      </View>

      {show && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <View>
        <TouchableOpacity onPress={submitCadastro} style={styles.submitButton}>
          <Text style={styles.texto}>Cadastrar Novo Horário</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  calendarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
  },
  botoes: {
    height: 40,
    width: 200,
    borderRadius: 4,
    borderColor: '#2195F3',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  submitButton: {
    height: 40,
    width: 250,
    borderRadius: 4,
    backgroundColor: '#2195F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  }
});

export default CadastrarHorario;
