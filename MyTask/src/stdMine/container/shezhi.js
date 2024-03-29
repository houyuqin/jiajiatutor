import React, { Component } from 'react'
import { Text, View, Dimensions ,TextInput, TouchableOpacity,ImageBackground,Image, StyleSheet,AsyncStorage} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import { NoticeBar ,Icon} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width/640;

const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片', 
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high', 
    durationLimit: 10, 
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8, 
    angle: 0,
    allowsEditing: false, 
    noData: false,
    storageOptions: {
        skipBackup: true,  
        path:'images'
    }
};

export default class shezhi extends Component {
    constructor(props){
        super(props);
        this.state={ 
            data:[], 
            imageUrl:'',
            txtValue1:'',
            txtValue2:'',
            txtValue3:'',
            txtValue4:'',
            txtValue5:'',
            wtouxiang:'',
            wusername:'',
            wsex:'',
            weixinnumber:'',
            wclass:'',
            wschool:'',
            loginstd:'',
            wimage:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('url')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
        })
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8006/stdmine/${this.state.loginstd}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data[0]})
                this.setState({
                    wusername:this.state.data.wusername,
                    wsex:this.state.data.wsex,
                    weixinnumber:this.state.data.weixinnumber,
                    wclass:this.state.data.wclass,
                    wschool:this.state.data.wschool,
                })
            })   
        })
    }

    takephoto = ()=>{
        var formData = new FormData();
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                const file={uri: response.uri, type: response.type, name: response.fileName};
                formData.append('file', file);
                fetch( `http://148.70.183.184:8006/media/${response.type}`,{
                    method:'POST',
                    body:formData
                })
                .then((res)=>{
                    console.log(res)
                })
            }
        });   
    }
    baocun = ()=>{
        // AsyncStorage.clear();
        var a={};
        a.wusername=this.state.txtValue1 || this.state.wusername;
        a.wsex=this.state.txtValue2 || this.state.wsex;
        a.weixinnumber=this.state.txtValue3 || this.state.weixinnumber;
        a.wclass=this.state.txtValue4 || this.state.wclass;
        a.wschool=this.state.txtValue5 || this.state.wschool;
        // a.stdtouxiang = this.state.wimage;
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8006/stdmine/${this.state.loginstd}`,{
                method: "POST",
                headers: {
                    'Accept': 'application/json', 
                    'x-access-token': '',
                    'Content-Type': 'text/plain; charset=UTF-8;multipart/form-data'
                },
                body: JSON.stringify(a)
            })
            .then(res => res.text())
            .then((res)=>{
                console.log(res+'成功')

            }).catch((error)=>{
                console.log(error+'失败')
            })

        })
        Actions.pop();
    }
    render() {
        return (
            <View style={{flex:1}}>  
                <View style={{flexDirection:'row',justifyContent:'space-between',height:75*s,alignItems:'center',backgroundColor:'#708090'}}>
                    <View style={{marginLeft:15*s}}><Icon name="left" style={{color:'white'}} onPress={Actions.pop}/></View>                    
                    <Text style={{fontSize:19,color:'white'}}>设置</Text>
                    <Text style={{marginRight:15*s,color:'white'}} onPress={()=>this.baocun()}>保存</Text>
                </View>
                <NoticeBar marqueeProps={{ loop: true, style: { fontSize: 14, color: 'red' } }}>                    
                    Notice: students, in order to have a better experience, each of the following information is required
                </NoticeBar>
                

                <View>
                    <View style={styles.firstlist}>
                        <Text style={{fontSize:18}}>头像</Text>
                        <TouchableOpacity onPress={()=> this.takephoto()} style={styles.buttontouxiang}>
                            <ImageBackground style={{width:100*s,height:100*s}} source={require('../../../assets/wjy/img/w头像女孩.png')}>
                                <Image style={{width:100*s,height:100*s}}  source={this.state.imageUrl}/>
                            </ImageBackground>
                            <Text style={styles.genghuantouxiang}>更换头像</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>昵称</Text>
                        <TextInput 
                            placeholder="请输入昵称" 
                            onChangeText={(text) => {this.setState({txtValue1:text})}} 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                        >{this.state.wusername}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>性别</Text>
                        <TextInput 
                            placeholder="请输入性别" 
                            placeholderTextColor='gray' 
                            onChangeText={(text) => {this.setState({txtValue2:text})}} 
                            style={styles.inputconent}
                        >{this.state.wsex}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>微信</Text>
                        <TextInput 
                            placeholder="请输入微信号" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue3:text})}} 
                        >{this.state.weixinnumber}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>年级</Text>
                        <TextInput 
                            placeholder="请输入年级" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue4:text})}} 
                        >{this.state.wclass}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>学校</Text>
                        <TextInput 
                            placeholder="请输入学校" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue5:text})}} 
                        >{this.state.wschool}</TextInput>
                    </View>
                </View>
            </View>     
        )
    }
}
const styles = StyleSheet.create({
    listcontent:{
        flexDirection:'row',
        height:100*s,
        paddingLeft:70*s,
        paddingRight:10*s,
        alignItems:'center',
        justifyContent:'space-between',
    },
    inputconent:{
        width:200*s,
        fontSize:17,
        textAlign:'center',
    },
    firstlist:{
        flexDirection:'row',
        height:100*s,
        paddingLeft:80*s,
        paddingRight:50*s,
        alignItems:'center',
        justifyContent:'space-between'
    },
    genghuantouxiang:{
        width:100*s,
        opacity:0.8,
        marginTop:-33*s,
        color:'gray',
        backgroundColor:'white',
        paddingLeft:12*s
    },
    buttontouxiang:{
        width:100*s,
        height:100*s,
        borderRadius:50*s,
        overflow:'hidden',
        marginTop:20*s,
        marginRight:11*s,
    }
})