import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
    Lightbox,
    AsyncStorage,
    FlatList,
    Alert,
    ToastAndroid,
    TouchableHighlight
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon, Toast } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import { InputItem, List } from '@ant-design/react-native';
import { ThemeProvider } from '@ant-design/react-native/lib/style';
const { width } = Dimensions.get('window');
const s = width / 640;

//拍照
const options = {
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    customButtons: [],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Quan extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            data: '',
            value1: '',
            dianzan: 0,
            loginstd: '',
            data1: '',
            wusername: ''
        }
    }

    //点击提交评论时触发函数
    tijiao = (index) => {
        //console.log(index)
        if (this.state.value1 === '') {
            Alert.alert('您还未输入评论，无法提交！')
        }
        else {
            var a = {};
            a.num = index;
            a.ping = this.state.value1;
            a.username = this.state.wusername;
            a.usernum = this.state.loginstd
            //console.log(JSON.stringify(a))
            //fetch请求 给响应的id去添加提交内容
            fetch(`http://148.70.183.184:8005/stuPing`, {
                method: "POST",
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body: JSON.stringify(a)
            }).then((res) => {
                ToastAndroid.showWithGravity(
                    "评论成功！",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            })
        }
    }

   

    //点击评论图标
    add = () => {
        Alert.alert('请在下方输入评论！')
    }


    //点击评论区内容出现选择框
    show = () => {
        Alert.alert('删除', '是否要删除',
            [
                { text: "确认删除", onPress: this.del },
               // { text: "取消", onPress: this.opntion2Selected },

            ]
        );
    }

    //删除评论区内容
    del = () => {
        //fetch接口进行删除
        Alert.alert('删除成功')
    }

    //点赞数增加
    dianzan = (num, id) => {
        if (num == null) {
            num = 0;
        }
        else {
            num = num + 1
        }

        fetch(`http://148.70.183.184:8006/wquanzi/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(num)
        }).then((res) => {
            fetch('http://148.70.183.184:8006/wquanzi', {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
            }).then((res) => res.json()).then(res => {
                this.setState({ data: res })
            })
            ToastAndroid.showWithGravity(
                "点赞成功！",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        })

    }



    //顶端背景图片的获取
    componentDidMount() {

        //AsyncStorage.clear()
        //页面一加载获取数据进行渲染
        AsyncStorage.getItem("UID123", (err, result) => {
            const source = { uri: '' }
            source.uri = JSON.parse(result)
            // console.log(source.uri)
            if (source.uri === null) {
                this.setState({ imageUrl: require('../../assets/zx/bg.jpg') })
                // console.log(this.state.imageUrl)
            }
            else {
                this.setState({ imageUrl: source })
            }
        });


        //获取评论
        fetch('http://148.70.183.184:8006/wquanzi', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        }).then((res) => res.json()).then(res => {
            this.setState({ data: res })
        })


        //获取谁登录以及这个人登录的名称和手机号
        AsyncStorage.getItem('std')
            .then((res) => {
                this.setState({
                    loginstd: JSON.parse(res)
                })
                fetch(`http://148.70.183.184:8006/stdmine/${this.state.loginstd}`)
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({ data1: res.data })
                        if (this.state.data1[0].wusername == '') {
                            this.setState({
                                wusername: '我的昵称'
                            })
                        } else {
                            this.setState({
                                wusername: this.state.data1[0].wusername
                            })
                        }
                    })
            })
    }
    componentDidUpdate() {
        //AsyncStorage.clear()
        //页面一加载获取数据进行渲染
        AsyncStorage.getItem("UID123", (err, result) => {
            const source = { uri: '' }
            source.uri = JSON.parse(result)
            //console.log(source.uri)
            if (source.uri === null) {
                this.setState({ imageUrl: require('../../assets/zx/bg.jpg') })
                // console.log(this.state.imageUrl)
            }
            else {
                this.setState({ imageUrl: source })
            }
        });



    }
    //拍照
    takephoto = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                }, async () => {
                    AsyncStorage.setItem("UID123", JSON.stringify(this.state.imageUrl.uri), () => {
                        AsyncStorage.mergeItem("UID123", JSON.stringify(this.state.imageUrl.uri), () => {
                        });
                    })
                })
            }
        });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.main}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0 * s, marginBottom: 30 * s }}>
                        <TouchableOpacity style={styles.box} onPress={() => this.takephoto()}>
                            <ImageBackground
                                style={styles.box4}
                                source={this.state.imageUrl}>

                                <View style={styles.box2}>
                                    <Image style={styles.box3} source={require('../../assets/hyq/000.png')}></Image>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
             <View style={{marginLeft:'84%',marginTop:'3%'}}><TouchableOpacity onPress={()=>Actions.stucom()} style={{width:80*s,borderRadius:5*s,height:30*s,backgroundColor:'#1296db'}}><Text>已发布>></Text></TouchableOpacity></View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.rect}>
                                <View style={styles.mine}>
                                    <View style={{ width: '20%' }}>
                                        <Image
                                            source={require('../../assets/hyq/000.png')}
                                            style={{ width: 70 * s, height: 70 * s }}
                                        />
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <Text style={{ fontSize: 22 * s }}>{item.wusername == null ? 'undefined' : item.wusername}</Text>
                                        <Text>{item.wshijian == null ? '未设置' : item.wshijian}</Text>
                                    </View>

                                </View>
                                <View style={{ paddingLeft: 130 * s, paddingTop: 5 * s }}>
                                    <Text style={{ fontSize: 24 * s }} numberOfLines={2}>{item.content ? (item.content.length > 15 ? item.content.substr(0, 14) + '...' : item.content) : ''}</Text>
                                </View>
                                <View style={styles.imgs}>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img} />
                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: '65%', marginTop: 20 * s }}>
                                    <TouchableOpacity onPress={() => this.dianzan(item.wdianzannumber, item.id)}>
                                        <Image
                                            onPress={() => this.dianzan(item.wdianzannumber, item.id)}
                                            style={{ width: 30 * s, height: 30 * s }} source={require('../../assets/zx/zan.png')}>

                                        </Image>
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: 3 * s }}><Text>{item.wdianzannumber == null ? 0 : item.wdianzannumber}</Text></View>
                                    <TouchableOpacity style={{ marginLeft: 20 * s }}>
                                        <Icon
                                            color={'#1296db'}
                                            name="message"
                                            onPress={() => this.add(index)}
                                        />
                                    </TouchableOpacity>
                                </View>
                              <TouchableOpacity onPress={()=>Actions.spinglun({id:item.id})} style={{marginLeft:'55%',marginTop:10*s}}><Text style={{fontSize:15}}>查看全部评论 >></Text></TouchableOpacity>
                                <View style={{ width: 350 * s, marginTop: 10 * s, height: 40 * s, marginLeft: 110 * s, flexDirection: 'row', borderColor: '#ddd', borderWidth: 2 }}>
                                    <View style={{ width: 290 * s, height: 40 * s }}>
                                        <InputItem
                                            style={{ marginBottom: 20 * s }}
                                            onChange={value => {
                                                this.setState({
                                                    value1: value,
                                                });
                                            }}
                                            placeholder="请输入评论内容"
                                        /></View>

                                    <TouchableHighlight style={{ width: 70 * s, height: 40 * s }} onPress={() => this.tijiao(item.id)} style={{ width: 70 * s, height: 35 * s, backgroundColor: 'orange', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 15 }}>提交</Text></TouchableHighlight>

                                </View>
                            </View>
                        </View>
                    )}
                >

                </FlatList>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    imgs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 100 * s,
        paddingRight: 20 * s
    },
    img: {
        width: 100 * s,
        height: 100 * s,
        marginLeft: 15 * s,
        marginTop: 8 * s
    },
    mine: {
        width: '100%',
        height: 80 * s,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 20 * s,
    },
    rect: {
        width: '90%',
        marginTop: 20 * s,
        // height:200*s,
        paddingBottom: 20 * s,
    },
    btns: {
        width: '80%',
        height: 54 * s,
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center',
        paddingLeft: 20 * s
    },
    tit: {
        width: '90%',
        height: 64 * s,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
        borderColor: 'blue',
        borderWidth: 2 * s,
        borderRadius: 20 * s
    },
    main: {
        width: '100%'
    },
    box: {
        height: 320 * s,
        width: '100%',

    },
    box1: {
        width: 60 * s,
        height: 60 * s,
        marginLeft: '88%',
        marginTop: '-5%'

    },
    box2: {
        width: 100 * s,
        height: 100 * s,
        marginTop: '40%',
        marginLeft: '83%',
        borderRadius: 40 * s
    },
    box3: {
        width: 100 * s,
        height: 100 * s,
        borderRadius: 50 * s,
        resizeMode: 'stretch'
    },
    box4: {
        height: 320 * s,
        width: '100%',
        resizeMode: 'stretch'
    }
})