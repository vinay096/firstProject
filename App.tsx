/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import PlatformDemo from './src/components/PlatformDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <PlatformDemo />
    </SafeAreaView>
  );
}

export default App;
