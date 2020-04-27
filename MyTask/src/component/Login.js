import React, {Component, useEffect} from 'react';
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
  StyleSheet
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils';
import NaviBar from 'react-native-pure-navigation-bar';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Login extends Component {
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
      sredphone:'',
      sredpwd:'', 
      sreddeng:'',
      tredphone:'',
      tredpwd:'', 
      treddeng:'',
      susername:'',     
      spwd:'',
      tusername:'',
      tpwd:'',
      isLoading:false,
      time:3,
      std:'',
      tea:''
    }
  } 
  componentDidMount(){     
    console.log('教师学生账户密码：13345678910 111');
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
                });
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
  tuserhandle = (text) => {
   
    this.setState({
      tusername:text
    })
  }
  tpwdhandle = (text) => {
    
    this.setState({tpwd:text})
  }
  sphone = () =>{
    console.log("我是",this.state.susername.length);
    var sphone0 = /^1[34578]\d{9}$/;
    console.log('我是',this.state.susername);
    console.log(sphone0.test(this.state.susername));
    if(this.state.susername && sphone0.exec(this.state.susername) && this.state.susername.length ==11)
    {
      this.setState({
        sredphone:''
      })
      console.log('lalla')
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
    
    if(this.state.tusername && tphone0.exec(this.state.tusername) && this.state.tusername.length ==11)
    {
      this.setState({
        tredphone:''
      })
      console.log('lalla')
    }
   
    else if(this.state.tusername == ''){
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

show1 =() => {
      
    var ccm = 0;
    
    console.log("我是",this.state.std[0]);
    for(var i=0;i<this.state.std.length;i++)
    {
        
        console.log(this.state.std[i].wphonenumber);
        if(this.state.susername == this.state.std[i].wphonenumber && this.state.spwd == this.state.std[i].pwd)
        {
            console.log("登录成功");
           
            ccm ++;
            AsyncStorage.removeItem('std');
            AsyncStorage.setItem('std',JSON.stringify(this.state.susername));
            Actions.lightbox();
        }
        
    }
    if(ccm == 0 ){
        // this.setState({url:'/loginn'})
        console.log("登录 失败");           
        // console.log(this.state.url);
        this.setState({
            sredpwd:'手机号或密码错误'
        })
    }
                    
}
show2 = () =>{
      
    var ccm = 0;
    
    
    for(var i=0;i<this.state.tea.length;i++)
    {
        console.log(this.state.tea[i].wphonenumber);
        if(this.state.tusername == this.state.tea[i].wphonenumber && this.state.tpwd == this.state.tea[i].pwd)
        {
            console.log("登录成功");
            
            ccm ++;
           
            AsyncStorage.removeItem('tea');
            AsyncStorage.setItem('tea',JSON.stringify(this.state.tusername)); 
            //上面两行是里面要获取的数据
           
            Actions.lightbox1();
        }
    }
    if(ccm == 0 ){
        
        console.log("登录 失败");           
        
        this.setState({
            tredpwd:'手机号或密码错误'
        })
    }
                    
}
  render() {
    return (
      <View style={{width:'100%',height:'100%',backgroundColor:'#417bab',}}>
        <View style={{width:'100%',height:'100%',flex:1,}} >
          <View style={{flex: 1,justifyContent: 'center'}}>
            <Image style={styles.xue} source={require('../../assets/cq/xueba.jpg')}/>
            <View
              style={styles.er}>
                <View style={{marginLeft:30*s,marginTop:30*s,flexDirection:'row'}}>
                  
                    <TouchableOpacity onPress={this.xueshengd}>
                      <Text style={[styles.xuesheng,{color:this.state.xcolor,borderBottomColor:this.state.xcolor,}]}>学生登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.jiaoshid}>
                      <Text style={[styles.jiao,{color:this.state.jcolor,borderBottomColor:this.state.jcolor,}]}>教师登录</Text>
                    </TouchableOpacity>                                
                </View>
                {/* <View style={[{display:this.state.xdisplay}]}> */}
                {/* 学生登录 */}
                <View style={[{display:this.state.xdisplay}]}>
                  <View style={{marginTop:60*s,paddingLeft:30*s}}>
                    <View style={{flexDirection: 'row',}}>
                      <Image style={{marginTop:20*s,width:53*s,height:53*s}} 
                        source={require('../../assets/cq/yonghu.png')}/>
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
                    
                    
                    <View style={{flexDirection: 'row',marginTop:0*s,}}>
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
                          
                          placeholder="请输入学生密码"
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
                    <View style={{marginLeft:100*s}}>
                      <Text style={{fontSize:13,color:'red'}}>{this.state.sredpwd}</Text>
                    </View>
                    <TouchableOpacity 
                        style={{
                            width: '86%',
                            height: 40,
                            marginLeft:22*s,
                            borderRadius:10,
                            backgroundColor: '#2f618b',
                            marginTop: 60*s,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.show1}>
                        <Text style={{color:'white',}}>登录</Text>
                    </TouchableOpacity>
                    
                    <View style={{flexDirection: 'row',marginTop:110*s}}>
                      
                      <View style={{width:'65%',marginLeft:20*s,marginTop:20*s}}>
                        <TouchableOpacity 
                          onPress={() => Actions.register()}
                        >
                          <Text style={{color:'#2f618b'}}>点击注册</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{width:'60%',marginTop:20*s}}>
                        <TouchableOpacity 
                          onPress={() => Actions.spassword()}
                        >
                          <Text style={{color:'#2f618b'}}>忘记密码?</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                </View>
                {/*  教师登录*/}
                <View style={[{display:this.state.jdisplay}]}>
                  <View style={{marginTop:60*s,paddingLeft:30*s}}>
                    <View style={{flexDirection: 'row',}}>
                      <Image style={{marginTop:20*s,width:53*s,height:53*s}} 
                        source={require('../../assets/cq/yonghu.png')}/>
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
                          
                          placeholder="请输入教师用户名"
                          onBlur={this.tphone}
                          onChangeText={this.tuserhandle}
                        />
                      </View>
                    </View>
                    <View style={{marginLeft:100*s}}>
                    <Text style={{fontSize:13,color:'red'}}>{this.state.tredphone}</Text>
                    </View>
                    
                    <View style={{flexDirection: 'row',marginTop:0*s,}}>
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
                          
                          placeholder="请输入教师密码"
                          secureTextEntry={!this.state.imageState}
                          onChangeText={this.tpwdhandle}
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
                    <Text style={{fontSize:13,color:'red'}}>{this.state.tredpwd}</Text>
                    </View>
                    <TouchableOpacity 
                        style={{
                            width: '86%',
                            height: 40,
                            marginLeft:22*s,
                            borderRadius:10,
                            backgroundColor: '#2f618b',
                            marginTop: 60*s,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={this.show2}>
                        <Text style={{color:'white',}}>登录</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row',marginTop:110*s}}>
                      
                      <View style={{width:'65%',marginLeft:20*s,marginTop:20*s}}>
                        <TouchableOpacity 
                          onPress={() => Actions.register()}
                        >
                          <Text style={{color:'#2f618b'}}>点击注册</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{width:'60%',marginTop:20*s}}>
                        <TouchableOpacity 
                          onPress={() => Actions.tpassword()}
                        >
                          <Text style={{color:'#2f618b'}}>忘记密码?</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                </View>

            </View>
            <View style={{marginTop:50,flexDirection:'row',justifyContent:'center'}}>
                    {
                        this.state.isLoading 
                            ?<View><Text style={{fontSize:24,color:'red'}}>正在登录... </Text></View> 
                            : null
                    }
            </View>
          </View>
          
          </View>
      </View>
    );
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
    marginTop:10*s,
    marginLeft:120*s
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
