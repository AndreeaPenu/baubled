import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Home from './app/components/Home/Home';
import MyBaubleds from './app/components/MyBaubleds/MyBaubleds';
import MyLeds from './app/components/MyLeds/MyLeds';

import {
  StackNavigator,
} from 'react-navigation';

/* 
const SimpleApp = StackNavigator({
  MyBaubleds: { screen: MyBaubleds },
  MyLeds: { screen: MyLeds },
}); */

export default class App extends React.Component {
  render() {
    return (
      <View>
          <MyLeds/>
      </View>
    );
  }
}

AppRegistry.registerComponent('App',()=>App);

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */