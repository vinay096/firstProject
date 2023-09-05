/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import GridDemo from './src/components/GridDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GridDemo />
    </SafeAreaView>
  );
}

export default App;
