import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  ScrollView
} from 'react-native';

export default class Scene3 extends Component {
  constructor() {
    super()

    this.state = {
      content: []
    }
  }

  fetchMassiveJSON() {
    fetch('https://raw.githubusercontent.com/Snjoo/wunderkit-react-native/07-fetch-scrollview/assets/generated.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          content: res
        })
      })
  }

  componentWillMount() {
    this.fetchMassiveJSON();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {
          this.state.content.map((e, index) => (
            <View key={ e._id }>
              <Text style={[styles.instructions], {color: `rgba(${index % 255}, 64, 64, 1)`}}>{ e.name }</Text>
            </View>
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
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
