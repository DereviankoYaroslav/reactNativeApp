import { View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <Header />
    </View>
    <View style={{ backgroundColor: '#495E57' }}>
      <Footer />
    </View>
    </>
  );
}

