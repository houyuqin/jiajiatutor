import React, { Component } from 'react'
import { Text, View,Dimensions, StyleSheet } from 'react-native'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get('window');
const s = width/640;
AsyncStorage.getItem('std')
        .then((res)=>{
            this.teaState({
                loginstd:JSON.parse(res)
            })
        })
export default class Gerenziliao extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            wusername:'',
            wsex:'',
            age:'',
            wphonenumber:'',
            xueli:'',
            wsubject:'',
            biyexuexiao:'',
            zhiwei:''
        }
    }
    UNSAFE_componentWillMount(){
        fetch('http://148.70.183.184:8006/teamine/${res}',{//具体仓库那个ID号无法查看
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
                if (this.state.data[0].age == '') {
                    this.setState({
                        age:'(您还没有设置年龄哦)'
                    })
                }else{
                    this.setState({
                        age:this.state.data[0].age
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
                if (this.state.data[0].xueli == '') {
                    this.setState({
                        xueli:'(您还没有设置学历哦)'
                    })
                }else{
                    this.setState({
                        xueli:this.state.data[0].xueli
                    })
                }
                if (this.state.data[0].wsubject == '') {
                    this.setState({
                        wsubject:'(您还没有设置科目哦)'
                    })
                }else{
                    this.setState({
                        wsubject:this.state.data[0].wsubject
                    })
                }
                if (this.state.data[0].biyexuexiao == '') {
                    this.setState({
                        biyexuexiao:'(您还没有设置毕业学校哦)'
                    })
                }else{
                    this.setState({
                        biyexuexiao:this.state.data[0].biyexuexiao
                    })
                }
                if (this.state.data[0].zhiwei == '') {
                    this.setState({
                        zhiwei:'(您还没有设置职位哦)'
                    })
                }else{
                    this.setState({
                        zhiwei:this.state.data[0].zhiwei
                    })
                }
            })
    }
  
    render() {
        return (
            <View>
                <View style={{backgroundColor:'rgb(115, 176, 211)',paddingTop:20*s,paddingLeft:15*s}}><Icon name='left' onPress={Actions.pop}/></View>
                <View style={{height:130*s,backgroundColor:'rgb(115, 176, 211)',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:50,marginTop:5*s,color:'white'}}>个</Text>
                    <Text style={{fontSize:35,marginTop:40*s,marginLeft:20*s,color:'white'}}>人</Text>
                    <Text style={{fontSize:36,marginTop:5*s,marginLeft:20*s,color:'white'}}>资</Text>
                    <Text style={{fontSize:45,marginTop:50*s,marginLeft:20*s,color:'white'}}>料</Text>
                </View>
                <View style={{marginLeft:50*s,marginTop:30*s}}>
                    <Text style={styles.listcontent}>用户名：{this.state.wusername}</Text>
                    <Text style={styles.listcontent}>性别：{this.state.wsex}</Text>
                    <Text style={styles.listcontent}>年龄：{this.state.age}</Text>
                    <Text style={styles.listcontent}>手机号：{this.state.wphonenumber}</Text>
                    <Text style={styles.listcontent}>学历：{this.state.xueli}</Text>
                    <Text style={styles.listcontent}>科目：{this.state.wsubject}</Text>
                    <Text style={styles.listcontent}>毕业学校：{this.state.biyexuexiao}</Text>
                    <Text style={styles.listcontent}>职位：{this.state.zhiwei}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    listcontent:{
        height:80*s,
        fontSize:18,
        color:'rgb(57, 83, 122)'
    }
})