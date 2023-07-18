import * as React from 'react';
import {View, ScrollView, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function WelcomeScreen({navigation}) {

  return ( 
    <View style={styles.container}> 
      <Image style={styles.logo} source={require('../img/littleLemonLogo.png')} /> 
      <Text style={styles.title}> Little Lemon, your local Mediterranean Bistro </Text> 
        <Pressable onPress={() => navigation.navigate('Menu')}> 
          <Text style={styles.buttonText}>View Menu</Text> 
        </Pressable> 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#001001',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#000000',
    textAlign: 'center',
  },
  logo: {
    width: 350,
    height: 90,
    borderRadius: 20,
    margin: 30
  },
});
