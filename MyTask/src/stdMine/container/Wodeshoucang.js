import React, { Component } from 'react'
import { Text, View, ScrollView ,Dimensions,StyleSheet,TouchableOpacity,ToastAndroid ,AsyncStorage} from 'react-native'
import Video from 'react-native-video';
const {width} = Dimensions.get('window');
const s = width/640;
export default class Wodeshoucang extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            loginstd:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('std')
        .then((res)=>{
            this.setState({
                loginstd:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8000/mylove/${this.state.loginstd}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
        }) 
    }
    deleteshipin=(idx)=>{
        fetch(`http://148.70.183.184:8000/mylove/${idx}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body:JSON.stringify({id:idx})
            })
            .then((res) => res.json())
        ToastAndroid.show('删除成功！',100);
    } 
    render() {
        return (
            <ScrollView>
                {
                    this.state.data.map((item)=>(
                        <View style={{marginTop:20*s,width:600*s,marginLeft:20*s,backgroundColor:'white',padding:10*s,borderRadius:10*s,borderColor:'#708090',borderWidth:1}}>
                            <View style={{flexDirection:'row',marginBottom:10*s}}>
                                <Text style={{fontSize:17,width:200*s}}>{item.class} vedio</Text>
                                <TouchableOpacity onPress={()=>this.deleteshipin(item.id)} style={{marginLeft:300*s,width:80*s,alignItems:'center',backgroundColor:'#708090',borderRadius:10*s}}>
                                    <Text  style={{fontSize:17,color:'white'}}>删除</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.backgroundVideo}>
                                {/* <Video
                                    source={require('./vedio/ch1.mp4')}
                                    style={styles.backgroundVideo}
                                /> */}
                            </View>
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