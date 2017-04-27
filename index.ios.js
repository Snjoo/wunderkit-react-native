/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import Scene1 from './src/components/Scene1';

export default class wunderkit extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Scene1,
          title: 'To serve man',
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('wunderkit', () => wunderkit);
