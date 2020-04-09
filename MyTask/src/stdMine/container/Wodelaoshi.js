import React, { Component } from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar,Icon } from 'antd-mobile';

var num= [];

export default class Wodelaoshi extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[],
            data2:[]
        }
    }
    componentDidMount(){
        var id=window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8000/selecttea/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
                this.state.data1.forEach((val,index)=>{
                    num[index]=val.teaphone
                    return num
                })
                num.forEach((val,idx)=>{
                  
                    fetch(`http://148.70.183.184:8006/teamine/${val}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            res.data.forEach((val,idx)=>{        
                                this.setState({data:[...this.state.data,val]})
                              
                            })
                        })
                })
        })  
    }
    // componentDidUpdate(){
    //     var id=window.location.search.split('=')[1];

    //     fetch(`http://148.70.183.184:8000/selecttea/${id}`,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'text/plain; charset=UTF-8'
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             this.setState({
    //                 data1: res.data 
    //             });
    //             this.state.data1.forEach((val,index)=>{
    //                 num[index]=val.teaphone
    //                 return num
    //             })
                
    //             num.forEach((val,idx)=>{
                  
    //                 fetch(`http://148.70.183.184:8006/teamine/${val}`, {
    //                     method: 'GET',
    //                     headers: {
    //                         'Content-Type': 'text/plain; charset=UTF-8'
    //                     },
    //                 })
    //                     .then((res) => res.json())
    //                     .then((res) => {
    //                         res.data.forEach((val,idx)=>{      
    //                             this.setState({data:[...this.state.data,val]})
                              
    //                         })
    //                     })
    //             })
    //     })  
    // }
    deleteshipin=(idx)=>{
        var id=window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8000/deltea/${id}`,{
           method: 'DELETE',
           headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
            },
            body:JSON.stringify({teaphone:idx})
        })
        .then((res) => res.json())
        .then((res) => {
            alert('任务删除成功!')
        })
       
    } 
 
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的教师</NavBar>
                <div>
                    {
                        this.state.data.map((item)=>(
                                <div style={{width: '390px',height: '100px',backgroundColor: 'white', borderRadius: '10px',opacity:' 0.8',margin:'10px 0px 10px 10px'}} key={item.wphonenumber}>
                                    <div style={{width:'250px',height:'50px',margin:'0px 0px 0px 10px'}}>
                                        <img style={{width:'50px',height:'60px',margin:'20px 0px 0px 0px',float:'left'}} src={'./'+item.teatouxiang}></img>
                                        <span style={{padding:'20px 0px 0px 12px',fontSize:'18px',color:'black',float:'left'}}>{item.wusername}</span>
                                        <span style={{padding:'22px 0px 0px 12px',fontSize:'15px',color:'black',float:'left'}}>{item.zhiwei}</span>
                                        <span style={{margin:'0px 0px 0px 10px',fontSize:'15px',color:'black',float:'left'}}>手机号：{item.wphonenumber}</span>
                                        <span style={{margin:'0px 0px 0px 10px',fontSize:'15px',color:'black',float:'left'}}>毕业于：{item.biyexuexiao}</span>
                                    </div>
                                    <button onClick={()=>this.deleteshipin(item.wphonenumber)} style={{width:'50px',height:'30px',backgroundColor:'white',border:'1px solid gray',borderRadius:'5px',float:'right',margin:'0px 10px 10px 0px'}}>移除</button>
                                </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
