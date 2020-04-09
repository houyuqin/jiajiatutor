import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { NavBar, Icon ,Button} from 'antd-mobile';
import { Player } from 'video-react';

export default class Vedio extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    rtn=()=>{
        this.props.history.go(-1);
    }

    componentDidMount(){
        fetch("http://148.70.183.184:8000/mylove")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8000/mylove")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    del=(idx)=>{
     console.log(idx)
     fetch(`http://148.70.183.184:8000/mylove/${idx}`,{
        method: 'DELETE',
           
     })
     
    }

 
render(){
    return (
        <div 
        style={{width:'100%',height:'100%'}}>
            <NavBar
            style={{ backgroundColor: '#708090', color: 'white' }}
            icon={<Icon type="left" />}
            onLeftClick={this.rtn}
            >我的视频</NavBar>

        <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
        {
            this.state.data.map((item,idx)=>(
                <div key={item.id}
                style={{width:'96%',marginTop:'20px',marginLeft:'15px',borderRadius:'8px',boxShadow: '3px 3px 2px rgb(174, 177, 179)',marginLeft:5,border:'1px solid black',marginTop:5,fontWeight:'bold'}}>
                    <Player ref="player" videoId="video-1">
                        <source src={item.vedio}/>
                    </Player>      
                    <div style={{width:'30%',height:'50px',float:'right',marinTop:'10px',marginTop:'10px',marginBottom:'20px',marginRight:'10px',backgoundColor:'blue'}}><Button style={{width:'100%',height:'50px',border:'1px solid grey',backgoundColor:'blue'}} onClick={()=>this.del(item.id)}>删除</Button></div>
            
                </div>
             
            ))
        }
        </div>
    </div>
)}

}
