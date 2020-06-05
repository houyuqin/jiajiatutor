import React, { Component } from 'react'
import { Text, View, FlatList, Image, StyleSheet,Dimensions, TouchableOpacity } from 'react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
import { WebView } from 'react-native-webview';
import { Actions } from 'react-native-router-flux';
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
    //   <View style={{flex:1,alignItems:'center'}}>
    //   <WebView source={{ uri: 'http://www.ygjj.com/D445683.html' }} style={{height:200,width:400}}/>
    //  </View>
      <View>
   
      <FlatList
      data={this.state.data}
      renderItem={({item})=>(
      <TouchableOpacity style={styles.box} onPress={()=>Actions.webview({'src':item.src})}>
        <View style={{width:'15%'}}><Image style={styles.img} source={require('../../../assets/zx/z4.png')}></Image></View>
        <View style={{width:'85%'}}><Text  numberOfLines={1}>{item.title}</Text></View>
      </TouchableOpacity>
      )}
      >

      </FlatList>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  box:{
    width:'95%',
    height:80*s,
    flexDirection:"row",
    flex:1,
    alignItems:'center',
    marginLeft:'2.5%',
    marginTop:2
    
  },
  img:{
    height:30*s,
    width:60*s,
    resizeMode:'stretch'
  },
  webview_style:{  
    backgroundColor:'#00ff00',   
    height:200*s,
    width:300*s
 }
})