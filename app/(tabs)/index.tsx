import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Definir as variáveis para as notas e faltas
export default function Index() {
  const [pmNota1, setPmNota1] = useState<number>(0);
  const [pmNota2, setPmNota2] = useState<number>(0);
  const [pmNota3, setPmNota3] = useState<number>(0);
  const [pmFaltas, setPmFaltas] = useState<number>(0); // Agora representa a % de faltas
  const [resultado, setResultado] = useState<string>('');

  // Função de validação
  const validarNotas = () => {
    // Reprovado por falta se a % de faltas for maior que 25%
    if (pmFaltas > 25) {
      setResultado('Reprovado por falta');
      return;
    }

    // Calcular a média das notas após descartar a menor
    const notas = [pmNota1, pmNota2, pmNota3];
    notas.sort((a, b) => a - b);
    const mediaCheckpoint = (notas[1] + notas[2]) / 2;

    // Reprovado por nota se a média for abaixo de 60
    if (mediaCheckpoint < 60) {
      setResultado('Reprovado por nota');
      return;
    }

    // Média final considerando 40% de mediaCheckpoint e 60% de Global Solutions (nota máxima 80)
    const mediaFinal = mediaCheckpoint * 0.4 + 80 * 0.6;
    setResultado(`Aprovado com média de ${mediaFinal.toFixed(2)}`);
  };

  // Função para limpar campos
  const limparCampos = () => {
    setPmNota1(0);
    setPmNota2(0);
    setPmNota3(0);
    setPmFaltas(0);
    setResultado('');
  };

  return (
    <View style={styles.container}>
      {/* Logo da FIAP clicável */}
      <TouchableOpacity onPress={limparCampos}>
        <Image source={require('../../assets/images/fiap-logo.png')} style={styles.logo} />
      </TouchableOpacity>

      {/* Campo de Nota 1 */}
      <Text style={styles.label}>Nota 1</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pmNota1.toString()}
        onChangeText={(text) => setPmNota1(parseFloat(text) || 0)}
      />
      
      {/* Campo de Nota 2 */}
      <Text style={styles.label}>Nota 2</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pmNota2.toString()}
        onChangeText={(text) => setPmNota2(parseFloat(text) || 0)}
      />
      
      {/* Campo de Nota 3 */}
      <Text style={styles.label}>Nota 3</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pmNota3.toString()}
        onChangeText={(text) => setPmNota3(parseFloat(text) || 0)}
      />
      
      {/* Campo de % de Faltas */}
      <Text style={styles.label}>% de Faltas</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pmFaltas.toString()}
        onChangeText={(text) => setPmFaltas(parseFloat(text) || 0)}
      />

      {/* Botão para validar as notas */}
      <Button title="Validar" onPress={validarNotas} />
      
      {/* Exibição do resultado */}
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
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingLeft: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});