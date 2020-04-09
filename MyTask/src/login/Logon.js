import { Tabs, NavBar,Icon} from 'antd-mobile';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
const tabs2 = [
  { title: '学生注册', sub: '1' },
  { title: '教师注册', sub: '2' },
];
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            stdnumm:0,
            teanumm:0,
            cstd1:'',
            cstd2:'',
            cstd3:'',
            cstd4:'',
            stdnum:'',
            stdpwd:'',
            stdcode:'',
            stdpwd1:'',
            cstd11:'',
            cstd12:'',
            cstd13:'',
            cstd14:'',
            teanum:'',
            teapwd:'',
            teacode:'',
            teapwd1:'',
            std:'',
            tea:'',
            code:'',
            n:{n1:Math.floor(Math.random()*10),
            n2:Math.floor(Math.random()*10),
            n3:Math.floor(Math.random()*10),
            n4:Math.floor(Math.random()*10)}
        }
    }
    componentDidMount(){     
        
        fetch('http://148.70.183.184:8006/stdmine')
            .then((res)=>res.json())
            .then((res)=>{                
                for(var i=0;i<res.length;i++){
                        this.setState({
                            std:[...this.state.std,res[i]]
                        });                       
                }              
            })
            fetch('http://148.70.183.184:8006/teamine')
            .then((res)=>res.json())
            .then((res)=>{                
                for(var i=0;i<res.length;i++){                       
                        this.setState({
                            tea:[...this.state.tea,res[i]]
                        })
                }              
            })
        
    }
    handleChange1 = (e) =>{
        this.setState({
            cstd1:e.target.value
        })  
    }
    handleChange2 = (e) =>{
        this.setState({
            cstd2:e.target.value
        })
        if(this.state.cstd2 == '')
        {
            this.setState({
                stdpwd1:'密码不能为空'
            })
        }
    }
    handleChange3 = (e) =>{
        this.setState({
            cstd3:e.target.value
        })  
    }
    handleChange4 = (e) =>{
        this.setState({
            cstd4:e.target.value
        })  
    }
    handleChange8 = (e) =>{
        if(this.state.cstd1 == '')
        {
            this.setState({
                stdpwd1:'密码不能为空'
            })
        }
        else{
            this.setState({
                stdpwd1:''
            })
        }
    }
    handleChange5 = (e) =>{
        var ccc = 0;
        console.log(this.state.std[i]);
        for(var i=0;i<this.state.std.length;i++)
        {
            
            if(this.state.std[i].wphonenumber== this.state.cstd1)
            {
                ccc ++;
                
            }
        }
        if(ccc == 0 && this.state.cstd1 != '' && this.state.cstd1.length != 11){
            this.setState({
                stdnum:'请输入正确的手机号'
            })
        }
        else if(ccc == 0 && this.state.cstd1 == '')
        {
            this.setState({
                stdnum:'手机号不能为空'
            })
        }
        else if(ccc == 0 && this.state.cstd1.length == 11){
            this.setState({
                stdnum:'',
                stdnumm:0
            })
        }
        else if(ccc!=0)
        {
            this.setState({
                stdnum:'手机号已经被注册'
            })
            this.setState({
                stdnumm:1
            })
        }
    }
    handleChange6 = (e) =>{
        console.log(22);
        if(this.state.cstd3 != '' && this.state.cstd2 != this.state.cstd3){
            this.setState({
                stdpwd:'密码两次输入不符，请重新输入'
            })
        }
        else{
            this.setState({
                stdpwd:''
            })
        }   
    }
    handleChange7 = (e) =>{
        console.log(this.cstd3.value);
        var mm = this.state.n.n1*1000+this.state.n.n2*100+this.state.n.n3*10+this.state.n.n4
        console.log(mm);
        console.log(this.state.cstd4);
        if(this.state.cstd4 != mm)
        {
            this.setState({
                stdcode:'验证码输入错误'
            })
        }
        else if(this.state.cstd4 == '')
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
    handleChange11 = (e) =>{    
        this.setState({
            cstd11:e.target.value
        })  
    }
    handleChange12 = (e) =>{
        this.setState({
            cstd12:e.target.value
        })
        if(this.state.cstd12 == '')
        {
            this.setState({
                teapwd1:'密码不能为空'
            })
        }
    }
    handleChange13 = (e) =>{    
        this.setState({
            cstd13:e.target.value
        })  
    }
    handleChange14 = (e) =>{
        this.setState({
            cstd14:e.target.value
        }) 
    }
    handleChange18 = (e) =>{
        if(this.state.cstd11 == '')
        {
            this.setState({
                teapwd1:'密码不能为空'
            })
        }
        else{
            this.setState({
                teapwd1:''
            })
        }
    }
    handleChange15 = (e) =>{
        var ccc = 0;
        console.log(this.state.tea[i]);
        for(var i=0;i<this.state.tea.length;i++)
        {     
            if(this.state.tea[i].wphonenumber == this.state.cstd11)
            {
                ccc ++;
            }
        }
        if(ccc == 0 && this.state.cstd11 != '' && this.state.cstd11.length != 11){
            this.setState({
                teanum:'请输入正确的手机号'
            })
        }
        else if(ccc == 0 && this.state.cstd11 == '')
        {
            this.setState({
                teanum:'手机号不能为空'
            })
        }
        else if(ccc == 0 && this.state.cstd11.length == 11){
            this.setState({
                teanum:'',
                teanumm:0
            })
        }
        else if(ccc!=0)
        {
            this.setState({
                teanum:'手机号已经被注册'
            })
            this.setState({
                teanumm:1
            })
        }
    }
    handleChange16 = (e) =>{
        console.log(22);
        if(this.state.cstd13 != '' && this.state.cstd12 != this.state.cstd13){
            this.setState({
                teapwd:'密码两次输入不符，请重新输入'
            })
        }
        
        else{
            this.setState({
                teapwd:''
            })
        }
        
    }
    handleChange17 = (e) =>{
        var mm = this.state.n.n1*1000+this.state.n.n2*100+this.state.n.n3*10+this.state.n.n4;
        console.log(this.cstd13.value);
        if(this.state.cstd14 != mm && this.state.cstd14 != '')
        {
            this.setState({
                teacode:'验证码输入错误'
            })
        }
        else if(this.state.cstd14 == '')
        {
            this.setState({
                teacode:'验证码不能为空'
            })
        }
        else{
            this.setState({
                teacode:''
            })
        }
        
    }
    cc(e){
        console.log(111);
        this.setState({
            n:{
                n1:Math.floor(Math.random()*10),
                n2:Math.floor(Math.random()*10),
                n3:Math.floor(Math.random()*10),
                n4:Math.floor(Math.random()*10)
            }
            
        })
    }
    show3(e){
        var a={};
        var b={};
        var mm = this.state.n.n1*1000+this.state.n.n2*100+this.state.n.n3*10+this.state.n.n4;
        if(this.state.stdnumm==0 && this.cstd1.value.length == 11 && this.cstd2.value == this.cstd3.value && this.cstd4.value == mm){
            this.setState({
                stdnum:''
            })
            this.setState({
                stdnpwd:''
            })
            this.setState({
                stdnumm:0
            })
            
                a.wphonenumber=this.cstd1.value;        
                a.pwd=this.cstd2.value;
                a.coo=0;
                fetch("http://148.70.183.184:8006/stdmine", {
                    method: "POST",
                    headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then(function(response) { 
                    // do sth
                }); 
                console.log(JSON.stringify(a));
                window.location.href="/loginn"; 
        }
        
    }
    show4(e){
        var b={};var mm = this.state.n.n1*1000+this.state.n.n2*100+this.state.n.n3*10+this.state.n.n4;
        if(this.state.teanumm==0 && this.cstd11.value.length == 11 && this.cstd12.value == this.cstd13.value && this.cstd14.value == mm){
            this.setState({
                teanum:''
            })
            this.setState({
                teapwd:''
            })
            this.setState({
                teanumm:0
            })
            console.log('000000');
                b.wphonenumber=this.cstd11.value;        
                b.pwd=this.cstd12.value;
                b.coo=1;
                fetch("http://148.70.183.184:8006/teamine", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(b)
                }).then(function(response) { 
                    // do sth
                }); 
                window.location.href="/loginn"; 
           }
           
       console.log(JSON.stringify(b))
    
        
    }
    render() {
        return (
            <div className="cback">
                <NavBar style={{fontSize: '25px',color: 'rgb(57, 74, 122)',backgroundColor: 'rgb(115, 176, 211)'}} icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}></NavBar>                
                <div style={{width:'100%',height:'7%',backgroundColor:'rgb(115, 176, 211)'}}></div>
                <div className="ctab">
                    <Tabs tabs={tabs2}
                    style={{backgroundColor: 'rgb(222, 233, 240)'}}
                        initialPage={0}
                        tabBarPosition="top"
                        renderTab={tab => <span>{tab.title}</span>}
                        tabBarBackgroundColor='rgb(222, 233, 240)'
                        tabBarActiveTextColor='rgb(101, 160, 197)'
                       
                        tabBarTextStyle
                        >
                        <div style={{ height: '400px', backgroundColor: 'rgb(222, 233, 240)' }}>
                            <div style={{fontSize:'20px',marginLeft:'40px',marginTop:'30px',float:'left'}}>手机号:</div>
                            <input type='text' placeholder="请输入学生手机号" name='user' autofocus="autofocus"
                            onBlur={(e) => this.handleChange5(e)}
                            onChange={(e) => this.handleChange1(e)}
                            ref={i=>this.cstd1=i}
                            
                            style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'30px',float:'left'}}
                            >
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.stdnum}
                            </p>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'2px',float:'left'}}>密码:</div>
                            <input type="password" placeholder="请输入密码" name='pwd'
                            onChange={(e) => this.handleChange2(e)}
                            onBlur={(e) => this.handleChange8(e)}
                            ref={i=>this.cstd2=i}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'20px',marginTop:'2px',float:'left'}}>
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.stdpwd1}
                            </p>
                            <div style={{fontSize:'18px',marginLeft:'5px',marginTop:'2px',float:'left'}}>再次输入密码:</div>
                            <input type="password" placeholder="请再次输入密码" name='pwd'
                            onBlur={(e) => this.handleChange6(e)}
                            onChange={(e) => this.handleChange3(e)}
                            ref={i=>this.cstd3=i}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'2px',float:'left'}}>
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.stdpwd}
                            </p>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'2px',float:'left'}}>验证码:</div>
                            <input type="password" placeholder="验证码" name='pwd'
                            onBlur={(e) => this.handleChange7(e)}
                            onChange={(e) => this.handleChange4(e)}
                            ref={i=>this.cstd4=i}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'90px',marginLeft:'20px',marginTop:'2px',float:'left'}}>
                            </input>
                            {/* <img src="./img/timg.jpg" alt="" style={{width:'20%',height:'15%',marginLeft:'20px',marginTop:'-3px'}}/>
                             */}
                            <div style={{width:'23%',height:'12%',backgroundColor:'#dcd6d6',marginLeft:'15px',marginTop:'0px',float:'left'}}>
                                <p style={{fontSize:'23px',color:'red',float:"left",marginLeft:'15px',marginTop:'3px'}}>{this.state.n.n1}</p>
                                <p style={{fontSize:'23px',color:'green',float:"left",marginLeft:'10px',marginTop:'7px'}}>{this.state.n.n2}</p>
                                <p style={{fontSize:'23px',color:'yellow',float:"left",marginLeft:'4px',marginTop:'2px'}}>{this.state.n.n3}</p>
                                <p style={{fontSize:'23px',color:'blue',float:"left",marginLeft:'9px',marginTop:'9px'}}>{this.state.n.n4}</p>
                            </div> 
                            <button style={{backgroundColor:'rgb(222, 233, 240)',border:'none',outline:'none',float:'left',fontSize:'13px',marginLeft:'10px',marginTop:'20px'}} onClick={(e) => this.cc(e)}>换一换</button>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'2px',float:'left'}}>
                            {this.state.stdcode}
                            </p>
                            
                            <input type="submit" value="注册" className="cdeng1" onClick={this.show3.bind(this)}/>
                        </div>
                        
                        <div style={{ height: '400px', backgroundColor: 'rgb(222, 233, 240)' }}>
                            <div style={{fontSize:'20px',marginLeft:'40px',marginTop:'30px',float:'left'}}>手机号:</div>
                            <input type='text' placeholder="请输入教师手机号" name='user' autofocus="autofocus"
                            onBlur={(e) => this.handleChange15(e)}
                            onChange={(e) => this.handleChange11(e)}
                            ref={i=>this.cstd11=i}
                            style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'30px',float:'left'}}
                            >
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.teanum}
                            </p>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'2px',float:'left'}}>密码:</div>
                            <input type="password" placeholder="请输入密码" name='pwd'
                            onChange={(e) => this.handleChange12(e)}
                            onBlur={(e) => this.handleChange18(e)}
                            ref={i=>this.cstd12=i}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'20px',marginTop:'2px',float:'left'}}>
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.teapwd1}
                            </p>
                            <div style={{fontSize:'18px',marginLeft:'5px',marginTop:'2px',float:'left'}}>再次输入密码:</div>
                            <input type="password" placeholder="请再次输入密码" name='pwd'
                            onBlur={(e) => this.handleChange16(e)}
                            onChange={(e) => this.handleChange13(e)}
                            ref={i=>this.cstd13=i}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'2px',float:'left'}}>
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.teapwd}
                            </p>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'2px',float:'left'}}>验证码:</div>
                            <input type="password" placeholder="验证码" name='pwd'
                            onBlur={(e) => this.handleChange17(e)}
                            onChange={(e) => this.handleChange14(e)}
                            ref={i=>this.cstd14=i}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'90px',marginLeft:'20px',marginTop:'2px',float:'left'}}>
                            </input>
                            {/* <img src="./img/ctea.png" alt="" style={{width:'20%',height:'12%',marginLeft:'20px',marginTop:'-3px'}}/>
                             */}
                            <div style={{width:'23%',height:'12%',backgroundColor:'#dcd6d6',marginLeft:'15px',marginTop:'0px',float:'left'}}>
                                <p style={{fontSize:'23px',color:'red',float:"left",marginLeft:'15px',marginTop:'3px'}}>{this.state.n.n1}</p>
                                <p style={{fontSize:'23px',color:'green',float:"left",marginLeft:'10px',marginTop:'7px'}}>{this.state.n.n2}</p>
                                <p style={{fontSize:'23px',color:'yellow',float:"left",marginLeft:'4px',marginTop:'2px'}}>{this.state.n.n3}</p>
                                <p style={{fontSize:'23px',color:'blue',float:"left",marginLeft:'9px',marginTop:'9px'}}>{this.state.n.n4}</p>
                            </div> 
                            <button style={{backgroundColor:'rgb(222, 233, 240)',border:'none',outline:'none',float:'left',fontSize:'13px',marginLeft:'10px',marginTop:'20px'}} onClick={(e) => this.cc(e)}>换一换</button>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'2px',float:'left'}}>
                            {this.state.teacode}
                            </p>
                      
                            <input type="submit" value="注册" className="cdeng1" onClick={this.show4.bind(this)}/>
                        </div>
                        
                    </Tabs>
                </div>     
            </div>
        )
    }
}
     