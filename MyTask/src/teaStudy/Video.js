
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
    StatusBar
  } from 'react-native';
import NaviBar from 'react-native-pure-navigation-bar';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class TeaStudy extends Component {
    huo = () =>{
        let today = new Date(),
        time0 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        +'   '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    }
    render() {
        return (
            <View>
    
                <NaviBar
                    style={{color:'white',backgroundColor:'black'}}
                    backgroundColor='black'
                    color='white'
                    title={'上传视频'} 
                    onLeft={() => Actions.teastudy()} 
                />
                <View>
                    <View style={{width:'95%',height:500*s,backgroundColor:'white',marginTop:20*s,marginLeft:15*s,
                            borderRadius:10,paddingTop:20*s,paddingLeft:30*s}}>
                        <View style={{width:'90%',height:70*s,borderBottomWidth:1,marginTop:10*s,borderBottomColor:'rgb(204, 202, 202)', flexDirection: 'row',}}>
                            <Text style={{fontSize:17}}>视频名称：</Text>
                            <View style={{width:'70%',height:80*s,marginTop:-10*s,paddingLeft:20*s,fontSize:17}}>
                                <TextInput 
                                    placeholder="请输入视频名称"
                                    onChangeText={this.userhandle}
                                    />
                            </View> 
                        </View>
                        <View style={{width:'90%',height:70*s,borderBottomWidth:1,marginTop:25*s,borderBottomColor:'rgb(204, 202, 202)', flexDirection: 'row',}}>
                            <Text style={{fontSize:17}}>视频科目：</Text>
                            <View style={{width:'70%',height:80*s,marginTop:-10*s,paddingLeft:20*s,fontSize:17}}>
                                <TextInput 
                                    placeholder="请输入视频科目"
                                    onChangeText={this.userhandle}
                                    />
                            </View> 
                        </View>
                        <View style={{width:'90%',height:70*s,borderBottomWidth:1,marginTop:25*s,borderBottomColor:'rgb(204, 202, 202)', flexDirection: 'row',}}>
                            <Text style={{fontSize:17}}>价格：    ￥</Text>
                            <View style={{width:'50%',height:80*s,marginTop:-10*s,paddingLeft:10*s,fontSize:17}}>
                                <TextInput 
                                    placeholder="请输入价格"
                                    onChangeText={this.userhandle}
                                    />
                            </View> 
                            
                        </View>
                        <View style={{width:'90%',height:70*s,borderBottomWidth:1,marginTop:25*s,borderBottomColor:'rgb(204, 202, 202)', flexDirection: 'row',}}>
                            <Text style={{fontSize:17}}>上传视频：</Text>
                            <View style={{width:'50%',height:80*s,marginTop:-10*s,paddingLeft:20*s,fontSize:17}}>
                                <TextInput 
                                    placeholder="请输入价格"
                                    onChangeText={this.userhandle}
                                    />
                            </View> 
                            
                        </View>
                        
                        <TouchableOpacity>
                            <Text style={{width:80*s,height:50*s,marginTop:20*s,marginLeft:440*s,borderRadius:13,paddingLeft:12*s,fontSize:16,color:'white',paddingTop:7*s,backgroundColor:'#2f618b'}}>发布</Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                    
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
})