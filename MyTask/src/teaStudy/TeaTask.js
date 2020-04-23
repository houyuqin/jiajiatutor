
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
            stdp: []
        }
    }

    componentDidMount() {
        var teap = 18231868912;
        fetch(`http://148.70.183.184:8000/selectstd/${teap}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
              
                this.setState({ stdp: res.data });
                for (var index in this.state.stdp) {

                    num[index] = this.state.stdp[index]
                }
                for (var index in num) {
                    fetch(`http://148.70.183.184:8005/judge/${num[index].stdphone}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => {
                       
                            for (var index in res.data) {
                                this.setState({ data: [...this.state.data, res.data[index]] })
                            }
                        })
                }
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
                            <TouchableOpacity onPress={() => Actions.teacontent({'id':item.id})}>
                                <View style={{
                                    width: '100%', height: 180 * s, backgroundColor: 'white', marginTop: 20 * s, marginLeft: 15 * s,
                                    borderRadius: 10, paddingLeft: 30 * s, flexDirection: 'row'
                                }}>
                                    <View style={{width:'90%', height: 180 * s,justifyContent:'center'}}>
                                        <Text style={{ fontSize: 22 }}>题目:{item.title}</Text>
                                        <Text style={{ fontSize: 22 }}>截止时间:{item.endtime}</Text>
                                        <Text style={{ fontSize: 22 }}>提交人:{item.nicheng}</Text>
                                    </View>
                                   <View style={{width:'10%', height: 180 * s,justifyContent:'center'}}>
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