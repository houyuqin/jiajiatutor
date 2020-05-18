import React, { Component } from 'react'
import {
    View, 
    Text, 
    Image, 
    TextInput, 
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    Dimensions,
    ImageBackground,
    StyleSheet
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
let src='';
let username=''
export default class TeaStudy extends Component {
    constructor(){
        super()
        this.state={
            data:'',
            name:'',
            me:'',
            yes:0,
            xing1:0,
            xing2:0,
            xing3:0,
            xing4:0,
            xing5:0
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('tea', (err, result) => {
            this.setState({ me: JSON.parse(result) })
       
        // fetch(`http://148.70.183.184:8006/teamine/${this.state.me}`)
        // .then(res=>res.json())
        // .then(res=>{
        //     this.setState({
        //         name:res.data[0].wusername
        //     })
        // })
        fetch('http://148.70.183.184:8003/ping')
            .then((res)=>res.json())
            .then((res)=>{    
                for(var i=0;i<res.length;i++)
                {
                    if(res[i].teacher == '18231868912')
                    {
                        this.setState({
                            yes:res[i].num
                        })
                        if(res[i].num == 0)
                        {
                            this.setState({
                                xing1:0,
                                xing2:0,
                                xing3:0,
                                xing4:0,
                                xing5:0
                            });
                        }
                        else if(res[i].num == 1)
                        {
                            this.setState({
                                xing1:1,
                                xing2:0,
                                xing3:0,
                                xing4:0,
                                xing5:0
                            });
                        }
                        else if(res[i].num == 2)
                        {
                            this.setState({
                                xing1:1,
                                xing2:1,
                                xing3:0,
                                xing4:0,
                                xing5:0
                            });
                        }
                        else if(res[i].num == 3)
                        {
                            this.setState({
                                xing1:1,
                                xing2:1,
                                xing3:1,
                                xing4:0,
                                xing5:0
                            });
                        }
                        else if(res[i].num == 4)
                        {
                            this.setState({
                                xing1:1,
                                xing2:1,
                                xing3:1,
                                xing4:1,
                                xing5:0
                            });
                        }
                        else if(res[i].num == 5)
                        {
                            this.setState({
                                xing1:1,
                                xing2:1,
                                xing3:1,
                                xing4:1,
                                xing5:1
                            });
                        }
                    }
                }                  
        })
 
    })
        
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }}
            style={{opacity:1}}
            source={require('../../assets/cq/780.jpg')}>  
            <View style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.1)'}}>
                

                
                <View style={{opacity:1}}>
                    <View style={{width:'93%',height:300*s,marginLeft:24*s,marginTop:22*s,opacity:1,backgroundColor:'#2f618b',
                    borderRadius:40*s,elevation:10,shadowColor:'black',flexDirection:'row',}}>
                        <Image style={{width:150*s,height:150*s,marginTop:70*s,marginLeft:40*s,borderRadius:75*s}} source={require('../../assets/cq/touxiang.png')}/>
                        <View style={{flexDirection:'column',marginLeft:40*s,marginTop:95*s}}>
        <Text style={{color:'white',fontSize:27*s}}>教师姓名：{this.state.name}</Text>
                            <View style={{color:'white',marginTop:20*s,fontSize:27*s,flexDirection:'row'}}>
                                <Text style={{marginTop:10*s,fontSize:27*s,color:'white'}}>星级等级：</Text>
                                <View style={{marginLeft:8*s,marginTop:11*s,flexDirection:'row'}}>
                                    <Image style={{width:40*s,height:40*s}} source={this.state.xing1==0?require('../../assets/cq/xingxing1.png'):require('../../assets/cq/txing.png')}/> 
                                    <Image style={{width:40*s,height:40*s}} source={this.state.xing2==0?require('../../assets/cq/xingxing1.png'):require('../../assets/cq/txing.png')}/> 
                                    <Image style={{width:40*s,height:40*s}} source={this.state.xing3==0?require('../../assets/cq/xingxing1.png'):require('../../assets/cq/txing.png')}/> 
                                    <Image style={{width:40*s,height:40*s}} source={this.state.xing4==0?require('../../assets/cq/xingxing1.png'):require('../../assets/cq/txing.png')}/> 
                                    <Image style={{width:40*s,height:40*s}} source={this.state.xing5==0?require('../../assets/cq/xingxing1.png'):require('../../assets/cq/txing.png')}/> 
                                </View>
                            </View>
                        </View>
                        
                    </View>
                </View>
                <View style={{marginTop:60*s,marginLeft:50*s,opacity:1,}}>
                    <TouchableOpacity onPress={()=>Actions.give()}>
                        <View style={{width:'90%',height:170*s,borderRadius:20*s,elevation:8,shadowColor:'red',backgroundColor:'#b0b2b4',flexDirection:'row'}}>
                            {/* <Image style={{width:160*s,height:50*s,marginTop:50*s,marginLeft:20*s}} source={require('../../assets/cq/bu.jpg')}/> */}
                            <Text style={{fontSize:33*s,color:'#1a2f41',marginTop:50*s,marginLeft:30*s}}>布置作业</Text>
                            <Image style={{width:40*s,height:40*s,marginTop:55*s,marginLeft:270*s}} source={require('../../assets/cq/you.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Actions.teatask()}>
                        <View style={{width:'90%',height:170*s,marginTop:30*s,borderRadius:20*s,elevation:8,shadowColor:'red',backgroundColor:'#355586',flexDirection:'row'}}>
                        {/* <Image style={{width:160*s,height:50*s,marginTop:50*s,marginLeft:20*s}} source={require('../../assets/cq/bu.jpg')}/> */}
                            <Text style={{fontSize:33*s,marginTop:50*s,marginLeft:30*s}}>作业批改</Text>
                            <Image style={{width:40*s,height:40*s,marginTop:55*s,marginLeft:270*s}} source={require('../../assets/cq/you.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>Actions.video()}>
                        <View style={{width:'90%',height:170*s,marginTop:30*s,borderRadius:20*s,elevation:8,shadowColor:'red',backgroundColor:'#1d3c6a',flexDirection:'row'}}>
                            <Text style={{fontSize:33*s,marginTop:50*s,marginLeft:30*s}}>上传视频</Text>
                            <Image style={{width:40*s,height:40*s,marginTop:55*s,marginLeft:270*s}} source={require('../../assets/cq/you.png')}/>
                        </View>
                    </TouchableOpacity>
                    
              </View>
                
            </View>
            </ImageBackground>
        )
    }
}


// import React, { Component } from 'react'
// import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
// import TeaRoute from './TeaRoute'
// import TeaTest from './TeaTest';
// import TeaTask from './TeaTask';
// import TeaReal from './TeaReal';
// import complete from './complete';
// import Content from './Content'
// import Video from './Video'

// export default class TeaStudy extends Component {

//     render() {
//         return (
//             <Router>                
//                 <div className="cteall">                        
//                         <Switch> 
//                             <Route exact path='/' component={TeaRoute}></Route>
//                             <Route path="/ctebuzhi" component={TeaTest}></Route>
//                             <Route path="/ctebigai" component={TeaTask}></Route>
//                             <Route path="/teareal" component={TeaReal}></Route>
//                             <Route path='/complete' component={complete}></Route>
//                             <Route path='/tasks/:id' component={Content}></Route>
//                             <Route path='/video' component={Video}></Route>
//                         </Switch>             
//                 </div>            
//             </Router>
//         )
//     }
// }
