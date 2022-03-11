import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (<NativeBaseProvider>
    <Routes />
  </NativeBaseProvider>


  );
}