import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class stdmine extends Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

// import React, { Component} from 'react'
// import {HashRouter as Router,Route,Link} from 'react-router-dom';
// import { NavBar } from 'antd-mobile';
// import logo from "../../img/gege.jpg"

// var src='';
// var username='';

// export default class stdmine extends Component {
    
//     constructor(){
//         super();
//         this.state = {
//             data:[],
          
//         }
//     }
//     componentDidMount(){
      
//         let id=window.location.search.split('=')[1];
   
//         fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'text/plain; charset=UTF-8'
//             },
//             })
//             .then((res) => res.json())
//             .then((res) => {
//                 this.setState({data:res.data})
//                 if(!this.state.data[0].stdtouxiang && !this.state.data[0].wusername){
//                     src='./img/w头像女孩.png'
//                     username='我的昵称'
//                 }
//                 else if(this.state.data[0].stdtouxiang&&!this.state.data[0].wusername)
//                    {
//                     src='./'+this.state.data[0].stdtouxiang
//                     username='未设置'
//                    }
//                 else if(!this.state.data[0].stdtouxiang&&this.state.data[0].wusername)
//                    {
//                     src='./img/w头像女孩.png'
//                     username=this.state.data[0].wusername
//                 }
//                 else
//                    {
//                     src='./'+this.state.data[0].stdtouxiang
//                     username=this.state.data[0].wusername
//                 }    
//             })
//     }
//     componentDidUpdate(){
//         let id=window.location.search.split('=')[1];
   
//         fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'text/plain; charset=UTF-8'
//             },
//             })
//             .then((res) => res.json())
//             .then((res) => {
//                 this.setState({data:res.data})
//                 if(!this.state.data[0].stdtouxiang && !this.state.data[0].wusername){
//                     src='./img/w头像女孩.png'
//                     username='我的昵称'
//                 }
//                 else if(this.state.data[0].stdtouxiang&&!this.state.data[0].wusername)
//                    {
//                     src='./'+this.state.data[0].stdtouxiang
//                     username='未设置'
//                    }
//                 else if(!this.state.data[0].stdtouxiang&&this.state.data[0].wusername)
//                    {
//                     src='./img/w头像女孩.png'
//                     username=this.state.data[0].wusername
//                 }
//                 else
//                    {
//                     src='./'+this.state.data[0].stdtouxiang
//                     username=this.state.data[0].wusername
//                 }    
//             })
//     }
//     render() {
//         return (
//             <div style={{width:'100%',height:'100%'}}>
//                 <Router>
//                     <NavBar
//                     className='stdminenavbar'
//                     style={{backgroundColor:'#5d93c0',border:'none',color:'white'}}
                    
//                     rightContent={[
//                         <Link to={'/stdmineshezhi'}><div><img key='0' src={require(`../../img/w设置.png`)}/></div></Link>,
//                         <Link to='/tongzhi'><img key='1' src={require(`../../img/w通知.png`)}/></Link>
//                     ]}
//                     >我的</NavBar>
//                     <div>
//                         {
//                             this.state.data.map(item=>(
//                                 <div key={item.wusername}>
//                                     <div className='stdminetopdiv' style={{border:'none',height:'120px',maringTop:'-2px',backgroundColor:'#5d93c0'}}>
//                                         <div>
//                                             <div className='stdminetopdiv0'><img src={src}></img></div>
//                                             <div className='stdminetopdiv1'>
//                                                 {username}
//                                             </div>
//                                             <Link to='/gerenziliao'><div style={{color:'black',margin:'30px 20px 0px 0px',fontSize:'30px',float:'right'}}>></div></Link>
//                                             <Link to='/stdmineshezhi'><div style={{margin:'45px 30px 0px 0px',color:'black',fontSize:'15px',float:'right',border:'1px solid gray',borderRadius:'5px',padding:'0px 5px'}}>编辑资料</div></Link>
//                                         </div>                 
//                                     </div>
//                                     <div className='stdminebody' style={{marginLeft:'20px',paddingLeft:'-5px',width:'80%',height:'520px',borderLeft:'2px solid black'}}>
//                                         <ul>
                                         
//                                             <li>
//                                             <Link to='/wodeshoucang'><img src={require(`../../img/w我的收藏.png`)}/><span>我的收藏</span></Link>
//                                             </li>
//                                             <li>
//                                             <Link to='/wodedingdan'><img src={require(`../../img/w我的订单.png`)}/><span>我的订单</span></Link>
//                                             </li>
//                                             <li>
//                                             <Link to='/wodelaoshi'><img src={require(`../../img/教师.png`)}/><span>我的教师</span></Link>
//                                             </li>
//                                             <li>
//                                             <Link to='/jiaoshipingjia'><img src={require(`../../img/w评价.png`)}/><span>作业评价情况</span></Link>
//                                             </li>
//                                             <li>
//                                             <Link to={'/yonghufankui/'+item.wusername}><img src={require(`../../img/w用户反馈.png`)}/><span>意见反馈</span></Link>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             ))
//                         } 
//                     </div>
//                 </Router>
//             </div>
//         )
//     }
// }
