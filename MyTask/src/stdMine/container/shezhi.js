import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { HashRouter,Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Modal, List} from 'antd-mobile';
import { ImagePicker  } from 'antd-mobile';
import { NoticeBar} from 'antd-mobile';

export default class shezhi extends Component {
    constructor(){
        super();
        this.state = {
            inputValue:'',
            data:[],
            files: [],
        }
    }
    
    handelChange(e){
        this.setState({
            inputValue:e.target.value,
        })
    }
  
    baocun=()=>{
        var a={};
        a.wusername=this.wujinya1.value;
        a.wsex=this.wujinya2.value;
        a.weixinnumber=this.wujinya4.value;
        a.wclass=this.wujinya5.value;
        a.wschool=this.wujinya6.value;
        a.stdtouxiang='img/'+this.state.files[0].file.name;
       console.log(JSON.stringify(a))

       let usr=window.location.search.split('=')[1];
     
        fetch(`http://148.70.183.184:8006/stdmine/${usr}`, {
            method: "POST",
            headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
          }).then(function(response) {
          });    
          
    }
  
    componentDidMount(){
      
        let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8006/stdmine/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
                console.log(this.state.data)
            })       
    }
    wujinyatiaozhuan = ()=>{
        window.location.href = 'http://'+window.location.href.split('/')[2]
        console.log(window.location.href)
    }
    onChange = (files, type) => {
        this.setState({
          files,
        });
      }
    render() {
        const { files } = this.state;
        return (
            <HashRouter>
            <div style={{width:'100%',height:'100%',backgroundColor:'#a3c6d9',position:'relative'}}>
               
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                rightContent={[
                    <Link to='/'><div style={{color:'black'}} onClick={()=>this.baocun()}>保存</div></Link>,
                ]}
                >设置</NavBar>
                 <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                    通知 ： 同学，为了您有更好的体验，以下每条信息必填哦.
                </NoticeBar>
                <div className='stdmineshezhidiv'>
                    {
                         this.state.data.map(item=>(
                            <ul key='0'>
                                <li>
                                    <div className='stdminetopdiv2'>头像</div>
                                    <div style={{width:'40px',height:'40px',float:'right',marginTop:'20px',overflow:'hidden'}}>
                                    <ImagePicker
                                        style={{width:'180px',float:'right',margin:'-7px -133px 0px 0px'}}
                                        files={files}
                                        onChange={this.onChange}
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                    />
                                    </div>


                                   
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>昵称</div>
                                    <div className='stdminetopdiv3'><input type='text' ref={i=>this.wujinya1=i} style={{width:'80px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='请输入昵称'/></div>
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>性别</div>
                                    <div className='stdminetopdiv3'><input type='text' ref={i=>this.wujinya2=i} style={{width:'80px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='请输入性别'/></div>
                                </li>
                               
                                <li>
                                    <div className='stdminetopdiv2'>微信</div>
                                    <div className='stdminetopdiv3'><input type='text'  ref={i=>this.wujinya4=i}  style={{width:'100px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='请输入微信号  '/></div>
                                    
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>年级</div>
                                    <div className='stdminetopdiv3'><input type='text'  ref={i=>this.wujinya5=i}  style={{width:'100px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='请输入年级'/></div>
                                    
                                </li>
                                <li>
                                    <div className='stdminetopdiv2'>学校</div>
                                    <div className='stdminetopdiv3'><input type='text'  ref={i=>this.wujinya6=i}  style={{width:'100px',textAlign:'right',backgroundColor:'#a3c6d9',border:'1px solid #a3c6d9'}} onClick={this.handelChange.bind(this)} placeholder='请输入学校'/></div>
                                    
                                </li>
                            </ul>
                       ))
                    } 
                    
                </div>
                <button className='stdmineshezhibutton' onClick={()=>this.wujinyatiaozhuan()}>退出登录</button>
               
            </div>
            </HashRouter>
        )
    }
}
