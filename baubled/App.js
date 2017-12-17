import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Home from './app/components/Home/Home';
import MyBaubleds from './app/components/MyBaubleds/MyBaubleds';
import MyLeds from './app/components/MyLeds/MyLeds';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MyLeds/>
      </View>
    );
  }
}

AppRegistry.registerComponent('App',()=>App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
