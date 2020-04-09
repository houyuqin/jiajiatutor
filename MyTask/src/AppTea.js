import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import TabTea from './TabTea'
import Llogin from './login/Llogin'
import Login from './login/Login'
import Logon from './login/Logon'
// import GoodTea from './home/container/GoodTea'
// import Ad from './home/container/Ad'
// import Course from './home/container/Course'
// import Vedio from './home/container/Vedio'
// import Question from './home/container/Question'
import AppStd from './AppStd'
// import Buy from './home/container/Buy'
//import Player0 from './home/container/Myplay'

export default class AppTea extends Component {
    render() {
        return (
            <Router>
                <div style={{height:'100%',overflow:'scroll'}}>
                    <Route exact path='/' component={Llogin}></Route>
                    <Route path="/loginn" component={Login}></Route>
                    <Route path="/logonn" component={Logon}></Route>
                    <Route path='/tabt' component={TabTea} />
                    {/* <Route path='/goodtea' component={GoodTea} />
                    <Route path='/ad' component={Ad} />
                    <Route path='/course' component={Course} />
                    <Route path='/buy' component={Buy} />
                    <Route path='/paly' component={Player0} />
                    <Route path='/vedio' component={Vedio} />
                    <Route path='/question' component={Question} />*/}
                    
                    <Route path='/tabs' component={AppStd} /> 
                </div>
            </Router>
        )
    }
}