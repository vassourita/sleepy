import React from 'react'
import { Text, View } from "react-native";

import { Header } from '../components/Header';
import { ScreenContainer } from '../components/ScreenContainer';
import { Card } from '../components/Card';
import { styles } from './HomeScreen.styles';

export function HomeScreen() {
  return (
    <ScreenContainer style={[{ paddingHorizontal: 20 }]}>
      <Header />
      <View style={styles.container}>
        <Card
          title="Localização Atual"
          colors={['#421664', '#7844A0']}
          centerIcon="chevron-right"
          text="Permita o acesso ao seu GPS para obter sua localização."
        />
        <Card
          title="Destino"
          colors={['#9B36BE', '#D350C6']}
          centerIcon="chevron-right"
          text="Toque aqui e selecione seu destino no mapa."
        />
        <View style={styles.dualCardContainer}>
          <Card
            title="Ajustes"
            colors={['#CF7623', '#FFC061']}
            bottomIcon="sliders"
            text=""
            width="47%"
          />
          <Card
            title="Iniciar"
            colors={['#AD0C80', '#FF6D76']}
            bottomIcon="play"
            text=""
            width="47%"
          />
        </View>
      </View>
    </ScreenContainer>
  );
}