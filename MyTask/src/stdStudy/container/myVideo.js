import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native'
import Video from 'react-native-video';

const {width}=Dimensions.get('window')
const s=width/640
export default class myVideo extends Component {
    constructor(){
        super();
        this.state=({
            data:['1','2','3']
        })
    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center'}}>
                <View style={{width:'95%',backgroundColor:'white',borderRadius:10*s,height:430*s,marginTop:10*s}}>
                    <Text style={{marginLeft:10*s,fontSize:20}}>语文视频</Text>
                    <Video 
                        source={require('../../../assets/wjy/ch1.mp4')}
                        style={{width:'100%',height:'100%'}}
                        volume={1} 
                        muted={false}
                        repeat={true} 
                    />
                </View>
                
               {/* <FlatList
               data={this.state.data}
               renderItem={({item})=>(
                     <View style={{flex:1,alignItems:"center"}}>
                         <View style={styles.box}>
                             <View style={styles.box1}></View>
                             <View style={styles.box2}></View>
                         </View>
                     </View>
               )}
               ></FlatList> */}
            </View>
        )
    }
}
const styles=StyleSheet.create({
    box:{
        height:400*s,
        width:'95%',
        backgroundColor:'red',
        marginTop:20*s,
        alignItems:'center'
    },
    box1:{
        width:'95%',
        height:350*s,
        backgroundColor:'green'
    }
})