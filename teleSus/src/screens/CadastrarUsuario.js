import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const cadastrarUsuario = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  }

  return(
    <View style={styles.container}>
        <View>
            <Text style={styles.texto}>Cadastro de Horários</Text>
        </View>


        <View>
            <Calendar
            style={styles.calendar}
            onDayPress={handleDateSelect}
            markedDates={{[selectedDate]: {selected: true, selectedColor: '#9260EB'}}}
        />
        </View>
      

        <View>
            <TouchableOpacity> <Text> Manhã </Text> </TouchableOpacity>
            <TouchableOpacity> <Text> Tarde </Text> </TouchableOpacity>
            <TouchableOpacity> <Text> Noite </Text> </TouchableOpacity>
        </View>


        <View>
            <TouchableOpacity></TouchableOpacity> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    
  },
  texto:{
    justifyContent: 'center',
    fontSize: 20
  },
  botoes:{
    height: 70,
    width: 110,
    borderRadius: 10,
    borderColor: '#2195F3'
  }
})

export default cadastrarUsuario;