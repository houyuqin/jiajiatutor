import React, {Component, useEffect} from 'react';
import {
  View, 
  Text, 
  Image, 
  TextInput, 
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  Dimensions
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
      username:'',
      pwd:'',
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
    this.setState({pwd:text})
  }
  login = () => {
    // this.setState({ isLoading: true });
    if(this.state.pwd=='' || this.state.username==''){
      ToastAndroid.show('请输入用户名或密码！',ToastAndroid.SHORT);
    }else{
        AsyncStorage.getItem('userid',(err,res)=>{
          console.log(JSON.parse(res));
          if(JSON.parse(res).username !== this.state.username || JSON.parse(res).pwd !== this.state.pwd){
            ToastAndroid.show("用户名或密码错误!",ToastAndroid.SHORT,ToastAndroid.CENTER);
          }
          else if(JSON.parse(res).username === this.state.username && JSON.parse(res).pwd === this.state.pwd){
            this.setState({ isLoading: true });
            ToastAndroid.show("登录成功!",ToastAndroid.SHORT);
            AsyncStorage.setItem('user',JSON.stringify(res))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.homePage();
                })
          }
          else{
            ToastAndroid.show('请先注册！',ToastAndroid.SHORT)
          }
      })
    }
  }


  render() {
    return (
      <View style={{width:'100%',height:'100%'}}>
          <View style={{
            width:'100%',
            height:64*s,
            backgroundColor:'white',
            flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center'
          }}>
            <TouchableOpacity 
              onPress={()=>Actions.register()}
            >
              <Icon name='left' color='black'></Icon>
            </TouchableOpacity>
            <Text style={{fontSize:20}}>登录</Text>
            <View></View>
          </View>
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
                <TouchableOpacity 
                    style={{
                        width: '80%',
                        height: 40,
                        backgroundColor: '#ccc',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={this.login}>
                    <Text>登录</Text>
                </TouchableOpacity>

                <View style={{width:'80%',marginTop:20}}>
                  <TouchableOpacity 
                    onPress={() => Actions.register()}
                  >
                    <Text style={{color:'blue'}}>没有账户，注册</Text>
                  </TouchableOpacity>
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
    );
  }
}