import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  Image
} from 'react-native';

export default class Scene2 extends Component {
  constructor() {
    super()
    this.state = {
      backgroundColor: '#c8bfbf'
    }
  }

  toggleBackgroundColor() {
    if (this.state.backgroundColor === '#c8bfbf') {
      this.setState({backgroundColor: '#6b6b47'})
    } else {
      this.setState({backgroundColor: '#c8bfbf'})
    }
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            This is second scene
          </Text>
          <Image
            source={{uri: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'}}
            style={styles.image}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={() => this.toggleBackgroundColor()}>
          <Text>Toggle color</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#a68888',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  image: {
    resizeMode: 'contain',
    height: 150,
  }
});
