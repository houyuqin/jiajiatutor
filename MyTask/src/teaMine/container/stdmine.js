import React, { Component} from 'react'
import {HashRouter as Router,Link} from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import logo from "../../img/caoqian.png"

var src='';
var username='';

export default class stdmine extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
          
        }
    }
    componentDidMount(){
      
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/teamine/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
                if(!this.state.data[0].teatouxiang && !this.state.data[0].wusername){
                    src='./img/w头像女孩.png'
                    username='我的昵称'
                }
                else if(this.state.data[0].teatouxiang&&!this.state.data[0].wusername)
                   {
                    src='./'+this.state.data[0].teatouxiang
                    username='未设置'
                   }
                else if(!this.state.data[0].teatouxiang&&this.state.data[0].wusername)
                   {
                    src='./img/w头像女孩.png'
                    username=this.state.data[0].wusername
                }
                else
                {
                    src='./'+this.state.data[0].teatouxiang
                    username=this.state.data[0].wusername
                }    
            })
    }
    componentDidUpdate(){
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/teamine/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
                if(!this.state.data[0].teatouxiang && !this.state.data[0].wusername){
                    src='./img/w头像女孩.png'
                    username='我的昵称'
                }
                else if(this.state.data[0].teatouxiang&&!this.state.data[0].wusername)
                   {
                    src='./'+this.state.data[0].teatouxiang
                    username='未设置'
                   }
                else if(!this.state.data[0].teatouxiang&&this.state.data[0].wusername)
                   {
                    src='./img/w头像女孩.png'
                    username=this.state.data[0].wusername
                }
                else
                {
                    src='./'+this.state.data[0].teatouxiang
                    username=this.state.data[0].wusername
                }    
            })
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',height:'100%', background:`url(${logo}) center center / cover no-repeat`,opacity:'1'}}>
                <Router>
                    <NavBar
                    className='stdminenavbar'
                    // style={{backgroundColor:'white',color:'black'}}
                    style={{backgroundColor:'rgb(110, 138, 199)'}}
                    rightContent={[
                        <Link to='/stdmineshezhi'><div><img key='0' src={require(`../../img/w设置.png`)}/></div></Link>,
                        <Link to='/tongzhi'><img key='1' src={require(`../../img/w通知.png`)}/></Link>
                    ]}
                    >我的</NavBar>
                    <div>
                        {
                            this.state.data.map(item=>(
                                <div>
                                    <div className='stdminetopdiv'>
                                        <div>
                                            <div className='stdminetopdiv0'><img src={src}/></div>
                                            <div className='stdminetopdiv1'>
                                                {username}
                                            </div>
                                            <Link to='/gerenziliao'><div style={{color:'gray',margin:'30px 20px 0px 0px',fontSize:'30px',float:'right'}}>></div></Link>
                                            <Link to='/stdmineshezhi'><div style={{margin:'45px 30px 0px 0px',color:'gray',fontSize:'15px',float:'right',border:'1px solid gray',borderRadius:'5px'}}>编辑资料</div></Link>
                                        </div>                 
                                    </div>
                                    <div className='stdminebody'>
                                        <ul>    
                                            <li>
                                            <Link to='/wodeshouyi'><img src={require(`../../img/w我的收藏.png`)}/><span>我的收益</span></Link>
                                            </li>
                                            <li>
                                            <Link to='/wodelaoshi'><img src={require(`../../img/教师.png`)}/><span>我的学生</span></Link>
                                            </li>
                                            <li>
                                            <Link to='/fabuzuoye'><img src={require(`../../img/zuoye.png`)}/><span>发布过的作业</span></Link>
                                            </li>
                                         
                                            <li>
                                            <Link to={'/yonghufankui/'+username}><img src={require(`../../img/w用户反馈.png`)}/><span>意见反馈</span></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        } 
                    </div>
                </Router>
            </div>
        )
    }
}
