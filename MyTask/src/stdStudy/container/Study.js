import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import { Link } from 'react-router-dom';

export default class Study extends Component {
    render() {
        return (
            <Link to='/'>
            <div  className='zba'>
                   <div className="zzba">
                       <div style={{width:'80px',height:'80px',fontSize:'50px',paddingLeft:'10px',color:'white',backgroundColor:'rgb(145, 193, 212)',borderRadius:'40px',float:'left'}}>我</div>
                       <div style={{width:'80px',height:'80px',fontSize:'50px',paddingLeft:'10px',color:'white',backgroundColor:'rgb(145, 193, 212)',borderRadius:'40px',float:'left'}}>的</div>
                       <div style={{width:'80px',height:'80px',fontSize:'50px',paddingLeft:'10px',color:'white',backgroundColor:'rgb(145, 193, 212)',borderRadius:'40px',float:'left'}}>学</div>
                       <div style={{width:'80px',height:'80px',fontSize:'50px',paddingLeft:'10px',color:'white',backgroundColor:'rgb(145, 193, 212)',borderRadius:'40px',float:'left'}}>习</div>
                        <div style={{height:'120px'}}>
                            <div className='zaa' style={{backgroundColor:'#6495ED',width:'37%',height:'120px',float:'left',marginLeft:'7%'}}><span className='zfont'><Link to='/jihua'>学习计划</Link></span></div>
                            <div className='zaa' style={{backgroundColor:'#6495ED',width:'37%',height:'120px',float:'left',marginLeft:'10%'}}><span className='zfont'><Link to='/homework'>我的作业</Link></span></div>
                        </div>
                        <div style={{height:'120px',marginTop:'15%'}}>
                        <div className='zaa' style={{backgroundColor:'#6495ED',width:'37%',height:'120px',float:'left',marginLeft:'7%'}}><span className='zfont'><Link to='/video'>我的视频</Link></span></div>
                        <div className='zaa' style={{backgroundColor:'#6495ED',width:'37%',height:'120px',float:'left',marginLeft:'10%'}}><span className='zfont'><Link to='/myStudy'>自我练习</Link></span></div>
                        </div>
                        
                   </div>
                   <img></img>
                
                </div>
            </Link>
        )
    }
}
