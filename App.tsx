/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import RefDemo from './src/components/RefDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RefDemo />
    </SafeAreaView>
  );
}

export default App;
