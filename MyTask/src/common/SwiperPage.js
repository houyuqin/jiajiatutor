import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,Dimensions, AsyncStorage, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';
import { Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
var ss;
export default class SwiperPage extends Component {
    constructor(){
        super();
        this.state={
             jump1:5,
             std:'',
             tea:''
        }
    }
    start =  () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    };
    componentDidMount(){
        // AsyncStorage.clear();
        AsyncStorage.getItem('tea')
		.then(res=>{
            this.setState({
                tea:JSON.parse(res)
            })
			
			console.log("我是tea",this.state.tea)		
        })
        AsyncStorage.getItem('std')
		.then(res=>{
			this.setState({
                std:JSON.parse(res)
            })
			
			console.log("我是std",this.state.std)	
		})
       
        ss = setInterval(() => { 
            var jumpp = this.state.jump1;
            jumpp--;
            this.setState({
                jump1:jumpp
            })
            if(this.state.jump1==0)
            {
                this.cc();
                
            }
        }, 1000);
        
    }
    // componentDidUpdate(){
    //     console.log("小白兔",this.state.jump1)
    //     if(this.state.jump1==0){
    //         console.log("大白兔",this.state.tea);
    //         console.log("大白兔",this.state.std);
    //         this.cc();
    //     }
        
    // }
    cc = () =>{
        clearInterval(ss);
        if(this.state.std)
            {
                Actions.lightbox();
            }
        else if(this.state.tea)
            {
                Actions.lightbox1();
            }
        else{
                Actions.login();
            }
    }
    
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    
                        <View  style={{zIndex:200,right:17*s,top:8*s,position:'absolute'}}>
                            <TouchableOpacity onPress={this.cc}>
                                <Text style={{width:85*s,height:40*s,borderRadius:10,backgroundColor:'#ccc6c6',opacity:0.7}}> 跳过 {this.state.jump1}</Text>
                            </TouchableOpacity>
                        </View>
                    
                    
                    <Image style={{width:'100%',height:'100%',zIndex:100,marginTop:-50*s}} source={require('../../assets/cq/99.jpg')} />
                    <View style={{width:'100%',height:200*s,backgroundColor:'white',justifyContent:'center',zIndex:100,alignItems:'center',position:'absolute',bottom:0,}}>
                        <Text style={{fontSize:18,color:'#205e8f'}}>佳+家教</Text>
                        <Text style={{fontSize:15,color:'#205e8f'}}>开启你的逆袭之旅</Text>
                    </View>
                </View>
                
                {/* <View style={styles.slide1}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/bg.png')} />
                    <TouchableOpacity style={styles.start}  onPress={this.start}>
                        <Text style={{color: '#fff'}}>开始体验</Text>
                    </TouchableOpacity>
                </View> */}
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    slide1:{
        flex:1,
        width:'100%',
        height:"100%",
        backgroundColor:'#f6f6f6',
        alignItems:'center'
    },
    start:{
        bottom: 110,
        width:180,
        height:60,
        color: '#fff',
        textAlignVertical: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center'
    }
})