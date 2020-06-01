import React, { Component } from 'react'


export default class Ques extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8006/stdmine")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8006/stdmine")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
    }
    render(){
        return(
               <div>
                    <h2 style={{marginTop:20,marginLeft:10,marginBottom:20}}>学生列表</h2>
                    {
                        this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,marginLeft:15}}>
                                <p style={{position:'relative'}}>账号：{item.wphonenumber}
                                    <span style={{marginLeft:10,position:'absolute',left:220}}>姓名：{item.wusername}</span>
                                    <span style={{marginLeft:10,position:'absolute',left:450}}>性别：{item.wsex}</span>
                                    <span style={{marginLeft:10,position:'absolute',left:600}}>学历：{item.wschool}</span>
                                </p>
                            </div>
                        ))
                    }
                    
                </div> 
        )
    }
}