import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile';
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';

const tabs = [
    { title: <Badge >我的视频</Badge> },
    { title: <Badge >收益情况</Badge> },
];
export default class Wodeshouyi extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[]
        }
    }
    componentDidMount(){
        // let id=window.location.search.split('=')[1];
   
        fetch(`http://148.70.183.184:8000/vedio`, {
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
            
        fetch('http://148.70.183.184:8000/bought', {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                })
                .then((res) => res.json())
                .then((res) => {
                    this.setState({data1:res.data})
                    console.log(this.state.data1)
                })
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%',overflowY:'hidden'}}>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >我的收益</NavBar>
                <Tabs tabs={tabs}>
                    <div style={{overflow:'scroll',height:'100%'}}>
                        {
                            this.state.data.map((item)=>(
                                <div style={{marginBottom:'15px'}}>
                                    <p style={{marginLeft:'20px',fontSize:'20px',color:'black'}}>{item.name}<span style={{float:'right',marginRight:'10px'}}>{'￥'+item.price}</span></p>
                                    <Player ref="player" videoId="video-1">
                                        <source src={item.vedio}/>
                                    </Player>  
                                    
                                </div>
                            ))
                        }       
                    </div>
                    <div style={{textIndent:'2em',fontSize:'16px',overflow:'scroll',height:'100%', justifyContent: 'center',paddingTop:'10px'}}>
                            {
                                this.state.data1.map((item)=>(
                                    <div className='wodeshoucangdiv1'>
                                        <p>手机号为
                                            <span style={{color:'red'}}>{item.usernum.slice(0,3)+'***'+item.usernum.slice(7,11)}</span>
                                            的用户已购买视频，收益
                                            <span style={{color:'red'}}>{item.price}</span>
                                            元</p>
                                    </div>
                                ))
                            }       
                    </div>
                </Tabs>
            </div>
        )
    }
}
