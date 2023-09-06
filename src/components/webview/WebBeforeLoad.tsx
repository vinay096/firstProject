/*  Communicating between JS and Native
React Native -> Web: The  injectedJavaScriptBeforeContentLoaded prop
*/

import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebBeforeLoad() {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'https://react.dev/'}}
        originWhitelist={['*']}
        injectedJavaScriptBeforeContentLoaded={`document.addEventListener("DOMContentLoaded", function(){
            alert(document.title)
        })`}
      />
    </View>
  );
}
