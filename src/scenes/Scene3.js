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
      data: []
    }
  }

  componentWillMount() {
    fetch('https://raw.githubusercontent.com/Snjoo/wunderkit-react-native/07-fetch-scrollview/assets/generated.json')
      .then(data => data.json())
      .then(json => this.setState({data: json}))
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.data.map(person =>
          <View style={styles.personContainer} key={person._id}>
            <Text>{person.name}</Text>
            <Text>{person.age}</Text>
            <Text>{person.company}</Text>
            <Text>{person.gender}</Text>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c8bfbf',
  },
  personContainer: {
    padding: 15,
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
