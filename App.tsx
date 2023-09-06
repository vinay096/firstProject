/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import LoaderDemo from './src/components/LoaderDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoaderDemo />
    </SafeAreaView>
  );
}

export default App;
