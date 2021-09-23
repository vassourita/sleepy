import React from 'react';
import { useFonts, Ubuntu_500Medium, Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";
import { SourceSansPro_400Regular, SourceSansPro_600SemiBold } from "@expo-google-fonts/source-sans-pro";
import { Fragment } from "react";
import { View } from 'react-native';

export function Fonts({ children }: { children: React.ReactNode }): JSX.Element {
  let [fontsLoaded] = useFonts({
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold
  });

  if (!fontsLoaded) {
    return <View />
  } else {
    return (
      <Fragment>{children}</Fragment>
    )
  }
}