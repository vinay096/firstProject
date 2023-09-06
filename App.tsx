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
import WebMethods from './src/components/webview/WebMethods';
import WebNavigationGesture from './src/components/webview/WebNavigationGesture';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <WebviewDemo /> */}
      {/* <WebBeforeLoad /> */}
      {/* <WebLoader /> */}
      {/* <WebMethods /> */}
      <WebNavigationGesture />
    </SafeAreaView>
  );
}

export default App;
