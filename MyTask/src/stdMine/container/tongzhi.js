import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Dimensions, StyleSheet, ScrollView, ToastAndroid } from 'react-native'
const {width} = Dimensions.get('window');
const s = width/640;
export default class tongzhi extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('http://148.70.183.184:8000/inforuser')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(){
        fetch('http://148.70.183.184:8000/inforuser')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    del=(idx)=>{
        fetch('http://148.70.183.184:8000/inforuserdel',{
            method:"DELETE",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body:JSON.stringify({id:idx})
        })  
        ToastAndroid.show('删除成功！',100);
    }
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item)=>(
                        <View style={styles.viewcontent}>
                            <Text style={{width:480*s,wordWrap:'break-all'}}>{item.content}</Text>
                            <TouchableOpacity style={styles.contentbutton} onPress={()=>this.del(item.id)}>
                                <Text style={{color:'white'}}>已读删除</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    viewcontent:{
        fontSize:20,
        flexDirection:'row',
        justifyContent:'center',
        margin:10*s,
        backgroundColor:'white',
        borderRadius:10*s
    },
    contentbutton:{
        width:100*s,
        marginTop:5*s,
        marginLeft:10*s,
        height:30*s,
        backgroundColor:'#5d93c0',
        borderRadius:8*s,
        justifyContent:'center',
        alignItems:'center'
    }
})