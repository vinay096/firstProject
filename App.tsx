/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import NavigatorCompo from './src/components/StackNavigatorCompo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigatorCompo />
    </SafeAreaView>
  );
}

export default App;
