import React from 'react';
import {StyleSheet} from 'react-native';

import TopAplication from './src/Components/TopAplication';
import Routes from './src/router'
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  const [loaded] = useFonts({
    RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <TopAplication/>
        <Routes/>
        <FlashMessage duration={1000} style={styles.alert} />    
      </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  alert:{
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 64,
    height: 16,
    alignItems: 'center'
  }
})
