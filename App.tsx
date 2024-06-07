import React, { useEffect } from 'react';
import {  StatusBar } from "react-native";
import { SignIn } from './src/screens/Signin';
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import * as SplashScreen from 'expo-splash-screen';
import { Background } from './src/components/BackGround';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();

    }
  }, [fontsLoaded] )

  if (!fontsLoaded) {
    return null
  }

  return (
    <Background>
      <StatusBar translucent barStyle="light-content"  backgroundColor="transparent"  />
      <SignIn />
    </Background>
  );
}

