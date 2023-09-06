/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import UnmountCompoUseEffect from './src/components/UnmountCompo/UnmountCompoUseEffect';
import UnmountCompoDemo from './src/components/UnmountCompo/UnmountCompoDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <UnmountCompoUseEffect /> */}
      <UnmountCompoDemo />
    </SafeAreaView>
  );
}

export default App;
