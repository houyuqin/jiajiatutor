import React, { Component } from 'react'


export default class Returnu extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8006/return")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8006/return")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
    }
    del=(wphonenumber)=>{
        let a = {wphonenumber:wphonenumber};
        console.log(a);
        fetch('http://148.70.183.184:8006/return',{
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
                <h2 style={{marginTop:20,marginLeft:10,marginBottom:20}}>用户反馈情况</h2>
                {
                    this.state.data.map((item,idx)=>(
                        <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,marginLeft:15}}>
                            <p>
                                {item.wphonenumber}
                                <span style={{marginLeft:10}}>{item.wusername}</span>
                                <span style={{marginLeft:10}}>{item.wcontent}</span>
                                <button 
                                style={{width:70,height:30,backgroundColor:'#ff9900',float:'right',marginRight:50,color:'white',border:'1px solid #ff9900'}}
                                onClick={()=>this.del(item.wphonenumber)}
                                >
                                    删除
                                </button>
                            </p>
                        </div>
                        
                    ))
                }
            </div> 
        )
    }
}