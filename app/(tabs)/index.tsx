import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Index() {
  const [grNota1, setGrNota1] = useState<number>(0);
  const [grNota2, setGrNota2] = useState<number>(0);
  const [grNota3, setGrNota3] = useState<number>(0);
  const [grFaltas, setGrFaltas] = useState<number>(0);
  const [resultado, setResultado] = useState<string>('');

  const validarNotas = () => {
    if (grFaltas > 25) {
      setResultado('Reprovado por falta');
      return;
    }

    const notas = [grNota1, grNota2, grNota3];
    notas.sort((a, b) => a - b);
    const mediaNotas = (notas[1] + notas[2]) / 2;

    if (mediaNotas < 60) {
      setResultado('Reprovado por nota');
      return;
    }

    setResultado(`Aprovado com média de ${mediaNotas.toFixed(2)}`);
  };

  const limparCampos = () => {
    setGrNota1(0);
    setGrNota2(0);
    setGrNota3(0);
    setGrFaltas(0);
    setResultado('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={limparCampos}>
        <Image source={require('../../assets/images/fiap-logo.png')} style={styles.logo} />
      </TouchableOpacity>

      <Text style={styles.label}>Nota 1</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={grNota1.toString()}
        onChangeText={(text) => setGrNota1(parseFloat(text) || 0)}
      />
      
      <Text style={styles.label}>Nota 2</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={grNota2.toString()}
        onChangeText={(text) => setGrNota2(parseFloat(text) || 0)}
      />
      
      <Text style={styles.label}>Nota 3</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={grNota3.toString()}
        onChangeText={(text) => setGrNota3(parseFloat(text) || 0)}
      />
      
      <Text style={styles.label}>% de Faltas</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={grFaltas.toString()}
        onChangeText={(text) => setGrFaltas(parseFloat(text) || 0)}
      />

      <Button title="Validar" onPress={validarNotas} />
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 18,
    color: '#000000',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 10,
    color: '#000000',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});
