import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export default class Llogin extends Component {
    render() {
        return (
            <div className="ccname" style={{backgroundImage:'url(./img/99.jpg)',height:'100%',opacity:'0.7',overflow:'hidden'}}>
                <div style={{marginLeft:'170px',fontSize:'40px',zIndex:'100',color:'white'}}>佳 +</div>
                <Link to="/logonn"><button className="clogon">注册</button></Link>
                <Link to="/loginn"><button className="clogin">登录</button></Link>
                <img src='./img/99.jpg' style={{marginTop:'10px'}} />
            </div>
            
        )
    }
}