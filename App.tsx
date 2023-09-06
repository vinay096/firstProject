/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ButtonsDemo from './src/components/ButtonsDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ButtonsDemo />
    </SafeAreaView>
  );
}

export default App;
