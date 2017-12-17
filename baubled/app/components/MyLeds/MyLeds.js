import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, ListView, TouchableHighlight } from 'react-native';

export default class MyLeds extends React.Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            ledDataSource: ds
        }
        this.pressRow = this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount(){
        this.getLeds();
    }

    componentWillMount(){
        this.getLeds();
    }

    getLeds(){
        let leds = [
            {text: 'Led1'},
            {text: 'Led2'},
            {text: 'Led3'},
            {text: 'Led4'}
        ];

        this.setState({
            ledDataSource: this.state.ledDataSource.cloneWithRows(leds)
        });
    }

    pressRow(led){
        console.log(led);
    }

    renderRow(led){
        return(
            <TouchableHighlight onPress={()=>{
                this.pressRow(led);
            }}>
                <View style={styles.row}>
                    <Text style={styles.text}>{led.text}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text>
                    MyLeds
                </Text>

                <ListView dataSource={this.state.ledDataSource} renderRow={this.renderRow}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('MyLeds',()=>MyLeds);

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#b4e5ed',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:12,
        backgroundColor:'#b0d4ff',
        marginBottom:3

    },
    text: {
        flex:1
    }
})