import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 18,
  },
});

const InputBox = ({style}) => {
  return (
    <View style={[styles.inputContainer, {...style}]}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#c3c3c3"
        placeholder="&#9906;  USA, New York, Lindon Blvd."
      />
    </View>
  );
};

export default InputBox;
