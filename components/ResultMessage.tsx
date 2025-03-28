import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ResultMessageProps {
  message: string;
}

const ResultMessage: React.FC<ResultMessageProps> = ({ message }) => {
  if (!message) return null; // Não exibe nada se não houver mensagem

  return <Text style={styles.result}>{message}</Text>;
};

const styles = StyleSheet.create({
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultMessage;