import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';
import MenuItems from './components/MenuItems';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
