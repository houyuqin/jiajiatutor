import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import TabStd from './TabStd'
import Llogin from './login/Llogin'
import Login from './login/Login'
import Logon from './login/Logon'

export default class AppStd extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Llogin}></Route>
                    <Route path="/loginn" component={Login}></Route>
                    <Route path="/logonn" component={Logon}></Route>
                    <Route path='/tabs' component={TabStd} />
                    {/* <Route path='/detail/:id' component={Detail}></Route> */}
                </div>
            </Router>
        )
    }
}
