import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon, Button } from '@ant-design/react-native';
import Video from 'react-native-video';

const {width,scale} = Dimensions.get('window');
const s = width / 640;
export default class Course extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            id:''
        }
    }
    // 购买
    buy=(price0,name0,vedio0,class0)=>{
        let a = {};
        a.price = price0;
        a.name = name0;
        a.vedio = vedio0;
        a.class = class0;
        AsyncStorage.setItem('buy',JSON.stringify(a))
        .then(()=>{
            Actions.buy();
        });
    }
    // 收藏
    love=(vedio0,price0,class0)=>{
        let a = {vedio:vedio0,class:class0,price:price0,usernum:this.state.username}
        fetch(`http://148.70.183.184:8000/mylove`,{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('收藏成功！');
                return res.json(a);
            }else{
                alert('该视频已在收藏列表！');
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    componentDidMount(){
        AsyncStorage.getItem('kemu')
        .then(res=>{
            let id = JSON.parse(res);
            this.setState({id:id.kemu})
        })
        .then(()=>{
            console.log(this.state.id);
            fetch("http://148.70.183.184:8000/course/"+this.state.id)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })  
            });
        });

        
    }
    render() {
        return (
            <View>
                
                <View  style={styles.nav}>
                    <Icon name="left" style={styles.left} onPress={Actions.home} />
                    <Text
                        style={styles.tit}
                    >学科课程视频</Text>
                </View>
                <ScrollView>
                <View style={{display: 'flex',justifyContent:'space-between',paddingBottom:80*s}}>
                    {
                        this.state.data.map(item=>(
                            <View style={styles.out}>
                                <Text style={{fontSize:18,marginLeft:10*s,marginBottom:10*s}}>{item.name}</Text>
                                <TouchableOpacity 
                                    onPress={()=>{
                                        let a={vedio:item.vedio};
                                        AsyncStorage.setItem('src',JSON.stringify(a))
                                        .then(()=>{
                                            console.log('src存储！'+item.vedio)
                                            Actions.player();
                                        });
                                    }}
                                >
                                <Video 
                                    source={this.state.vedio}
                                    style={{width:'100%',height:400*s,marginBottom:20*s}}
                                    paused={false}
                                    muted
                                    repeat={false} 
                                />
                                </TouchableOpacity>


                                <View style={{flexDirection:'row',alignContent:'center',paddingLeft:50*s}}>
                                    <View
                                        // style={styles.price}
                                    >
                                        {/* <Text style={{fontSize:30*s,color:'red'}}>￥{item.price}</Text> */}
                                    </View>
                                    <Button 
                                        style={styles.save}
                                        onPress={()=>this.love(item.vedio,item.price,item.class)}
                                    >
                                        <Text style={{color:'white'}}>收藏</Text>
                                    </Button> 
                                    <Button 
                                        style={styles.bu} 
                                        onPress={()=>this.buy(item.price,item.name,item.vedio,item.class)}
                                    >
                                        <Text style={{color:'white'}}>购买  </Text>
                                        <Text style={{fontSize:23*s,color:'red'}}>￥{item.price}</Text>
                                    </Button> 
                                </View>
                            </View>
                        ))
                    }
                    </View>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bu:{
        marginBottom:10*s,
        width:180*s,
        height:50*s,
        fontSize:20*s,
        textAlign:'center',
        borderTopRightRadius:40*s,
        borderBottomRightRadius:40*s,
        backgroundColor:'#708090'
    },
    save:{
        marginBottom:10*s,
        marginLeft:200*s,
        width:180*s,
        marginRight:-8*s,
        height:50*s,
        backgroundColor:'rgb(110, 157, 204)',
        borderTopLeftRadius:40*s,
        borderBottomLeftRadius:40*s
    },
    price:{
        width:150*s,
        height:70*s,
        backgroundColor:'rgb(110, 157, 204)',
        borderRadius:10*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    out:{
        width:'98%',
        marginTop:15*s,
        paddingTop:15*s,
        marginLeft:'1%',
        borderRadius:20*s,
        borderColor:'rgb(174, 177, 179)',
        borderWidth:1*s,
        fontWeight:'bold',
        backgroundColor:'#ddd'
    },
    nav:{
        width:'100%',
        height:73*s,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#708090'
    },
    tit:{
        width:'62%',
        color:'#fff',
        fontSize:26*s,
    },
    left:{
        width:'38%',
        paddingLeft:20*s
    }
});