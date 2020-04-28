import React, { Component } from 'react'
import Video from 'react-native-video';
import { View, AsyncStorage, Dimensions } from 'react-native';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Player0 extends Component {
    constructor(){
        super();
        this.state={
            src:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('src')
        .then(res=>{
            let src = JSON.parse(res);
            this.setState({src:src.vedio});
        })
        .then(()=>{
            console.log(this.state.src);
        });
    }
    render() {
        return (
            <View>
                <Video 
                    source={require('../../assets/hyq/ch1.mp4')}
                    // source={{uri:this.state.src}}  
                    style={{width:'100%',height:'100%'}}
                    volume={1} 
                    muted={false}
                    repeat={true} 
                />
            </View>
        )
    }
}
