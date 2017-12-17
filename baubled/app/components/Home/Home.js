import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Dimensions, Button} from 'react-native';

export default class Home extends React.Component {
    onPress(){
        console.log('My Baubleds is Pressed');
    }
    render() {
        return (
            <View style={styles.screen}>
                <Image source={require('./bauble.png')} />
                <Text>
                    Welkome to Baubled
                </Text>

                <Button
                    title="My Baubleds"
                    onPress={this.onPress}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('Home',()=>Home);

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#b4e5ed',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
})