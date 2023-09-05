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
import FlatListHide from './src/components/Flatlist/FlatListHide';
import SingleSelect from './src/components/Flatlist/SingleSelect';
import MultiSelect from './src/components/Flatlist/MultiSelect';
import SearchFilter from './src/components/Flatlist/SearchFilter';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <FlatListVertical /> */}
      {/* <FlatListHorizontal /> */}
      {/* <FlatListNested /> */}
      {/* <FlatListHide /> */}
      {/* <SingleSelect /> */}
      {/* <MultiSelect /> */}
      <SearchFilter />
    </SafeAreaView>
  );
}

export default App;
