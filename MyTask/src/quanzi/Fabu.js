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
    Lightbox 
} from 'react-native';
import { TextareaItem, InputItem, Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import { PickerView } from '@ant-design/react-native';

const {width} = Dimensions.get('window');
const s = width/640;

export default class Fabu extends Component {
    constructor(){
        super(...arguments);
        this.state={
            content:'',
            avatarSource:[],
            videoSource:'',
            value: undefined,
            initId: '',
            initItem:'',
            qiantime:'',
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
                console.log('cancel');
            }else if (response.error) {
                console.log(response.error);
            }else {
                // console.log('Response = ', response); // 选择或拍摄的照片数据对象
                let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    avatarSource: [...this.state.avatarSource,source]
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
        for (let i = 0; i < 10; i++) {
            if(this.state.avatarSource[i]){
                return(
                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                        {
                            this.state.avatarSource.map((item,index)=>(
                                <Image 
                                    source={{uri:item.uri}} 
                                    style={{width:120*s, height:120*s}} 
                                />
                            ))
                        }
                        
                    </View>
                );
            }else{
                return null;
            }
        }
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
    }
    render() {
        return (
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    <View style={{width:'95%',backgroundColor:'white',padding:10*s,marginTop:10*s,borderBottomWidth:2*s,borderBottomColor:'lightgray',borderTopLeftRadius:20*s,borderTopRightRadius:20*s}}>
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
                        />
                        <View style={{flexDirection:'row',flexWrap:'wrap',width:360*s,marginLeft:20*s}}>
                            {this._renderImg()}
                            <TouchableOpacity 
                                title='照片'
                                onPress={this.onPressImg}
                                style={{width:120*s,height:120*s,backgroundColor:'#708090',justifyContent:'center',alignItems:'center'}}
                            >
                                <Image style={{width:50*s,height:50*s}} source={require('../../assets/wjy/img/拍照.png')}/>
                                <Text style={{color:'white',fontSize:16}}>图片/视频</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'95%'}}>
                        <View style={styles.listontent}>
                            <View style={{flexDirection:'row'}}>
                                <Icon style={{color:'#708090',padding:3*s}} name='environment'/> 
                                <Text style={{fontSize:18}}>所在位置:</Text>
                            </View>
                            <Icon name='right'/>
                        </View>
                        <View style={styles.listontent}>
                            <View style={{flexDirection:'row'}}>
                                <Icon style={{color:'#708090',padding:3*s}} name='user'/> 
                                <Text style={{fontSize:18}}>权限:</Text>
                            </View>
                            <Icon name='right' onPress={()=>Actions.quanxian()}/>
                        </View>
                        <View style={styles.listontent}>
                            <View style={{flexDirection:'row'}}>
                                <Icon style={{color:'#708090',padding:3*s}} name='smile'/> 
                                <Text style={{fontSize:18}}>心情:</Text>
                            </View>
                            <Icon name='right' onPress={()=>Actions.wxinqing()}/>
                        </View>
                        <View style={styles.listontent1}>
                            <Text style={{fontSize:18}}>当前发布时间：</Text>
                        <Text>{this.state.qiantime}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
    }
});