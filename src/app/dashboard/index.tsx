import React, { useState } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Calendar } from 'react-native-calendars';



const especialidades = {
  Psicólogo: ['Dr. Ana Paula', 'Dr. João Mendes'],
  'Clínico Geral': ['Dr. Carla Silva', 'Dr. Roberto Lima'],
  Cardiologista: ['Dr. Marcos Paulo', 'Dr. Fernanda Dias'],
  Pediatria: ['Dr. Lucas Andrade', 'Dr. Patrícia Costa'],
};

export default function Dashboard() {
  const [tipoConsulta, setTipoConsulta] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [medico, setMedico] = useState('');
  const [data, setData] = useState(new Date());
  const [showCalendario, setShowCalendario] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || data;
    setShowCalendario(Platform.OS === 'ios');
    if (event.type !== 'dismissed') {
      setData(currentDate);
    }
  };
  

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Agendamentos</Text>

      <Text style={{ marginBottom: 5 }}>Tipo de Consulta:</Text>
      <Picker
        selectedValue={tipoConsulta}
        onValueChange={(itemValue) => setTipoConsulta(itemValue)}
      >
        <Picker.Item label="Selecione o tipo de consulta" value="" />
        <Picker.Item label="Consulta Presencial" value="presencial" />
        <Picker.Item label="Tele Consulta" value="teleconsulta" />
      </Picker>

      {tipoConsulta ? (
        <>
          <Text style={{ marginTop: 20, marginBottom: 5 }}>Especialidade:</Text>
          <Picker
            selectedValue={especialidade}
            onValueChange={(itemValue) => {
              setEspecialidade(itemValue);
              setMedico('');
            }}
          >
            <Picker.Item label="Selecione a especialidade" value="" />
            {Object.keys(especialidades).map((esp) => (
              <Picker.Item key={esp} label={esp} value={esp} />
            ))}
          </Picker>
        </>
      ) : null}
 
      {especialidade ? (
        <>
          <Text style={{ marginTop: 20, marginBottom: 5 }}>Médico:</Text>
          <Picker
            selectedValue={medico}
            onValueChange={(itemValue) => setMedico(itemValue)}
          >
            <Picker.Item label="Selecione o médico" value="" />
            {especialidades[especialidade].map((doc) => (
              <Picker.Item key={doc} label={doc} value={doc} />
            ))}
          </Picker>
        </>
      ) : null}


      {medico ? (
        <>
          <Text style={{ marginTop: 20 }}>Data da Consulta:</Text>
          <Button title="Selecionar Data" onPress={() => setShowCalendario(true)} />
          {showCalendario && (
            <DateTimePicker
              value={data}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <Text style={{ marginTop: 10 }}>Data selecionada: {data.toLocaleDateString()}</Text>
        </>
      ) : null}

{medico && data ? (
  <>
    <View style={{ marginTop: 20 }}>
    <Text style={{ marginTop: 20, marginBottom: 10 }}>Selecione uma data:</Text>
<Calendar
  onDayPress={(day) => {
    setData(new Date(day.dateString));
  }}
  markedDates={{
    [data.toISOString().split('T')[0]]: { selected: true, selectedColor: '#00adf5' },
  }}
  theme={{
    selectedDayBackgroundColor: '#00adf5',
    todayTextColor: '#00adf5',
    arrowColor: '#00adf5',
  }}
/>
<Text style={{ marginTop: 10 }}>
  Data selecionada: {data.toLocaleDateString()}
</Text>

    </View>
  </>
) : null}

    </View>

    
  );
}

