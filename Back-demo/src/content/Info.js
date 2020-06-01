import React, { Component } from 'react'

export default class Info extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    getValue = (e)=>{
        this.setState({
            data:e.target.value
        })
    }
    postInfo=()=>{
        if (this.state.data === '') {
            alert('请填写推送消息内容！')
        }else{
            let a={content:this.state.data};
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
            fetch("http://148.70.183.184:8000/infor",{
                method:"POST",
                headers:{
                    
                    'Content-Type': 'text/plain',
                },
                body:JSON.stringify(a)
            }).then((data)=>{
                console.log(data);
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
    render(){
        return(
            <div style={{marginTop:20,width:'50%',marginLeft:15}}>
                <h2>推送消息给用户</h2><br/>
                <p>请输入要发布的消息内容：</p><br/>
                <textarea 
                    style={{outline:'none'}}
                    cols='50' 
                    rows='5'
                    onChange={(e)=>this.getValue(e)}>
                        
                </textarea>
                <button 
                    style={{width:200,height:40,backgroundColor:'#ff9900',float:'left',marginLeft:90,marginTop:50,border:'1px solid #ff9900',outline:'none',borderRadius:'10px'}}
                    onClick={this.postInfo}>
                    发布消息
                </button>
            </div>
        )
    }
}