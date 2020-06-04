import React, { Component } from 'react'
import { Text, View,Dimensions, StyleSheet,AsyncStorage } from 'react-native'
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get('window');
const s = width/640;
export default class TeaGerenziliao extends Component {
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
            zhiwei:'',
            logintea:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('tea')
        .then((res)=>{
            this.setState({
                logintea:JSON.parse(res)
            })
            console.log(this.state.logintea)
            fetch(`http://148.70.183.184:8006/teamine/${this.state.logintea}`)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({data:res.data}) 
                    if (this.state.data[0].wusername == null) {
                        this.setState({
                            wusername:'(您还没有设置用户名哦)'
                        })
                    }else{
                        this.setState({
                            wusername:this.state.data[0].wusername
                        })
                    }
                    if (this.state.data[0].wsex == null) {
                        this.setState({
                            wsex:'(您还没有设置性别哦)'
                        })
                    }else{
                        this.setState({
                            wsex:this.state.data[0].wsex
                        })
                    }
                    if (this.state.data[0].wage == null) {
                        this.setState({
                            age:'(您还没有设置年龄哦)'
                        })
                    }else{
                        this.setState({
                            age:this.state.data[0].wage
                        })
                    }
                    if (this.state.data[0].wphonenumber == null) {
                        this.setState({
                            wphonenumber:'(您还没有设置手机号哦)'
                        })
                    }else{
                        this.setState({
                            wphonenumber:this.state.data[0].wphonenumber
                        })
                    }
                    if (this.state.data[0].xueli == null) {
                        this.setState({
                            xueli:'(您还没有设置学历哦)'
                        })
                    }else{
                        this.setState({
                            xueli:this.state.data[0].xueli
                        })
                    }
                    if (this.state.data[0].wsubject == null) {
                        this.setState({
                            wsubject:'(您还没有设置科目哦)'
                        })
                    }else{
                        this.setState({
                            wsubject:this.state.data[0].wsubject
                        })
                    }
                    if (this.state.data[0].biyexuexiao == null) {
                        this.setState({
                            biyexuexiao:'(您还没有设置毕业学校哦)'
                        })
                    }else{
                        this.setState({
                            biyexuexiao:this.state.data[0].biyexuexiao
                        })
                    }
                    if (this.state.data[0].zhiwei == null) {
                        this.setState({
                            zhiwei:'(您还没有设置职位哦)'
                        })
                    }else{
                        this.setState({
                            zhiwei:this.state.data[0].zhiwei
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
        fontSize:20,
        color:'rgb(57, 83, 122)'
    }
})