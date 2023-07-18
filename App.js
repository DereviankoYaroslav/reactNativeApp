import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems'
import LoginScreen from './components/LoginScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

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
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = focused? "home": "home-outline";
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu-outline';
            } else if (route.name === 'Login') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen options={{title: "Home", headerTitle: (props) => <LogoTitle {...props} />}} name='Welcome' component={WelcomeScreen}></Tab.Screen>
        <Tab.Screen name='Menu' component={MenuItems}></Tab.Screen>
        <Tab.Screen name='Login' component={LoginScreen}></Tab.Screen>
      </Tab.Navigator>
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



