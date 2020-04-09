import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text> textInComponentHome </Text>
            </View>
        )
    }
}
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
// const tabs=[
//     { title: '教师推荐', sub: '1' },
//     { title: '视频推荐', sub: '2' }
// ]
  
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

//                 <Tabs tabs={tabs}
//                     initialPage={0}
//                     tabBarActiveTextColor='rgb(50, 84, 107)'
//                     tabBarUnderlineStyle={{border:'1px solid rgb(50, 84, 107)'}}
//                     onChange={(tab, index) => { console.log('onChange', index, tab); }}
//                     onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
//                     >
//                     <div style={{ display: 'flex', height: '270px',paddingTop:'10px',backgroundColor: '' }}>
//                         <Link to='/goodtea'>
//                             <div style={{color:'rgb(198, 223, 243)',marginLeft:'17px'}}>
//                                 <div style={{width:'3px',height:'30px',border:'3px solid #5d93c0',marginRight:'6px',float:'left'}}></div>
//                                 <div style={{width:'40%',height:'150px',float:'left'}}>
//                                     <img src='./img/111.jpg' alt=''
//                                     style={{width:'70%',height:'150px'}}/>
//                                 </div>
//                                 <div style={{paddingTop:'15px',paddingLeft:'30px',height:'150px',color:'rgb(50, 84, 107)',fontWeight:'bold'}}>
//                                         <p style={{fontSize:'20px',marginRight:'60px',float:'left'}}>姓名：吴金雅</p>
//                                         <p style={{fontSize:'20px',float:'left'}}>年龄：23</p>
//                                         <p style={{fontSize:'20px',float:'left'}}>毕业院校：河北师范大学</p>
//                                         <p style={{fontSize:'20px',float:'left'}}>目前职业：物理教师</p>
//                                 </div>
//                             </div>
//                             <div style={{marginTop:'7px',marginBottom:'7px',width:'90%',height:'2px',border:'1px solid rgb(223, 224, 224)'}}></div>
//                             <div style={{color:'rgb(198, 223, 243)',marginLeft:'17px'}}>
//                             <div style={{width:'3px',height:'30px',border:'3px solid #5d93c0',marginRight:'6px',float:'left'}}></div>
//                                 <div style={{width:'40%',height:'150px',float:'left'}}>
//                                     <img src='./img/222.jpg' alt=''
//                                     style={{width:'70%',height:'150px'}}/>
//                                 </div>
//                                 <div style={{paddingTop:'15px',paddingLeft:'30px',height:'150px',color:'rgb(50, 84, 107)',fontWeight:'bold'}}>
//                                         <p style={{fontSize:'20px',marginRight:'60px',float:'left'}}>姓名：陈永达</p>
//                                         <p style={{fontSize:'20px',float:'left'}}>年龄：30</p>
//                                         <p style={{fontSize:'20px',float:'left'}}>毕业院校：师范大学</p>
//                                         <p style={{fontSize:'20px',float:'left'}}>目前职业：化学教师</p>
//                                 </div>
                                
//                             </div>
//                             <button style={{width:'90%',marginLeft:'17px',marginBottom:'7px',marginTop:'10px',height:'50px',backgroundColor:'white',
//                             color:'rgb(66, 112, 143)',fontSize:'18px',borderRadius:'8px',border:'3px solid rgb(66, 112, 143)'}}>了解更多>>></button>
//                         </Link>
//                     </div>
//                     <div style={{ display: 'flex',  height: '270px',paddingLeft:'30px',paddingTop:'10px', backgroundColor: 'white' }}>
//                         <Link to='/vedio'>
//                             <div style={{color:'#000'}}>
//                             {/* <Player ref="player" videoId="video-1" autoPlay muted
//                                 style={{width:'100%'}}>
//                                 <source src='vedio/math1.mp4' />
//                             </Player> */}
//                                 <img src='./img/vedio00.png' alt="" style={{height:'180px',width:'94%',float:'left'}}/>
                                
//                                 <img src='./img/shishi.jpg' alt="" style={{height:'200px',width:'94%',marginTop:'25px',float:'left'}}/>
//                                 <button style={{width:'92%',marginLeft:'1px',marginBottom:'7px',marginTop:'10px',height:'50px',backgroundColor:'white',
//                                 color:'rgb(66, 112, 143)',fontSize:'18px',borderRadius:'8px',border:'3px solid rgb(66, 112, 143)'}}>了解更多>>></button>
//                             </div>
//                         </Link>
//                     </div>
//                 </Tabs>

//                 <div style={{width:'99%',height:35}}>
//                     <Link to='/question'
//                     style={{fontSize:18,float:'left'}}>
//                         <img src='./img/wenjuan.jpg' alt="" style={{width:'100%',height:'80px'}}/>

//                     </Link>
//                 </div>

//             </div>
//         )
//     }
// }