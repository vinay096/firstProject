/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FlatListVertical from './src/components/Flatlist/FlatListVertical';
import FlatListHorizontal from './src/components/Flatlist/FlatListHorizontal';
import FlatListNested from './src/components/Flatlist/FlatListNested';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <FlatListVertical /> */}
      {/* <FlatListHorizontal /> */}
      <FlatListNested />
    </SafeAreaView>
  );
}

export default App;
