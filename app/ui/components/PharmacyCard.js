import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 130,
    justifyContent: 'flex-end',
    marginVertical: 5,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 0.85,
  },
  pharmacyImageContainer: {
    height: 130,
    width: 100,
    position: 'absolute',
    zIndex: 1,
  },
  pharmacyImage: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  content: {
    position: 'relative',
    left: 115,
    top: 10,
  },
  pharmacyName: {
    fontSize: 20,
    fontWeight: '600',
  },
  pharmacyAddress: {
    fontSize: 16,
    color: '#a3a3a3',
  },
  mt(val) {
    return {
      marginTop: val,
    };
  },
});

const PharmacyCard = ({image, style, name, address}) => {
  return (
    <View style={[styles.container, {...style}]}>
      <View style={styles.pharmacyImageContainer}>
        <Image
          style={styles.pharmacyImage}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.content}>
          <View>
            <Text style={styles.pharmacyName}>{name}</Text>
          </View>
          <View style={styles.mt(10)}>
            <Text style={styles.pharmacyAddress}>&#9906; {address}</Text>
          </View>
          <View style={[styles.mt(10), {flexDirection: 'row'}]}>
            <Image
              style={styles.image}
              source={require('../../assets/images/heart_colored.png')}
            />
            <Image
              style={styles.image}
              source={require('../../assets/images/spray_colored.png')}
            />
            <Image
              style={styles.image}
              source={require('../../assets/images/gloves_colored.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PharmacyCard;
