import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions, ToastAndroid, StyleSheet, ScrollView} from 'react-native'
import { Tabs } from '@ant-design/react-native';

const wtabs = [
    { title: '未支付' },
    { title: '已支付' },
];
const {width} = Dimensions.get('window');
const s = width/640;

//实现已有订单无法再添加
export default class Wodedingdan extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[]
        }
    }
    componentDidMount(){   
        fetch('http://148.70.183.184:8000/tobuy')
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
    componentDidUpdate(){
        fetch('http://148.70.183.184:8000/tobuy')
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
    del=(time)=>{
        fetch('http://148.70.183.184:8000/tobuy', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body:JSON.stringify({time:time})
                })
        ToastAndroid.show('删除成功！',100);
    }
    del1=(time)=>{
        fetch('http://148.70.183.184:8000/bought', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body:JSON.stringify({time:time})
                })
        ToastAndroid.show('删除成功！',100);
    }
    render() {
        return (
            <View  style={{flex:1}}>                    
                <Tabs tabs={wtabs}>
                    <ScrollView>
                        {
                            this.state.data.map((item)=>(
                                <View style={styles.viewcontent} key={item.time}>
                                    <Text style={{fontSize:17,color:'black'}}>科目：{item.class}</Text>
                                    <Text>价格：{'￥'+item.price}</Text>
                                    <Text>订单时间：{item.time}</Text>
                                    <TouchableOpacity onPress={()=>this.del(item.time)} style={{marginLeft:500*s,marginTop:-100*s,width:80*s,alignItems:'center',backgroundColor:'#708090',borderRadius:10*s}}><Text  style={{fontSize:17,color:'white'}}>删除</Text></TouchableOpacity>
                                </View>  
                            ))
                        }
                    </ScrollView>
                    <ScrollView>
                        {
                            this.state.data1.map((item)=>(
                                <View style={styles.viewcontent} key={item.time}>
                                    <Text style={{fontSize:17,color:'black'}}>科目：{item.class}</Text>
                                    <Text>价格：{'￥'+item.price}</Text>
                                    <Text>订单时间：{item.time}</Text>
                                    <TouchableOpacity onPress={()=>this.del1(item.time)} style={{marginLeft:500*s,marginTop:-100*s,width:80*s,alignItems:'center',backgroundColor:'#708090',borderRadius:10*s}}><Text style={{fontSize:17,color:'white'}}>删除</Text></TouchableOpacity>
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