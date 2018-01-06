import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ListView, TouchableHighlight, Button, AsyncStorage, Image} from 'react-native';
import { ColorPicker } from 'react-native-color-picker';


const Picker = () => (
    <ColorPicker
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />
  )

export default class MyLeds extends React.Component {
/*     static navigationOptions = {
        title: 'Bauble 1',
    }; */
    constructor(){
        super();
        this.state = {

        }
    }

    
   
    onPress = () => {
        let image =  <Image
            style={styles.onImage}
            source={require('./on-groen.png')}
        />;
        return(
            <TouchableHighlight
            onPress={this.onPress}
            >
                {image}
            </TouchableHighlight>

        )
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    
                        <View style={styles.box}>
                        <TouchableHighlight
                        onPress={this.onPress}
                        >
                            <Image
                                style={styles.onImage}
                                source={require('./on-wit.png')}
                            />
                        </TouchableHighlight>
                        </View>
                
                    <View style={styles.box}>
                        <Picker />
                    </View>
                </View>
                
            </View>
        )
    }
}

AppRegistry.registerComponent('Todos',()=>Todos);
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1b2c44',
        height:Dimensions.get('window').height,
    },
    row:{
        flexDirection:'row',
        height:150
   },
   box:{
        flex:1,
        backgroundColor:'#2f4463',
        margin:5,
        justifyContent:'space-between'
   },
    onImage:{
        alignSelf:'center',
        marginTop:20,
        height:100,
        width:100
}

})