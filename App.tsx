import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/Routes/AppSatck.router';

export default function App() {
  return (
    <>
    <AppStack />
      <StatusBar style="light" />
    </>
  );
}