import React, { Component } from 'react'
import { Icon } from '@ant-design/react-native';
import {
    View, 
    Text, 
    Image, 
    TextInput, 
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    StyleSheet,
    Dimensions
  } from 'react-native';
// import { myFetch } from '../utils';
import { Actions } from 'react-native-router-flux';
import NaviBar from 'react-native-pure-navigation-bar';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            xcolor:'#2f618b',
            jcolor:'#969798',
            xdisplay:'flex',
            jdisplay:'none',
            username:'',
            password:'',
            passwordCfm:'',
            isLoading:false,
            time:3
        }
    }
    xueshengd = () =>{
        this.setState({
          xcolor:'#2f618b',
          jcolor:'#969798',
          xdisplay:'flex',
          jdisplay:'none',
        })
      }
      jiaoshid = () =>{
        
        this.setState({
          xcolor:'#969798',
          jcolor:'#2f618b',
          
          xdisplay:'none',
          jdisplay:'flex',
        })
      }
    userhandle = (text) => {
        console.log(text);
        this.setState({username:text})
    }
    pwdhandle = (text) => {
        console.log(text);
        this.setState({password:text})
    }
    pwdCfmhandle = (text) => {
        console.log(text);
        this.setState({passwordCfm:text})
    }
    register = () =>{
        if(this.state.username != '' && this.state.password != '' && this.state.passwordCfm != ''){
            if(this.state.password != this.state.passwordCfm){
                ToastAndroid.show('两次输入的密码不一致！', ToastAndroid.SHORT);
            }
            else{
                this.setState({isloading:true})
                myFetch.post('/register',{
                    username: this.state.username,
                    pwd: this.state.password}
                ).then(res=>{
                    // 根据返回状态进行判断，正确时跳转首页
                    if(res.data.token=='qq' || res.data.token=='hh'){
                        ToastAndroid.show('该账号已存在！', ToastAndroid.SHORT);
                    }else{
                    AsyncStorage.setItem('userid',JSON.stringify(res.data))
                        .then(()=>{
                            console.log(res)
                            this.setState({isloading:false});
                            ToastAndroid.show("注册成功，请登录！",ToastAndroid.SHORT);
                            Actions.login();
                        })
                    }
                })
            }
        }
        else{
            ToastAndroid.show('请确认用户名密码不为空！', ToastAndroid.SHORT);
        }
    }
    render() {
        return (
            <View style={{width:'100%',height:'100%',backgroundColor:'#417bab',}}>
                {/* <NaviBar 
                    color='red'
                    title={'注册'} 
                    onLeft={() => Actions.login()} 
                /> */}
                <TouchableOpacity onPress={Actions.pop}>
                     <Image style={{width:40*s,height:40*s,marginTop:17*s,marginLeft:20*s}} source={require('../../assets/cq/zuo.png')}/>
                </TouchableOpacity>
               
                <View style={{width:'100%',height:'100%',flex:1,}} >
                
                <View style={{flex: 1,justifyContent: 'center'}}>
                <Image style={styles.xue} source={require('../../assets/cq/xuezha.jpg')}/>
                <View
                style={styles.er}>
                    <View style={{marginLeft:30*s,marginTop:30*s,flexDirection:'row'}}>
                    
                        <TouchableOpacity onPress={this.xueshengd}>
                        <Text style={[styles.xuesheng,{color:this.state.xcolor,borderBottomColor:this.state.xcolor,}]}>找回密码(学生端)</Text>
                        </TouchableOpacity>
                                                       
                    </View>
                    {/* <View style={[{display:this.state.xdisplay}]}> */}
                    <View style={[{display:this.state.xdisplay}]}>
                    <View style={{marginTop:60*s,paddingLeft:30*s}}>
                        <View style={{flexDirection: 'row',}}>
                        <Image style={{marginTop:20*s,width:56*s,height:56*s}} 
                            source={require('../../assets/cq/shouji.png')}/>
                        <View style={{
                            width:'76%',
                            height:70*s,
                            marginLeft:30*s,
                            paddingLeft: 10*s,      
                            paddingTop:10*s,  
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1, 
                                                
                        }}>
                            
                            <TextInput 
                            placeholderTextColor='gray'
                            placeholder="请输入学生手机号"
                            style={{fontSize:28*s}}
                            onChangeText={this.userhandle}
                            />
                        </View>
                        </View>
                        
                        
                        
                        <View style={{flexDirection: 'row',marginTop:40*s,}}>
                            <Image style={{marginTop:20*s,width:50*s,height:50*s}} 
                                source={require('../../assets/cq/yanzheng.png')}/>
                            <View style={{
                                width:'76%',
                                height:70*s,
                                marginLeft:30*s,
                                paddingLeft: 10*s,      
                                paddingTop:10*s,  
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1, 
                                                    
                            }}>
                                
                                <TextInput 
                                placeholderTextColor='gray'
                                placeholder="请输入验证码"
                                style={{fontSize:28*s}}
                                onChangeText={this.userhandle}
                                />
                            </View>
                           
                        </View>
                        <TouchableOpacity 
                            style={{
                                width: '86%',
                                height: 40,
                                marginLeft:22*s,
                                borderRadius:10,
                                backgroundColor: '#2f618b',
                                marginTop: 80*s,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={this.login}>
                            <Text style={{fontSize:28*s,color:'white',}}>完成</Text>
                        </TouchableOpacity>
                        
                    </View>
                    </View>
                
                    </View>
                    <View style={{marginTop:50,flexDirection:'row',justifyContent:'center'}}>
                        {
                            this.state.isLoading 
                                ?<View><Text style={{fontSize:24,color:'red'}}>正在注册... </Text></View> 
                                : null
                        }
                    </View>
                </View>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    er:{
      marginTop:20*s,
      marginLeft:36*s,
      padding:10*s,
      width:570*s,
      height:680*s,
      opacity:0.8,
      borderRadius:20*s,
      backgroundColor:'white'
    },
    xue:{
      marginTop:-50*s,
      marginLeft:170*s
    },
    xuesheng:{
      width:340*s,
      height:60*s,
      paddingTop:4*s,
      fontSize:32*s,
      marginLeft:70*s,
      borderBottomWidth:5,
      paddingLeft:45*s,
      backgroundColor:'#f6f6f6',
      elevation: 5,
      shadowColor: 'white',
      shadowOffset: { width: 2, height: 2 }
    },
    jiao:{   
      width:230*s,
      height:60*s,
      paddingTop:4*s,
      fontSize:32*s,  
      borderBottomWidth:5, 
      marginLeft:14,
      paddingLeft:45*s,
      backgroundColor:'#f6f6f6',
      elevation: 5,
      shadowColor: 'white',
      shadowOffset: { width: 2, height: 2 },
      
    }
  })