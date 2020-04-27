import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, ToastAndroid, StyleSheet, ScrollView} from 'react-native'
import { Tabs } from '@ant-design/react-native';
const wtabs = [
    { title: '我的视频' },
    { title: '收益情况' },
];
const {width} = Dimensions.get('window');
const s = width/640;
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
                <Tabs tabs={wtabs}>
                    <ScrollView>
                        {
                            this.state.data.map((item)=>(
                                <View style={styles.viewcontent} key={item.time}>
                                    <Text style={{fontSize:18,color:'black'}}>{item.name}:</Text>
                                    <Text style={{fontSize:18,color:'black'}}>科目：{item.class}</Text>
                                    <Text>价格：{'￥'+item.price}</Text>
                                    <TouchableOpacity onPress={()=>this.del(item.time)} style={{marginLeft:510*s,marginTop:-90*s,width:80*s,alignItems:'center',backgroundColor:'#708090',borderRadius:10*s}}><Text  style={{fontSize:17,color:'white'}}>删除</Text></TouchableOpacity>
                                </View>  
                            ))
                        }       
                    </ScrollView>
                    <ScrollView>
                        {
                            this.state.data1.map((item)=>(
                                <View style={styles.viewcontent} key={item.time}>
                                    <Text>手机号为{item.usernum}购买的我的{item.class}收益了{item.price}元</Text>
                                    <Text>{item.time}</Text>
                                    <TouchableOpacity onPress={()=>this.del1(item.time)} style={{marginLeft:510*s,marginTop:-50*s,width:80*s,alignItems:'center',backgroundColor:'#708090',borderRadius:10*s}}><Text style={{fontSize:17,color:'white'}}>删除</Text></TouchableOpacity>
                                </View>    
                            ))
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