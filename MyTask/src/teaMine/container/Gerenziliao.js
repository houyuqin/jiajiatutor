import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import {HashRouter as Router,Route,Link} from 'react-router-dom';

var wusername='';
var wsex='';
var xueli='';
var wsubject='';
var age='';
var zhiwei='';
var biyexuexiao='';
export default class Gerenziliao extends Component {
    
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
                if(!this.state.data[0].xueli){
                    xueli='未设置'
                }else{
                    xueli=this.state.data[0].xueli
                }
                if(!this.state.data[0].wsubject){
                    wsubject='未设置'
                }else{
                    wsubject=this.state.data[0].wsubject
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
                if(!this.state.data[0].age){
                    age='未设置'
                }else{
                    age=this.state.data[0].age
                }
                if(!this.state.data[0].xueli){
                    xueli='未设置'
                }else{
                    xueli=this.state.data[0].xueli
                }
                if(!this.state.data[0].wsubject){
                    wsubject='未设置'
                }else{
                    wsubject=this.state.data[0].wsubject
                }
                if(!this.state.data[0].biyexuexiao){
                    biyexuexiao='未设置'
                }else{
                    biyexuexiao=this.state.data[0].biyexuexiao
                }
                if(!this.state.data[0].zhiwei){
                    zhiwei='未设置'
                }else{
                    zhiwei=this.state.data[0].zhiwei
                }
            })
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >个人资料</NavBar>
               <Router>
                    <div className='stdminebody'>
                        {
                            this.state.data.map((item)=>(
                                <ul>
                            
                                    <li>
                                        <span>用户名：{wusername}</span>
                                    </li>
                                    <li>
                                        <span>性别：{wsex}</span>
                                    </li>
                                    <li>
                                        <span>年龄：{age}</span>
                                    </li>
                                    <li>
                                        <span>手机号：{item.wphonenumber}</span>
                                    </li>
                                    <li>
                                        <span>学历：{xueli}</span>
                                    </li>
                                    <li>
                                        <span>科目：{wsubject}</span>
                                    </li>
                                    <li>
                                        <span>毕业学校：{biyexuexiao}</span>
                                    </li>
                                    <li>
                                        <span>职位：{zhiwei}</span>
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
