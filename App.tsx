import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppContextProvider } from './src/AppContext';
import { Fonts } from './src/Fonts';
import { Router } from './src/Router';

export default function App() {
  return (
    <AppContextProvider>
      <Fonts>
        <Router />
        <StatusBar style="auto" />
      </Fonts>
    </AppContextProvider>
  );
}
