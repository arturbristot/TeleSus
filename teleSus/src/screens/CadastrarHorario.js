import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React, { useState } from 'react';

const CadastrarHorario = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  }

  function submitCadastro() {
    // Função para submeter cadastro
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}>Cadastro de Horários</Text>
      </View>

      <View>
        <Calendar
          style={styles.calendar}
          onDayPress={handleDateSelect}
          markedDates={{ [selectedDate]: { selected: true, selectedColor: '#9260EB' } }}
        />
      </View>

      <View style={styles.alinhamentoBotoes}>
        <TouchableOpacity style={styles.botoes}>
          <Text style={styles.texto}>Manhã</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botoes}>
          <Text style={styles.texto}>Tarde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botoes}>
          <Text style={styles.texto}>Noite</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={submitCadastro} style={styles.cadastrarUsuario}>
          <Text style={styles.textoCadastro}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  alinhamentoBotoes: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#2195F3'
  },
  botoes: {
    height: 30,
    width: 70,
    borderRadius: 4,
    borderColor: '#2195F3',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  calendar: {
    marginBottom: 20,
  },
  cadastrarUsuario:{
    marginTop: 10,
    width: 100,
    height: 30,
    borderRadius: 4,
    borderColor: '#2195F3',
    backgroundColor: '#2195F3',
    borderWidth: 2,
  },
  textoCadastro: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff'
  }
});

export default CadastrarHorario;
