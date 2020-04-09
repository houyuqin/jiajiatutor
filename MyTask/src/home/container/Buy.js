import React, { Component } from 'react'
import { NavBar, Icon ,Button} from 'antd-mobile';
import { Player } from 'video-react';

export default class Buy extends Component {
    rtn=()=>{
        this.props.history.go(-1);
    }
    bought=(time,class0,src,price)=>{
        let usernum0 = window.location.search.split('=')[1];
        let a = {vedio:src,class:class0,price:price,time:time,usernum:usernum0}
        console.log(a);
        fetch(`http://148.70.183.184:8000/bought`,{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('付款成功！');
                return res.json(a);
            }else{
                alert('该视频已购买，请勿重复支付！');
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    tobuy=(time,class0,src,price)=>{
        let usernum0 = window.location.search.split('=')[1];
        let a = {vedio:src,class:class0,price:price,time:time,usernum:usernum0}
        console.log(a);
        fetch(`http://148.70.183.184:8000/tobuy`,{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('已加入待支付订单，请在‘我的’中查看！');
                return res.json(a);
            }else{
                // return Promise.reject(res.json())
                alert('该视频已加入待支付订单，请勿重复添加！');
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    render() {
        //let name=this.props.location.search.split('?')[2];
        let price=this.props.location.search.split('?')[1];
        let src=this.props.location.search.split('?')[3];
        let class0=this.props.location.search.split('?')[4];
        var today = new Date(),
        time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        +'   '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        return (
            <div 
            style={{width:'100%'}}>
                <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={this.rtn}
                >课程购买</NavBar>

            <div style={{display: 'flex',justifyContent:'space-between',flexWrap:' wrap'}}> 
            
                <div style={{width:'100%'}}>
                <Player ref="player" videoId="video-1">
                            <source src={src}/>
                </Player>
                <h2 style={{marginTop:'10px',marginLeft:'5px',fontSize:20}}>课程科目：{class0}</h2>
                <h2 style={{marginTop:'10px',marginLeft:'5px',fontSize:20}}>订单生成时间：<span ref={i=>this.time=i}>{time}</span></h2>
                <h2 style={{marginTop:'10px',marginLeft:'5px',fontSize:20}}>价钱：￥<span style={{color:'red',fontSize:30}}>{price}</span>元</h2>

                <Button onClick={()=>this.tobuy(time,class0,src,price)}
                style={{width:'40%',marginTop:'120px',backgroundColor:'#2a89b1',color:'white',fontWeight:'bold',float:'left',marginLeft:25}}>
                    加入购物车
                </Button>
                <Button onClick={()=>this.bought(time,class0,src,price)}
                style={{width:'40%',marginTop:'120px',marginBottom:'40px',backgroundColor:'#2a89b1',color:'white',fontWeight:'bold',float:'left',marginLeft:30,marginRight:25}}>
                    直接付款
                </Button>

                <h3 style={{marginLeft:'20px',marginTop:'20px',float:'left'}}>第三方支付</h3>
                <img src='./img/qq.jpg' alt='' style={{width:'8%',marginLeft:100,marginTop:'10px',float:'left'}}/>
                <img src='./img/wechat.jpg' alt='' style={{width:'8%',marginLeft:30,marginTop:'10px',float:'left'}}/>
                <img src='./img/zhifubao.jpg' alt='' style={{width:'8%',marginLeft:30,marginTop:'10px',float:'left'}}/>
                </div>
                
            </div>
        </div>
        )
    }
}
