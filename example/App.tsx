/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Instagram, Twitter} from 'react-native-socials';
import {credentials} from './config';

const AuthTwitter = (props) => {
  return (
    <Twitter
      {...props}
      consumerKey={credentials.consumerKey}
      consumerSecret={credentials.consumerSecret}
    />
  );
};

const App = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'red'}}>
      <AuthTwitter id={'1251870993628434433'} language={'ru'} />
      <AuthTwitter id={'1253348918441754625'} language={'ru'} />
    </View>
  );
};

export default App;
