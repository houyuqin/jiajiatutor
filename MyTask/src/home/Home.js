import React, { Component } from 'react';
import { 
    Text, 
    View, 
    ScrollView, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity, 
    Button,
    AsyncStorage
} from 'react-native';
import { Actions} from 'react-native-router-flux';
import { Carousel,Tabs } from '@ant-design/react-native';

const {width,scale} = Dimensions.get('window');
const s = width / 640;
const tabs = [
    {title:'教师推荐'},
    {title:'视频推荐'}
]
export default class Home extends Component {
    course=(select)=>{
        let ke = {kemu:select};
        AsyncStorage.setItem('kemu',JSON.stringify(ke))
        .then(()=>{
            console.log(ke);
            Actions.course();
        });
        
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.tit}>
                        <Text style={styles.title}>佳+家教</Text>
                    </View>
                {/* 轮播图 */}
                <View>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={2}
                    autoplay
                    infinite
                    afterChange={this.onHorizontalSelectedIndexChange}
                >
                    <View
                    style={styles.cra}
                    >
                        <Image 
                            source={require('../../assets/hyq/lunlun1.jpg')}
                            style={styles.cro} 
                        />
                    </View>
                    <View
                    style={styles.cra}
                    >
                        <Image 
                            source={require('../../assets/hyq/lunlun2.jpg')}
                            style={styles.cro} 
                        />
                    </View>
                    <View
                    style={styles.cra}
                    >
                        <Image 
                            source={require('../../assets/hyq/lunlun.jpg')}
                            style={styles.cro} 
                        />
                    </View>
                </Carousel>
                </View>

                {/* 分科 */}
                <View
                    style={styles.cou}
                >              
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('chinese')}
                    >
                        <Image 
                            source={require('../../assets/hyq/语文.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>语文</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('math')}
                    >
                        <Image 
                            source={require('../../assets/hyq/数学.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>数学</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('english')}
                    >
                        <Image 
                            source={require('../../assets/hyq/英语.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>英语</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('physical')}
                    >
                        <Image 
                            source={require('../../assets/hyq/物理.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>物理</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('chemistry')}
                    >
                        <Image 
                            source={require('../../assets/hyq/化学.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>化学</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('bios')}
                    >
                        <Image 
                            source={require('../../assets/hyq/生物.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>生物</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('political')}
                    >
                        <Image 
                            source={require('../../assets/hyq/政治.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>政治</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('history')}
                    >
                        <Image 
                            source={require('../../assets/hyq/历史.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>历史</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('geography')}
                    >
                        <Image 
                            source={require('../../assets/hyq/地理.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>地理</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('exec')}
                    >
                        <Image 
                            source={require('../../assets/hyq/美术.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>美术</Text>
                    </TouchableOpacity> 
                </View>

                {/* 广告 */}
                <TouchableOpacity onPress={Actions.ad}>
                    <Image source={require('../../assets/hyq/add.jpg')} style={styles.ad} />
                </TouchableOpacity>

                {/* 推荐 */}
                <View style={{height:430*s}}>
                    <Tabs tabs={tabs}> 
                        <View style={styles.ooo}>
                            <View style={{flexDirection:'row'}}>
                            <Image style={styles.tea} source={require('../../assets/hyq/111.jpg')}/>   
                            <View style={{paddingTop:50*s}}>
                                <Text style={styles.tch}>姓名：吴金雅</Text>
                                <Text style={styles.tch}>年龄：23</Text>
                                <Text style={styles.tch}>毕业院校：河北师范大学</Text>
                                <Text style={styles.tch}>目前职业：物理教师</Text>
                            </View>
                            </View>
                            <Button title='了解更多>>>' onPress={Actions.goodtea} />
                        </View>
                        <View style={styles.ooo}>
                            <Image style={styles.ved} source={require('../../assets/hyq/vedio00.png')}/>
                            <Button title='了解更多>>>' onPress={Actions.vedio}/>
                        </View>
                    </Tabs>
                </View>
                {/* 问卷 */}
                <TouchableOpacity onPress={Actions.question}>
                    <Image source={require('../../assets/hyq/wenjuan.jpg')} />
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tch:{
        color:'white',
        fontSize:24*s,
        marginTop:10*s
    },
    tea:{
        width:200*s,
        height: 300*s,
        marginLeft:40*s,
        marginRight:40*s
    },
    ved:{
        width:'100%',
        height:300*s
    },
    ooo:{
        width:'100%',
        height: 350*s,
        backgroundColor:'#4a83ba'
    },
    tit:{
        height: 64*s,
        width: '100%',
        backgroundColor: '#708090',
        // backgroundColor: 'rgb(50, 84, 107)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color: 'white',
        fontSize:35*s
    },
    cra:{
        width: '100%',
        height: 350*s
    },
    cro:{
        width: '100%',
        height: 350*s
    },
    cou:{
        width:'100%',
        height: 230*s,
        paddingTop: 10*s,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    course:{
        width:128*s,
        height:100*s,
        flexDirection:'column',
        alignItems:'center'
    },
    ad: {
        width:'100%',
        height: 220*s,
    },
});
// import React, { Component } from 'react'
// import {Carousel,Tabs,NavBar} from 'antd-mobile';
// import {Link} from 'react-router-dom';

// const imgs=['./img/lunlun1.jpg',
//             './img/lunlun2.jpg',
//             './img/lunlun.jpg'];
// const ob = [{lk:'chinese',im:'./img/语文.png',title:'语文'},
//             {lk:'math',im:'./img/数学.png',title:'数学'},
//             {lk:'english',im:'./img/英语.png',title:'英语'},
//             {lk:'physical',im:'./img/物理.png',title:'物理'},
//             {lk:'chemistry',im:'./img/化学.png',title:'化学'},
//             {lk:'bios',im:'./img/生物.png',title:'生物'},
//             {lk:'political',im:'./img/政治.png',title:'政治'},
//             {lk:'history',im:'./img/历史.png',title:'历史'},
//             {lk:'geography',im:'./img/地理.png',title:'地理'},
//             {lk:'exec',im:'./img/美术.png',title:'美术'}
//         ];

// export default class Home extends Component {

//     states = {
//         value: '',
//     };
//     onChange= (value) => {
//         this.setState({ value });
//     };
//     render() {
//         return (

//             <div>
//                 <NavBar
//                 mode="dark"
//                 >佳+家教</NavBar>

//                 <Link to='/goodtea'>
//                 <div style={{ width: '100%',height:200,float:'left'}}>
//                 <Carousel
//                     autoplay={true}
//                     infinite
//                 >
//                     {imgs.map(val => (
//                         <Link to='/goodtea'
//                             key={val}
//                             style={{ display: 'inline-block', width: '100%', height: 200 }}
//                         >
//                             <img
//                                 src={val}
//                                 alt=""
//                                 style={{ width: '100%',height: 200 , verticalAlign: 'top' }}
//                             />
//                         </Link>
//                     ))}
//                 </Carousel>
//                 </div>
//                 </Link>
                
//                 <div style={{width:400,margin:'0 auto'}}>
//                     {                
//                     ob.map((item,idx)=>(
//                         <Link to={'/course?c='+item.lk}>
//                         <div key={idx}>
//                             <div style={{width:60,height:70,borderRadius:10,float:'left',margin:'10px 10px 10px 10px'}}>
//                             <img src={item.im} 
//                                 alt=""
//                                 style={{width:45,height:45,float:'left',marginLeft:10}}
//                             />
//                             <div style={{fontSize:18,color:'#2a89b1',textAlign:'center'}}>{item.title}</div>
//                             </div>
//                         </div>
//                         </Link>
//                         ))
                        
//                     }
//                 </div>

//                 <Link to='/ad'>
//                     <div>
//                        <img src='./img/add.jpg' 
//                        alt='' 
//                        style={{height:130,width:'100%'}}/>
                       
//                     </div>
//                 </Link>

                // <Tabs tabs={tabs}
                //     initialPage={0}
                //     tabBarActiveTextColor='rgb(50, 84, 107)'
                //     tabBarUnderlineStyle={{border:'1px solid rgb(50, 84, 107)'}}
                //     onChange={(tab, index) => { console.log('onChange', index, tab); }}
                //     onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                //     >
                //     <div style={{ display: 'flex', height: '270px',paddingTop:'10px',backgroundColor: '' }}>
                //         <Link to='/goodtea'>
                //             <div style={{color:'rgb(198, 223, 243)',marginLeft:'17px'}}>
                //                 <div style={{width:'3px',height:'30px',border:'3px solid #5d93c0',marginRight:'6px',float:'left'}}></div>
                //                 <div style={{width:'40%',height:'150px',float:'left'}}>
                //                     <img src='./img/111.jpg' alt=''
                //                     style={{width:'70%',height:'150px'}}/>
                //                 </div>
                //                 <div style={{paddingTop:'15px',paddingLeft:'30px',height:'150px',color:'rgb(50, 84, 107)',fontWeight:'bold'}}>
                //                         <p style={{fontSize:'20px',marginRight:'60px',float:'left'}}>姓名：吴金雅</p>
                //                         <p style={{fontSize:'20px',float:'left'}}>年龄：23</p>
                //                         <p style={{fontSize:'20px',float:'left'}}>毕业院校：河北师范大学</p>
                //                         <p style={{fontSize:'20px',float:'left'}}>目前职业：物理教师</p>
                //                 </div>
                //             </div>
                //             <div style={{marginTop:'7px',marginBottom:'7px',width:'90%',height:'2px',border:'1px solid rgb(223, 224, 224)'}}></div>
                //             <div style={{color:'rgb(198, 223, 243)',marginLeft:'17px'}}>
                //             <div style={{width:'3px',height:'30px',border:'3px solid #5d93c0',marginRight:'6px',float:'left'}}></div>
                //                 <div style={{width:'40%',height:'150px',float:'left'}}>
                //                     <img src='./img/222.jpg' alt=''
                //                     style={{width:'70%',height:'150px'}}/>
                //                 </div>
                //                 <div style={{paddingTop:'15px',paddingLeft:'30px',height:'150px',color:'rgb(50, 84, 107)',fontWeight:'bold'}}>
                //                         <p style={{fontSize:'20px',marginRight:'60px',float:'left'}}>姓名：陈永达</p>
                //                         <p style={{fontSize:'20px',float:'left'}}>年龄：30</p>
                //                         <p style={{fontSize:'20px',float:'left'}}>毕业院校：师范大学</p>
                //                         <p style={{fontSize:'20px',float:'left'}}>目前职业：化学教师</p>
                //                 </div>
                                
                //             </div>
                //             <button style={{width:'90%',marginLeft:'17px',marginBottom:'7px',marginTop:'10px',height:'50px',backgroundColor:'white',
                //             color:'rgb(66, 112, 143)',fontSize:'18px',borderRadius:'8px',border:'3px solid rgb(66, 112, 143)'}}>了解更多>>></button>
                //         </Link>
                //     </div>
                //     <div style={{ display: 'flex',  height: '270px',paddingLeft:'30px',paddingTop:'10px', backgroundColor: 'white' }}>
                //         <Link to='/vedio'>
                //             <div style={{color:'#000'}}>
                //             {/* <Player ref="player" videoId="video-1" autoPlay muted
                //                 style={{width:'100%'}}>
                //                 <source src='vedio/math1.mp4' />
                //             </Player> */}
                //                 <img src='./img/vedio00.png' alt="" style={{height:'180px',width:'94%',float:'left'}}/>
                                
                //                 <img src='./img/shishi.jpg' alt="" style={{height:'200px',width:'94%',marginTop:'25px',float:'left'}}/>
                //                 <button style={{width:'92%',marginLeft:'1px',marginBottom:'7px',marginTop:'10px',height:'50px',backgroundColor:'white',
                //                 color:'rgb(66, 112, 143)',fontSize:'18px',borderRadius:'8px',border:'3px solid rgb(66, 112, 143)'}}>了解更多>>></button>
                //             </div>
                //         </Link>
                //     </div>
                // </Tabs>

//                 <div style={{width:'99%',height:35}}>
//                     <Link to='/question'
//                     style={{fontSize:18,float:'left'}}>
//                         <img src='./img/wenjuan.jpg' alt="" style={{width:'100%',height:'80px'}}/>

//                     </Link>
//                 </div>

//             </View>
//         )
//     }
// }