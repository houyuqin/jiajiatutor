import React, { Component } from 'react'
import { Text, View ,Dimensions,FlatList,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class tjiajiao extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { title: '数学家教', price: '17元/小时', location: '不限地点',jiezhang:'日结',qixian:'长期',sex:'男女不限' },
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
            <View>
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
                                   <TouchableOpacity style={{width:'10%',marginTop:-10*s}}  onPress={()=>Actions.jobxiang({'usr':'1'})}>
                                       <Image style={styles.zimg} source={require('../../assets/zx/right.png')} ></Image>
                                   </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    )}
                ></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({

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