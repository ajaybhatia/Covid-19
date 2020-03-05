import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5375F0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: 200,
  },
  image: {flex: 1, borderRadius: 200},
  taglineContainer: {
    height: 70,
    justifyContent: 'space-between',
  },
  tagline: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    textAlign: 'center',
  },
});

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1580094687196-cbc2bdab67e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          }}
        />
      </View>
      <View style={styles.taglineContainer}>
        <Text style={styles.tagline}>Find What You Need</Text>
        <Text style={styles.tagline}>To Survive Covid-19</Text>
      </View>
      <Button onPress={() => navigation.navigate('Protection')} />
    </View>
  );
}

export default Home;
