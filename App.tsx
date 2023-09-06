/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ModalLesson from './src/components/ModalLesson';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalLesson />
    </SafeAreaView>
  );
}

export default App;
