import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions, TouchableOpacity,Alert } from 'react-native'
import { Icon, Carousel, DatePicker, List, Provider, TextareaItem } from '@ant-design/react-native'
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      content:''
    }
  }

  componentDidMount() {
  
    fetch(`http://148.70.183.184:8005/xiangqing/${this.props.contentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .then((res) => {

        this.setState({ data: res.data.splice(res.data.length - 1, 1) })
        //console.log(res.data.splice(res.data.length - 1, 1))
      })

  }
 


  render() {
    return (
      <View>

        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.box}>
                <Text style={styles.font}>题目：{item.title}</Text>
                <Text style={styles.font}>内容：</Text>
                <Text style={styles.font}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.content}</Text>
                <Text style={styles.font1}>我的答案：</Text>
                <Text style={styles.font}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.daan}</Text>
                <Text style={styles.font1}>教师评语：</Text>
                <Text style={styles.font}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.pingjia==null?'还未评价':item.pingjia}</Text>
              </View>
           
            </View>
          )}
        ></FlatList>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  box:
  {
    width: '95%',
    borderColor: '#708090',
    borderWidth: 1*s,
    borderRadius: 10 * s,
    marginTop:10*s,
    paddingTop: 20 * s,
    paddingBottom: 10 * s,
    backgroundColor:'white'
  },
  font: {
    fontSize: 20
  },
  font1: {
    fontSize: 23,
    marginTop:20*s
  },
  box1:{
    width:'80%',
    marginTop:30*s
  },
  tijiao:{
    width:70*s,
    height:40*s,
    backgroundColor:'rgb(125, 179, 201)',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10*s,
    marginTop:30*s,
    marginLeft:'85%'
  }
})






