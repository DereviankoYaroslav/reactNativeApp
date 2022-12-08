import { Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={{ flex: 0.1, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 15,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}