import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, BackHandler, Image, View } from 'react-native';
import {WebView } from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function App() {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  
  const handleBackPress = () => {
    if (canGoBack) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }
  } , [canGoBack]);

  const onNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  }

    return (
      <WebView
        source={{uri: 'https://smm.app.br/auth/login'}}
        style={styles.webView}
        ref={webViewRef}
        sharedCookiesEnabled={true}
        cacheEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onNavigationStateChange={onNavigationStateChange}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.preload}>
            <Image source={require('./assets/preload.gif')} />
          </View>
        )}
      />
    );
  }


const styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  preload: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'

  }
});