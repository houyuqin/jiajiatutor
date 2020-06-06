import React, { Component } from 'react'
import '../index.css'
import {HashRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Vediorcm from '../content/Vediorcm'
import Ques from '../content/Ques'
import Info from '../content/Info'
import Returnu from '../content/Returnu'
import Teauser from '../content/Teauser'
import tea from '../content/tea'
import Stduser from '../content/Stduser'
import Infohis from '../content/Infohistory'

export default class Todoinput extends Component {
    render() {
        return (
            <Router>        
                <div style={{width:'100%',height:'100%',overflow:'scroll'}}>
                    <div style={{width:'20%',height:'100%',backgroundColor:'#ff9900',float:'left',opacity:0.7}}>
                        <ul>
                            <li style={{height:100,fontSize:50,textAlign:'center',paddingTop:30,color:'white'}}>
                                佳+家教
                            </li>
                            <Link to='/'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                教师列表
                            </li></Link>
                            
                            <Link to='/std'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                学生列表
                            </li></Link>

                            <Link to='/vedio'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                视频推荐
                            </li></Link>

                            <Link to='/tea'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                优秀教师推荐
                            </li></Link>
                            
                            <Link to='/question'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                问卷情况
                            </li></Link>
                            
                            <Link to='/returnu'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                用户反馈
                            </li></Link>

                            <Link to='/infohis'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                消息历史
                            </li></Link>

                            <Link to='/info'>
                            <li style={{height:50,fontSize:30,textAlign:'center'}}>
                                消息推送
                            </li></Link>

                        </ul>
                    </div>
                    <div style={{width:'80%',height:'100%',backgroundColor:'white',float:'left',overflow:'scroll'}}>
                        <Switch>
                            <Route exact path='/' component={Teauser}/>
                            <Route path='/vedio' component={Vediorcm}/>
                            <Route path='/question' component={Ques}/>
                            <Route path='/returnu' component={Returnu}/>
                            <Route path='/tea' component={tea}/>
                            <Route path='/std' component={Stduser}/>
                            <Route exact path='/info' component={Info}/>
                            <Route exact path='/infohis' component={Infohis}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}