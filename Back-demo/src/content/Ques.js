import React, { Component } from 'react'


export default class Ques extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8000/question")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8000/question")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    del=(id)=>{
        let a = {pid:id};
        console.log(a);
        fetch('http://148.70.183.184:8000/question',{
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
                    <h2 style={{marginTop:20,marginLeft:10,marginBottom:20}}>问卷调查情况</h2>
                   {
                    this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,marginLeft:15}}>
                                <p>{item.had}
                                    <span style={{marginLeft:10}}>{item.side}</span>
                                    <span style={{marginLeft:10}}>{item.request}</span>
                                    <span style={{marginLeft:10}}>{item.hadclass}</span>
                                    <span style={{marginLeft:10}}>{item.require}</span>
                                    <span style={{marginLeft:10}}>{item.disadvans}</span>
                                    <button 
                                        style={{width:70,height:30,backgroundColor:'#ff9900',float:'right',marginRight:50,color:'white',border:'1px solid #ff9900'}}
                                        onClick={()=>this.del(item.pid)}
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