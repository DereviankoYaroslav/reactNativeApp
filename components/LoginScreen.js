import { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Alert, Pressable, View} from 'react-native';

export default function LoginScreen({navigation}) {

    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [press, setPress] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {press === false? <View>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'Email'}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
            onFocus={() => {Alert.alert('E-mail is focussed')}} 
        />
        <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'Password'}
            secureTextEntry={true}
        />
        <Pressable onPress={() => {
          setPress(!press);
        }} style={styles.button}>
          <Text style={styles.headerText}>
            Log In
          </Text>
        </Pressable>
      </View> : 
      <Text style={styles.headerText}>
      You are logged in!
      </Text>}
      <Pressable onPress={() => navigation.popToTop()}>
        <Text>Home</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#000000',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#000000',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});

