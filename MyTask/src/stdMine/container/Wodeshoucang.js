import React, { Component } from 'react'
import { Text, View, ScrollView ,Dimensions,StyleSheet,TouchableOpacity } from 'react-native'
import Video from 'react-native-video';

const {width} = Dimensions.get('window');
const s = width/640;

export default class Wodeshoucang extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            paused: true,
        }
    }
    componentDidMount(){   
        fetch('http://148.70.183.184:8000/mylove')
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
    }
    componentDidUpdate(){
        fetch('http://148.70.183.184:8000/mylove')
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
    }
    deleteshipin=(idx)=>{
        fetch(`http://148.70.183.184:8000/mylove/${idx}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            }
        })
        .then((res) => res.json())
    } 
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item)=>(
                        <View style={{marginTop:20*s,width:600*s,marginLeft:20*s,backgroundColor:'white',padding:10*s,borderRadius:10*s}}>
                            <View style={{flexDirection:'row',marginBottom:10*s}}>
                                <Text style={{fontSize:17}}>{item.class} vedio</Text>
                                <TouchableOpacity onPress={()=>this.deleteshipin(item.id)} style={{marginLeft:330*s,width:80*s,alignItems:'center',backgroundColor:'#708090',borderRadius:10*s}}>
                                    <Text  style={{fontSize:17,color:'white'}}>删除</Text>
                                </TouchableOpacity>
                            </View>
                            <Video
                                source={require('./vedio/ch1.mp4')}
                                style={styles.backgroundVideo}
                            />
                        </View>
                    ))
                } 
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    backgroundVideo: {
        width:550*s,
        height:300*s,
    },
  });