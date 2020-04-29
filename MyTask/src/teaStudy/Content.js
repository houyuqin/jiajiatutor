import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    Dimensions,
    ImageBackground,
    StyleSheet,
    StatusBar,
    FlatList,
    Alert
} from 'react-native';
import NaviBar from 'react-native-pure-navigation-bar';
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class TeaStudy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            pingjia: '',
            id:''
        }

    }
    componentDidMount() {
        let id = this.props.id
        this.setState({id:this.props.id})
        fetch(`http://148.70.183.184:8005/pinxiangqing/${id}`, {
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
    componentUpdate() {
        let id = this.props.id

        fetch(`http://148.70.183.184:8005/pinxiangqing/${id}`, {
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

    //评价的内容
    pingjia = (e) => {
        this.setState({
            pingjia: e
        })
    }

    //提交评价
    tijiao=()=>{
        let aa=this.state.pingjia
        let id1 = this.props.id
    if(this.state.pingjia=='')
    {Alert.alert('请输入评价！')}
    else{
        fetch(`http://148.70.183.184:8005/pingjia/${id1}`, {
      method: "POST",
      headers: {
         'Content-Type': 'text/plain; charset=UTF-8'
      },
      body: JSON.stringify(aa)
    }).then((res) => res.json())
    .then((res) => {
        fetch(`http://148.70.183.184:8005/pinxiangqing/${this.state.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data: res.data })
            })

        Alert.alert('您的评价提交成功')
    })
    }
    }

    //删除
    shanchu=()=>{
      
        var id1=this.props.id;
        fetch(`http://148.70.183.184:8005/tasks/${id1}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'text/plain; charset=UTF-8'
          },
      })
          .then((res) => res.json())
          .then((res) => {
              Alert.alert('任务永久删除成功!')
          })
    }
    render() {
        return (
            <View>

                {/* <NaviBar
                    style={{ color: 'white', backgroundColor: 'black' }}
                    backgroundColor='black'
                    color='white'
                    title={'批改作业'}
                    onLeft={() => Actions.teatask()}
                /> */}
                <View>

                    <View style={{ width: '95%', backgroundColor: 'white', marginTop: 20 * s, marginLeft: 15 * s, borderRadius: 10, paddingTop: 20 * s, paddingLeft: 30 * s, paddingBottom: 20 * s }}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={{ width: '90%', borderColor: 'rgb(204, 202, 202)', borderWidth: 1 }}>
                                    <Text style={{ fontSize: 25, marginTop: 20 * s }}>作业内容：</Text>
                                        <Text style={{ fontSize: 22 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.content}</Text>
                                        <Text style={{ fontSize: 25, marginTop: 20 * s }}>学生答案：</Text>
                                        <Text style={{ fontSize: 22, marginTop: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.daan}</Text>
                                        <Text style={{ fontSize: 25, marginTop: 20 * s }}>我的评价：</Text>
                                        <Text style={{ fontSize: 22, marginTop: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.pingjia==null?'还未评价':item.pingjia}</Text>
                                    </View>
                                </View>
                            )}
                        ></FlatList>
                    </View>
                    <View style={{ width: '95%', height: 400 * s, backgroundColor: 'white', marginLeft: 15 * s, marginTop: 30 * s, borderRadius: 10, paddingTop: 20 * s, paddingLeft: 30 * s }}>
                        <Text style={{ fontSize: 25 }}>教师评语:</Text>
                        <View style={{ width: '80%', height: 240 * s, marginLeft: 60 * s, borderWidth: 1, marginTop: 10 * s, borderColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>


                            <TextInput
                                style={{ marginLeft: 10 * s, marginTop: -190 * s }}
                                multiline={true}
                                placeholder="请输入评语"
                                onChangeText={this.pingjia}
                            />

                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity onPress={() => this.tijiao()}>
                                <Text style={{ width: 75 * s, height: 45 * s, marginTop: 20 * s, marginLeft: 440 * s, borderRadius: 10, paddingLeft: 12 * s, fontSize: 14, color: 'white', paddingTop: 7 * s, backgroundColor: '#2f618b' }}>提交</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => this.shanchu()}>
                                <Text style={{ width: 75 * s, height: 45 * s, marginTop: 20 * s, marginLeft: 10 * s, borderRadius: 10, paddingLeft: 12 * s, fontSize: 14, color: 'white', paddingTop: 7 * s, backgroundColor: '#2f618b' }}>删除</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

})