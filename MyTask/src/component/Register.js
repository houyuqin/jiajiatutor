import React, { Component } from 'react'
import { Icon } from '@ant-design/react-native';
import {
    View, 
    Text, 
    Image, 
    TextInput, 
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid
  } from 'react-native';
import { myFetch } from '../utils';
import { Actions } from 'react-native-router-flux';
import NaviBar from 'react-native-pure-navigation-bar';

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            passwordCfm:'',
            isLoading:false,
            time:3
        }
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
            <View style={{width:'100%',height:'100%'}}>
                <NaviBar 
                    color='red'
                    title={'注册'} 
                    onLeft={() => Actions.login()} 
                />
                <View style={{flex: 1,justifyContent: 'center'}}>
                    <View
                    style={{ alignItems: 'center'}}>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput 
                        placeholder="用户名"
                        onChangeText={this.userhandle}
                        />
                    </View>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput 
                        placeholder="密码"
                        secureTextEntry={true} 
                        onChangeText={this.pwdhandle}
                        />
                    </View>
                    <View
                        style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        }}>
                        <Icon name="user" color="red"/>
                        <TextInput 
                        placeholder="请确认密码"
                        secureTextEntry={true} 
                        onChangeText={this.pwdCfmhandle}
                        />
                    </View>
                        <TouchableOpacity 
                            style={{
                                width: '80%',
                                height: 40,
                                backgroundColor: '#ccc',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={this.register}>
                            <Text>注册</Text>
                        </TouchableOpacity>
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
        )
    }
}
