import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Dimensions, Button, TouchableHighlight} from 'react-native';
// const { navigate } = this.props.navigation;
export default class Home extends React.Component {
/*          static navigationOptions = {
        title: 'Home',
    };  */
    onPress(){
        console.log('My Baubleds is Pressed');
    }
    render() {
        return (
            <View style={styles.screen}>
                <Image style={styles.image} source={require('./bauble-darkblue.png')} />
                <Text>
                  
                </Text>


                <TouchableHighlight
                    style={styles.btnBaubleds}
                    onPress={this.onPress}
                >
                <Text style={styles.txt}> MY BAUBLEDS </Text>
                </TouchableHighlight>


                <TouchableHighlight
                    style={styles.btnBluetooth}
                    onPress={this.onPress}
                >
                <Text style={styles.txt}> BLUETOOTH ON </Text>
                </TouchableHighlight>


                
                <TouchableHighlight
                    style={styles.btnHelp}
                    onPress={this.onPress}
                >
                <Text style={styles.txt}> HELP </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

AppRegistry.registerComponent('Home',()=>Home);

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#1b2c44',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    image:{
        alignSelf:'center',
        marginTop:40,
        height:300,
        width:300
    },
    btnBaubleds:{
        marginTop:60,
        paddingTop:30,
        paddingBottom:30,
        backgroundColor:'#42BF9A',
        alignItems: 'center'
    },
    btnBluetooth:{
        paddingTop:30,
        paddingBottom:30,
        backgroundColor:'#F1C029',
        alignItems: 'center'
    },
    btnHelp:{
        paddingTop:30,
        paddingBottom:30,
        backgroundColor:'#B71201',
        alignItems: 'center'
    },
    txt:{
        color:'#ffffff',
        fontSize: 20,
        fontWeight:'bold'
    }
})
