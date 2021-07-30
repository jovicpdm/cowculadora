import React from 'react';

import TopAplication from './src/Components/TopAplication';
import Routes from './src/router'
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    RobotoRegular: require('./src/assets/fonts/Roboto-Regular.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <>
    <TopAplication/>
    <Routes/>    
    </>
  );
}
