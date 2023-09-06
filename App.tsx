/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import SectionListDemo from './src/components/SectionListDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SectionListDemo />
    </SafeAreaView>
  );
}

export default App;
