import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';
import Scene2 from './Scene2'
import Scene3 from './Scene3'

export default class FirstScene extends Component {

  navigateToScene2() {
    this.props.navigator.push({
      title: 'Second scene',
      component: Scene2,
    });
  }

  navigateToScene3() {
    this.props.navigator.push({
      title: 'Third scene',
      component: Scene3,
    });
  }

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
          <TouchableHighlight style={styles.button} onPress={() => this.navigateToScene2()}><Text>Scene 2</Text></TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigateToScene3()}><Text>Scene 3</Text></TouchableHighlight>
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
    justifyContent: 'center',
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
