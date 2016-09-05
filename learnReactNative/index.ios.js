/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
import CaveText from './components/caveText';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class learnReactNative extends Component {
    render() {
        const props = {
            foo:1,
            bar:1
        }
        return (
            <View style={styles.container}>
                <CaveText {...props} foo="2" />
            </View>
        );
  }
}

AppRegistry.registerComponent('learnReactNative', () => learnReactNative);
