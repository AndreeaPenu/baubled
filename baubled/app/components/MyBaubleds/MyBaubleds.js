import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

export default class MyBaubleds extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text>
                    MyBaubleds
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('MyBaubleds',()=>MyBaubleds);

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#b4e5ed',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
})