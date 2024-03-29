import React, { Component } from 'react'
import { Text, View ,Dimensions, ScrollView,AsyncStorage} from 'react-native'
const {width} = Dimensions.get('window');
const s = width/640;
let wusername = '';
export default class Jiaoshipingjia extends Component {
    constructor(){
        super();
        this.state = {
            data:[],   
            data1:[],
            loginstd:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8005/Spingjia/${this.state.loginstd}`)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({data:res.data}) 
                })   
            fetch(`http://148.70.183.184:8006/stdmine/${this.state.loginstd}`)
                .then((res) => res.json())
                .then((res) => {
                    this.setState({data1:res.data})
                    wusername= this.state.data1[0].wusername;
                }) 
        })
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item)=>(
                        <View style={{width:610*s,fontSize:18,padding:10*s,margin:12*s,borderRadius:10*s,backgroundColor:'white',borderColor:'#708090',borderWidth:1}} key={item.wphonenumber}>
                            <Text style={{fontSize:18}}>教师：{item.author}</Text>
                            <Text style={{wordWrap:'break-word',fontSize:18}}>评价内容：{item.pingjia}</Text>
                            <Text></Text>
                            <View style={{borderLeftWidth:5*s,paddingLeft:5*s}}><Text style={{color:'red',fontSize:14}}>@{wusername}</Text></View>
                            <View style={{borderLeftStyle:'solid',paddingLeft:5*s,borderLeftWidth:5*s,flexDirection:'row'}}>
                                <Text style={{fontSize:15,marginTop:5*s}}>提交了任务名为  </Text>
                                <Text style={{color:'red',fontSize:20}}>{item.title}</Text> 
                                <Text style={{fontSize:15,marginTop:5*s}}>  的任务作业</Text>
                            </View>
                            <Text style={{fontSize:15,marginLeft:310*s}}>{item.time}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}