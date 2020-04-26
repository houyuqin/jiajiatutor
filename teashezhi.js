import React, { Component } from 'react'
import { Text, View, Dimensions ,TextInput, TouchableOpacity,ImageBackground,Image, StyleSheet} from 'react-native'
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
        skipBackup: true  
    }
};

export default class shezhi extends Component {
    constructor(){
        super();
        this.state={ 
            data:[], 
            imageUrl:'',
            txtValue1:'',
            txtValue2:'',
            txtValue3:'',
            txtValue4:'',
            txtValue5:'',
            txtValue6:'',
            txtValue7:'',
            txtValue8:''
        }
    }
    componentDidMount(){
        fetch('http://148.70.183.184:8006/teamine/${usr}')//
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data[0]})
                console.log(this.state.data)
            })        
    }
    takephoto = ()=>{
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
                    imageUrl:source
                })
            }      
        });   
    }
    baocun = ()=>{
        // AsyncStorage.clear();
        var a={};
        a.wusername=this.state.txtValue1;
        a.wsex=this.state.txtValue2;
        a.weixinnumber=this.state.txtValue3;
        a.wclass=this.state.txtValue4;
        a.wschool=this.state.txtValue5;
        a.stdtouxiang=JSON.stringify(this.state.imageUrl);
        fetch('http://148.70.183.184:8006/teamine/${usr}', {//
            method: "POST",
            headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
          })
            .then(res => res.json());
        Actions.pop();
    }
    render() {
        return (
            <View style={{backgroundColor:'#a3c6d9',flex:1}}>  
                <View style={{flexDirection:'row',justifyContent:'space-between',height:75*s,alignItems:'center',backgroundColor:'white'}}>
                    <View style={{marginLeft:15*s}}><Icon name="left" style={{color:'black'}} onPress={Actions.pop}/></View>                    
                    <Text style={{fontSize:19}}>设置</Text>
                    <Text style={{marginRight:15*s}} onPress={()=>this.baocun()}>保存</Text>
                </View>
                <NoticeBar marqueeProps={{ loop: true, style: { fontSize: 14, color: 'red' } }}>                    
                    Notice: students, in order to have a better experience, each of the following information is required
                </NoticeBar>
                <View>
                    <View style={styles.firstlist}>
                        <Text style={{fontSize:18}}>头像</Text>
                        <TouchableOpacity onPress={()=> this.takephoto()} style={styles.buttontouxiang}>
                            <ImageBackground style={{width:80*s,height:80*s}} source={require('../../../assets/wjy/img/w头像女孩.png')}>
                                <Image style={{width:80*s,height:80*s}}  source={this.state.imageUrl} />
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
                        ></TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>性别</Text>
                        <TextInput 
                            placeholder="请输入性别" 
                            placeholderTextColor='gray' 
                            onChangeText={(text) => {this.setState({txtValue2:text})}} 
                            style={styles.inputconent}
                        />
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>年龄</Text>
                        <TextInput 
                            placeholder="请输入年龄" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue3:text})}} 
                        />
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>微信</Text>
                        <TextInput 
                            placeholder="请输入微信号" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue4:text})}} 
                        />
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>学历</Text>
                        <TextInput 
                            placeholder="请输入学历" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue5:text})}} 
                        />
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>科目</Text>
                        <TextInput 
                            placeholder="请输入科目" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue6:text})}} 
                        ></TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>毕业学校</Text>
                        <TextInput 
                            placeholder="请输入毕业学校" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue7:text})}} 
                        />
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{fontSize:18}}>职位</Text>
                        <TextInput 
                            placeholder="请输入职位" 
                            placeholderTextColor='gray' 
                            style={styles.inputconent}
                            onChangeText={(text) => {this.setState({txtValue8:text})}} 
                        />
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
        paddingLeft:80*s,
        paddingRight:10*s,
        alignItems:'center',
        justifyContent:'space-between'
    },
    inputconent:{
        width:170*s,
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
        width:80*s,
        opacity:0.8,
        paddingLeft:2*s,
        marginTop:-28*s,
        color:'gray',
        backgroundColor:'white'
    },
    buttontouxiang:{
        width:80*s,
        height:80*s,
        borderRadius:40*s,
        overflow:'hidden',
        marginTop:20*s
    }
})