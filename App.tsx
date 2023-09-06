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
import WebLoader from './src/components/webview/WebLoader';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <WebviewDemo /> */}
      {/* <WebBeforeLoad /> */}
      <WebLoader />
    </SafeAreaView>
  );
}

export default App;
