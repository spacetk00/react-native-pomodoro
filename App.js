import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';

import Header from './src/componentes/Header';
import Main from './src/componentes/Main';

import SplashScreen from 'react-native-splash-screen';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NativeBaseProvider config={config}>
      <Header />
      <Main />
    </NativeBaseProvider>
  );
}
