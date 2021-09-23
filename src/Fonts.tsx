import React, { Fragment } from 'react';
import { Image, View } from 'react-native';
import { useFonts, Ubuntu_500Medium, Ubuntu_700Bold, Ubuntu_700Bold_Italic } from "@expo-google-fonts/ubuntu";
import { SourceSansPro_400Regular, SourceSansPro_600SemiBold } from "@expo-google-fonts/source-sans-pro";
import { LoadingScreen } from './screens/LoadingScreen';

export function Fonts({ children }: { children: React.ReactNode }): JSX.Element {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <LoadingScreen />
    )
  } else {
    return (
      <Fragment>{children}</Fragment>
    )
  }
}