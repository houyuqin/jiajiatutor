import React, { Component } from 'react'
import {StyleSheet,View,Text, Image, TouchableOpacity,ToastAndroid, AsyncStorage , Dimensions, ScrollView} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
var num= [];
const {width} = Dimensions.get('window');
const s = width/640;
export default class Fabuzuoye extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            logintea:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('tea')
        .then((res)=>{
            this.setState({
                logintea:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8005/fabu/${this.state.logintea}`)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({ 
                        data: res.data 
                    });
                })                
        })
    } 
    del=(idx)=>{
        fetch(`http://148.70.183.184:8005/delzuoye/${idx}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body:JSON.stringify({id:idx})
                })
        ToastAndroid.show('删除成功！',100);
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item)=>(
                        <View style={{width:610*s,height:170*s,fontSize:18,padding:10*s,margin:12*s,borderRadius:10*s,backgroundColor:'white'}} key={item.id}>
                            <Text style={{fontSize:18}}>任务编号：{item.id}</Text>
                            <Text style={{wordWrap:'break-word'}}>科目：{item.kemu}</Text>
                            <Text></Text>
                            <View style={{borderLeftStyle:'solid',paddingLeft:5*s,borderLeftWidth:5*s,flexDirection:'row'}}>
                                <Text style={{fontSize:15}}>发布了任务名为</Text>
                                <Text style={{color:'red',fontSize:15}}>{item.title}</Text> 
                                <Text>的任务作业</Text>
                            </View>
                            <Text style={{color:'gray',fontSize:15,marginLeft:300*s}}>{item.endtime}</Text>
                            <TouchableOpacity onPress={()=>this.del(item.id)} style={{marginLeft:500*s,marginTop:-140*s,width:80*s,alignItems:'center',backgroundColor:'#708090',borderRadius:10*s}}><Text style={{fontSize:17,color:'white'}}>删除</Text></TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}
