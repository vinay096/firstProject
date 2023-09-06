/*  
cover various methods of Webview
*/

import React, {useRef, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {WebView} from 'react-native-webview';

export default function WebMethods() {
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const handleWebViewNavigationStateChange = (navState: any) => {
    const back = navState.canGoBack;
    const forward = navState.canGoForward;
    console.warn('loading>>', navState.loading);
    console.warn('title>>', navState.title);
    console.warn('url>>>>', navState.url);

    setCanGoBack(back);
    setCanGoForward(forward);
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://reactnative.dev'}}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        // originWhitelist={['https://github.com/facebook/react-native']}
      />
      <View style={[styles.main, !canGoBack && !canGoForward && styles.$hide]}>
        {canGoBack ? (
          <Button
            title="Back"
            onPress={() => {
              webViewRef.current?.goBack();
            }}
          />
        ) : null}
        {canGoForward ? (
          <Button
            title="Forward"
            onPress={() => {
              webViewRef.current?.goForward();
            }}
          />
        ) : null}

        <Button
          title="Reload"
          onPress={() => {
            webViewRef.current?.reload();
          }}
        />
        <Button
          title="Alert"
          onPress={() => {
            webViewRef.current?.injectJavaScript('alert(document.title)');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  $hide: {display: 'none'}, //to hide the styles according to our requirement
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
});
