/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import WebviewDemo from './src/components/webview/WebviewDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebviewDemo />
    </SafeAreaView>
  );
}

export default App;
