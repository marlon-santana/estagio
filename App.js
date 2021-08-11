import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Home } from './src/components/home/Home';
import { NewIn } from './src/components/newIn/NewIn';

export default function App() {
  return (
    <View >
      <Home />
      <NewIn />
      <StatusBar style="auto" />
    </View>
  );
}

