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
    super();
    this.state = {
      backgroundColor: '#DEA'
    }
  }

  toggleBackground() {
    if (this.state.backgroundColor === '#DEA') {
        this.setState({
          backgroundColor: 'rgba(250, 220, 166, 0.8)'
        });
    } else {
      this.setState({
        backgroundColor: '#DEA'
      })
    }
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>
            Welcome to Wunderkit!

            Bier ist gut!
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: 'https://c1.staticflickr.com/5/4009/4523144699_8bb453698f_m.jpg'}}
            />
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
          <TouchableHighlight underlayColor='red' onPress={() => this.toggleBackground()} style={styles.button}>
            <Text>Switchhh</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0a'
  },
  textContainer: {
    flex: 1
  },
  imageContainer: {
    padding: 10
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  button: {
    flex: 1,
    padding: 5,
    margin: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'orange',
    borderRadius: 3
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
  }
});
