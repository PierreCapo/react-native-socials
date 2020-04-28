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
    <View style={{width: '100%', height: '100%'}}>
      <SafeAreaView />
      <ScrollView
        contentContainerStyle={{backgroundColor: 'white', padding: 16}}>
        <View style={{paddingVertical: 16}}>
          <View
            style={{
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.25,
              borderRadius: 4,
            }}>
            <Instagram id={'Bwjpxgph9DE'} containerBorderRadius={4} />
          </View>
        </View>
        <View style={{paddingVertical: 16}}>
          <View
            style={{
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.25,
              borderRadius: 12,
              elevation: 2,
            }}>
            <AuthTwitter
              id={'1255068185935720450'}
              language={'en'}
              containerBorderRadius={12}
              onTweetPress={() => null}
            />
          </View>
        </View>
      </ScrollView>
      <SafeAreaView />
    </View>
  );
};
// 1000813977318944768
// 930561247191470082
// 1000844277847601152
export default App;
