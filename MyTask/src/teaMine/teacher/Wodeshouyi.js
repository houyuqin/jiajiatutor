import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, ToastAndroid, StyleSheet, ScrollView} from 'react-native'
import { Tabs } from '@ant-design/react-native';

const wtabs = [
    { title: '我的视频' },
    { title: '收益情况' },
];
const {width} = Dimensions.get('window');
const s = width/640;

//实现已有订单无法再添加
export default class Wodeshouyi extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[]
        }
    }
    componentDidMount(){   
        fetch('http://148.70.183.184:8000/vedio')
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
        fetch('http://148.70.183.184:8000/bought')
            .then((res) => res.json())
            .then((res) => {
                this.setState({data1:res.data})
            })
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{fontSize:20,color:'black'}}>我的收益：</Text>               
                <Tabs tabs={wtabs}>
                    <ScrollView>
                        {
                            this.state.data.map((item)=>(
                                <View style={{marginBottom:'15px'}}>
                                    <Tsext style={{marginLeft:'20px',fontSize:'20px',color:'black'}}>{item.name}<span style={{float:'right',marginRight:'10px'}}>{'￥'+item.price}</span></Tsext>
                                    <Player ref="player" videoId="video-1">
                                        <source src={item.vedio}/>
                                    </Player>  
                                    <Text>手机号为
                                        <span style={{color:'red'}}>{item.usernum.slice(0,3)+'***'+item.usernum.slice(7,11)}</span>
                                        的用户已购买视频，收益
                                        <span style={{color:'red'}}>{item.price}</span>
                                        元</Text>
                                </View>
                            ))
                        }       
                        }
                    </ScrollView>
                </Tabs>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewcontent:{
        width:610*s,
        height:120*s,
        backgroundColor:'white',
        borderRadius:10*s,
        opacity:0.8,
        margin:10*s,
        padding:10*s
    }
})