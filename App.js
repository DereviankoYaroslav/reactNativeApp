import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems'
import LoginScreen from './components/LoginScreen';

const Stack = createNativeStackNavigator();

function LogoTitle(){
  return (
    <Image style={{
      height: 40,
      width: 300,
      resizeMode: 'contain',
      alignSelf: 'center'
    }
    } source={require('./img/logo.png')} /> 
  );
}

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'
      screenOptions={{ headerStyle: 
      { backgroundColor: '#333333' }, 
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign: 'center'}}>
        <Stack.Screen options={{title: "Home", headerTitle: (props) => <LogoTitle {...props} />}} name='Welcome' component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name='Menu' component={MenuItems}></Stack.Screen>
        <Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: { backgroundColor: '#333333' },
});



