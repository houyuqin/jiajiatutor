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
import { myFetch } from '../utils';
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
            imageState:false,
            bi:'flex',
            zheng:'none',
            bi1:'flex',
            zheng1:'none',
            bi2:'flex',
            zheng2:'none',
            bi3:'flex',
            zheng3:'none',
            username:'',
            password:'',
            passwordCfm:'',
            isLoading:false,
            time:3,
            std:'',
            tea:'',
            sredphone:'',
            sredpwd:'', 
            sreddeng:'',
            tredphone:'',
            tredpwd:'', 
            treddeng:'',
            susername:'',     
            spwd:'',
            spwd1:'',
            tusername:'',
            tpwd:'',
            tpwd1:'',
            sfocuss:0,
            sfocuss1:1,
            tfocuss:0,
            tfocuss1:1,
            scheng:0,
            tcheng:0
        }
    }
    componentDidMount(){     
        
        fetch('http://148.70.183.184:8003/loginn')
            .then((res)=>res.json())
            .then((res)=>{                
                for(var i=0;i<res.length;i++){
                        this.setState({
                            std:[...this.state.std,res[i]]
                        });                       
                }              
            })
            fetch('http://148.70.183.184:8003/logon')
            .then((res)=>res.json())
            .then((res)=>{                
                for(var i=0;i<res.length;i++){                       
                        this.setState({
                            tea:[...this.state.tea,res[i]]
                        })
                }              
            })
        
    }
    bi = () =>{
        this.setState({
          imageState:true,
          bi:'none',
          zheng:'flex',
        })
      }
    zheng = () =>{
        this.setState({
          imageState:false,
          bi:'flex',
          zheng:'none',
        })
      }
    bi1 = () =>{
        this.setState({
          imageState:true,
          bi1:'none',
          zheng1:'flex',
        })
      }
    zheng1 = () =>{
        this.setState({
          imageState:false,
          bi1:'flex',
          zheng1:'none',
        })
      }
    bi2 = () =>{
        this.setState({
          imageState:true,
          bi2:'none',
          zheng2:'flex',
        })
      }
    zheng2 = () =>{
        this.setState({
          imageState:false,
          bi2:'flex',
          zheng2:'none',
        })
      }
    bi3 = () =>{
        this.setState({
          imageState:true,
          bi3:'none',
          zheng3:'flex',
        })
      }
    zheng3 = () =>{
        this.setState({
          imageState:false,
          bi3:'flex',
          zheng3:'none',
        })
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
      suserhandle = (text) => {
   
        this.setState({
          susername:text
        })
      }
      spwdhandle = (text) => {
        
        this.setState({spwd:text})
      }
      spwdhandle1 = (text) => {
        
        this.setState({spwd1:text})
      }
      tuserhandle = (text) => {
       
        this.setState({
          tusername:text
        })
      }
      tpwdhandle = (text) => {
        
        this.setState({tpwd:text})
      }
      tpwdhandle1 = (text) => {
        
        this.setState({tpwd1:text})
      }
      sphone = () =>{
        
        var sphone0 = /^1[34578]\d{9}$/;
        var sss = 0;
        for(var i=0;i<this.state.std.length;i++)
        {
            if(this.state.susername == this.state.std[i].wphonenumber)
            {
                sss++;
            }
            
        }
        console.log(sss);
        if(this.state.susername && sphone0.exec(this.state.susername) && this.state.susername.length ==11 && sss==0)
        {
          this.setState({
            sredphone:'',
            scheng:1
          })
          
        }
        else if(sss!= 0)
        {

            this.setState({
                sredphone:'手机号已经被注册！'
              })
        }
        else if(this.state.susername == ''){
          this.setState({
            sredphone:'手机号不能为空'
          })
        }
        else{
          this.setState({
            sredphone:'请输入正确的手机号'
          })
        }
      }
      tphone = () =>{
        
        var tphone0 = /^1[34578]\d{9}$/;
        var ttt = 0;
        for(var i=0;i<this.state.tea.length;i++)
        {
            if(this.state.tusername == this.state.tea[i].wphonenumber)
            {
                ttt++;
            }
            
        }
        
        if(this.state.tusername && tphone0.exec(this.state.tusername) && this.state.tusername.length ==11 && ttt==0)
        {
          this.setState({
            tredphone:'',
            tcheng:1
          })
          console.log('lalla')
        }
        else if(ttt!=0)
        {
            this.setState({
                tredphone:'手机号已经被注册！'
              })
        }
        else if(this.state.sphone == ''){
          this.setState({
            tredphone:'手机号不能为空'
          })
        }
        else{
          this.setState({
            tredphone:'请输入正确的手机号'
          })
        }
      }
    sfocus = () =>{
        this.setState({
            sfocuss:10
        })
    }
    sfocus1 = () =>{
        this.setState({
            sfocuss1:11
        })
    }
    tfocus = () =>{
        this.setState({
            tfocuss:10
        })
    }
    tfocus1 = () =>{
        this.setState({
            tfocuss1:11
        })
    }
    sbulr = () =>{
        if(this.state.sfocuss == 10 && this.state.sfocuss1 == 11 && this.state.spwd == this.state.spwd1)
        {
            this.setState({
                sredpwd:'',
                scheng:2
            })             
        }
        else if(this.state.sfocuss == 10 && this.state.sfocuss1 == 11 && this.state.spwd != this.state.spwd1)
        {
            this.setState({
                sredpwd:'两次输入的密码不一致',
            }) 
        }
    }
    tbulr = () =>{
        if(this.state.tfocuss == 10 && this.state.tfocuss1 == 11 && this.state.tpwd == this.state.tpwd1)
        {
            this.setState({
                tredpwd:'',
                tcheng:2
            })             
        }
        else if(this.state.tfocuss == 10 && this.state.tfocuss1 == 11 && this.state.tpwd != this.state.tpwd1)
        {
            this.setState({
                tredpwd:'两次输入的密码不一致',
            }) 
        }
    }
    sshow = () =>{
        var a={};
        if(this.state.scheng == 2)
        {
                console.log('我完成了')
                console.log(this.state.susername);
                console.log(this.state.spwd);
                a.wphonenumber=this.state.susername;        
                a.pwd=this.state.spwd;
                a.coo=0;
                fetch("http://148.70.183.184:8003/loginn", {
                    method: "POST",
                    headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then(function(response) { 
                    // do sth
                }); 
                ToastAndroid.show("注册成功，请登录！",ToastAndroid.SHORT);
                setTimeout(()=>{
                    Actions.login();
                },2000)
        }
    }
    tshow = () =>{
        var a={};
        if(this.state.tcheng == 2)
        {
                console.log('我完成了')
                console.log(this.state.tusername);
                console.log(this.state.tpwd);
                a.wphonenumber=this.state.tusername;        
                a.pwd=this.state.tpwd;
                a.coo=1;
                fetch("http://148.70.183.184:8003/logon", {
                    method: "POST",
                    headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then(function(response) { 
                    // do sth
                }); 
                ToastAndroid.show("注册成功，请登录！",ToastAndroid.SHORT);

                setTimeout(()=>{
                    Actions.login();
                },2000)
                
        }
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
                     <Image style={{width:40*s,height:40*s,marginTop:5*s,marginLeft:10*s}} source={require('../../assets/cq/zuo.png')}/>
                </TouchableOpacity>
               
                <View style={{width:'100%',height:'100%',flex:1,}} >
                
                    <View style={{flex: 1,justifyContent: 'center'}}>
                        <Image style={styles.xue} source={require('../../assets/cq/xuezha.jpg')}/>
                        <View
                style={styles.er}>
                            <View style={{marginLeft:30*s,marginTop:30*s,flexDirection:'row'}}>
                            
                                <TouchableOpacity onPress={this.xueshengd}>
                                    <Text style={[styles.xuesheng,{color:this.state.xcolor,borderBottomColor:this.state.xcolor,}]}>学生注册</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.jiaoshid}>
                                    <Text style={[styles.jiao,{color:this.state.jcolor,borderBottomColor:this.state.jcolor,}]}>教师注册</Text>
                                </TouchableOpacity>                                
                            </View>
                            <View style={[{display:this.state.xdisplay}]}>
                                <View style={{marginTop:40*s,paddingLeft:30*s}}>
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
                                            
                                            placeholder="请输入学生手机号"
                                            onBlur={this.sphone}
                                            onChangeText={this.suserhandle}
                                            />
                                        </View>
                                    </View>
                                    <View style={{marginLeft:100*s}}>
                                        <Text style={{fontSize:13,color:'red'}}>{this.state.sredphone}</Text>
                                    </View>
                                    
                                    <View style={{flexDirection: 'row',marginTop:-12*s,}}>
                                        <Image style={{marginTop:20*s,width:53*s,height:53*s}} 
                                            source={require('../../assets/cq/mi.png')}/>
                                        <View style={{
                                            width:'70%',
                                            height:70*s,
                                            marginLeft:30*s,
                                            paddingLeft: 10*s,      
                                            paddingTop:10*s,  
                                            borderBottomColor: '#ccc',
                                            borderBottomWidth: 1, 
                                                                
                                        }}>
                                            
                                            <TextInput 
                                            
                                            placeholder="请输入密码"
                                            onFocus={this.sfocus}
                                            secureTextEntry={!this.state.imageState}
                                            onChangeText={this.spwdhandle}
                                            />
                                        </View>
                                        <TouchableOpacity onPress={this.bi} style={[{display:this.state.bi}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/bi.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.zheng} style={[{display:this.state.zheng}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/zheng.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                    
                                    <View style={{flexDirection: 'row',marginTop:20*s,}}>
                                        <Image style={{marginTop:20*s,width:53*s,height:53*s}} 
                                            source={require('../../assets/cq/mi.png')}/>
                                        <View style={{
                                            width:'70%',
                                            height:70*s,
                                            marginLeft:30*s,
                                            paddingLeft: 10*s,      
                                            paddingTop:10*s,  
                                            borderBottomColor: '#ccc',
                                            borderBottomWidth: 1, 
                                                                
                                        }}>
                                            
                                            <TextInput 
                                            
                                            placeholder="请再次输入密码"
                                            onFocus={this.sfocus1}
                                            onBlur={this.sbulr}
                                            secureTextEntry={!this.state.imageState}
                                            onChangeText={this.spwdhandle1}
                                            />
                                        </View>
                                        <TouchableOpacity onPress={this.bi1} style={[{display:this.state.bi1}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/bi.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.zheng1} style={[{display:this.state.zheng1}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/zheng.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft:100*s}}>
                                        <Text style={{fontSize:13,color:'red'}}>{this.state.sredpwd}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop:-8*s,}}>
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
                                            
                                            placeholder="请输入验证码"

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
                                        onPress={this.sshow}>
                                        <Text style={{color:'white',}}>注册</Text>
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                            <View style={[{display:this.state.jdisplay}]}>
                                <View style={{marginTop:40*s,paddingLeft:30*s}}>
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
                                            
                                            placeholder="请输入教师手机号"
                                            onBlur={this.tphone}
                                            onChangeText={this.tuserhandle}
                                            />
                                        </View>
                                    </View>
                                    <View style={{marginLeft:100*s}}>
                                    <Text style={{fontSize:13,color:'red'}}>{this.state.tredphone}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop:-12*s,}}>
                                        <Image style={{marginTop:20*s,width:53*s,height:53*s}} 
                                            source={require('../../assets/cq/mi.png')}/>
                                        <View style={{
                                            width:'70%',
                                            height:70*s,
                                            marginLeft:30*s,
                                            paddingLeft: 10*s,      
                                            paddingTop:10*s,  
                                            borderBottomColor: '#ccc',
                                            borderBottomWidth: 1, 
                                                                
                                        }}>
                                            
                                            <TextInput 
                                            
                                            placeholder="请输入密码"
                                            onFocus={this.tfocus}
                                            secureTextEntry={!this.state.imageState}
                                            onChangeText={this.tpwdhandle}
                                            />
                                        </View>
                                        <TouchableOpacity onPress={this.bi2} style={[{display:this.state.bi2}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/bi.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.zheng2} style={[{display:this.state.zheng2}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/zheng.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop:20*s,}}>
                                        <Image style={{marginTop:20*s,width:53*s,height:53*s}} 
                                            source={require('../../assets/cq/mi.png')}/>
                                        <View style={{
                                            width:'70%',
                                            height:70*s,
                                            marginLeft:30*s,
                                            paddingLeft: 10*s,      
                                            paddingTop:10*s,  
                                            borderBottomColor: '#ccc',
                                            borderBottomWidth: 1, 
                                                                
                                        }}>
                                            
                                            <TextInput 
                                            
                                            placeholder="请再次输入密码"
                                            onFocus={this.tfocus1}
                                            onBlur={this.tbulr}
                                            secureTextEntry={!this.state.imageState}
                                            onChangeText={this.tpwdhandle1}
                                            />
                                        </View>
                                        <TouchableOpacity onPress={this.bi3} style={[{display:this.state.bi3}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/bi.png')}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.zheng3} style={[{display:this.state.zheng3}]}>
                                            <Image style={{height:37*s,width:37*s,marginLeft:0*s,marginTop:20*s}} 
                                            source={require('../../assets/cq/zheng.png')}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft:100*s}}>
                                        <Text style={{fontSize:13,color:'red'}}>{this.state.tredpwd}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row',marginTop:-8*s,}}>
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
                                            
                                            placeholder="请输入验证码"

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
                                        onPress={this.tshow}>
                                        <Text style={{color:'white',}}>注册</Text>
                                    </TouchableOpacity>
                                    <View style={{marginLeft:100*s}}>
                                        <Text style={{fontSize:13,color:'red'}}>{this.state.tredcode}</Text>
                                    </View>
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
      width:230*s,
      height:60*s,
      fontSize:20,
      
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
      fontSize:20,
      
      borderBottomWidth:5,
      
      marginLeft:14,
      paddingLeft:45*s,
      backgroundColor:'#f6f6f6',
      elevation: 5,
      shadowColor: 'white',
      shadowOffset: { width: 2, height: 2 },
      
    }
  })