import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class Ad extends Component{
    rtn=()=>{
        this.props.history.go(-1);
    }

    render(){
    return (
        <div 
        style={{width:'100%',height:736,}}>
            <NavBar
                
                style={{backgroundColor:'rgb(50, 84, 107)'}}
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
            >广告</NavBar>

            <div style={{textAlign:'center',paddingTop:'10px'}}>
            <img src='./img/guanggao1.jpg' 
                alt=''
                style={{width:'100%',float:'left'}}
            />
            <img src='./img/guanggao2.jpg' 
                alt=''
                style={{width:'100%',marginTop:'10px',float:'left'}}
            />
            <img src='./img/guanggao3.jpg' 
                alt=''
                style={{width:'100%',marginTop:'10px',float:'left'}}
            />
            <img src='./img/guanggao4.jpg' 
                alt=''
                style={{width:'100%',marginTop:'10px',float:'left'}}
            />
                
            </div>


            
        </div>
    )}
   
}