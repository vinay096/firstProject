/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import CustomCompoFlatList from './src/components/CustomCompoFlatList';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomCompoFlatList />
    </SafeAreaView>
  );
}

export default App;
