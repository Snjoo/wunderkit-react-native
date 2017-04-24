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
  TouchableHighlight
} from 'react-native';

export default class wunderkit extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            Welcome to Wunderkit!
          </Text>
        </View>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>
            This is the best app of 2017
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableHighlight style={styles.button} onPress={() => console.log('Button 1 pressed')}><Text>Button 1</Text></TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => console.log('Button 2 pressed')}><Text>Button 2</Text></TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c8bfbf',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructionsContainer: {
    flex: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#a68888',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    alignSelf: 'flex-end'
  }
});

AppRegistry.registerComponent('wunderkit', () => wunderkit);
