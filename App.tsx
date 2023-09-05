/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FlatListVertical from './src/components/Flatlist/FlatListVertical';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <FlatListVertical />
    </SafeAreaView>
  );
}

export default App;
