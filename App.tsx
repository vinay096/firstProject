/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import PressableDemo from './src/components/PressableDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PressableDemo />
    </SafeAreaView>
  );
}

export default App;
