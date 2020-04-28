import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, AsyncStorage,ToastAndroid } from 'react-native'
import { Icon, Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class GoodTea extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            username:''
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8006/teamine")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
        AsyncStorage.getItem('std')
        .then(res=>{
            let std = JSON.parse(res);
            this.setState({username:std});
        });
        
    }
    selecttea=(phone)=>{
        let a={stdphone:this.state.username,teaphone:phone};
        fetch("http://148.70.183.184:8000/selectclass",{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('选择教师成功!');
                return res.json();
            }else{
                alert('您已选择该教师！');
            }
        });
    }
    render() {
        return (
            <View>
                <View  style={styles.nav}>
                    <Icon name="left" style={styles.left} onPress={Actions.home} />
                    <Text
                        style={styles.tit}
                    >优秀教师推荐</Text>
                </View>
                <ScrollView>
                <View>
                    {
                        this.state.data.map(item=>(
                            <View style={styles.one}>
                                <Image source={require('../../assets/hyq/000.png')} style={styles.tea}/>   
                                {/* <Image  source={{uri:'http://148.70.183.184:8000/images/'+item.teatouxiang}} style={styles.tea}></Image>    */}
                                <View style={{paddingTop:20*s}}>
                                    <Text style={styles.tch}>姓名：{item.wusername}</Text>
                                    <Text style={styles.tch}>性别：{item.wsex}</Text>
                                    <Text style={styles.tch}>年龄：{item.wage}</Text>
                                    <Text style={styles.tch}>毕业院校：{item.biyexuexiao}</Text>
                                    <Text style={styles.tch}>目前职业：{item.zhiwei}</Text>
                                    <Button 
                                        style={{backgroundColor:'#4a83bc'}} 
                                        onPress={()=>this.selecttea(item.wphonenumber)}>
                                        <Text style={{color:'#fff'}}>选择教师</Text>
                                    </Button>
                                </View>
                            </View>
                        ))
                    }
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    one:{
        width:'90%',
        marginLeft:'5%',
        height:300*s,
        flexDirection:'row',
        borderRadius: 30*s,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom:20*s
    },
    tch:{
        color:'#4a83bc',
        fontSize:24*s,
        marginTop:5*s
    },
    tea:{
        marginTop:15*s,
        width:200*s,
        height: 260*s,
        marginLeft:40*s,
        marginRight:40*s
    },
    nav:{
        width:'100%',
        height:73*s,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#708090'
    },
    tit:{
        width:'62%',
        color:'#fff',
        fontSize:26*s
    },
    left:{
        width:'38%',
        paddingLeft:20*s
    },
});