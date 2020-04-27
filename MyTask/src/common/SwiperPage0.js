import React, { Component } from 'react'
import { Text, View, Image, StyleSheet,Dimensions, AsyncStorage, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen';
import { Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
var ss;
export default class SwiperPage0 extends Component {
    constructor(){
        super();
        this.state={
             jump1:2,
             std:'',
             tea:''
        }
    }
    componentDidMount(){
       
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
    cc = () =>{
        clearInterval(ss);
        Actions.swiperPage();
    }
    
    render() {
        return (           
                <View style={styles.slide1}>   
                    <Image style={{width:'100%',height:'100%',zIndex:100,position:'absolute',}} source={require('../../assets/cq/99.jpg')} />
                    <Text style={{fontSize:42*s,color:'white',bottom:57*s,zIndex:101,position:'absolute'}}>佳 + 家 教</Text>
                </View>
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