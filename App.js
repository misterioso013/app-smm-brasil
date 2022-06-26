import React from 'react';
import { StyleSheet, BackHandler } from 'react-native';
import {WebView} from 'react-native-webview';
import { getStatusBarHeight } from 'react-native-status-bar-height';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://smm.app.br/auth/login',
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    this.setState({url: 'https://smm.app.br/statistics'});
    return true;
  }

  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        style={styles.webView}
        onNavigationStateChange={(event) => {
          this.setState({url: event.url});
        }
        }
        sharedCookiesEnabled={true}
        cacheEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }
}



const styles = StyleSheet.create({
  webView: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
});

export default App;