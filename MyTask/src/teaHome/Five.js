import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, AsyncStorage,ToastAndroid } from 'react-native'
import { Icon, Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Five extends Component {
    constructor(){
        super();
        this.state={
            data1:[],
            data2:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8006/teamine")
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data2:res
                })
                for (let i = 0; i < this.state.data2.length; i++) {
                    if (this.state.data2[i].dianzanshu === 5) {
                        fetch(`http://148.70.183.184:8006/wujinyadeteamine/${this.state.data2[i].dianzanshu}`)
                            .then(res=>res.json())
                            .then(res=>{
                                this.setState({
                                    data1:res
                                })
                            })
                    }
                    
                }
            })
    }
    render() {
        return (
            <View>
                <ScrollView>
                <View style={{paddingBottom:80*s}}>
                    {
                        this.state.data1.map(item=>(
                            <View style={styles.one}>
                                <Image source={require('../../assets/hyq/000.png')} style={styles.tea}/>   
                                {/* <Image  source={{uri:'http://148.70.183.184:8000/images/'+item.teatouxiang}} style={styles.tea}></Image>    */}
                                <View style={{paddingTop:20*s}}>
                                    <Text style={styles.tch}>姓名：{item.wusername}</Text>
                                    <Text style={styles.tch}>性别：{item.wsex}</Text>
                                    <Text style={styles.tch}>年龄：{item.wage}</Text>
                                    <Text style={styles.tch}>毕业院校：{item.biyexuexiao}</Text>
                                    <Text style={styles.tch}>目前职业：{item.zhiwei}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    one:{
        width:'95%',
        marginLeft:'2%',
        height:300*s,
        flexDirection:'row',
        borderRadius: 30*s,
        borderColor: '#000',
        borderWidth: 1,
        marginTop:20*s
    },
    tch:{
        color:'#4a83bc',
        fontSize:24*s,
        marginTop:5*s
    },
    tea:{
        marginTop:15*s,
        width:200*s,
        height: 260*s,
        marginLeft:40*s,
        marginRight:40*s
    }
})