import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions, TouchableOpacity, AsyncStorage } from 'react-native'
import NaviBar from 'react-native-pure-navigation-bar';
import { Actions } from 'react-native-router-flux';
import Item from '@ant-design/react-native/lib/list/ListItem';
import { ThemeProvider } from '@ant-design/react-native/lib/style';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class tContent extends Component {
    constructor() {
        super()
        this.state = {
            data: ''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('hdetail')
        .then(res=>{
            this.setState({data:JSON.parse(res)[0]})
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
              <View style={{alignItems:'center'}}>
                  <View style={styles.box}>
                      <View><Text style={styles.hfont}>职位：{this.state.data.kemu}</Text></View>
                      <View><Text style={styles.hfont}>价钱：{this.state.data.price}/小时</Text></View>
                      <View><Text style={styles.hfont}>地点：{this.state.data.address}</Text></View>
                      <View><Text style={styles.hfont}>结账：{this.state.data.salary}</Text></View>
                      <View><Text style={styles.hfont}>期限：{this.state.data.time}</Text></View>
                      <View><Text style={styles.hfont}>性别要求：{this.state.data.sex}</Text></View>
                      <View><Text style={styles.hfont}>具体要求：{this.state.data.request}</Text></View>
                  </View></View>
               <View style={{flexDirection:'row'}}>
                   <TouchableOpacity onPress={()=>Actions.pop()} style={[styles.tab,{marginLeft:50*s}]}><Text style={styles.font}>返回</Text></TouchableOpacity>
                   <TouchableOpacity onPress={()=>Actions.concat()} style={[styles.tab,{marginLeft:40*s}]}><Text style={styles.font}>联系我</Text></TouchableOpacity>
                   <TouchableOpacity style={[styles.tab,{marginLeft:60*s,width:180*s}]}><Text style={styles.font}>投递简历</Text></TouchableOpacity>
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    hfont:{
        fontSize:23
    },
    box:{
        width:'90%',
        backgroundColor:'white',
       
        marginTop:20*s,
        paddingLeft:20*s,
        paddingTop:30*s,
        paddingBottom:50*s
    },
    tab:{
        backgroundColor: '#2f618b' ,
        width:120*s,
        height:40*s,
        borderRadius:10*s,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30*s
    },
    font:{
      color:'white',
      fontSize:22
    }
})
