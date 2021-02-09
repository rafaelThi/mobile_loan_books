import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/Routes/AppSatck.router';

export default function App() {
  return (
    <>
      <AppStack />
      <StatusBar
        style="dark"
        hidden={false}
        backgroundColor="#b6b6b6"
        translucent={false}
        networkActivityIndicatorVisible
      />
    </>
  );
}
