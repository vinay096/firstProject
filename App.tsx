/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import ModalLesson from './src/components/Modal/ModalLesson';
import CustomModalDemo from './src/components/Modal/CustomModalDemo';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ModalLesson /> */}
      <CustomModalDemo />
    </SafeAreaView>
  );
}

export default App;
