import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform, Alert } from 'react-native';

export default function App() {
  const [codigo, setCodigo] = useState('');
  const [pecaProduzida, setPecaProduzida] = useState('');
  const [servicoRealizado, setServicoRealizado] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [registro, setRegistro] = useState<string[]>([]);

  const validateInputs = () => {
    const timeFormat = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!codigo || !pecaProduzida || !servicoRealizado || !horaInicio || !horaFim) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return false;
    }
    if (!timeFormat.test(horaInicio) || !timeFormat.test(horaFim)) {
      Alert.alert('Erro', 'Hora de início e fim devem estar no formato hh:mm.');
      return false;
    }
    return true;
  };

  const registrarProducao = () => {
    if (validateInputs()) {
      const novoRegistro = `Código: ${codigo}, Peça: ${pecaProduzida}, Serviço: ${servicoRealizado}, Início: ${horaInicio}, Fim: ${horaFim}`;
      setRegistro([...registro, novoRegistro]);
      setCodigo('');
      setPecaProduzida('');
      setServicoRealizado('');
      setHoraInicio('');
      setHoraFim('');
    }
  };

  const clearRegistros = () => {
    setRegistro([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Indicador de Produção</Text>

      <TextInput
        style={styles.input}
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
      />
      <TextInput
        style={styles.input}
        placeholder="Peça Produzida"
        value={pecaProduzida}
        onChangeText={setPecaProduzida}
      />
      <TextInput
        style={styles.input}
        placeholder="Serviço Realizado"
        value={servicoRealizado}
        onChangeText={setServicoRealizado}
      />
      <TextInput
        style={styles.input}
        placeholder="Hora de Início (hh:mm)"
        value={horaInicio}
        onChangeText={setHoraInicio}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Hora de Fim (hh:mm)"
        value={horaFim}
        onChangeText={setHoraFim}
        keyboardType="numeric"
      />

      <Button title="Registrar Produção" onPress={registrarProducao} />
      <Button title="Limpar Registros" onPress={clearRegistros} color="red" />

      <View style={styles.registroContainer}>
        {registro.map((item, index) => (
          <Text key={index} style={styles.registroItem}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  registroContainer: {
    marginTop: 20,
  },
  registroItem: {
    fontSize: 16,
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
});
