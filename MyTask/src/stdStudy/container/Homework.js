import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Dimensions, ImageBackground, Image, AsyncStorage, TouchableOpacity, Alert } from 'react-native'
import { Tabs } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
let ni = ''
const num = []
const tabs = [
    { title: '未完成' },
    { title: '已完成' },
];
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class Homework extends Component {

    constructor() {
        super();
        this.state = {
            data1: [],
            data: [],

            teap: [],
            stdp: '',
            submit: '',
            name: ''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('std', (err, result) => {
            this.setState({ stdp: JSON.parse(result) })
            //获取未完成作业
            fetch(`http://148.70.183.184:8005/uncom/${this.state.stdp}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
            }).then((res) => res.json())
                .then((res) => {
                    this.setState({ data: res.data })

                })
            //获取已经完成作业
            fetch(`http://148.70.183.184:8005/com/${this.state.stdp}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
            }).then((res) => res.json())
                .then((res) => {
                    this.setState({ data1: res.data })
                })
        })
    }



    addCom = (id) => {

        //获取全部内容
        fetch(`http://148.70.183.184:8005/unxiangqing/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        }).then((res) => res.json())
            .then((res) => {
                this.setState({ submit: res.data })
                if (this.state.submit[0].daan == null) {
                    Alert.alert('您还未提交答案，请提交！')
                }
                else {

                    fetch(`http://148.70.183.184:8005/delcom/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            AsyncStorage.getItem('std', (err, result) => {
                                this.setState({ stdp: JSON.parse(result) })
                                fetch(`http://148.70.183.184:8005/uncom/${this.state.stdp}`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'text/plain; charset=UTF-8'
                                    },
                                }).then((res) => res.json())
                                    .then((res) => {
                                        this.setState({ data: res.data })
                                        Alert.alert('您的作业提交成功!')
                                    })

                                //获取名称
                                fetch(`http://148.70.183.184:8006/stdmine/${this.state.stdp}`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'text/plain; charset=UTF-8'
                                    },
                                }).then((res) => res.json())
                                    .then((res) => {

                                        this.setState({ name: res.data[0].wusername })
                                        console.log(this.state.name)

                                        this.state.submit[0].name = this.state.name
                                        //将全部内容加到已完成表中
                                        fetch("http://148.70.183.184:8005/complete", {
                                            method: "POST",
                                            headers: {
                                                'Content-Type': 'text/plain; charset=UTF-8'
                                            },
                                            body: JSON.stringify(this.state.submit[0])
                                        }).then((res) => {

                                        })

                                         //获取已经完成作业
                                fetch(`http://148.70.183.184:8005/com/${this.state.stdp}`, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'text/plain; charset=UTF-8'
                                    },
                                }).then((res) => res.json())
                                    .then((res) => {
                                        this.setState({ data1: res.data })
                                    })
                                    })



                               
                            })
                        })
                   
                }
            })







    }
    display = () => {
        Alert.alert('您的此项任务已完成，若要永久删除请按删除键！')
    }

    dele1 = (id) => {
        console.log(id)
        fetch(`http://148.70.183.184:8005/del/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                AsyncStorage.getItem('std', (err, result) => {
                    this.setState({ stdp: JSON.parse(result) })
                    fetch(`http://148.70.183.184:8005/com/${this.state.stdp}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                    }).then((res) => res.json())
                        .then((res) => {
                            this.setState({ data1: res.data })
                            Alert.alert('任务永久删除成功！')
                        })
                })
            })
    }



    render() {

        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}>
                    <View>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item, index }) => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.uncom}>
                                        <ImageBackground source={require('../../../assets/zx/lun4.jpg')} style={styles.img}>
                                            <View><Text style={styles.renwu1}>任务{item.id}</Text></View>
                                            <View><Text style={styles.renwu2}>题目：{item.title}</Text></View>
                                            <View><Text style={styles.renwu2}>科目类型:{item.kemu}</Text></View>
                                            <View><Text style={styles.renwu2}>完成时间:{new Date(item.endtime).getFullYear() + '-' + (new Date(item.endtime).getMonth() + 1) + '-' + new Date(item.endtime).getDate() + ' ' + new Date(item.endtime).getHours() + ':' + new Date(item.endtime).getMinutes() + ':' + new Date(item.endtime).getSeconds()}</Text></View>
                                            <View><Text style={styles.renwu2}>发布教师:{item.author}</Text></View>
                                            <View style={{ flex: 1., flexDirection: 'row' }}>
                                                <TouchableOpacity onPress={() => this.addCom(item.id)}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image style={styles.img1} source={require('../../../assets/zx/submit.png')}></Image>
                                                        <Text style={styles.fon}>提交</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.btn} onPress={() => { Actions.content({ 'contentId': item.id }) }}><View style={styles.btn1}><Text style={styles.xiangqing}>查看详情>></Text></View></TouchableOpacity>
                                            </View>
                                        </ImageBackground>

                                    </View>
                                </View>

                            )}
                        ></FlatList>
                    </View>
                    <View style={{ flex: 1 }}>

                        <FlatList
                            data={this.state.data1}
                            renderItem={({ item, index }) => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.ccbox}>
                                        <View style={{ width: '50%' }}><Text style={{ fontSize: 28 }}>{item.id}----{item.title}</Text></View>
                                        <View style={{ width: '30%' }}><TouchableOpacity style={styles.ccbtn} onPress={() => Actions.contents({ 'contentId': item.id })}><View><Text style={styles.xiangqing}>查看详情>></Text></View></TouchableOpacity></View>
                                        <View style={{ width: '10%' }}><TouchableOpacity onPress={() => this.display()}><Image style={styles.ccimg} source={require('../../../assets/zx/z6.png')}></Image></TouchableOpacity></View>
                                        <View style={{ width: '5%' }}><TouchableOpacity onPress={() => this.dele1(item.id)}><Image style={styles.ccimg} source={require('../../../assets/zx/z7.png')}></Image></TouchableOpacity></View>
                                    </View>
                                </View>

                            )}
                        ></FlatList>

                    </View>
                </Tabs>

            </View >
        );
    }
}

const styles = StyleSheet.create({

    img: {
        width: '100%',
        height: 355 * s,
        resizeMode: 'stretch'
    },
    uncom: {
        width: '95%',
        height: 370 * s,
        marginTop: 30 * s,
        borderWidth: 3,
        borderColor: '#3fcccb',
        borderRadius: 10,
    },
    renwu1: {
        fontSize: 27,
        paddingLeft: 40 * s,
        marginTop: 20 * s
    },
    renwu2: {
        fontSize: 20,
        paddingLeft: 60 * s,
        marginTop: 6
    },
    img1: {
        width: 35 * s,
        height: 35 * s,
        resizeMode: 'stretch',
        marginTop: 25 * s,
        marginLeft: 80 * s
    },
    img2: {
        width: 45 * s,
        height: 45 * s,
        resizeMode: 'stretch',
        marginTop: 25 * s,
        marginLeft: 40 * s
    },
    btn: {
        width: 180 * s,
        height: 60 * s,
        borderRadius: 15 * s,
        // backgroundColor:'#BCEE68',
        marginLeft: '10%',
        marginTop: 15 * s,

    },
    btn1: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    xiangqing: {
        fontSize: 20,
        //color:'white',   
    },
    fon: {
        fontSize: 20,
        marginTop: 25 * s,
        marginLeft: 9 * s
    },
    // 设置完成款里面的样式
    ccbox: {
        flexDirection: 'row',
        borderColor: '#3fcccb',
        borderWidth: 3,
        borderRadius: 10,
        height: 80 * s,
        width: '97%',
        marginTop: 10 * s,
        alignItems: 'center'
    },
    ccimg: {
        width: 40 * s,
        height: 40 * s
    },
    ccbtn: {
        // width: 180 * s,
        // height: 60 * s,
        // borderRadius: 15 * s,
        // // backgroundColor:'#BCEE68',
        // marginLeft: '10%',
        // marginTop: 15 * s,
    }
})