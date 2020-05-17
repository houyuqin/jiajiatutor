import React, { Component } from 'react'
import { Text,View, ScrollView,Dimensions, StyleSheet, Image,TouchableOpacity, AsyncStorage, Alert, ToastAndroid} from 'react-native';
import { TextareaItem, InputItem, Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width/640;

export default class Fabu extends Component {
    constructor(){
        super(...arguments);
        this.state={
            data:[],
            loginstd:'',
            content:'',
            avatarSource:[],
            videoSource:'',
            value: undefined,
            initId: '',
            initItem:'',
            qiantime:'',
            clickstate:true,
            count:0,
            wxinqing:'',
            wquanxian:'',
            quanzi:'',
            weizhi:'',
            wusername:''
        };
        
    }

    onPressImg = () => {
        const options = {
            title: '选择图片', 
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照', 
            chooseFromLibraryButtonTitle: '相册', 
            cameraType: 'front', // 类型 'front' or 'back' ,前置还是后置摄像头
            mediaType: 'photo', // 图片或视频 'photo', 'video', or 'mixed' on iOS, 'photo' or 'video' on Android
            videoQuality: 'high',  // 视频质量 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
            durationLimit: 10,  // 最大录制时间
            maxWidth: 300, // 返回的图片数据的最大宽 photos only 只有图片有这个属性
            maxHeight: 300, // 返回的图片数据的最大高 photos only
            quality: 0.8, // 图片质量 0 to 1 photos only
            angle: 90,
            allowsEditing: false, // 是否可以编辑
            noData: false, // 如果为true，则禁用data生成的base64 字段（极大地提高大图片的性能）
            storageOptions: {
                skipBackup: true   // 如果true，该照片将不会备份到iCloud
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                this.setState({
                    clickstate:true,
                })
            }else if (response.error) {
                console.log(response.error);
            }else {
                // console.log('Response = ', response); // 选择或拍摄的照片数据对象
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: [...this.state.avatarSource,source],
                    clickstate:false,
                    count:this.state.count+1
                });
            }
        });
        
    }
 
    // onPressVideo = () => {
    //     const options = {
    //         title: '选择视频',
    //         cancelButtonTitle: '取消',
    //         takePhotoButtonTitle: '录制视频',
    //         chooseFromLibraryButtonTitle: '选择视频',
    //         mediaType: 'video',
    //         videoQuality: 'medium' // 视频质量 'low', 'medium', or 'high' on iOS, 'low' or 'high' on Android
    //     };
 
    //     ImagePicker.showImagePicker(options, (response) => {
    //         if (response.didCancel) {
    //             console.log('取消');
    //         }
    //         else if (response.error) {
    //             console.log('发生错误: ', response.error);
    //         }
    //         else if (response.customButton) {
    //             console.log('自定义按钮被点击，它的名称是：', response.customButton);
    //         }
    //         else {
    //             console.log('Response = ', response); // 选择或录取的视频数据对象
    //             this.setState({
    //                 videoSource: response.uri
    //             });
    //         }
    //     });
    // }
    _renderImg = () => {
        // for (let i = 0; i < 10; i++) {
        //     console.log(this.state.avatarSource[i])
            if(this.state.count<9){
                return(
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        {
                            this.state.avatarSource.map((item,index)=>(
                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <Image 
                                        source={{uri:item.uri}} 
                                        style={{width:120*s, height:120*s}} 
                                    />
                                </View>
                            ))
                        }
                        <TouchableOpacity 
                            title='照片'
                            onPress={this.onPressImg}
                            style={{width:120*s,height:120*s,backgroundColor:'#708090',justifyContent:'center',alignItems:'center'}}
                        >
                            <Text style={{color:'white',fontSize:40}}>+</Text>
                        </TouchableOpacity>
                    </View>
                );
            }else{
                return(
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        {
                            this.state.avatarSource.map((item,index)=>(
                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <Image 
                                        source={{uri:item.uri}} 
                                        style={{width:120*s, height:120*s}} 
                                    />
                                </View>
                            ))
                        }
                    </View>
                );
            }
        // }
    }
    componentDidMount(){       
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth()+1).toString();
        var day = date.getDate().toString();
        var hour =  date.getHours().toString();
        var minute = date.getMinutes().toString();
        this.setState({
            qiantime:year+'年'+month+'月'+day+'日'+' '+hour+':'+minute
        })
        AsyncStorage.getItem('dongtaifabu')
            .then((value)=>{
                if (value == '1') {
                    this.setState({
                        wquanxian:'公开'
                    })
                }else if(value == '2'){
                    this.setState({
                        wquanxian:'私密'
                    })
                }
                
            })
        AsyncStorage.getItem('xinqingfabu')
            .then((value)=>{
                if (value == '1') {
                    this.setState({
                        wxinqing:'欢喜'
                    })
                }else if(value == '2'){
                    this.setState({
                        wxinqing:'伤感'
                    })
                }else if(value == '3'){
                    this.setState({
                        wxinqing:'激动'
                    })
                }else if(value == '4'){
                    this.setState({
                        wxinqing:'担忧'
                    })
                }
                
            })
        AsyncStorage.getItem('weizhifabu')
            .then((value)=>{
                if (value == '1') {
                    this.setState({
                        weizhi:''
                    })
                }else if(value == '2'){
                    this.setState({
                        weizhi:'xianshi'
                    })
                }
                
            })
    }
    // componentDidUpdate(){
    //     AsyncStorage.getItem('dongtaifabu')
    //         .then((value)=>{
    //             if (value == '1') {
    //                 this.setState({
    //                     wquanxian:'公开'
    //                 })
    //             }else if(value == '2'){
    //                 this.setState({
    //                     wquanxian:'私密'
    //                 })
    //             }
    //         })
    //         AsyncStorage.getItem('xinqingfabu')
    //         .then((value)=>{
    //             if (value == '1') {
    //                 this.setState({
    //                     wxinqing:'欢喜'
    //                 })
    //             }else if(value == '2'){
    //                 this.setState({
    //                     wxinqing:'伤感'
    //                 })
    //             }else if(value == '3'){
    //                 this.setState({
    //                     wxinqing:'激动'
    //                 })
    //             }else if(value == '4'){
    //                 this.setState({
    //                     wxinqing:'担忧'
    //                 })
    //             }
                
    //         })
    //     AsyncStorage.getItem('weizhifabu')
    //         .then((value)=>{
    //             if (value == '1') {
    //                 this.setState({
    //                     weizhi:''
    //                 })
    //             }else if(value == '2'){
    //                 this.setState({
    //                     weizhi:'xianshi'
    //                 })
    //             }
                
    //         })
    // }
    fabu = ()=>{ 
        if (this.state.content == '') {
            Alert.alert('温馨提示','请完善信息！')
        }else{
            AsyncStorage.getItem('std')
                .then((res)=>{
                    this.setState({
                        loginstd:JSON.parse(res)
                    })
                    fetch(`http://148.70.183.184:8006/stdmine/${this.state.loginstd}`)
                        .then((res) => res.json())
                        .then((res) => {
                            this.setState({data:res.data})
                            if (this.state.data[0].wusername == '') {
                                this.setState({
                                    wusername:'我的昵称'
                                })
                            }else{
                                this.setState({
                                    wusername:this.state.data[0].wusername
                                })
                                var a={};
                                a.wusername = this.state.wusername;
                                a.wphonenumber = this.state.loginstd;
                                a.content=this.state.content;
                                a.quanxian=this.state.wquanxian;
                                a.wxinqing=this.state.wxinqing;
                                a.wshijian=this.state.qiantime;
                                a.wlocal = '未写'
                                fetch('http://148.70.183.184:8006/wquanzi',{
                                    method:'POST',
                                    body:JSON.stringify(a)
                                })
                                    .then(res => res.text())
                                    .then((res)=>{
                                        console.log(res+'成功')

                                    }).catch((error)=>{
                                        console.log(error+'失败')
                                    })
                            }
                        })
                    
                    

                })
            ToastAndroid.show('发布成功',100);
            AsyncStorage.removeItem('dongtaifabu');
            AsyncStorage.removeItem('xinqingfabu');
            
        }
    }
    render() {
        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:75*s,alignItems:'center',backgroundColor:'#708090'}}>
                    <View style={{marginLeft:15*s}}><Icon name="left" style={{color:'black',color:'lightgray'}} onPress={Actions.pop}/></View>                    
                    <Text style={{fontSize:19,color:'white'}}>发布动态</Text>
                    <TouchableOpacity style={styles.fabutext} onPress={()=>this.fabu()}>
                        <Text style={{color:'white',fontSize:16}}>发布</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <View style={{width:'95%',backgroundColor:'white',padding:10*s,marginTop:10*s,borderTopLeftRadius:20*s,borderTopRightRadius:20*s}}>
                            <TextareaItem 
                                placeholder='这一刻的想法...' 
                                value={i=>this.wujinyareturn1=i} 
                                onChange={value => {
                                    this.setState({
                                        content: value,
                                    });
                                }}
                                placeholderTextColor='#C0C0C0' 
                                rows={10} 
                                count={500}
                            />
                            <View style={{flexDirection:'row',flexWrap:'wrap',width:360*s,marginLeft:20*s}}>
                                {
                                    this.state.clickstate?
                                    <TouchableOpacity 
                                        title='照片'
                                        onPress={this.onPressImg}
                                        style={{width:120*s,height:120*s,backgroundColor:'#708090',justifyContent:'center',alignItems:'center'}}
                                    >
                                        <Image style={{width:50*s,height:50*s}} source={require('../../assets/wjy/img/拍照.png')}/>
                                        <Text style={{color:'white',fontSize:16}}>图片/视频</Text>
                                    </TouchableOpacity>:
                                    <View>{this._renderImg()}</View>
                                }
                                
                            </View>
                        </View>
                        <View style={{width:'95%'}}>
                            <View style={styles.listontent}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{color:'#708090',padding:3*s}} name='environment'/> 
                                    <Text style={{fontSize:18}}>所在位置:</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:17,color:'gray'}}>{this.state.weizhi}</Text>
                                    <Icon name='right' onPress={()=>Actions.swweizhi()}/>
                                </View>
                            </View>
                            <View style={styles.listontent}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{color:'#708090',padding:3*s}} name='user'/> 
                                    <Text style={{fontSize:18}}>权限:</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:17,color:'gray'}}>{this.state.wquanxian}</Text>
                                    <Icon name='right' onPress={()=>Actions.squanxian()}/>
                                </View>
                                
                            </View>
                            <View style={styles.listontent}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{color:'#708090',padding:3*s}} name='smile'/> 
                                    <Text style={{fontSize:18}}>心情:</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontSize:17,color:'gray'}}>{this.state.wxinqing}</Text>
                                    <Icon name='right' onPress={()=>Actions.swxinqing()}/>
                                </View>
                            </View>
                            <View style={styles.listontent1}>
                                <Text style={{fontSize:18}}>当前发布时间：</Text>
                            <Text>{this.state.qiantime}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listontent:{
        flexDirection:'row',
        width:'100%',
        height:70*s,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15*s,
        paddingRight:15*s
    },
    listontent1:{
        flexDirection:'row',
        width:'100%',
        height:70*s,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15*s,
        paddingRight:15*s,
        borderBottomLeftRadius:20*s,
        borderBottomRightRadius:20*s
    },
    fabutext:{
        marginRight:10*s,
        paddingLeft:8*s,
        paddingRight:8*s,
    }
});