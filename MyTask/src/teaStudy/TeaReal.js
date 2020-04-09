import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { NavBar ,Icon} from 'antd-mobile';

export default class TeaReal extends Component {
    render() {
        return (
            <div className='cbu'>
                <NavBar
                    style={{backgroundColor:'#708090',color:'white'}}
                    icon={<Link to='/ctebigai'><Icon style={{color:'black'}} type="left" /></Link>}
                >批改详情</NavBar>
                <div style={{padding:'0px 20px'}}>
                    <div className="cgai11">
                        <p>任务编号：任务一</p>
                        <p>任务题目：数学</p>
                        <p>作业人：吴金雅</p>
                        <p>作业内容：函数与极限</p>
                    </div>
                    <div className="cbu444">   
                        <textarea name="task" cols="40" rows="5" className="cren22"></textarea>      
                    </div>
                    <input type="submit" value="完成" className="cbuan" />
                </div>
            </div>
        )
    }
}

