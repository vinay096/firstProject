/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import StatusbarDemo from './src/components/StatusbarDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusbarDemo />
    </SafeAreaView>
  );
}

export default App;
