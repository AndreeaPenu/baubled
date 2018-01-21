import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, ListView, TouchableHighlight, Button, AsyncStorage, Image, Picker, Switch} from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
//import { BleManager } from 'react-native-ble-manager';
//import { BleManager } from 'react-native-ble-plx';
import { StackNavigator } from 'react-navigation';
  


const PickerColor = () => (
    <ColorPicker
      onColorSelected={color => alert(`Color selected: ${color}`)}
      style={{flex: 1}}
    />
  )
 //const { navigate } = this.props.navigation;
export default class MyLeds extends React.Component {
/*     static navigationOptions = {
        title: 'Bauble 1',
    };   */
    constructor(){
        super();
        //this.manager = new BleManager();
        this.state = {
            switchValue:false,
            effect: 'geen',
            //scanning:false,
            //peripherals: new Map(),
        }

    }

    componentDidMount(){
      //BleManager.start({showAlert: false});
    }
    
/*     scanAndConnect() {
        this.manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                // Handle error (scanning will be stopped automatically)
                return
            }
    
            // Check if it is a device you are looking for based on advertisement data
            // or other criteria.
            if (device.name === 'TI BLE Sensor Tag' || 
                device.name === 'SensorTag') {
                
                // Stop scanning as it's not necessary if you are scanning for one device.
                this.manager.stopDeviceScan();
    
                // Proceed with connection.
            }
        });
    }
 */
    onSwitchChange(value){
        this.setState({
            switchValue:value
        })
    }

/*      startScan() {
      if (!this.state.scanning) {
        this.setState({peripherals: new Map()});
        BleManager.scan([], 3, true).then((results) => {
          console.log('Scanning...');
          this.setState({scanning:true});
        });
      }
    } */
 
    

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                        
                        <View style={styles.box}>
                            <Switch
                                value={this.state.switchValue}
                                onValueChange={(value)=>this.onSwitchChange(value)}
                                style={styles.switch}
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
                            onValueChange={(itemValue, itemIndex) => this.setState({effect: itemValue})}
                            style={styles.picker}>
                            <Picker.Item label="NO EFFECT" value="no-effect" />
                            <Picker.Item label="FLASH" value="flash" />
                            <Picker.Item label="RAINBOW" value="rainbow" />
                            <Picker.Item label="2 COLORS" value="2colors" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.box}>

      {/*           <TouchableHighlight style={{marginTop: 40,margin: 20, padding:20, backgroundColor:'#ccc'}} onPress={() => this.startScan() }>
                <Text>Scan Bluetooth ({this.state.scanning ? 'on' : 'off'})</Text>
              </TouchableHighlight> */}

                </View>
            </View>
        )
    }
}

AppRegistry.registerComponent('MyLeds',()=>MyLeds);
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
    },
    switch:{
        marginTop:50,
        alignSelf:'center'
    },
    picker:{
        color:'#ffffff',
        marginTop:50,
        marginLeft:20
    }


})