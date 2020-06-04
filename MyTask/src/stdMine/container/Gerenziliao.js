import React, { Component } from 'react'
import { Text, View,Dimensions, StyleSheet,AsyncStorage } from 'react-native'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get('window');
const s = width/640;
export default class Gerenziliao extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            wusername:'',
            wsex:'',
            wphonenumber:'',
            wclass:'',
            wschool:'',
            loginstd:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8006/stdmine/${this.state.loginstd}`,{
                headers: {
                    "Accept": "application/json",
                    "Content-Type": 'application/json',   
                    "Connection": "close",   
                    "type": "getUserData",   
                }
            })
                .then((res) => res.json())
                .then((res) => {
                    this.setState({data:res.data}) 
                    if (this.state.data[0].wusername == '') {
                        this.setState({
                            wusername:'(您还没有设置用户名哦)'
                        })
                    }else{
                        this.setState({
                            wusername:this.state.data[0].wusername
                        })
                    }
                    if (this.state.data[0].wsex == '') {
                        this.setState({
                            wsex:'(您还没有设置性别哦)'
                        })
                    }else{
                        this.setState({
                            wsex:this.state.data[0].wsex
                        })
                    }
                    if (this.state.data[0].wschool == '') {
                        this.setState({
                            wschool:'(您还没有设置学校哦)'
                        })
                    }else{
                        this.setState({
                            wschool:this.state.data[0].wschool
                        })
                    }
                    if (this.state.data[0].wclass == '') {
                        this.setState({
                            wclass:'(您还没有设置年级哦)'
                        })
                    }else{
                        this.setState({
                            wclass:this.state.data[0].wclass
                        })
                    }
                    if (this.state.data[0].wphonenumber == '') {
                        this.setState({
                            wphonenumber:'(您还没有设置手机号哦)'
                        })
                    }else{
                        this.setState({
                            wphonenumber:this.state.data[0].wphonenumber
                        })
                    }
                })
        })  
    }
    render() {
        return (
            <View>
                <View style={{backgroundColor:'#708090',paddingTop:20*s,paddingLeft:15*s}}><Icon name='left' onPress={Actions.pop}/></View>
                <View style={{height:130*s,backgroundColor:'#708090',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:50,marginTop:5*s,color:'white'}}>个</Text>
                    <Text style={{fontSize:35,marginTop:40*s,marginLeft:20*s,color:'white'}}>人</Text>
                    <Text style={{fontSize:36,marginTop:5*s,marginLeft:20*s,color:'white'}}>资</Text>
                    <Text style={{fontSize:45,marginTop:50*s,marginLeft:20*s,color:'white'}}>料</Text>
                </View>
                <View style={{marginLeft:50*s,marginTop:30*s}}>
                    <Text style={styles.listcontent}>用户名：{this.state.wusername}</Text>
                    <Text style={styles.listcontent}>性别：{this.state.wsex}</Text>
                    <Text style={styles.listcontent}>手机号：{this.state.wphonenumber}</Text>
                    <Text style={styles.listcontent}>年级：{this.state.wclass}</Text>
                    <Text style={styles.listcontent}>学校：{this.state.wschool}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listcontent:{
        height:80*s,
        fontSize:20,
        color:'rgb(57, 83, 122)'
    }
})