import React, { Component } from 'react'
import { Text, View ,AsyncStorage, FlatList,Dimensions,StyleSheet,ToastAndroid,TouchableOpacity,Image, TouchableHighlight} from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 640;
export default class teaCom extends Component {
    constructor(){
        super()
        this.state={
            data:'',
            loginstd:''
        }
    }


    componentDidMount(){
        AsyncStorage.getItem('tea')
        .then((res) => {
            this.setState({
                loginstd: JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8006/teagetquanzi/${this.state.loginstd}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    if(res=='')
                    {
                        this.setState({data:[{'content':'暂未发布！','wshijian':'暂未发布！','wxinqing':'暂未发布！'}]})
                    }
                   else{
                    this.setState({data:res})
                   }
                  // console.log(res)
                })
            })
    }

    del=(id)=>{
       // console.log(id)
        fetch(`http://148.70.183.184:8006/deleteteaquanzi/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                fetch(`http://148.70.183.184:8006/teagetquanzi/${this.state.loginstd}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                })
                    .then((res) => res.json())
                    .then((res) => {
                        if(res=='')
                        {
                            this.setState({data:[{'content':'暂未发布！','wshijian':'暂未发布！','wxinqing':'暂未发布！'}]})
                        }
                       else{
                        this.setState({data:res})
                        }
                    })
                
                ToastAndroid.showWithGravity(
                    "删除成功！",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
            })
    }
    render() {
        return (
            <View>
                
                <FlatList
                            data={this.state.data}
                            renderItem={({ item, index }) => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.ccbox}>
                                      <View style={{marginTop:10*s}}><Text style={{fontSize:20}}>发布时间：{item.wshijian==''?new Date():item.wshijian}</Text></View>
                                      <View style={{marginTop:10*s}}><Text style={{fontSize:20}}>发布心情:{item.wxinqing==''?'好':item.wxinqing}</Text></View>
                                      <View style={{marginTop:10*s}}>
                                      <Text style={{fontSize:20}}>发布内容:{item.content==''?'未定':item.content}</Text>
                                     
                                      </View>
                                      <TouchableHighlight style={{height:30*s,width:30*s,marginLeft:'90%',marginBottom:10*s}}  onPress={()=>this.del(item.id)}>
                                      <Image style={{height:30*s,width:30*s,marginBottom:10*s}} source={require('../../assets/zx/del.png')}></Image>
                                      </TouchableHighlight>
                                   
                                    </View>
                                </View>

                            )}
                        ></FlatList>
            </View>
        )


    }
}

const styles = StyleSheet.create({


    // 设置完成款里面的样式
    ccbox: {
        flexDirection: 'column',
        borderColor: '#708090',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft:10*s,
        width: '95%',
        marginTop: 10 * s,
    
    },
   
})