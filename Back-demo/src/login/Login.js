import React, { Component } from 'react'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state ={
            num:'',
            pwd:'',
            code:'',
            std:'',
            n:{n1:Math.floor(Math.random()*10),
                n2:Math.floor(Math.random()*10),
                n3:Math.floor(Math.random()*10),
                n4:Math.floor(Math.random()*10)},
            stdcode:'',
            inputValue:''
        }
    }
    componentDidMount(){     
        
        fetch('http://148.70.183.184:8003/logon')
            .then((res)=>res.json())
            .then((res)=>{                
                for(var i=0;i<res.length;i++){
                        this.setState({
                            std:[...this.state.std,res[i]]
                        });                       
                        
                }              
        })
    }
    handleChange1 = (e) =>{
        
        this.setState({
            num:e.target.value
        })
        
    }
    handleChange2 = (e) =>{
        
        this.setState({
            pwd:e.target.value
        })
        
    }
    handleChange3 = (e) =>{        
        this.setState({
            code:e.target.value
        })       
    }
    handleChange7 = (e) =>{
        var mm = this.state.n.n1*1000+this.state.n.n2*100+this.state.n.n3*10+this.state.n.n4
        console.log(mm);
        console.log(this.state.code);
        if(this.state.code !== mm && this.state.code !== '')
        {
            this.setState({
                stdcode:'验证码输入错误'
            })
        }
        else if(this.state.code === '')
        {
            this.setState({
                stdcode:'验证码不能为空'
            })
        }
        else{
            this.setState({
                stdcode:''
            })
        }
        
    }
    show(e){
        
        var ccm = 0;
        this.setState({
            inputValue:''
        })
        console.log(this.state.std);
        var mm = this.state.n.n1*1000+this.state.n.n2*100+this.state.n.n3*10+this.state.n.n4
       
        for(var i=0;i<this.state.std.length;i++)
        {
            
            console.log(this.state.num);
            console.log(this.state.pwd);
            if(this.state.num === this.state.std[i].wphonenumber && this.state.pwd === this.state.std[i].pwd && this.state.code === mm)
            {
                console.log(window.location);
                console.log("登录成功");
                window.location.href="/home?num="+this.state.num;
                ccm ++;

            }
        }
        if(ccm === 0 ){
           
            console.log("登录 失败");           
            
            this.setState({
                inputValue:'手机号或密码错误'
            })
        }
                        
    }
    cc(e){
        this.setState({
            n:{n1:Math.floor(Math.random()*10),
            n2:Math.floor(Math.random()*10),
            n3:Math.floor(Math.random()*10),
            n4:Math.floor(Math.random()*10)}
        })
    }
    render() {
        return (
            <div className="cc1">
                    <div className="cc2">欢迎登录 佳 + 后台管理</div>
                    <div className="cc4">
                        <div className="c1">手机号:</div>
                        <input 
                            type='text' 
                            placeholder="请输入管理员账号" 
                            name='user'
                            onChange={(e) => this.handleChange1(e) } 
                            className="c2"
                        />
                        <div className="c3">密码:</div>
                        <input 
                            type="password" 
                            placeholder="请输入密码" 
                            name='pwd'
                            onChange={(e) => this.handleChange2(e) }
                            className="c2" 
                        />
                        <p
                            style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'160px',marginRight:100,marginTop:'8px',float:'left'}}>
                            {this.state.inputValue}
                        </p>
                        <div className="c33">验证码:</div>
                        <input 
                            type="password" 
                            placeholder="请输入验证码" 
                            name='pwd'
                            onBlur={(e) => this.handleChange7(e)}
                            onChange={(e) => this.handleChange3(e) }
                            className="c22" 
                        />  
                        <div style={{width:'20%',height:'13%',backgroundColor:'#dcd6d6',marginLeft:'15px',marginTop:'10px',float:'left'}}>
                            <p style={{fontSize:'20px',color:'red',float:"left",marginLeft:'15px',marginTop:'3px'}}>{this.state.n.n1}</p>
                            <p style={{fontSize:'20px',color:'green',float:"left",marginLeft:'10px',marginTop:'7px'}}>{this.state.n.n2}</p>
                            <p style={{fontSize:'20px',color:'yellow',float:"left",marginLeft:'4px',marginTop:'2px'}}>{this.state.n.n3}</p>
                            <p style={{fontSize:'20px',color:'blue',float:"left",marginLeft:'9px',marginTop:'9px'}}>{this.state.n.n4}</p>
                        </div>  
                        <button style={{border:'none',outline:'none',float:'left',fontSize:'10px',marginLeft:'10px',marginTop:'20px'}} onClick={(e) => this.cc(e)}>换一换</button>
                        <p
                            style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'160px',marginTop:'10px',float:'left'}}>
                            {this.state.stdcode}
                        </p>
                        <input type="submit" onClick={(e) => this.show(e) } value="登录" className="cdeng"/>                        
                    </div>         
            </div>
        )
    }
}