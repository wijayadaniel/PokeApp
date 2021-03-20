import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {persistor, store} from './src/redux/store';
import MainStack from './src/navigation/MainStack';

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const cacheImages = (images) => {
    return images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const loadAssetsAsync = async () => {
    const imageAssets = cacheImages([require('./assets/img/placeholder.png')]);
    const fontAssets = cacheFonts([
      {VT323: require('./assets/fonts/VT323-Regular.ttf')},
    ]);
    await Promise.all([...imageAssets, ...fontAssets]);
  };

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={() => setAssetsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
