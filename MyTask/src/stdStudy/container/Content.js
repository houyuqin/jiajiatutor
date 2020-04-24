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

    fetch(`http://148.70.183.184:8005/unxiangqing/${this.props.contentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.data.splice(res.data.length - 1, 1) })
      })

  }
  componentDidUpdate() {

    fetch(`http://148.70.183.184:8005/unxiangqing/${this.props.contentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.data.splice(res.data.length - 1, 1) })
      })

  }
  // componentDidUpdate(){
  //   fetch(`http://148.70.183.184:8005/taskt/${this.props.contentId}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'text/plain; charset=UTF-8'
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {

  //       this.setState({ data: res.data.splice(res.data.length - 1, 1) })
  //       console.log(res.data.splice(res.data.length - 1, 1))
  //     })

  // }
  change=(e)=>{
   this.setState({
     content:e
   })
  }
  add=()=>{
  var aa=this.state.content;
  var id1=this.props.contentId;
  fetch(`http://148.70.183.184:8005/daan/${id1}`, {
    method: "POST",
    headers: {
       'Content-Type': 'text/plain; charset=UTF-8'
    },
    body: JSON.stringify(aa)
  }).then(function(response) {
 
    Alert.alert('您的答案提交成功！,若要提交作业请返回上一页提交!')


  });   
}
  render() {
    return (
      <View>

        <FlatList
          data={this.state.data}
          renderItem={({ item, index }) => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.box}>
                <Text style={styles.font}>题目：{item.title}</Text>
                <Text style={styles.font}>内容：</Text>
                <Text style={styles.font}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.content}</Text>
                <Text style={{marginTop:20*s,fontSize:26}}>我的答案：</Text>
                <Text style={styles.font}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{item.daan == undefined ?'还未提交，请提交': item.daan }</Text>
              </View>
              <View style={styles.box1}>
                <Text style={styles.font}>提交答案:</Text>
                <View style={{marginTop:20*s}}>
                <TextareaItem
                 rows={6}
                 placeholder="在此输入我的计答案"
                 placeholderTextColor='#8B7E66'
                 onChange={this.change}
                 style={{ paddingVertical: 5 }}
                ></TextareaItem>
                </View>
              
                  <TouchableOpacity style={styles.tijiao} onPress={()=>this.add()}><View><Text>提交</Text></View></TouchableOpacity>
              
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
    marginTop:20*s,
    width: '90%',
    borderColor: 'rgb(125, 179, 201)',
    borderWidth: 2,
    borderRadius: 10 * s,
    paddingTop: 20 * s,
    paddingBottom: 10 * s,
    backgroundColor:'white'
  },
  font: {
    fontSize: 28
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






