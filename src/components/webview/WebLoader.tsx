/*  
 to show the loading view on the first load
*/

import React from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebLoader() {
  //   const height = Dimensions.get('screen').height;
  //   const width = Dimensions.get('screen').width;

  const webViewLoader = () => (
    <View style={{flex: 1}}>
      <ActivityIndicator
        size={100}
        color={'skyblue'}
        //   style={{position: 'absolute', top: height / 2, left: width / 2.1}}
      />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://reactnative.dev/',
        }}
        // source={{
        //   html: '<h1>This is a static HTML source!</h1><a href="https://www.w3schools.com" target="" >Visit W3Schools.com!</a>',
        // }}
        startInLoadingState={true}
        renderLoading={webViewLoader}
        // onError={syntheticEvent => {
        //   const {nativeEvent} = syntheticEvent;
        //   console.warn('WebView error: ', nativeEvent);
        // }}
        //
      />
    </View>
  );
}
