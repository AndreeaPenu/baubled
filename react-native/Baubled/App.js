import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ListView, TouchableHighlight, Button, AsyncStorage, Image, Picker, Switch} from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import { BleManager } from 'react-native-ble-manager';


const PickerColor = () => (
    <ColorPicker
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />
  )

export default class MyLeds extends React.Component {

    constructor(){
        super();
        this.state = {
            switchValue:false,
            effect: 'geen',
            scanning:false,
            peripherals: new Map(),
        }
    }

    componentDidMount(){
      BleManager.start({showAlert: false}).then(() => {
        // Success code
        console.log('Module initialized');
      });
    }

    onSwitchChange(value){
        this.setState({
            switchValue:value
        })
    }

    startScan() {
      if (!this.state.scanning) {
        this.setState({peripherals: new Map()});
        BleManager.scan([], 3, true).then((results) => {
          console.log('Scanning...');
          this.setState({scanning:true});
        });
      }
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

                <TouchableHighlight style={{marginTop: 40,margin: 20, padding:20, backgroundColor:'#ccc'}} onPress={() => this.startScan() }>
                <Text>Scan Bluetooth ({this.state.scanning ? 'on' : 'off'})</Text>
              </TouchableHighlight>

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