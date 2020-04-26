import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar ,Icon} from 'antd-mobile';

export default class Teatest extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            name:'',
            time:''
        }
    }
    componentDidMount(){
        var me=window.location.search.split('=')[1];
        let today = new Date(),
        time0 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        +'   '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        this.setState({
            time:time0
        });
        fetch(`http://148.70.183.184:8006/teamine/${me}`)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                name:res.data[0].wusername
            })
        })
    }
    fabu=()=>{
        var a={};
        a.kemu=this.cren1.value;
        a.title=this.cren2.value;
        a.time=this.state.time;
        a.author=this.state.name;
        a.content=this.cren5.value;
        a.userphone=window.location.search.split('=')[1]
        console.log(a);
    
        fetch("http://148.70.183.184:8005/taskt", {
            method: "POST",
            headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
          }).then(function(response) {
            alert('您的任务发布完毕！')
          })
    }
    render() {
    let today = new Date(),
    time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        +'   '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        return (
            <div className='cbu'>
                <NavBar
                    style={{backgroundColor:'#708090',color:'white'}}
                    icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >布置作业</NavBar>
                <div style={{height:'600px',margin:'15px',padding:'0px 35px',borderStyle:'dotted ' }}>
                    <div className="cbu3">   
                        任务科目:
                        <input type="text" name="task" id='id' className="cren1" ref={i=>this.cren1=i} ></input>
                    </div>
                    <div className="cbu4">   
                        任务题目:
                        <input type="text" name="task" className="cren1" ref={i=>this.cren2=i}></input>
                    </div>
                    <div className="cbu4">   
                        发布时间:{time}   
                    </div>
                    <div className="cbu4">   
                        发布人:{this.state.name}
                    </div>
                    <div className="cbu44">   
                        内容:
                        <textarea name="task" cols="40" rows="5" className="cren2" ref={i=>this.cren5=i}></textarea>      
                    </div>
                    <input type="submit" value="发布" className="cbuan"  onClick={()=>this.fabu(time)}/>
                </div>
            </div>
        )
    }
}
