
import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    Dimensions,
    ImageBackground,
    StyleSheet,
    StatusBar,
    FlatList
} from 'react-native';
import NaviBar from 'react-native-pure-navigation-bar';
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
let usr = ''
const num = []
export default class TeaStudy extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            stdp: [],
            teap: '',
            name:''
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('tea', (err, result) => {
            this.setState({ teap: JSON.parse(result) })
            fetch(`http://148.70.183.184:8005/judge/${this.state.teap}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
            }).then((res) => res.json())
                .then((res) => {
                    
                 this.setState({data:res.data})   
                })
        })
    }
    render() {
        return (
            <View>

                <NaviBar
                    style={{ color: 'white', backgroundColor: 'black' }}
                    backgroundColor='black'
                    color='white'
                    title={'批改作业'}
                    onLeft={() => Actions.teastudy()}
                />
                <View>

                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => Actions.teacontent({ 'id': item.uid })}>
                                <View style={{
                                    width: '100%', height: 180 * s, backgroundColor: 'white', marginTop: 20 * s, marginLeft: 15 * s,
                                    borderRadius: 10, paddingLeft: 30 * s, flexDirection: 'row'
                                }}>
                                    <View style={{ width: '90%', height: 180 * s, justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 22 }}>题目:{item.title}</Text>
                                        <Text style={{ fontSize: 22 }}>截止时间:{new Date(item.endtime).getFullYear() + '-' + (new Date(item.endtime).getMonth() + 1) + '-' + new Date(item.endtime).getDate() + ' ' + new Date(item.endtime).getHours() + ':' + new Date(item.endtime).getMinutes() + ':' + new Date(item.endtime).getSeconds()}</Text>
                                        <Text style={{ fontSize: 22 }}>提交人:{item.name}</Text>
                                        <Text style={{ fontSize: 22 }}>评价状态:{item.pingjia==null?'未评价':'已评价'}</Text>
                                    </View>
                                    <View style={{ width: '10%', height: 180 * s, justifyContent: 'center' }}>
                                        <Image style={{ width: 40 * s, height: 40 * s, }} source={require('../../assets/cq/you.png')} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    >

                    </FlatList>




                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})