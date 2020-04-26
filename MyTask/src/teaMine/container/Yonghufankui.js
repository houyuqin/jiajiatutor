import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { TextareaItem, InputItem } from '@ant-design/react-native';
const {width} = Dimensions.get('window');
const s = width/640;

export default class Yonghufankui extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            content:'',
            phone:'',
            wusername:''
        }
    }
    showModal = () => {
        fetch('http://148.70.183.184:8006/stdmine/13513467682')
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data}) 
                if (this.state.data[0].wusername == '') {
                    this.setState({
                        wusername:'我的昵称'
                    })
                }else{
                    this.setState({
                        wusername:this.state.data[0].wusername
                    })
                }
                var a={};
                a.wusername=this.state.wusername;
                a.wcontent=this.state.content;
                a.wphonenumber=this.state.phone;
                console.log(a);
                fetch("http://148.70.183.184:8006/return", {
                    method: "POST",
                    headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                })
                    .then((res)=>res.json)
            })

    }
    render() {
        return (
            <View>
                <TextareaItem 
                    placeholder='请输入您的反馈，我们将为您不断改进' 
                    value={i=>this.wujinyareturn1=i} 
                    onChange={value => {
                        this.setState({
                            content: value,
                        });
                    }}
                    placeholderTextColor='#C0C0C0' 
                    style={{width:620*s,marginLeft:10*s,marginTop:10*s,borderWidth:2*s,borderColor:'rgb(250,198,101)'}} 
                    rows={8} 
                    count={300} 
                />
                <Text style={{fontSize:15,marginLeft:20*s,marginTop:10*s,marginBottom:20*s}}>通过以下方式反馈给我们哦</Text>
                <InputItem
                    clear
                    type="phone"
                    value={i=>this.wujinyareturn2=i}
                    onChange={value => {
                        this.setState({
                            phone: value,
                        });
                    }}
                    placeholder="请输入手机号"
                    placeholderTextColor='#C0C0C0'
                    style={{borderWidth:2*s,borderColor:'rgb(250,198,101)',backgroundColor:'white'}}
                >
                    联系方式
                </InputItem>
                <TouchableOpacity onPress={()=>this.showModal()} style={{width:250*s,height:40*s,borderRadius:10*s,alignItems:'center',justifyContent:'center',marginTop:30*s,marginLeft:200*s,backgroundColor:'rgb(250,198,101)',borderWidth:2*s,borderColor:'rgb(250,198,101)'}}>
                    <Text>发送</Text>
                </TouchableOpacity>
            </View>
        )
    }
}