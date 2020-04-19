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
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Instagram, Twitter} from 'react-native-socials';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Instagram id={'B-b6f7_gooQ'} />
          <Twitter id={'1251870993628434433'} language={'ru'} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
