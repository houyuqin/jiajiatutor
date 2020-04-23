import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Dimensions,Alert, StyleSheet, Image } from 'react-native'
import { Accordion, List } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class Myjihua extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jihua: '',


        }

    }

    componentDidMount() {
        fetch(`http://148.70.183.184:8005/getjihua/${this.props.usr}`, {
            method: "GET",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },

        }).then((res) => res.json())
            .then((res) => {
                this.setState({ jihua: res.data })
            })
    }

del=(e)=>{
    fetch(`http://148.70.183.184:8005/deljihua/${e}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        },
    })
        .then((res) => res.json())
        .then((res) => {
            Alert.alert('计划删除成功!')
        })
}

    render() {

        return (
            <View>
                <FlatList
                    data={this.state.jihua}
                    renderItem={({ item, index }) => (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{
                                width: '90%', backgroundColor: 'white', marginTop: 20 * s,
                                borderRadius: 10, paddingLeft: 30 * s, paddingBottom: 30 * s
                            }}>
                                <View style={styles.box}><Text style={styles.font}>计划{item.id}</Text></View>
                                <View style={styles.box}><Text style={styles.font}>开始时间：{new Date(item.starttime).getFullYear() + '-' + (new Date(item.starttime).getMonth() + 1) + '-' + new Date(item.starttime).getDate() + ' ' + new Date(item.starttime).getHours() + ':' + new Date(item.starttime).getMinutes() + ':' + new Date(item.starttime).getSeconds()}</Text></View>
                                <View style={styles.box}>
                                    <View><Text style={styles.font}>结束时间：{new Date(item.endtime).getFullYear() + '-' + (new Date(item.endtime).getMonth() + 1) + '-' + new Date(item.endtime).getDate() + ' ' + new Date(item.endtime).getHours() + ':' + new Date(item.endtime).getMinutes() + ':' + new Date(item.endtime).getSeconds()}</Text></View>

                                </View>
                                <View style={styles.box1}>
                                    <View style={{width:'70%'}}></View>
                                    <TouchableOpacity onPress={()=>this.del(item.id)} style={styles.aa}><Image style={styles.img} source={require('../../../assets/zx/delete.png')}></Image></TouchableOpacity>
                                    <TouchableOpacity onPress={() => Actions.jihuacontent({ 'id': item.id })} style={styles.bb}><Image style={styles.img} source={require('../../../assets/zx/arrow.png')}></Image></TouchableOpacity>
                                </View>
                                <View>
                                </View>
                            </View>
                        </View>

                    )}
                >

                </FlatList>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    font: {
        fontSize: 22
    },
    box: {
        marginTop: 10 * s
    },
    box1: {
        marginTop: 10 * s,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        height: 35 * s,
        width: 35 * s,
        resizeMode: 'stretch'
    },
    aa: {
        width: '15%'
    },
    bb: {
        width: '15%',

    }
})