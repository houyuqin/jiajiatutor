import React, { Component } from 'react'


export default class Infohistory extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8000/infor")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8000/infor")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    again=(content0)=>{
        let a = {content:content0};
        console.log(a);
        fetch('http://148.70.183.184:8000/inforuser',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type': 'text/plain',
            },
            body:JSON.stringify(a)
        })
        .then((res)=>{ 
            if(res.status === 200){
                alert('发布成功！');
                return res.json();
            }else{
                alert('发布失败！');
            }
        })
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    del=(id)=>{
        let a = {id:id};
        console.log(a);
        fetch('http://148.70.183.184:8000/infor',{
            method:"DELETE",
            headers:{
                'Accept':'application/json',
                'Content-Type': 'text/plain',
            },
            body:JSON.stringify(a)
        })
        .then((res)=>{ 
            if(res.status === 200){
                alert('删除成功！');
                return res.json();
            }else{
                alert('删除失败！');
            }
        })
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    render(){
        return(
            <div>
                <h2 style={{marginTop:20,marginLeft:10,marginBottom:20}}>后台历史发布消息</h2>
                {
                    this.state.data.map((item,idx)=>(
                        <div key={idx} style={{height:'50px',borderBottom:'1px solid black',fontSize:18,marginLeft:15}}>
                            <div style={{width:'80%',height:'50px',float:'left',overflowY:'scroll',paddingLeft:10}}>{item.content}</div>
                            <button 
                                style={{width:70,height:30,backgroundColor:'#ff9900',float:'right',color:'white',border:'1px solid #ff9900',margin:10}}
                                onClick={()=>this.again(item.content)}
                            >
                                再次发布
                            </button>
                            <button 
                                style={{width:70,height:30,backgroundColor:'#ff9900',float:'right',color:'white',border:'1px solid #ff9900',margin:10}}
                                onClick={()=>this.del(item.id)}
                            >
                                删除
                            </button>
                        </div>
                    ))
                }
            </div> 
        )
    }
}