import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Fonts } from './src/Fonts';
import { Router } from './src/Router';

export default function App() {
  return (
    <Fonts>
      <Router />
      <StatusBar style="auto" />
    </Fonts>
  );
}
