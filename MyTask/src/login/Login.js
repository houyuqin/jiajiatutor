import { Tabs, NavBar,Icon} from 'antd-mobile';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const tabs2 = [
  { title: '学生登录', sub: '1' },
  { title: '教师登录', sub: '2' },
];
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            std0num:'',
            std0pwd:'',
            std0code:'',
            tea0num:'',
            tea0pwd:'',
            tea0code:'',
            stdnum:'',
            stdpwd:'',
            stdcode:'',
            teanum:'',
            teapwd:'',
            teacode:'',
            std:'',
            tea:'',
            url:'/loginn',
            ccm:0,
            inputValue:'',
            inputValue1:''
        }
    }
    
    componentDidMount(){     
        
        fetch('http://148.70.183.184:8006/stdmine')
            .then((res)=>res.json())
            .then((res)=>{     
                
                for(var i=0;i<res.length;i++){
                    console.log(res[i]);
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
                    });
                }              
        })
    }
    handleChange1 = (e) =>{
        
        this.setState({
            std0num:e.target.value
        })
        
    }
    handleChange2 = (e) =>{
        this.setState({
            std0pwd:e.target.value
        })
        
    }
    handleChange3 = (e) =>{
        
        this.setState({
            tea0num:e.target.value
        })
        
    }
    handleChange4 = (e) =>{
        this.setState({
            tea0pwd:e.target.value
        })
        
    }
    show1(e){
          
        var ccm = 0;
        this.setState({
            inputValue:''
        })
        for(var i=0;i<this.state.std.length;i++)
        {
            
            console.log(this.state.std[i].wphonenumber);
            if(this.state.std0num == this.state.std[i].wphonenumber && this.state.std0pwd == this.state.std[i].pwd)
            {
                console.log("登录成功");
                window.location.href="/tabs?num="+this.state.std0num;
                ccm ++;
                console.log(ccm);
                console.log(this.state.url); 
                
            }
            
        }
        if(ccm == 0 ){
            this.setState({url:'/loginn'})
            console.log("登录 失败");           
            console.log(this.state.url);
            this.setState({
                inputValue:'手机号或密码错误'
            })
        }
                        
    }
    show2(e){
          
        var ccm = 0;
        this.setState({
            inputValue:''
        })
        
        for(var i=0;i<this.state.tea.length;i++)
        {
            console.log(this.state.tea[i].wphonenumber);
            if(this.state.tea0num == this.state.tea[i].wphonenumber && this.state.tea0pwd == this.state.tea[i].pwd)
            {
                console.log("登录成功");
                window.location.href="/tabt?num="+this.state.tea0num;
                ccm ++;
                console.log(ccm);
                console.log(this.state.url); 

            }
        }
        if(ccm == 0 ){
            this.setState({url:'/loginn'})
            console.log("登录 失败");           
            
            this.setState({
                inputValue1:'手机号或密码错误'
            })
        }
                        
    }
    render() {
        return (
            <div className="cback" >
                <NavBar style={{backgroundColor: 'rgb(115, 176, 211)'}} icon={<Link to='/'><Icon style={{fontSize: '30px',color:'black'}} type="left" /></Link>}></NavBar>
                <div style={{width:'100%',height:'10%',backgroundColor:'rgb(115, 176, 211)'}}></div>
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
                        <div style={{ height: '280px', backgroundColor: 'rgb(222, 233, 240)' }}>
                            <div style={{fontSize:'20px',marginLeft:'40px',marginTop:'30px',float:'left'}}>手机号:</div>
                            <input type='text' placeholder="请输入学生手机号" name='user' 
                            onChange={(e) => this.handleChange1(e) }  
                            style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'30px',float:'left'}}
                            >
                            </input>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'25px',float:'left'}}>密码:</div>
                            <input type="password" placeholder="请输入密码" name='pwd'
                            onChange={(e) => this.handleChange2(e)}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'20px',marginTop:'25px',float:'left'}}>
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.inputValue}</p>
                            <Link to={`${this.state.url}`}><input type="submit" value="登录" className="cdeng" onClick={this.show1.bind(this)}/></Link>
                            <Link to="/logonn"><div className="czhu">注册</div></Link>
                        </div>
                        <div style={{ height: '280px', backgroundColor: 'rgb(222, 233, 240)' }}>
                            <div style={{fontSize:'20px',marginLeft:'40px',marginTop:'30px',float:'left'}}>用户名:</div>
                            <input type='text' placeholder="请输入教师用户名" name='user'
                            onChange={(e) => this.handleChange3(e)}
                            style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'10px',marginTop:'30px',float:'left'}}
                            >
                            </input>
                            <div style={{fontSize:'20px',marginLeft:'50px',marginTop:'25px',float:'left'}}>密码:</div>
                            <input type="password" placeholder="请输入密码" name='pwd'
                            onChange={(e) => this.handleChange4(e)}
                                style={{paddingLeft:'3px',borderRadius:'5px',boxShadow:'2px 2px 2px rgb(187, 184, 184)',fontSize:'16px',border:'1px solid rgb(211, 203, 203)',height:'40px',width:'240px',marginLeft:'20px',marginTop:'25px',float:'left'}}>
                            </input>
                            <p
                                style={{paddingLeft:'3px',borderRadius:'5px',fontSize:'15px',color:'red',border:'none',height:'23px',width:'240px',marginLeft:'110px',marginTop:'8px',float:'left'}}>
                            {this.state.inputValue1}</p>
                            <Link to={`${this.state.url}`}><input type="submit" value="登录" className="cdeng" onClick={this.show2.bind(this)}/ ></Link>
                            <Link to="/logonn"><div className="czhu">注册</div></Link>
                        </div>
                        
                    </Tabs>
                </div>
                
            </div>
        )
    }
}
     