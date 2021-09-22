import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Router } from './src/Router';

export default function App() {
  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
