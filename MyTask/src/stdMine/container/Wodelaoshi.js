import React, { Component } from 'react'
import { Text, View, Dimensions, Image,TouchableOpacity, ToastAndroid, ScrollView, StyleSheet,AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get('window');
const s = width/640;
var num= [];

export default class Wodelaoshi extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[],
            data2:[],
            loginstd:'',
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8000/selecttea/${this.state.loginstd}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
                this.state.data1.forEach((val,index)=>{
                    num[index]=val.teaphone
                    return num
                })
                let filterarr = num.filter((value,index) => {
                    return num.indexOf(value) === index
                })
                console.log("我是",filterarr);
                filterarr.forEach((val,_idx)=>{
                    fetch(`http://148.70.183.184:8006/teamine/${val}`)
                        .then((res) => res.json())
                        .then((res) => {
                            res.data.forEach((val,_idx)=>{   
                                this.setState({
                                    data:[...this.state.data,val]
                                })   
                            })
                        })
                })
            })  
        }) 
    }
    componentDidUpdate(){
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8000/selecttea/${this.state.loginstd}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
                this.state.data1.forEach((val,index)=>{
                    num[index]=val.teaphone
                    return num
                })
                let filterarr = num.filter((value,index) => {
                    return num.indexOf(value) === index
                })
                filterarr.forEach((val,_idx)=>{
                    fetch(`http://148.70.183.184:8006/teamine/${val}`)
                        .then((res) => res.json())
                        .then((res) => {
                            res.data.forEach((val,_idx)=>{   
                                this.setState({
                                    data:[...this.state.data,val]
                                })   
                            })
                        })
                })
            })  
        }) 
    }
    deleteshipin=(idx)=>{
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8000/deltea/${this.state.loginstd}`,{
                method: 'DELETE',
                body:JSON.stringify({teaphone:idx})
                })
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                    })
        }) 
        ToastAndroid.show('删除成功！',100);
    } 
    pingjia = (idx) =>{
        AsyncStorage.removeItem('ping');
        AsyncStorage.setItem('ping',JSON.stringify(idx)); 
        Actions.pingjia();
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item)=>(
                        <View style={styles.listcontent} key={item.wphonenumber}>
                            <Image style={{width:100*s,height:110*s,marginLeft:10*s}} source={require('../../../assets/wjy/img/111.jpg')}/>
                            <View>
                                <View style={{flexDirection:'row',marginLeft:20*s}}>
                                    <Text style={{fontSize:19,color:'black'}}>{item.wusername}</Text>
                                    <Text style={{fontSize:15,color:'black',marginTop:5*s,marginLeft:5*s}}>{item.zhiwei}</Text>
                                </View>
                                <Text style={{fontSize:15,color:'black',marginLeft:20*s}}>手机号：{item.wphonenumber}</Text>
                                <Text style={{fontSize:15,color:'black',marginLeft:20*s}}>毕业于：{item.biyexuexiao}</Text>
                            </View>
                            <View style={{flexDirection:'column'}}>
                                <TouchableOpacity  style={styles.buttoncontent} onPress={()=>this.deleteshipin(item.wphonenumber)}>
                                    <Text style={{fontSize:23*s,color:'white'}}>移除</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  style={styles.buttoncontent} onPress={()=>this.pingjia(item.wphonenumber)}>
                                    <Text style={{fontSize:23*s,color:'white'}}>评价</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    listcontent:{
        width: '94%',
        height: 150*s,
        backgroundColor: 'white',
        borderWidth:1, 
        borderColor:'#708090',
        borderRadius: 10*s,
        marginLeft:20*s,
        marginTop:20*s,
        padding:10*s,
        flexDirection:'row',
    },
    buttoncontent:{
        marginLeft:130*s,
        marginBottom:10*s,
        width:100*s,
        alignItems:'center',
        backgroundColor:'#708090',
        borderRadius:10*s
    }
})