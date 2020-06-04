import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native'
import { Icon, Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Vedio extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            username:''
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
        console.log(a)
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
        });
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8000/vedio")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });

        AsyncStorage.getItem('std')
        .then(res=>{
            let std = JSON.parse(res);
            this.setState({username:std});
        });
    }
    render() {
        return (
            <View>
                
                <View  style={styles.nav}>
                    <Icon name="left" style={styles.left} onPress={Actions.pop} />
                    <Text
                        style={styles.tit}
                    >优秀视频推荐</Text>
                </View>
                <ScrollView>
                <View>
                {
                    this.state.data.map(item=>(
                        <View
                        style={styles.out}>
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
                                    // source={require('../../assets/hyq/ch1.mp4')}
                                    source={{uri:'http://148.70.183.184:8000/vedio'+item.vedio}}
                                    style={{width:'100%',height:400*s,marginBottom:20*s}}
                                    paused={true}
                                    volume={0} 
                                    muted
                                    repeat={false} 
                                />
                            </TouchableOpacity>
                            {/* <Video
                                source={{uri:'http://sofa.resource.shida.sogoucdn.com/7eba2606-835d-4849-a81a-25bb12fda4732_0_0.mp4'}}
                                style={{width:'100%',height:400*s}}
                                // rate={this.state.rate}                          // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                                paused={true}
                                volume={0}                   // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                                muted={true}                  // true代表静音，默认为false.
                                // resizeMode='contain'       // 视频的自适应伸缩铺放行为，
                                repeat={false}             // 是否重复播放
                            /> */}
                            <View style={{flexDirection:'row',alignContent:'center',paddingLeft:50*s}}>
                                <View
                                // style={styles.price}
                                >
                                    {/* <Text style={{fontSize:30*s,color:'red'}}>￥{item.price}</Text> */}
                                </View>
                                <Button 
                                style={styles.save}
                                onPress={()=>this.love(item.vedio,item.price,item.class)}>
                                    <Text  style={{color:'white'}}>收藏</Text>
                                </Button> 
                                <Button style={styles.bu} onPress={()=>this.buy(item.price,item.name,item.vedio,item.class)}>

                                    <Text style={{color:'white'}}>购买</Text>
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
        justifyContent:'center',
        backgroundColor:'#708090'
    },
    tit:{
        width:'62%',
        color:'#fff',
        fontSize:26*s
    },
    left:{
        width:'38%',
        paddingLeft:20*s
    },
})

// render(){
//     return (
//         <div 
//         style={{width:'100%',height:'100%'}}>
//             <NavBar
//             style={{backgroundColor:'rgb(50, 84, 107)'}}
//             icon={<Icon type="left" />}
//             onLeftClick={this.rtn}
//             >视频推荐</NavBar>

//         <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
        // {
        //     this.state.data.map(item=>(
        //         <div key={item.id}
        //         style={{width:'98%',paddingTop:'7px',marginTop:'15px',marginLeft:5,borderRadius:'10px',border:'1px solid rgb(174, 177, 179)',boxShadow: '3px 3px 2px rgb(174, 177, 179)',fontWeight:'bold'}}>
        //             <Player ref="player" videoId="video-1" >
        //                 <source src={item.vedio}/>
        //             </Player>
        //             <div
        //             style={{marginLeft:20,marginTop:'15px',marginBottom:'10px',paddingTop:10,width:100,height:50,float:'left',backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,fontSize:20,textAlign:'center'}}
        //             >￥{item.price}</div>
        //             <Button 
        //             style={{marginTop:'15px',marginBottom:'10px',marginLeft:30,width:100,height:50,float:'left',backgroundColor:'rgb(221, 225, 230)'}}
        //             onClick={()=>{this.love(item.vedio,item.price)}}>
        //             收藏</Button> 
        //             <Button style={{marginTop:'15px',marginBottom:'10px',marginLeft:30,width:100,height:50,float:'left',fontSize:20,textAlign:'center'}}>
        //                     <Link to={'/buy?'+item.price+'?'+item.name+'?'+item.vedio+'?'+item.class}>
        //                         <div style={{backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,}}>购买</div>
        //                     </Link>
        //                 </Button> 
        //         </div>
            
        //     ))
        // }
//         </div>
//     </div>
// )}

// }
