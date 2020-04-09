import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
let usr = ''
const num = []
export default class TeaTask extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            stdp: []
        }
    }

    componentDidMount() {
        var teap=window.location.search.split('=')[1];
        fetch(`http://148.70.183.184:8000/selectstd/${teap}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ stdp: res.data });
                for (var index in this.state.stdp){
                  
                     num[index]=this.state.stdp[index]
                }
                for(var index in num){
                    fetch(`http://148.70.183.184:8005/judge/${num[index].stdphone}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'text/plain; charset=UTF-8'
                                },
                            })
                                .then((res) => res.json())
                                .then((res) => {
                                   for(var index in res.data)
                                   {
                                    this.setState({ data: [...this.state.data, res.data[index]] })
                                   }
                                })
                }
        })    
 
    }
    // componentDidUpdate() {
    //     var teap=window.location.search.split('=')[1];
    //     fetch(`http://148.70.183.184:8000/selectstd/${teap}`,{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'text/plain; charset=UTF-8'
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             this.setState({ stdp: res.data });
    //             for (var index in this.state.stdp){
                  
    //                  num[index]=this.state.stdp[index]
    //             }
    //             for(var index in num){
    //                 fetch(`http://148.70.183.184:8005/judge/${num[index].stdphone}`, {
    //                             method: 'GET',
    //                             headers: {
    //                                 'Content-Type': 'text/plain; charset=UTF-8'
    //                             },
    //                         })
    //                             .then((res) => res.json())
    //                             .then((res) => {
    //                                for(var index in res.data)
    //                                {
    //                                 this.setState({ data: [...this.state.data, res.data[index]] })
    //                                }
    //                             })
    //             }
    //     })    
 
    // }
   
    render() {
        return (
            <div className='cbu'>
                <NavBar
                    style={{ backgroundColor: '#708090', color: 'white' }}
                    icon={<Link to='/'><Icon style={{ color: 'black' }} type="left" /></Link>}
                >作业批改</NavBar>
                <div style={{ margin: '15px', padding: '0px 20px', borderStyle: 'dotted ', overflow: 'scroll' }}>
                    {this.state.data.map((item, idx) => (

                        <div className="cgaii" style={{ height: '250px', }}>

                            <div className="cgai1" style={{ width: '80%' }} >
                                <h4>任务编号：{item.id}</h4>
                                <h4>任务题目：{item.title}</h4>
                                <h4>发布时间：{item.time}</h4>
                                <p>作业完成人:{item.nicheng}</p>
                            </div>
                            <div className="cgai2"><Link to={'/tasks/' + item.id} >></Link></div>
                        </div>

                    ))}
                </div>

            </div>
        )
    }
}
