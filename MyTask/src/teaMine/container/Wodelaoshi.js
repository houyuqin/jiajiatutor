import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar,Icon } from 'antd-mobile';

var num= []

export default class Wodelaoshi extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[]
        }
    }
    componentDidMount(){
        var stdp=window.location.search.split('=')[1];

        fetch(`http://148.70.183.184:8000/selectstd/${stdp}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ teap: res.data });
                for (var index in this.state.teap){
                  
                     num[index]=this.state.teap[index]
                }
                for(var index in num){
                    fetch(`http://148.70.183.184:8006/stdmine/${num[index].stdphone}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'text/plain; charset=UTF-8'
                                },
                            })
                                .then((res) => res.json())
                                .then((res) => {
                                   for(var index in res.data)
                                   {
                                    this.setState({ data: [...this.state.data, res.data[index]] })
                                   }
                                })
                }

            })
        
        
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的学生</NavBar>
                <div>
                    {
                        this.state.data.map((item)=>(
                                <div style={{width: '390px',height: '100px',backgroundColor: 'white', borderRadius: '10px',opacity:' 0.8',margin:'10px 0px 10px 10px'}} key={item.wphonenumber}>
                                    <div style={{width:'250px',height:'50px',margin:'0px 0px 0px 10px'}}>
                                        <img style={{width:'50px',height:'60px',margin:'20px 0px 0px 0px',float:'left'}} src={'./'+item.stdtouxiang}></img>
                                        <span style={{padding:'20px 0px 0px 12px',fontSize:'18px',color:'black',float:'left'}}>{item.wusername}</span>
                                        <span style={{padding:'22px 0px 0px 12px',fontSize:'15px',color:'black',float:'left'}}>{item.wclass}</span>
                                        <span style={{margin:'0px 0px 0px 10px',fontSize:'15px',color:'black',float:'left'}}>手机号：{item.wphonenumber}</span>
                                        <span style={{margin:'0px 0px 0px 10px',fontSize:'15px',color:'black',float:'left'}}>学校：{item.wschool}</span>
                                    </div>
                                </div>
                                
                        ))
                    }
                </div>
            </div>
        )
    }
}
