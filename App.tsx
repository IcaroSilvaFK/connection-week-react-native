import React from 'react';
import { StatusBar, NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_500Medium,
} from '@expo-google-fonts/archivo';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts as useInterFont,
} from '@expo-google-fonts/inter';

import Reactotrom from './src/configs/reactotron-config';
import { theme } from './src/styles/theme';
import { Home } from './src/screens/Home';

if (__DEV__) Reactotrom.connect();

export default function App() {
  const [isLoadedArchivo] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
  });
  const [isLoadedInter] = useInterFont({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      {isLoadedArchivo && isLoadedInter && <Home />}
    </NativeBaseProvider>
  );
}
