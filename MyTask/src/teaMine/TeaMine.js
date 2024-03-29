import React, { Component } from 'react'
import { Text, View, Dimensions, Image,ImageBackground, TouchableOpacity, ScrollView, StyleSheet ,AsyncStorage} from 'react-native'
import { Actions } from 'react-native-router-flux';
const {width} = Dimensions.get('window');
const s = width/640;
export default class TeaMine extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            wusername:'',
            imageUrl:'',
            logintea:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('url')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
            console.log(this.state.imageUrl)
        })
        AsyncStorage.getItem('tea')
        .then((res)=>{
            this.setState({
                logintea:JSON.parse(res)
            })
            fetch(`http://148.70.183.184:8006/teamine/${this.state.logintea}`)
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
                if (this.state.data[0].wusername == '') {
                    this.setState({
                        wusername:'我的昵称'
                    })
                }else{
                    this.setState({
                        wusername:this.state.data[0].wusername
                    })
                }
            })
        })
    }
    componentDidUpdate(){
        AsyncStorage.getItem('url')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
        })
    }
    wexitapp = ()=>{
        Actions.login();
        AsyncStorage.removeItem('url');
        AsyncStorage.removeItem('tea');
        // AsyncStorage.clear();
        console.log(111);
    }
    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor:'#708090',height:150*s,marginTop:2*s,flexDirection:'row',alignItems:'center'}}>
                   <View style={{width:100*s,height:100*s,borderRadius:50*s,overflow:'hidden',marginLeft:20*s}}>
                        <ImageBackground source={require('../../assets/wjy/img/w头像女孩.png')} style={{width:100*s,height:100*s}}>
                            <Image style={{width:100*s,height:100*s}} source={this.state.imageUrl}/>
                        </ImageBackground>
                    </View>
                    <Text style={{width:150*s,height:40*s,fontSize:18,marginLeft:35*s}}>{this.state.wusername}</Text>
                    <TouchableOpacity onPress={()=>Actions.wteashezhi()} style={{width:130*s,height:30*s,borderRadius:15*s,borderWidth:1,marginLeft:160*s,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:15}}>编辑资料</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigview}>
                    <View style={styles.wview}>
                        <Image source={require('../../assets/wjy/img/w个人名片.png')} style={[styles.wlist,{backgroundColor:'#CCCCFF',height:50*s}]}/>
                        <TouchableOpacity onPress={()=>Actions.wgerenziliao()}><Text style={styles.context}>个人名片</Text></TouchableOpacity>
                    </View>
                  
                    <View style={styles.wview}>
                        <Image source={require('../../assets/wjy/img/w我的收藏.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wteawodeshouyi()}><Text style={styles.context}>我的收益</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../assets/wjy/img/教师.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wteawodexuesheng()}><Text style={styles.context}>我的学生</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../assets/wjy/img/zuoye.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wteafabuzuoye()}><Text style={styles.context}>发布的作业</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../assets/wjy/img/w用户反馈.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>Actions.wteayijianfankui()}><Text style={styles.context}>意见反馈</Text></TouchableOpacity>
                    </View>
                    <View style={styles.wview}>
                        <Image source={require('../../assets/wjy/img/w退出登录.png')} style={styles.wlist}/>
                        <TouchableOpacity onPress={()=>this.wexitapp()}><Text style={styles.context}>退出登录</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    bigview:{
        width:600*s,
        marginLeft:40*s,
        flex:1,
        borderLeftWidth:3*s,
        height:811*s,
    },
    wlist:{
        width:60*s,
        height:60*s
    },
    wview:{
        flexDirection:'row',
        width:350*s,
        justifyContent:'center',
        height:100*s,
        alignItems:'center'
    },
    context:{
        width:230*s,
        fontSize:20,
        marginLeft:25*s
    }
});