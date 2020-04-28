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
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
let src = '';
let username = ''
export default class TeaStudy extends Component {
    constructor() {
        super()
        this.state = {
            data: '',
            name: '',
            stdp: ''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('std', (err, result) => {
            this.setState({ stdp: JSON.parse(result) })
            fetch(`http://148.70.183.184:8006/stdmine/${this.state.stdp}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
            }).then((res) => res.json())
                .then((res) => {

                    this.setState({ name: res.data[0].wusername })
                })
        })

    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }}
                style={{ opacity: 1 }}
                source={require('../../../assets/cq/780.jpg')}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }}>



                    <View style={{ opacity: 1 }}>
                        <View style={{
                            width: '93%', height: 260 * s, marginLeft: 24 * s, marginTop: 22 * s, opacity: 1, backgroundColor: '#2f618b',
                            borderRadius: 40 * s, elevation: 10, shadowColor: 'black', flexDirection: 'row',
                        }}>
                            <Image style={{ width: 150 * s, height: 150 * s, marginTop: 70 * s, marginLeft: 40 * s, borderRadius: 75 * s }} source={require('../../../assets/cq/touxiang.png')} />
                            <View style={{ flexDirection: 'column', marginLeft: 40 * s, marginTop: 95 * s }}>
                                <Text style={{ color: 'white' }}>学生姓名：{this.state.name}</Text>
                                <Text style={{ color: 'white', marginTop: 20 * s }}>星级等级：★★★★★</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{ marginTop: 60 * s, marginLeft: 50 * s, opacity: 1, }}>
                        <TouchableOpacity onPress={() => Actions.jihua()}>
                            <View style={styles.box}>
                                <Text style={styles.font}>学习计划</Text>
                                <Image style={{ width: 40 * s, height: 40 * s, marginTop: 55 * s, marginLeft: 270 * s }} source={require('../../../assets/cq/you.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.homework()}>
                            <View style={styles.box3}>
                                <Text style={styles.font}>我的作业</Text>
                                <Image style={{ width: 40 * s, height: 40 * s, marginTop: 55 * s, marginLeft: 270 * s }} source={require('../../../assets/cq/you.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.video()}>
                            <View style={styles.box1}>

                                <Text style={styles.font}>我的视频</Text>
                                <Image style={{ width: 40 * s, height: 40 * s, marginTop: 55 * s, marginLeft: 270 * s }} source={require('../../../assets/cq/you.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.lianxi()}>
                            <View style={styles.box2}>
                                <Text style={styles.font}>自我练习</Text>
                                <Image style={{ width: 40 * s, height: 40 * s, marginTop: 55 * s, marginLeft: 270 * s }} source={require('../../../assets/cq/you.png')} />
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        width: '90%',
        height: 140 * s,
        borderRadius: 20 * s,
        elevation: 8,
        shadowColor: 'red',
        backgroundColor: '#b0b2b4',
        flexDirection: 'row'
    },
    box1:
    {
        width: '90%',
        height: 140 * s,
        marginTop: 30 * s,
        borderRadius: 20 * s,
        elevation: 8,
        shadowColor: 'red',
        backgroundColor: '#355586',
        flexDirection: 'row'
    },
    box2: {
        width: '90%',
        height: 140 * s,
        marginTop: 30 * s,
        borderRadius: 20 * s,
        elevation: 8,
        shadowColor: 'red',
        backgroundColor: '#1d3c6a',
        flexDirection: 'row'
    },
    box3: {
        width: '90%',
        height: 140 * s,
        marginTop: 30 * s,
        borderRadius: 20 * s,
        elevation: 8,
        shadowColor: 'red',
        backgroundColor: '#7D9EC0',
        flexDirection: 'row'
    },
    font: {
        fontSize: 20,
        marginTop: 50 * s,
        marginLeft: 30 * s
    }
})
