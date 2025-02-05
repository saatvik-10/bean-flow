import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import { Link } from 'expo-router';
import icedCoffeeImg from '@/assets/images/iced-coffee.png';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href='/menu' style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Our Menu</Text>
          </Pressable>
        </Link>

        <Link href='/contact' style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Contact us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    textDecorationLine: 'underline',
    padding: 4,
  },
  btn: {
    height: 50,
    width: 120,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'center',
    padding: 6,
    marginBottom: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
});
