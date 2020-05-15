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
    Alert
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import { InputItem, List } from '@ant-design/react-native';
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
            data: [{ name: 'zhangsan', time: '2020-5-27 15:42', content: '222',num:3, ping: ['哈哈哈哈哈哈', '38828', 'shshhs', 'hello'] }, { name: 'zhangsan', time: '2020-4-27 15:42', content: '222' }],
            pinglun: true,
            value1: '',
            color1: 'blue',
            color2: 'blue',
            color3: 'blue',
            color4: 'blue',
        }
    }

    //点击提交评论时触发函数
    tijiao = (index) => {
        //console.log(index)
        if (this.state.value1 === '') {
            Alert.alert('您还未输入评论，无法提交！')
        }
        else {
            //fetch请求 给响应的id去添加提交内容
        }
    }
    //点击评论图标
    add = () => {
        Alert.alert('请在下方输入评论！')
    }
    heart1 = () => {
        if (this.state.color1 == 'blue') {
            this.setState({
                color1: 'red'
            })
        } else {
            this.setState({
                color1: 'blue'
            })
        }

    }

    //点击评论区内容出现选择框
    show=()=>{
        Alert.alert('删除','是否要删除',
  [
    {text:"确认删除", onPress:this.del},
    {text:"取消", onPress:this.opntion2Selected},
  
  ]
);
    }

    //删除评论区内容
    del=()=>{
        //fetch接口进行删除
        Alert.alert('删除成功')
    }

    //顶端背景图片的获取
    componentDidMount() {
        //AsyncStorage.clear()
        //页面一加载获取数据进行渲染
        AsyncStorage.getItem("UID123", (err, result) => {
            const source = { uri: '' }
            source.uri = JSON.parse(result)
            console.log(source.uri)
            if (source.uri === null) {
                this.setState({ imageUrl: require('../../assets/zx/bg.jpg') })
               // console.log(this.state.imageUrl)
            }
            else {
                this.setState({ imageUrl: source })
            }
        });
    }
    componentDidUpdate() {
        //页面更新获取数据进行渲染
        AsyncStorage.getItem("UID123", (err, result) => {
            const source = { uri: '' }
            source.uri = JSON.parse(result)
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
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 0 * s, marginBottom: 40 * s }}>
                        <TouchableOpacity style={styles.box} onPress={() => this.takephoto()}>
                            <ImageBackground
                                style={styles.box4}
                                source={this.state.imageUrl}>

                                <View style={styles.box2}>
                                    <Image style={styles.box3} source={require('../../assets/hyq/000.jpg')}></Image>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.rect}>
                                <View style={styles.mine}>
                                    <Image
                                        source={require('../../assets/hyq/000.png')}
                                        style={{ width: 70 * s, height: 70 * s }}
                                    />
                                    <View style={{ paddingTop: 10 * s, paddingLeft: 30 * s }}>
                                        <Text style={{ fontSize: 22 * s }}>{item.name}</Text>
                                        <Text>{item.time}</Text>
                                    </View>

                                </View>
                                <View style={{ paddingLeft: 130 * s, paddingTop: 10 * s }}>
                                    <Text style={{ fontSize: 24 * s }}>{item.content}</Text>
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
                                    <TouchableOpacity>
                                        <Icon
                                            color={this.state.color1}
                                            name="heart"
                                            onPress={() => this.heart1()}
                                        />
                                    </TouchableOpacity>
<View style={{marginLeft:3*s}}><Text>{item.num==null?0:item.num}</Text></View>
                                    <TouchableOpacity style={{ marginLeft: 20 * s }}>
                                        <Icon
                                            color={'blue'}
                                            name="message"
                                            onPress={() => this.add(index)}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {item.ping == null ? null :
                                    <FlatList
                                        data={item.ping}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity style={{ marginLeft: 130 * s, flexDirection: 'row', marginTop: 6 * s }} onPress={this.show}>
                                             
                                                    <Image style={{ width: 20 * s, height: 20 * s, marginTop: 3 * s }} source={require('../../assets/zx/ping.png')}></Image>
                                                    <Text style={{ marginLeft: 8 * s }}>{item}</Text>
                                               
                                            </TouchableOpacity>
                                        )}
                                    ></FlatList>}
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
                                    <View style={{ width: 70 * s, height: 40 * s }}>
                                        <TouchableOpacity onPress={() => this.tijiao(index)} style={{ width: 70 * s, height: 35 * s, backgroundColor: 'orange', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 15 }}>提交</Text></TouchableOpacity>
                                    </View>
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
        marginTop: 10 * s
    },
    mine: {
        width: 300 * s,
        height: 80 * s,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 20 * s
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