import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';
import { Button } from '@ant-design/react-native';

export default class SwiperPage extends Component {
  start =  () => {
    AsyncStorage.setItem('isInstall','true',()=>{
        this.props.afterInstall();
    });
  };
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/bg.png')} />
                    
                </View>
                <View style={styles.slide1}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/bg.png')} />
                </View>
                <View style={styles.slide1}>
                    <Image style={{width:'100%',height:'100%'}} source={require('../../assets/bg.png')} />
                    <TouchableOpacity style={styles.start}  onPress={this.start}>
                        <Text style={{color: '#fff'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    slide1:{
        flex:1,
        // width:'100%',
        height:"100%",
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