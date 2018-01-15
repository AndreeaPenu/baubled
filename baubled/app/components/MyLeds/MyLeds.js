import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ListView, TouchableHighlight, Button, AsyncStorage, Image, Picker, Switch} from 'react-native';
import { ColorPicker } from 'react-native-color-picker';


const PickerColor = () => (
    <ColorPicker
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />
  )

export default class MyLeds extends React.Component {
/*      static navigationOptions = {
        title: 'Bauble 1',
    };  */
    constructor(){
        super();
        this.state = {
            switchValue:false,
            effect: 'geen'
        }
    }

    onSwitchChange(value){
        this.setState({
            switchValue:value
        })
    }
    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    
                        <View style={styles.box}>
                            <Switch
                                value={this.state.switchValue}
                                onValueChange={(value)=>this.onSwitchChange(value)}
                            />
                        </View>
                
                    <View style={styles.box}>
                        <PickerColor />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.box}>
                        <Picker
                            selectedValue={this.state.effect}
                            onValueChange={(itemValue, itemIndex) => this.setState({effect: itemValue})}>
                            <Picker.Item label="Geen effect" value="geen" />
                            <Picker.Item label="Flikkeren" value="flikkeren" />
                            <Picker.Item label="Traag Flikkeren" value="traag-flikkeren" />
                            <Picker.Item label="Regenboog" value="regenboog" />
                            <Picker.Item label="2 Kleuren" value="2kleuren" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.box}>
                    
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