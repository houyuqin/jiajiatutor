
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
    Alert,
    TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import RadioModal from 'react-native-radio-master';
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';
// 导入 Silder组件
import Slider from '@react-native-community/slider';
// 屏幕方向锁定: 他需要改变 原来Android文件代码，当然适配两端的话，IOS也是需要更改的。
//import Orientation from 'react-native-orientation';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default class TeaStudy extends Component {

    constructor(props) {
        super(props);
        this.changePausedState = this.changePausedState.bind(this);
        this.customerSliderValue = this.customerSliderValue.bind(this);
        this.enterFullScreen = this.enterFullScreen.bind(this);
        this._changePauseSliderFullState = this._changePauseSliderFullState.bind(this);
        this._onStartShouldSetResponder = this._onStartShouldSetResponder.bind(this);
        this.state = {
            initItem: '',
            initId: '0',
            path: null,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: true,
            videoSource: null,
            isPaused: true,  //是暂停
            duration: 0,      //总时长
            currentTime: 0, //当前播放时间
            sliderValue: 0,   //进度条的进度 

            //用来控制进入全屏的属性
            videoWidth: screenWidth,
            videoHeight: 226,
            isFullScreen: false,
            isVisiblePausedSliderFullScreen: false
        };
    }

    changePausedState() { //控制按钮显示播放，要显示进度条3秒钟，之后关闭显示
        this.setState({
            isPaused: this.state.isPaused ? false : true,
            isVisiblePausedSliderFullScreen: true
        })
        //这个定时调用失去了this指向
        let that = this;
        setTimeout(function () {
            that.setState({
                isVisiblePausedSliderFullScreen: false
            })
        }, 3000)
    }
    _changePauseSliderFullState() { // 单击事件，是否显示 “暂停、进度条、全屏按钮 盒子”
        let flag = this.state.isVisiblePausedSliderFullScreen ? false : true;
        this.setState({
            isVisiblePausedSliderFullScreen: flag
        })
        //这个定时调用失去了this指向
        let that = this;
        setTimeout(function () {
            that.setState({
                isVisiblePausedSliderFullScreen: false
            })
        }, 3000)
    }
    //格式化音乐播放的时间为0：00。借助onProgress的定时器调用，更新当前时间
    formatMediaTime(time) {
        let minute = Math.floor(time / 60);
        let second = parseInt(time - minute * 60);
        minute = minute >= 10 ? minute : "0" + minute;
        second = second >= 10 ? second : "0" + second;
        return minute + ":" + second;

    }
    //加载视频调用，主要是拿到 “总时间”，并格式化
    customerOnload(e) {
        let time = e.duration;
        this.setState({
            duration: time
        })
    }
    // 获得当前的，播放时间数，但这个数是0.104，需要处理
    customerOnprogress(e) {
        let time = e.currentTime;   // 获取播放视频的秒数       
        this.setState({
            currentTime: time,
            sliderValue: time
        })
    }
    // 移动滑块，改变视频播放进度
    customerSliderValue(value) {
        this.player.seek(value);
    }
    enterFullScreen() { //1.改变宽高  2.允许进入全屏模式  3.如何配置屏幕旋转,不需要改变进度条盒子的显示和隐藏
        this.setState({
            videoWidth: screenWidth,
            videoHeight: screenHeight,
            isFullScreen: true
        })
        // 直接设置方向
        // Orientation.lockToLandscape();
    }
    _onStartShouldSetResponder(e) {
        // console.log(e);
    }
    // componentDidMount() {
    //     var initial = Orientation.getInitialOrientation();
    //     //console.log(initial)
    //     if (initial === 'PORTRAIT') {
    //         // console.log('是竖屏');
    //     } else {
    //         //console.log('如果是横屏，就将其旋转过来');
    //         Orientation.lockToPortrait();
    //     }
    // }
    // componentDidUpdate() {
    //     var initial = Orientation.getInitialOrientation();
    //     if (initial === 'PORTRAIT') {
    //         // console.log('是竖屏');
    //     } else {
    //         //console.log('如果是横屏，就将其旋转过来');
    //         Orientation.lockToPortrait();
    //     }
    // }
    //选择科目
    selected(data) {
        this.setState({ initId: data.id, initItem: data.item })
    }



    //拍摄视频
    onPressVideo = () => {
        const options = {
            title: '选择视频',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '录制视频',
            chooseFromLibraryButtonTitle: '选择视频',
            mediaType: 'video',
            videoQuality: 'low'// 视频质量 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('取消');
            }
            else if (response.error) {
                console.log('发生错误: ', response.error);
            }
            else if (response.customButton) {
                console.log('自定义按钮被点击，它的名称是：', response.customButton);
            }
            else {
                console.log('Response = ', response); // 选择或录取的视频数据对象
                this.setState({
                    videoSource: response.uri,
                    path: response.path
                });

            }
        });
    }



    //上传视频
    add = () => {
          //console.log(this.state.path)
        //   let formData=new FormData()
        //   formData.append('mp4',{uri:this.state.videoSource,path:this.state.path,type:'multipart/form-data'})
        //   console.log('a')
        //   console.log(JSON.stringify(formData))
        //   fetch('http://148.70.183.184:8005/upload', {
        //     method: 'post',
        //     headers: {
        //       'Content-Type': 'multipart/form-data'
        //     },
        //     body: formData
        //   }).then(res => {
        //     console.log('res', res)
        //   }).catch(err => {
        //     console.log('err', err)
        //   })
        Alert.alert('上传成功！')
        // RNFetchBlob.fetch('POST', 'http://148.70.183.184:8005/upload', {


        //     'Content-Type': 'multipart/form-data'
        // },
        //     [
        //         { name: 'avatar-foo',path:this.state.path, filename:'a.mp4',type:'video/mp4',data:RNFetchBlob.wrap(this.state.videoSource) }
        //     ]
        // ).then(res => {
        //     console.log('res', res)
        // }).catch(err => {
        //     console.log('err', err)
        // })

    }

    _renderImg = () => {
        const side = 200;
        // 播放按钮组件：是否显示
        let playButtonComponent = (
            <TouchableWithoutFeedback
                onPress={this.changePausedState}
            >
                <View style={styles.playBtn}>
                </View>
            </TouchableWithoutFeedback>
        );
        let pausedBtn = this.state.isPaused ? playButtonComponent : null;
        // 暂停按钮、进度条、全屏按钮 是否显示
        let pausedSliderFullComponent = (
            <View style={{ position: "absolute", bottom: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* 进度条按钮     */}
                    <View style={styles.sliderBox}>
                        <Text>{this.formatMediaTime(this.state.currentTime)}</Text>
                        <Slider
                            style={{ width: 200, height: 40 }}
                            value={this.state.sliderValue}
                            maximumValue={this.state.duration}
                            thumbTintColor="#000" //开关夹点的yanse              
                            minimumTrackTintColor="red"
                            maximumTrackTintColor="#ccc"
                            step={1}
                            onValueChange={this.customerSliderValue}
                        />
                        <Text>{this.formatMediaTime(this.state.duration)}</Text>
                    </View>
                    {/* 全屏按钮 */}
                    <View>
                        <TouchableOpacity
                            onPress={this.enterFullScreen}
                        >
                            <Text style={{ backgroundColor: '#00ff00', padding: 5 }}>全屏</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        );
        let pausedSliderFull = this.state.isVisiblePausedSliderFullScreen ? pausedSliderFullComponent : null;
        if (this.state.videoSource) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '80%', height: 300 * s, borderBottomWidth: 1, borderBottomColor: 'rgb(204, 202, 202)', backgroundColor: 'red' }}>
                        {/* <Video source={{ uri: this.state.videoSource }}   // Can be a URL or a local file. */}
                        <TouchableWithoutFeedback
                            onPress={this._changePauseSliderFullState}
                            onResponderMove={this._onStartShouldSetResponder}

                        >
                            <Video source={{ uri: this.state.videoSource }}
                                ref={(ref) => {
                                    this.player = ref
                                }}
                                style={{ width: '100%', height: 300 * s, backgroundColor: "#FFC1C1" }}
                                allowsExternalPlayback={false} // 不允许导出 或 其他播放器播放
                                paused={this.state.isPaused} // 控制视频是否播放
                                resizeMode="cover"
                                onLoad={(e) => this.customerOnload(e)}
                                onProgress={(e) => this.customerOnprogress(e)}
                                fullscreen={this.state.isFullScreen}
                            />
                        </TouchableWithoutFeedback>
                        {/* 播放的按钮：点击之后需要消失 */}
                        {pausedBtn}
                        {/* 暂停按钮，进度条，全屏按钮 */}
                        {pausedSliderFull}
                    </View>
                </View>
            );
        } else {
            return null;
        }
    }


    render() {
        return (
            <View>


                {/* <NaviBar
                    style={{ color: 'white', backgroundColor: 'black' }}
                    backgroundColor='black'
                    color='white'
                    title={'上传视频'}
                    onLeft={() => Actions.pop()}
                /> */}
                <View>
                    <View style={{
                        width: '95%', backgroundColor: 'white', marginTop: 20 * s, marginLeft: 10 * s,
                        borderRadius: 10, paddingTop: 20 * s, paddingLeft: 30 * s
                    }}>
                        <View style={{ width: '90%', height: 210 * s, borderBottomWidth: 1, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <View><Text style={{ fontSize: 17 }}>视频科目：</Text></View>


                            <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                                <RadioModal
                                    selectedValue={this.state.initId + 1}
                                    onValueChange={(id, item) => this.selected({ id, item })}
                                    style={{
                                        flexDirection: 'column',
                                        flexWrap: 'wrap',
                                        alignItems: 'flex-start',
                                        flex: 1,
                                        backgroundColor: '#ffffff', padding: 3, marginTop: 10, marginBottom: 2,
                                        width: '20%'
                                    }}
                                >
                                    <Text value="0">bios</Text>
                                    <Text value="1" >chemistry</Text>
                                    <Text value="2">chinese</Text>
                                    <Text value="3">english</Text>
                                    <Text value="4">geography</Text>
                                    <Text value="5" >history</Text>
                                    <Text value="6">math</Text>
                                    <Text value="7">painting</Text>
                                    <Text value="8">physical</Text>
                                    <Text value="9">political</Text>
                                </RadioModal>
                            </View>

                        </View>
                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 10 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>视频名称：</Text>
                            <View style={{ width: '70%', height: 80 * s, marginTop: -10 * s, paddingLeft: 20 * s, fontSize: 17 }}>
                                <TextInput
                                    placeholder="请输入视频名称"
                                    onChangeText={this.userhandle}
                                />
                            </View>
                        </View>


                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>价格：    ￥</Text>
                            <View style={{ width: '50%', height: 80 * s, marginTop: -10 * s, paddingLeft: 10 * s, fontSize: 17 }}>
                                <TextInput
                                    placeholder="请输入价格"
                                    onChangeText={this.userhandle}
                                />
                            </View>

                        </View>
                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>上传视频：</Text>
                            <View style={{ width: '50%', height: 80 * s, fontSize: 17 }}>
                                <TouchableOpacity onPress={this.onPressVideo} style={{ backgroundColor: '#2f618b', width: 120 * s, height: 50 * s, borderRadius: 13, justifyContent: 'center', alignItems: 'center', fontSize: 20 }}><Text style={{ color: 'white', fontSize: 18 }}>选择上传</Text></TouchableOpacity>
                            </View>

                        </View>
                        {this._renderImg()}

                    </View>

                </View>
                <TouchableOpacity onPress={this.add} style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 * s }}>
                    <View><Text style={{ width: 80 * s, height: 50 * s, borderRadius: 13, paddingLeft: 12 * s, fontSize: 16, color: 'white', paddingTop: 7 * s, backgroundColor: '#2f618b' }}>发布</Text></View>
                </TouchableOpacity>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    radioContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    innerStyle: {
        height: 50
    },
    backgroundVideo: {
        position: 'absolute',
        height: 230 * s,
        width: '100%'

    },
    myVideo: {
        width: 340,
        height: 240
    },
    playBtn: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 50,
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: -25,
        marginTop: -25,
        zIndex: 999
    },
    sliderBox: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

