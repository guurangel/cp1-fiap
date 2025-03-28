import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: 'numeric' | 'default';
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChangeText, keyboardType }) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
    width: '80%',
    alignItems: 'flex-start',
  },
  input: {
    borderBottomWidth: 1,
    width: '100%',
    padding: 8,
    fontSize: 16,
  },
});

export default InputField;
