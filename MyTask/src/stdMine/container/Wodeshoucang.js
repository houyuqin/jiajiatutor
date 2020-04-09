import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';


export default class Wodeshoucang extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
          
        }
    }

    componentDidMount(){   
        fetch('http://148.70.183.184:8000/mylove', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
    }
    deleteshipin=(idx)=>{
        console.log(idx)
        fetch(`http://148.70.183.184:8000/mylove/${idx}`,{
           method: 'DELETE',
           headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
            },

        })
        .then((res) => res.json())
        .then((res) => {
            alert('任务删除成功!')
        })
    } 
    componentDidUpdate(){
        fetch('http://148.70.183.184:8000/mylove', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            })
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data})
            })
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',overflowY:'hidden',backgroundColor:'#fafaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的收藏</NavBar>
                    <div style={{overflow:'scroll',height:'100%'}}>
                            {
                                this.state.data.map((item,idx)=>(
                                  
                                    <div key={idx} style={{marginTop:'30px',marginLeft:'10px',width:'96%',height:'250px',marginBottom:'10px',border:'1px solid gray'}}>
                                            <p style={{fontSize:'24px',color:'black',marginLeft:'10px',marginTop:'7px',marginBottom:'7px'}}>
                                                {item.class} vedio
                                                <button style={{width:'80px',height:'30px',fontSize:'17px',float:'right',marginRight:'10px',marginBottom:'7px',marginTop:'5px',border:'1px solid black',color:'white',borderRadius:'5px',backgroundColor:'#5d93c0',border:'none'}} onClick={()=>this.deleteshipin(item.id)}>删除</button>

                                                <span style={{float:'right',marginRight:'15px'}}>{'￥'+item.price}</span>
                                            </p>
                                            <Player sref="player" videoId="video-1">
                                                <source src={item.vedio}/>
                                            </Player>                                  
                                    </div>
                                ))
                            } 
                    </div>
            </div>
        )
    }
}
