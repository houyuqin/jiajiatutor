import React, { Component } from 'react'
import { NavBar ,Icon} from 'antd-mobile';
import { Link } from 'react-router-dom';
import { Modal, List} from 'antd-mobile';

export default class Yonghufankui extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            modal2: false,
        }
    }
    onClose = key => () => {
        this.setState({
          [key]: false,
        });
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
        var a={};
        // a.wusername=this.wujinyareturn1.value;
        a.wusername=this.props.match.params.id;
        a.wcontent=this.wujinyareturn2.value;
        a.wphonenumber=this.wujinyareturn4.value;
       console.log(JSON.stringify(a))
        fetch("http://148.70.183.184:8006/return", {
            method: "POST",
            headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
          }).then(function(response) {
            // do sth
          });    
      }
    render() {
        return (
            <div style={{height:'100%',backgroundColor:'#fafmaf8'}}>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >意见反馈</NavBar>
                <div></div>
                <textarea
                    style={{width:'95%',padding:'10px',margin:'10px',border:'1px solid rgb(250, 198, 101)'}}
                    placeholder="请输入反馈，我们将为您不断改进"
                    rows='10'
                    cols='100'
                    ref={i=>this.wujinyareturn2=i}    
                ></textarea>
                <p style={{fontSize:'15px',fontWeight:'bold',marginLeft:'20px'}}>通过以下方式反馈给我们哦</p>
                <div style={{border:'1px solid rgb(250, 198, 101)',height:'50px',backgroundColor:'white',margin:'10px'}}>
                    <span style={{paddingLeft:'15px',color:'black',fontSize:'18px'}}>联系方式</span>
                    <input
                        style={{height:'30px',margin:'10px',border:'1px solid white'}}
                        type='phone' 
                        placeholder="请输入手机号码"
                        ref={i=>this.wujinyareturn4=i}
                    ></input>
                </div>
                <button className='stdmineyonghufankuibutton'  onClick={this.showModal('modal2')}>发送</button>  
                <Modal popup visible={this.state.modal2} animationType="slide-up" onClose={this.onClose('modal2')}>
                    <List style={{height:'50px',fontSize:'20px',color:'red',paddingTop:'10px',}}>发送成功</List>
                </Modal>         
            </div>
        )
    }
}