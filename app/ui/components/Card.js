import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 150,
    marginRight: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: 64,
    height: 64,
  },
  circle1: {
    height: 64,
    width: 64,
    borderRadius: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    position: 'absolute',
    top: -10,
    right: 0,
  },
  circle2: {
    height: 64,
    width: 64,
    borderRadius: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    position: 'absolute',
    top: 20,
    right: -30,
  },
});

const Card = ({color, name, icon}) => {
  return (
    <View style={[styles.card, {backgroundColor: color}]}>
      <Text style={styles.text}>{name}</Text>
      <Image style={styles.image} source={icon} />
      <View style={styles.circle1} />
      <View style={styles.circle2} />
    </View>
  );
};

export default Card;
