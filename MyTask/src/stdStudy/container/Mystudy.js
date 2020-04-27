import React, { Component } from 'react'
import { Text, View, FlatList, Image, StyleSheet,Dimensions } from 'react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class Mystudy extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      data1: []
    }
  }
  componentDidMount() {
   

    fetch(`http://148.70.183.184:8005/lianxi`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.data })
   
      })

  }
  render() {
    return (
      <View>
      <FlatList
      data={this.state.data}
      renderItem={({item})=>(
      <View style={styles.box}>
        <View style={{width:'15%'}}><Image style={styles.img} source={require('../../../assets/zx/z4.png')}></Image></View>
        <View style={{width:'85%'}}><Text  numberOfLines={1}>{item.title}</Text></View>
      </View>
      )}
      >

      </FlatList>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  box:{
    width:'100%',
    height:80*s,
    flexDirection:"row",
    flex:1,
    borderColor:'white',
    borderWidth:2,
   
    alignItems:'center'
    
  },
  img:{
    height:30*s,
    width:60*s,
    resizeMode:'stretch'
  }
})