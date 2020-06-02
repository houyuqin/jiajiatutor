import React, { Component } from 'react'
import { List, Checkbox, Flex } from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;

export default class Ques extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            data1:[],
            data2:[],
            show: false,
            count:0,
            dianzan:[]
        }
    }
    componentDidMount(){
        fetch('http://148.70.183.184:8003/ping')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res
                })
                for (let i = 0; i < this.state.data.length; i++) {
                    fetch(`http://148.70.183.184:8006/dianzanteamine/${this.state.data[i].teacher}`,{
                        method:'POST',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                        body:this.state.data[i].num
                    })
                        .then(res=>res.json())
                        .then(res=>{
                        })
                    
                }
            })

        fetch("http://148.70.183.184:8006/teamine")
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data1:res
                })
            })
    }
    componentDidUpdate(){
        if (this.state.show == true) {
            fetch("http://148.70.183.184:8006/teamine")
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data2:res
                })
                for (let i = 0; i < this.state.data2.length; i++) {
                    if (this.state.data2[i].dianzanshu === 5) {
                        fetch(`http://148.70.183.184:8006/wujinyadeteamine/${this.state.data2[i].dianzanshu}`)
                            .then(res=>res.json())
                            .then(res=>{
                                this.setState({
                                    data1:res
                                })
                            })
                    }
                    
                }
            })
        }else{
            fetch("http://148.70.183.184:8006/teamine")
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data1:res
                })
            })
        }
    }
    add = ()=>{
        this.setState({
            count:++this.state.count,
        })
        if (this.state.count%2 === 0) {
            this.setState({
                show:false
            })
        }else{
            this.setState({
                show:true
            })
        }
    }
    render(){
        return(
                <div>
                    <div style={{marginTop:20,marginLeft:10,marginBottom:20,paddingBottom:20}}>
                        <h2 style={{float:'left'}}>教师列表</h2>
                        <Flex style={{float:'right',marginTop:12,marginRight:20,color:'#ff9900'}}>
                            <Flex.Item>
                                <AgreeItem data-seed="logId" onChange={()=>this.add()}>
                                    优秀教师推荐
                                </AgreeItem>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <br/>
                    {
                        this.state.data1.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,fontSize:18,marginLeft:15}}>
                                <p style={{position:'relative'}}>账号：{item.wphonenumber}
                                    <span style={{marginLeft:10,position:'absolute',left:220}}>姓名：{item.wusername}</span>
                                    <span style={{marginLeft:10,position:'absolute',left:400}}>性别：{item.wsex}</span>
                                    <span style={{marginLeft:10,position:'absolute',left:550}}>学历：{item.xueli}</span>
                                    <span style={{marginLeft:10,position:'absolute',left:750}}>星级：{item.dianzanshu} 级</span>
                                </p>
                            </div>
                        ))
                    }
                </div> 
        )
    }
}
