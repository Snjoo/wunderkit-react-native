import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';
import Scene3 from './Scene3';
import Scene2 from './Scene2';

export default class Scene1 extends Component {
  onFooPress() {
    console.log("Foo pressed!");
    this.props.navigator.push({title:"Caedite eos.", component: Scene2})
  }

  onBarPress() {
    console.log("Bar pressed!");
    this.props.navigator.push({title:"Caedite eos.", component: Scene3})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            Welcome to Wunderkit!

            Bier ist gut!
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={() => this.onFooPress()}>
            <Text>Foo</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.onBarPress()}>
            <Text>Bar</Text>
          </TouchableHighlight>
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
    backgroundColor: '#0a0a0a',
  },
  welcomeContainer: {
    marginTop: 66.6,
    flex: 1,
    justifyContent: 'flex-start'
  },
  textContainer: {
    flex: 1
  },
  button: {
    flex: 1,
    padding: 5,
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'gray',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  instructions: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
});
