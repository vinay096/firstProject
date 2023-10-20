/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ValidationForm from './src/components/ValidationForm';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ValidationForm />
    </SafeAreaView>
  );
}

export default App;
