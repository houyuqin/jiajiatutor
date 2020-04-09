import React, { Component } from 'react'
import {HashRouter as Router, Route, Link } from 'react-router-dom';
import { NavBar ,Icon,Button,List} from 'antd-mobile';

export default class complete extends Component {
    render() {
        return (
            <Router>
                <div>
                <h1>您的任务发布完毕，请选择：</h1>
                <Button style={{marginTop:'20px',width:180,float:'left',marginLeft:20,backgroundColor:'	#00BFFF',color:'white'}}><Link to='/ctebuzhi'><span style={{color:'black'}}>继续发布</span></Link></Button>
                <Button style={{marginTop:'20px',width:180,float:'left',marginLeft:20,backgroundColor:'	#00BFFF',}}><Link to='/'><span style={{color:'black'}}>返回首页</span></Link></Button>
            </div>
            </Router>
        )
    }
}
