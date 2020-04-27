import React, { Component } from 'react'
import { 
    Text, 
    View, 
    ScrollView, 
    ImageBackground, 
    Dimensions, 
    StyleSheet, 
    Button, 
    Image, 
    TextInput, 
    TouchableOpacity,
    Lightbox 
} from 'react-native'
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width/640;
export default class Fabu extends Component {
    constructor(){
        super();
        this.state={
            inp:''
        }
    }
    getInp = (e)=>{
        console.log(e);
        this.setState({
            inp:e
        })
    }
    addpic=()=>{

    }
    confirm=()=>{
        Actions.pop();
    }
    render() {
        return (
            <ImageBackground 
                    style={{width:'100%',height:970*s}}
                    source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3653802198,2630879977&fm=26&gp=0.jpg'}}
                    >
            <View style={styles.fabu}>
                <View style={styles.border}>
                    <TextInput
                        placeholder='发现新内容'
                        numberOfLines={3}
                        onChangeText={(Text)=>this.getInp(Text)}
                    />
                    <View style={styles.pics}>
                        <TouchableOpacity onPress={this.addpic}>
                            <Image source={require('../../assets/hyq/添加.jpg')} style={styles.pic}/>
                        </TouchableOpacity>
                        <Image source={require('../../assets/hyq/14.jpg')} style={styles.pic}/>
                        <Image source={require('../../assets/hyq/14.jpg')} style={styles.pic}/>
                        <Image source={require('../../assets/hyq/14.jpg')} style={styles.pic}/>
                        <Image source={require('../../assets/hyq/14.jpg')} style={styles.pic}/>
                    </View>
                </View>
            </View>
            <Button title='发表' onPress={this.confirm} color='blue' />
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    pic:{
        width:120*s,
        height:120*s,
        marginLeft:10*s,
        marginTop:10*s
    },
    pics:{
        width:'100%',
        height:270*s,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:23*s
    },
    fabu:{
        backgroundColor:'#eee',
        width:'100%',
        height:400*s,
        flexDirection:'row',
        justifyContent:'center'
    },
    border:{
        borderColor:'#222',
        borderWidth:1*s,
        width:'90%',
        height:370*s,
        marginTop:10*s,
        borderRadius:10*s,
        fontSize:40*s
    }
})