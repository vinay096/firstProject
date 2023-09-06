/*  
on navigation various tasks can be performed as per our need
*/

import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebNavigationStateChange() {
  const [showWebView, setShowWebView] = useState(true);
  const webViewRef = useRef<WebView>(null);

  const handleWebViewNavigationStateChange = (newNavState: any) => {
    const {url} = newNavState;
    if (url.includes('/api')) {
      setShowWebView(false);
    }

    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      webViewRef.current?.injectJavaScript(redirectTo);
    }
  };

  return (
    <View style={{flex: 1}}>
      {showWebView ? (
        <WebView
          ref={webViewRef}
          source={{uri: 'https://openai.com/'}}
          onNavigationStateChange={handleWebViewNavigationStateChange}
        />
      ) : (
        <View>
          <Text>welcome</Text>
        </View>
      )}
    </View>
  );
}
