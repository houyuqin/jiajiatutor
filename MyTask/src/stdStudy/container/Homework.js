import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, Dimensions, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native'
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
            nicheng: [],
            teap: []
        }
    }
    componentDidMount() {
        var stdp = 44444444444
        fetch(`http://148.70.183.184:8006/stdmine/${stdp}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        }).then((res) => res.json())
            .then((res) => {
                this.setState({ nicheng: res.data })
                ni = this.state.nicheng[0].wusername
            })
        
        fetch(`http://148.70.183.184:8000/selecttea/${stdp}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ teap: res.data });
                for (var index in this.state.teap) {

                    num[index] = this.state.teap[index]
                }
                for (var index in num) {
                    fetch(`http://148.70.183.184:8005/taskfabu/${num[index].teaphone}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            //console.log(res)
                            for (var index in res.data) {
                                this.setState({ data: [...this.state.data, res.data[index]] })
                            }
                        })
                }
            })
        
        fetch(`http://148.70.183.184:8005/tasks/${stdp}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
            })
        

        var usr = 44444444444;
        fetch(`http://148.70.183.184:8006/stdmine/${usr}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ nicheng: res.data })

            })

     }
    componentDidUpdate(){
        var stdp = 44444444444;
        fetch(`http://148.70.183.184:8005/tasks/${stdp}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
            })

    }
    addCom = (msg) => {
       
        var stdp = 44444444444;
        fetch(`http://148.70.183.184:8005/wanchengren/${stdp}`, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(ni)
        }).then((res) => {
            Alert.alert('任务已完成')
        });
        fetch(`http://148.70.183.184:8005/taskwancheng/${stdp}`, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(this.state.data[msg])
        }).then((res) => {
          
        });
        // var id = this.state.data[msg].id
        // fetch(`http://148.70.183.184:8005/taskt/${stdp}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'text/plain; charset=UTF-8'
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((res) => {

        //     })

    }
    display = () => {
        Alert.alert('您的此项任务已完成，若要永久删除请按删除键！')
    }
    // dele = (msg) => {
    //     var id = this.state.data[msg].id
    //     fetch(`http://148.70.183.184:8005/taskt/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'text/plain; charset=UTF-8'
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             Alert.alert('任务删除成功!')
    //         })
    // }
    dele1 = (msg) => {
        var id = this.state.data1[msg].id

        fetch(`http://148.70.183.184:8005/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                Alert.alert('任务永久删除成功!')
            })
    }
    show = (msg) => {
        var id1 = this.state.data1[msg].id

        fetch(`http://148.70.183.184:8005/tasks/${id1}`, {
            method: "GET",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(this.state.data[msg])
        }).then((res) => {

        });
        id1 = this.state.data1[msg].content;
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
                                        <ImageBackground source={require('../../../assets/zx/z7.jpg')} style={styles.img}>
                                            <View><Text style={styles.renwu1}>任务{index+1}</Text></View>
                                            <View><Text style={styles.renwu2}>题目：{item.title}</Text></View>
                                            <View><Text style={styles.renwu2}>科目类型:{item.kemu}</Text></View>
                                            <View><Text style={styles.renwu2}>完成时间:{item.endtime}</Text></View>
                                            <View><Text style={styles.renwu2}>发布教师:{item.author}</Text></View>
                                            <View style={{ flex: 1., flexDirection: 'row' }}>
                                                <TouchableOpacity  onPress={() => this.addCom(index)}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image style={styles.img1} source={require('../../../assets/zx/z5.png')}></Image>
                                                        <Text style={styles.fon}>完成</Text>
                                                    </View>
                                                </TouchableOpacity>

                                                {/* <TouchableOpacity onPress={() => this.dele(index)}>
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <Image style={styles.img2} source={require('../../img/z7.png')}></Image>
                                                        <Text style={styles.fon}>删除</Text>
                                                    </View>
                                                </TouchableOpacity> */}
                                                <TouchableOpacity  style={styles.btn} onPress={() => {Actions.content({'contentId':item.id})}}><View style={styles.btn1}><Text style={styles.xiangqing}>查看详情>></Text></View></TouchableOpacity>
                                            </View>
                                        </ImageBackground>

                                    </View>
                                </View>

                            )}
                        ></FlatList>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View>
                            <FlatList
                                data={this.state.data1}
                                renderItem={({ item, index }) => (
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <View style={styles.ccbox}>
                                            <View style={{width:'50%'}}><Text style={{fontSize:28}}>{item.id}----{item.title}</Text></View>
                                            <View style={{width:'30%'}}><TouchableOpacity style={styles.ccbtn} onPress={() => Actions.contents({'contentId':item.id})}><View><Text style={styles.xiangqing}>查看详情>></Text></View></TouchableOpacity></View>
                                            <View style={{width:'10%'}}><TouchableOpacity onPress={() => this.display()}><Image style={styles.ccimg} source={require('../../../assets/zx/z6.png')}></Image></TouchableOpacity></View>
                                            <View style={{width:'5%'}}><TouchableOpacity onPress={() => this.dele1(index)}><Image style={styles.ccimg} source={require('../../../assets/zx/z7.png')}></Image></TouchableOpacity></View>
                                        </View>
                                    </View>

                                )}
                            ></FlatList>
                        </View>
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
        width: 45 * s,
        height: 45 * s,
        resizeMode: 'stretch',
        marginTop: 25 * s,
        marginLeft: 50 * s
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
        fontSize: 18,
        //color:'white',   
    },
    fon: {
        fontSize: 22,
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
        alignItems:'center'
    },
    ccimg:{
        width:40*s,
        height:40*s
    },
    ccbtn:{
        // width: 180 * s,
        // height: 60 * s,
        // borderRadius: 15 * s,
        // // backgroundColor:'#BCEE68',
        // marginLeft: '10%',
        // marginTop: 15 * s,
    }
})