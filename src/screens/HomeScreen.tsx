import React from 'react'
import { Text, View } from "react-native";

import { Header } from '../components/Header';
import { ScreenContainer } from '../components/ScreenContainer';
import { Card } from '../components/Card';
import { styles } from './HomeScreen.styles';
import { useAppContext } from '../AppContext';

export function HomeScreen() {
  const app = useAppContext();

  const currentLocationMessage = app.permissionsGranted
    ? app.gpsOn
      ? app.currentLocation
        ? `${app.currentLocation.latitude}, ${app.currentLocation.longitude}`
        : 'Obtendo localização...'
      : 'Ative o GPS para obter sua localização.'
    : 'Permita o acesso ao seu GPS para obter sua localização.';

  return (
    <ScreenContainer style={[{ paddingHorizontal: 20 }]}>
      <Header />
      <View style={styles.container}>
        <Card
          onTap={() => app.updateCurrentLocation()}
          title="Localização Atual"
          colors={['#421664', '#7844A0']}
          centerIcon="chevron-right"
          text={currentLocationMessage}
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
            width="47%"
          />
          <Card
            title="Iniciar"
            colors={['#AD0C80', '#FF6D76']}
            bottomIcon="play"
            width="47%"
            disabled
          />
        </View>
      </View>
    </ScreenContainer>
  );
}