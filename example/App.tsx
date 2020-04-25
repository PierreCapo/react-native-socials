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
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {Instagram, Twitter, Reddit} from 'react-native-socials';
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
    <View>
      <SafeAreaView />

      <Reddit url="https://www.reddit.com/r/vscode/comments/ekl94v/voir_dark_theme/?utm_source=share&utm_medium=web2x" />
      <SafeAreaView />
    </View>
  );
};
/*
const App = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <SafeAreaView />
      <ScrollView>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 22,
            fontWeight: '600',
            margin: 30,
          }}>
          React Native Socials
        </Text>
        <Text style={{marginLeft: 16, fontSize: 18, fontWeight: '500'}}>
          Instagram:
        </Text>
        <View
          style={{
            shadowOpacity: 0.15,
            shadowRadius: 6,
            shadowOffset: {height: 0, width: 0},
            margin: 16,
          }}>
          <Instagram id="Bwjpxgph9DE" containerBorderRadius={8} />
        </View>
        <Text
          style={{
            marginLeft: 16,
            marginTop: 32,
            fontSize: 18,
            fontWeight: '500',
          }}>
          Twitter:
        </Text>
        <View
          style={{
            shadowOpacity: 0.15,
            shadowRadius: 6,
            shadowOffset: {height: 0, width: 0},
            borderRadius: 16,
            overflow: 'hidden',
            padding: 16,
          }}>
          <AuthTwitter
            id={'1251918969042358272'}
            language={'en'}
            containerBorderRadius={8}
          />
        </View>
        <View style={{height: 20}} />
      </ScrollView>
    </View>
  );
};
*/
export default App;
