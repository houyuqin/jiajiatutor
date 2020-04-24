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
                <ScrollView>
                <View  style={styles.nav}>
                    <Icon name="left" style={styles.left} onPress={Actions.home} />
                    <Text
                        style={styles.tit}
                    >学科课程视频</Text>
                </View>

                <View style={{display: 'flex',justifyContent:'space-between'}}>
                    {
                        this.state.data.map(item=>(
                            <View style={styles.out}>
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
                                        style={styles.price}
                                    >
                                        <Text style={{fontSize:30*s,color:'red'}}>￥{item.price}</Text>
                                    </View>
                                    <Button 
                                        style={styles.save}
                                        onPress={()=>this.love(item.vedio,item.price,item.class)}
                                    >
                                        <Text>收藏</Text>
                                    </Button> 
                                    <Button 
                                        style={styles.bu} 
                                        onPress={()=>this.buy(item.price,item.name,item.vedio,item.class)}
                                    >
                                                    <Text>购买</Text>
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
        marginLeft:30*s,
        width:150*s,
        height:70*s,
        fontSize:20*s,
        textAlign:'center',
        borderRadius:10*s,
        backgroundColor:'rgb(110, 157, 204)'
    },
    save:{
        marginBottom:10*s,
        marginLeft:30*s,
        width:150*s,
        height:70*s,
        backgroundColor:'rgb(110, 157, 204)',
        borderRadius:10*s,
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
        height:64*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(29, 37, 110)'
    },
    tit:{
        width:'62%',
        color:'#fff',
        fontSize:26*s
    },
    left:{
        width:'38%',
    }
})
// import React, { Component } from 'react'
// import { NavBar, Icon ,Button} from 'antd-mobile';
// import { Player } from 'video-react';
// import {Link} from 'react-router-dom';

// export default class Course extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         data:[]
    //     }
    // }
    // rtn=()=>{
    //     this.props.history.go(-1);
    // }
    
    // componentDidMount(){
    //     console.log(window.location.search.split('=')[1])
    //     let id = this.props.location.search.split('=')[1];
    //     fetch("http://148.70.183.184:8000/course/"+id)
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:res.data
    //         })  
    //     });
    // }
//     render(){
//         return (
//             <div 
//             style={{width:'100%',height:'100%'}}>
//                 <NavBar
//                 style={{backgroundColor:'rgb(50, 84, 107)'}}
//                 icon={<Icon type="left" />}
//                 onLeftClick={this.rtn}
//                 >课程推荐</NavBar>

            // <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
            // {
            //     this.state.data.map(item=>(
            //         <div key={item.id}
            //         style={{width:'98%',paddingTop:'7px',marginTop:'15px',marginLeft:5,borderRadius:'10px',border:'1px solid rgb(174, 177, 179)',boxShadow: '3px 3px 2px rgb(174, 177, 179)',fontWeight:'bold'}}>
            //             <div style={{width:'100%',height:'40px',marginLeft:'10px',fontSize:19,color:'rgb(50, 84, 107)'}}>{item.name}</div>
            //             {/* <Link to={'/play?'+item.vedio}> */}
            //                 <Player ref="player" videoId="video-1">
            //                     <source src={item.vedio}/>
            //                 </Player>
            //             {/* </Link> */}

                        
            //             <div
            //             style={{marginLeft:20,marginTop:'15px',marginBottom:'10px',paddingTop:10,width:100,height:50,float:'left',backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,fontSize:20,textAlign:'center'}}
            //             >￥{item.price}</div>

            //             <Button 
            //             style={{marginTop:'15px',marginBottom:'10px',marginLeft:30,width:100,height:50,float:'left',backgroundColor:'rgb(221, 225, 230)'}}
            //             onClick={()=>{this.love(item.vedio,item.price)}}>
            //             收藏</Button> 
            //             <Button style={{marginTop:'15px',marginBottom:'10px',marginLeft:30,width:100,height:50,float:'left',fontSize:20,textAlign:'center'}}>
            //                 <Link to={'/buy?'+item.price+'?'+item.name+'?'+item.vedio+'?'+this.props.location.search.split('=')[1]}>
            //                     <div style={{backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,}}>购买</div>
            //                 </Link>
            //             </Button> 
            //         </div>
                
            //     ))
            // }
            // </div>
//         </div>
//     )}
   
// }
