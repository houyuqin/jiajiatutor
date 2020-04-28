import React, { Component } from 'react'
import { NavBar, Icon ,Button} from 'antd-mobile';
import { Player } from 'video-react';
import {Link} from 'react-router-dom';

export default class Course extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    rtn=()=>{
        this.props.history.go(-1);
    }
    love=(vedio0,price0)=>{
        let class0 =this.props.location.search.split('=')[1];
        let usernum0 = window.location.search.split('=')[1];
        console.log(vedio0,class0,price0,usernum0);
        // let name0 = 'usr';
        let a = {vedio:vedio0,class:class0,price:price0,usernum:usernum0}
        fetch(`http://148.70.183.184:8000/mylove`,{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('收藏成功！');
                return res.json(a);
            }else{
                alert('该视频已在收藏列表！');
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    componentDidMount(){
        console.log(window.location.search.split('=')[1])
        let id = this.props.location.search.split('=')[1];
        fetch("http://148.70.183.184:8000/course/"+id)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    render(){
        return (
            <div 
            style={{width:'100%',height:'100%'}}>
                <NavBar
                style={{backgroundColor:'rgb(50, 84, 107)'}}
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
                >课程推荐</NavBar>

            <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}>
            {
                this.state.data.map(item=>(
                    <div key={item.id}
                    style={{width:'98%',paddingTop:'7px',marginTop:'15px',marginLeft:5,borderRadius:'10px',border:'1px solid rgb(174, 177, 179)',boxShadow: '3px 3px 2px rgb(174, 177, 179)',fontWeight:'bold'}}>
                        <div style={{width:'100%',height:'40px',marginLeft:'10px',fontSize:19,color:'rgb(50, 84, 107)'}}>{item.name}</div>
                        {/* <Link to={'/play?'+item.vedio}> */}
                            <Player ref="player" videoId="video-1">
                                <source src={item.vedio}/>
                            </Player>
                        {/* </Link> */}

                        
                        <div
                        style={{marginLeft:20,marginTop:'15px',marginBottom:'10px',paddingTop:10,width:100,height:50,float:'left',backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,fontSize:20,textAlign:'center'}}
                        >￥{item.price}</div>

                        <Button 
                        style={{marginTop:'15px',marginBottom:'10px',marginLeft:30,width:100,height:50,float:'left',backgroundColor:'rgb(221, 225, 230)'}}
                        onClick={()=>{this.love(item.vedio,item.price)}}>
                        收藏</Button> 
                        <Button style={{marginTop:'15px',marginBottom:'10px',marginLeft:30,width:100,height:50,float:'left',fontSize:20,textAlign:'center'}}>
                            <Link to={'/buy?'+item.price+'?'+item.name+'?'+item.vedio+'?'+this.props.location.search.split('=')[1]}>
                                <div style={{backgroundColor:'rgb(110, 157, 204)',color:'rgb(25, 48, 77)',borderRadius:5,}}>购买</div>
                            </Link>
                        </Button> 
                    </div>
                
                ))
            }
            </div>
        </div>
    )}
   
}
