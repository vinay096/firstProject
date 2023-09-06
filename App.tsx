/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import WebviewDemo from './src/components/webview/WebviewDemo';
import WebBeforeLoad from './src/components/webview/WebBeforeLoad';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <WebviewDemo /> */}
      <WebBeforeLoad />
    </SafeAreaView>
  );
}

export default App;
