import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import logo2 from "../../img/cao2.jpg";

var wusername='';
var wsex='';
var wclass='';
var wschool='';

export default class Gerenziliao extends Component {
    
    constructor(){
        super();
        this.state = {
            data:[],
        }
    }
    componentDidMount(){
      
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
                if(!this.state.data[0].wusername){
                    wusername='未设置'
                }else{
                    wusername=this.state.data[0].wusername
                }
                if(!this.state.data[0].wsex){
                    wsex='未设置'
                }else{
                    wsex=this.state.data[0].wsex
                }
                if(!this.state.data[0].wclass){
                    wclass='未设置'
                }else{
                    wclass=this.state.data[0].wclass
                }
                if(!this.state.data[0].wschool){
                    wschool='未设置'
                }else{
                    wschool=this.state.data[0].wschool
                }
            })
    }
    componentDidUpdate(){
      
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
                if(!this.state.data[0].wusername){
                    wusername='未设置'
                }else{
                    wusername=this.state.data[0].wusername
                }
                if(!this.state.data[0].wsex){
                    wsex='未设置'
                }else{
                    wsex=this.state.data[0].wsex
                }
                if(!this.state.data[0].wclass){
                    wclass='未设置'
                }else{
                    wclass=this.state.data[0].wclass
                }
                if(!this.state.data[0].wschool){
                    wschool='未设置'
                }else{
                    wschool=this.state.data[0].wschool
                }
            })
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                
                {/* <Link to='/'><div style={{fontSize: '30px',border:'none',color:'black'}} type="left" ></div></Link> */}
                <div style={{width:'100%',marginTop:'-2px',paddingLeft:'20px',height:'100px',border:'none',color:'white',backgroundColor:'rgb(115, 176, 211)'}}>
                    <Link to='/' style={{fontSize:'30px',color:'white'}}><p>&lt;</p></Link>
                    <p style={{fontSize:'40px',marginTop:'-15px',marginLeft:'90px',float:'left'}}>个</p>
                    <p style={{fontSize:'35px',marginTop:'-15px',marginLeft:'10px',float:'left'}}>人</p>
                    <p style={{fontSize:'36px',marginTop:'-15px',marginLeft:'20px',float:'left'}}>资</p>
                    <p style={{fontSize:'45px',marginTop:'-15px',marginLeft:'10px',float:'left'}}>料</p>
                </div>
                
                
                {/* <div style={{height:'40px',backgroundColor:'#708090',color:'white'}}>
                    <Link to='/'>></Link>
                </div>
                
                icon={<Link to='/'><Icon style={{height:'40px',color:'black'}} type="left" /></Link>}
                >个人资料</NavBar>
                */}
               <Router>
                    <div className='stdminebody'>
                        {
                            this.state.data.map((item)=>(
                                <ul key={item.wphonenumber}>
                                    <li>
                                        <span style={{marginLeft:'-20px',marginBottom:'30px',marginTop:'50px',fontSize:'23px',color:'rgb(57, 83, 122)'}}>用户名：{wusername}</span>
                                       
                                    </li>
                                    <li>
                                        <span  style={{marginLeft:'-20px',marginTop:'-10px',fontSize:'23px',color:'rgb(57, 83, 122)'}}>性别：{wsex}</span>
                                       
                                    </li>
                                    <li>
                                        <span  style={{marginLeft:'-20px',marginTop:'-10px',fontSize:'23px',color:'rgb(57, 83, 122)'}}>手机号：{item.wphonenumber}</span>
                                        
                                    </li>
                                    <li>
                                        <span  style={{marginLeft:'-20px',marginTop:'-10px',fontSize:'23px',color:'rgb(57, 83, 122)'}}>年级：{wclass}</span>
                                        
                                    </li>
                                    <li>
                                        <span  style={{marginLeft:'-20px',marginTop:'-10px',fontSize:'23px',color:'rgb(57, 83, 122)'}}>学校：{wschool}</span>
                                        
                                    </li>
                                </ul>
                            ))
                        }
                         
                    </div>
                </Router> 
            </div>
        )
    }
}
