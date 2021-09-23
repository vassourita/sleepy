import React from 'react';
import { Image, ImageBackground } from 'react-native'

import Logo from '../../assets/Sleepy.png'
import BackgroundImage from '../../assets/Background.png'

export const LoadingScreen = () => (
  <ImageBackground source={BackgroundImage} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
    <Image source={Logo} style={{ height: 80, width: 220, resizeMode: 'contain' }} />
  </ImageBackground>
)
