/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomListDemo from './src/components/CustomListDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomListDemo />
    </SafeAreaView>
  );
}

export default App;
