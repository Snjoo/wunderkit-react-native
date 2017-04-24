/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';
import FirstScene from './src/scenes/Welcome'

export default class wunderkit extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: FirstScene,
          title: 'Welcome',
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('wunderkit', () => wunderkit);
