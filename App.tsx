/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import GetAPIAsyncAwait from './src/components/API/GetAPIAsyncAwait';
import GetAPIFetchMethod from './src/components/API/GetAPIFetchMethod';
import GetAPIAxios from './src/components/API/GetAPIAxios';
import GetAPIList from './src/components/API/GetAPIList';
import GetAPIJsonServer from './src/components/API/GetAPIJsonServer';
import PostAPIJSONServer from './src/components/API/PostAPIJSONServer';
import PostAPITAkeInput from './src/components/API/PostAPITAkeInput';
import DeleteAPI from './src/components/API/DeleteAPI';
import UpdateAPI from './src/components/API/UpdateAPI';
import SearchAPIJsonServer from './src/components/API/SearchAPIJsonServer';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <GetAPIAsyncAwait /> */}
      {/* <GetAPIFetchMethod /> */}
      {/* <GetAPIAxios /> */}
      {/* <GetAPIList /> */}
      {/* <GetAPIJsonServer /> */}
      {/* <PostAPIJSONServer /> */}
      {/* <PostAPITAkeInput /> */}
      {/* <DeleteAPI /> */}
      {/* <UpdateAPI /> */}
      <SearchAPIJsonServer />
    </SafeAreaView>
  );
}

export default App;
