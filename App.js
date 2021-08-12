import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Home } from './src/components/home/Home';
import { NewIn } from './src/components/newIn/NewIn';
import { Preview } from './src/components/preview/Preview';
import { Menu } from './src/components/menu/Menu';


export default function App() {
  return (
    <View >
      <Home />
      < NewIn />
      < Preview />
      < Menu />
      <StatusBar style="auto" />
    </View>
  );
}

