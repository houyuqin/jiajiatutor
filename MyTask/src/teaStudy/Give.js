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
    Alert
} from 'react-native';
import { DatePicker, List, Provider } from '@ant-design/react-native';
import NaviBar from 'react-native-pure-navigation-bar';
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
const std = [];

export default class TeaStudy extends Component {
    constructor() {
        super()
        this.state = {
            kemu: '',
            title: '',
            time: '',
            endtime: '',
            name: '',
            content: '',
            value: new Date(),
            value1: undefined,
            std: [],
            me: ''

        }
        this.onChange = value => {
            this.setState({ value });
        };
        this.onChange1 = value => {
            this.setState({ value1: value });
        };
    }


    //科目
    kemu = (e) => {
        this.setState({
            kemu: e
        })
    }

    //题目
    title = (e) => {
        this.setState({
            title: e
        })
    }

    //内容
    content = (e) => {
        this.setState({
            content: e
        })
    }
    componentDidMount() {
        AsyncStorage.getItem('tea', (err, result) => {
            this.setState({ me: JSON.parse(result) })
            fetch(`http://148.70.183.184:8006/teamine/${this.state.me}`)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        name: res.data[0].wusername
                    })
                })
        })
    }

    fabu = () => {
        AsyncStorage.getItem('tea', (err, result) => {
            this.setState({ me: JSON.parse(result) })
            var a = {
                kemu: this.state.kemu,
                title: this.state.title,
                time: this.state.value,
                author: this.state.name,
                content: this.state.content,
                userphone: this.state.me,
                endtime: this.state.value1
            };
            var b = {
                kemu: this.state.kemu,
                title: this.state.title,
                time: this.state.value,
                author: this.state.name,
                content: this.state.content,
                userphone: this.state.me,
                endtime: this.state.value1
            }
            if (a.kemu == undefined || a.title == undefined || a.endtime == undefined || a.content == '') {
                Alert.alert('您输入的信息不完善，请重新输入！')
            }
            else {

                //查看哪些学生选择了我同时学生未完成表里添加内容
                fetch(`http://148.70.183.184:8000/selectstd/${this.state.me}`)
                    .then(res => res.json())
                    .then(res => {
                        for (var index in res.data) {
                            b.usr = res.data[index].stdphone
                            fetch("http://148.70.183.184:8005/uncomplete", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'text/plain; charset=UTF-8'
                                        },
                                        body: JSON.stringify(b)
                                    }).then((res) => {

                                    })
                        }


                    })
                //教师表里加入信息
                fetch("http://148.70.183.184:8005/taskt", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then((res) => {
                    Alert.alert('您的任务发布完毕！')
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
                    title={'布置作业'}
                    onLeft={() => Actions.teastudy()}
                />
                <View>
                    <View style={{
                        width: '95%', height: 485 * s, backgroundColor: 'white', marginTop: 20 * s, marginLeft: 15 * s,
                        borderRadius: 10, paddingTop: 20 * s, paddingLeft: 30 * s
                    }}>
                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 10 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>任务科目:</Text>
                            <View style={{ width: '70%', height: 80 * s, marginTop: -10 * s, paddingLeft: 20 * s, fontSize: 17 }}>
                                <TextInput
                                    placeholder="请输入任务科目"
                                    onChangeText={this.kemu}
                                />
                            </View>
                        </View>
                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>任务题目:</Text>
                            <View style={{ width: '70%', height: 80 * s, marginTop: -10 * s, paddingLeft: 20 * s, fontSize: 17 }}>
                                <TextInput
                                    placeholder="请输入任务题目"
                                    onChangeText={this.title}
                                />
                            </View>
                        </View>
                        <Provider >
                            <View  >
                                <List>
                                    <DatePicker
                                        value={this.state.value}
                                        onChange={this.onChange}
                                    >
                                        <List.Item arrow="horizontal" style={{ marginLeft: -15 * s, height: 50 * s, marginTop: 25 * s }}>发布时间:</List.Item>
                                    </DatePicker>
                                </List>
                            </View>

                            <View>
                                <List>
                                    <DatePicker
                                        value={this.state.value1}
                                        minDate={new Date()}
                                        onChange={this.onChange1}

                                    >
                                        <List.Item arrow="horizontal" style={{ marginLeft: -15 * s, height: 50 * s, marginTop: 25 * s }}>截止时间:</List.Item>
                                    </DatePicker>
                                </List>
                            </View>
                        </Provider>



                        <View style={{ width: '90%', height: 70 * s, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>发布人:{this.state.name}</Text>
                        </View>

                    </View>
                    <View style={{ width: '95%', height: 400 * s, backgroundColor: 'white', marginTop: 20 * s, marginLeft: 15 * s, borderRadius: 10, paddingTop: 20 * s, paddingLeft: 30 * s }}>
                        <Text style={{ fontSize: 17 }}>内容:</Text>
                        <View style={{ width: '80%', height: 240 * s, marginLeft: 60 * s, borderWidth: 1, marginTop: 10 * s, borderColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>


                            <TextInput
                                style={{ marginLeft: 10 * s, marginTop: -190 * s }}
                                multiline={true}
                                placeholder="请输入内容"
                                onChangeText={this.content}
                            />

                        </View>

                        <TouchableOpacity onPress={this.fabu}>
                            <Text style={{ width: 80 * s, height: 50 * s, marginTop: 20 * s, marginLeft: 440 * s, borderRadius: 13, paddingLeft: 12 * s, fontSize: 16, color: 'white', paddingTop: 7 * s, backgroundColor: '#2f618b' }}>发布</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})