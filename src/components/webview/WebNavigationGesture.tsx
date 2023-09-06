/*  
Page navigation gesture and button support.
provide support for conventional mobile page navigation:hardware back button/gesture on Android.
*/

import React, {useEffect, useRef} from 'react';
import {BackHandler, Platform, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebNavigationGesture() {
  const webViewRef = useRef<WebView>(null);

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onAndroidBackPress,
        );
      };
    }
  }, []);
  return (
    <View style={{flex: 1}}>
      <WebView ref={webViewRef} source={{uri: 'https://reactnative.dev'}} />
    </View>
  );
}
