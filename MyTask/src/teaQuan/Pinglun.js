import React, { Component } from 'react'
import { Text, View, FlatList, ToastAndroid,TouchableOpacity, Dimensions, Image,Alert } from 'react-native'
const { width } = Dimensions.get('window');
const s = width / 640;
export default class Pinglun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
            id:0
        }

    }


    componentDidMount() {
        fetch(`http://148.70.183.184:8005/teaPing/${this.props.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        }).then((res) => res.json()).then(res => {
            if (res.data != '') {
                this.setState({ data: res.data })
               
            }
            else {
                this.setState({ data: [{ ping: '暂未评论！' }] })
            }
        })
    }
    componentDidUpdate() {
        fetch(`http://148.70.183.184:8005/teaPing/${this.props.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        }).then((res) => res.json()).then(res => {
            if (res.data != '') {
                this.setState({ data: res.data })
            }
            else {
                this.setState({ data: [{ ping: '暂未评论！' }] })
            }
        })

    }
     //点击评论区内容出现选择框
     show = (id) => {
        this.setState({id:id})
        Alert.alert('删除', '是否要删除',
            [
                { text: "确认删除", onPress: this.del},
                { text: "取消", onPress: this.a },

            ]
        );
    }

    a=()=>{
        ToastAndroid.showWithGravity(
            "取消删除！",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }
    //删除评论区内容
    del = (id) => {
        //console.log(id)
        //fetch接口进行删除
       // console.log(this.state.id)
       fetch(`http://148.70.183.184:8005/delteaPing/${this.state.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        },
    })
        .then((res) => res.json())
        .then((res) => {
        Alert.alert('删除成功!')
        })
    }
    render() {

        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index }) => (
                        <View style={{ flex: 1, alignItems: 'center' ,marginTop:10*s}}>
                            <TouchableOpacity style={{  flexDirection: 'row', marginTop: 6 * s, width: '95%' }} onPress={()=>this.show(item.id)}>
                                    <Image style={{ width: 30 * s, height: 30 * s, marginTop: 3 * s }} source={require('../../assets/zx/ping.png')}></Image>
                                    <Text style={{ fontSize: 18, marginLeft: 10 * s }}>{item.username==''?item.usernum:item.username}:</Text>
                                    <View style={{ paddingRight: 20 * s ,width:460*s}}><Text style={{ marginLeft: 18 * s, fontSize: 18 }}>{item.ping}</Text></View>
                            </TouchableOpacity>
                        </View>
                    )}
                ></FlatList>

            </View>
        )


    }
}
