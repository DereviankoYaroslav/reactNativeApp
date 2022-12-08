import { StyleSheet, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
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

