import React from 'react';
import {
    AppRegistry, StyleSheet, Text, View, Image, Dimensions, ListView, TouchableHighlight,
    Picker
} from 'react-native';
 const { navigate } = this.props.navigation;
export default class MyBaubleds extends React.Component {
    static navigationOptions = {
        title: 'MyBaubleds',
    }; 

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            baubleDataSource: ds
        }
        this.pressRow = this.pressRow.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount(){
        this.getBaubles();
    }
    
    componentWillMount(){
        this.getBaubles();
    }

    getBaubles(){
        let baubles = [
            {text: 'Ball1'},
            {text: 'Ball2'},
            {text: 'Ball3'},
            {text: 'Ball4'}
        ];

        this.setState({
            baubleDataSource: this.state.baubleDataSource.cloneWithRows(baubles)
        });
    }

    pressRow(bauble){
        console.log(bauble);
        navigate('MyLeds');
    }

    renderRow(bauble){
        return(
            <TouchableHighlight onPress={()=>{
                this.pressRow(bauble);
            }}>
                <View style={styles.row}>
                    <Text style={styles.text}>{bauble.text}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text>
                    MyBaubleds
                </Text>
                
                <ListView dataSource={this.state.baubleDataSource} renderRow={this.renderRow}/>
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