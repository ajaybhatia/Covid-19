import React from 'react';
import {Text, StyleSheet, TouchableNativeFeedback, View} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    width: '85%',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5375F0',
  },
});

function Button({onPress}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonLabel}>Let's Go</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default Button;
