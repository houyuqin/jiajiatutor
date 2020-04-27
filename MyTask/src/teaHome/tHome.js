import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { Icon, Carousel, DatePicker, List, Provider, TextareaItem } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class tHome extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { title: '数学家教', price: '17元/小时', location: '不限地点',jiezhang:'日结',qixian:'长期',sex:'男女不限',id:2 },
                { title: '数学家教', price: '17元/小时', location: '不限地点',jiezhang:'日结',qixian:'长期',sex:'男女不限' },
                { title: '数学家教', price: '17元/小时', location: '不限地点',jiezhang:'日结',qixian:'长期',sex:'男女不限' },
                { title: '数学家教', price: '17元/小时', location: '不限地点',jiezhang:'日结',qixian:'长期',sex:'男女不限' },
                { title: '数学家教', price: '17元/小时', location: '不限地点',jiezhang:'日结',qixian:'长期',sex:'男女不限' },
                { title: '数学家教', price: '17元/小时', location: '不限地点',jiezhang:'日结',qixian:'长期',sex:'男女不限' },
            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* 轮播图 */}
                <View style={{ height: 480 * s, alignItems: 'center' }}>
                    <View style={styles.box}>
                        <Carousel autoplay infinite>
                            <View>
                                <Image style={styles.lunimg} source={require('../../assets/zx/tlunbo3.jpg')}></Image>
                            </View>
                            <View>
                                <Image style={styles.lunimg} source={require('../../assets/zx/tlunbo2.jpg')}></Image>
                            </View>
                            <View>
                                <Image style={styles.lunimg} source={require('../../assets/zx/tlunbo1.jpg')}></Image>
                            </View>
                        </Carousel>

                        <View style={styles.box1}>
                            <View style={{ width: '25%', marginLeft: 20 * s }}>
                                <TouchableOpacity onPress={() => Actions.tfujin()} style={[styles.box2, { backgroundColor: '#00FA9A' }]}>
                                    <Image style={styles.img} source={require('../../assets/zx/tlocation.png')}></Image>
                                </TouchableOpacity>
                                <View><Text style={styles.font}>附近家教</Text></View>
                            </View>
                            <View style={{ width: '25%' }}>
                                <TouchableOpacity onPress={() => Actions.tzhoumo()} style={[styles.box2, { backgroundColor: '#FF8C00' }]}>
                                    <Image style={styles.img} source={require('../../assets/zx/trili.png')}></Image>
                                </TouchableOpacity>
                                <View><Text style={styles.font}>周末家教</Text></View>
                            </View>
                            <View style={{ width: '25%' }}>
                                <TouchableOpacity onPress={() => Actions.tjizhao()} style={[styles.box2, { backgroundColor: '#00BFFF' }]}>
                                    <Image style={styles.img} source={require('../../assets/zx/tar.png')}></Image>
                                </TouchableOpacity>
                                <View><Text style={styles.font}>急招家教</Text></View>
                            </View>
                            <View style={{ width: '25%' }}>
                                <TouchableOpacity onPress={() => Actions.tother()} style={[styles.box2, { backgroundColor: '#FF0000' }]}>
                                    <Image style={styles.img} source={require('../../assets/zx/tother.png')}></Image>
                                </TouchableOpacity>
                                <View><Text style={styles.font}>其他兼职</Text></View>
                            </View>
                        </View>
                    </View>

                </View>
                {/* <View style={{marginTop:30*s,alignItems:'center'}}> */}
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={{ alignItems: 'center' }} >
                            <View style={styles.box3}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '12%' }}><View style={styles.zh1}></View></View>
                                    <View style={styles.zh2}><Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.title}</Text></View>
                                    <View style={styles.zh3}><Text style={{ color: '#00FF00', fontSize: 23 }}>{item.price}</Text></View>
                                </View>
                                <View style={{marginLeft:'12%',marginTop:'3%'}}>
                                    <Text style={styles.zfont}>{item.location}</Text>
                                </View>
                                <View style={{marginLeft:'12%',marginTop:'3%',flexDirection:'row'}}>
                                   <View style={{width:'20%'}}><Text style={styles.zfont}>{item.jiezhang}</Text></View>
                                   <View style={{width:'20%'}}><Text style={styles.zfont}>{item.qixian}</Text></View>
                                   <View style={{width:'40%'}}><Text style={styles.zfont}>{item.sex}</Text></View>
                                   <TouchableOpacity style={{width:'10%',marginTop:-10*s}}  onPress={()=>Actions.jobxiang({'id':item.id})}>
                                       <Image style={styles.zimg} source={require('../../assets/zx/right.png')} ></Image>
                                   </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    )}
                ></FlatList>
                {/* </View> */}



            </View >
        )
    }
}
const styles = StyleSheet.create({

    lunimg: {
        resizeMode: 'stretch',
        height: 320 * s,
        width: '100%'
    },
    box: {
        height: 340 * s,
        width: '95%',

    },
    box1: {
        height: 160 * s,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 30 * s
    },
    box2: {
        height: 80 * s,
        width: 80 * s,
        borderRadius: 40 * s,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 50 * s,
        width: 50 * s,
        resizeMode: 'stretch'
    },
    font: {
        fontSize: 16,
        marginTop: 10 * s
    },
    box3: {
        height: 190 * s,
        width: '95%',
        backgroundColor: 'white',
        marginTop: 20 * s,
        borderRadius: 10 * s
    },
    zh1: {
        width: 20 * s,
        height: 20 * s,
        borderRadius: 10 * s,
        backgroundColor: '#00FF00',
        marginTop: 20 * s,
        marginLeft: 20 * s,

    },
    zh2: {
        width: '60%',
        marginTop: 10 * s,
    },
    zh3: {
        marginTop: 10 * s
    },
    zfont:{
        fontSize:16,
        color:'#2F4F4F'
    },
    zimg:{
        width:50*s,
        height:50*s,
        resizeMode:'stretch'
    }
})