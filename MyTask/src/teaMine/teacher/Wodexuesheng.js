import React, { Component } from 'react'
import { Text, View, Dimensions, Image,TouchableOpacity, ToastAndroid, ScrollView, StyleSheet ,AsyncStorage} from 'react-native'
const {width} = Dimensions.get('window');
const s = width/640;
var num= [];

export default class Wodexuesheng extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[],
            logintea:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('tea')
        .then((res)=>{
            this.setState({
                logintea:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8000/selectstd/${this.state.logintea}`)//
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
                this.state.data1.forEach((val,index)=>{
                    num[index]=val.stdphone
                    return num
                })
                let filterarr = num.filter((value,index) => {
                    return num.indexOf(value) === index
                })
                filterarr.forEach((val,_idx)=>{
                    fetch(`http://148.70.183.184:8006/stdmine/${val}`)
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
        AsyncStorage.getItem('tea')
        .then((res)=>{
            this.setState({
                logintea:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8000/delstd/${this.state.logintea}`,{
                method: 'DELETE',
                body:JSON.stringify({stdphone:idx})
                })
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                    })
        }) 
        ToastAndroid.show('删除成功！',100);
    } 
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item)=>(
                        <View style={styles.listcontent} key={item.wphonenumber}>
                            <Image style={{width:100*s,height:110*s,marginLeft:10*s}} source={item.stdtouxiang}/>
                            <View>
                                <View style={{flexDirection:'row',marginLeft:20*s}}>
                                    <Text style={{fontSize:19,color:'black'}}>{item.wusername}</Text>
                                    <Text style={{fontSize:15,color:'black',marginTop:5*s,marginLeft:5*s}}>{item.wclass}</Text>
                                </View>
                                <Text style={{fontSize:15,color:'black',marginLeft:20*s}}>手机号：{item.wphonenumber}</Text>
                                <Text style={{fontSize:15,color:'black',marginLeft:20*s}}>学校：{item.wschool}</Text>
                            </View>
                            <TouchableOpacity  style={styles.buttoncontent} onPress={()=>this.deleteshipin(item.wphonenumber)}>
                                <Text style={{fontSize:17,color:'white'}}>移除</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    listcontent:{
        width: 610*s,
        height: 150*s,
        backgroundColor: 'white', 
        borderRadius: 10*s,
        margin:10*s,
        padding:10*s,
        flexDirection:'row',
        alignItems:'center'
    },
    buttoncontent:{
        marginLeft:160*s,
        marginTop:-100*s,
        width:80*s,
        alignItems:'center',
        backgroundColor:'#708090',
        borderRadius:10*s
    }
})