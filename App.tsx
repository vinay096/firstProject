/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import UnmountCompoUseEffect from './src/components/UnmountCompo/UnmountCompoUseEffect';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UnmountCompoUseEffect />
    </SafeAreaView>
  );
}

export default App;
