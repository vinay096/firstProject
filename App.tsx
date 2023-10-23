/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ReduxDemo from './src/components/ReduxDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ReduxDemo />
    </SafeAreaView>
  );
}

export default App;
