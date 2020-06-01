import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './login/Login'
import Home from './login/Home'

export default class AppTea extends Component {
    render() {
        return (
            <Router>
                <div style={{height:'100%',width:'100%'}}>
                    <Route exact path='/' component={Login}></Route>
                    <Route path="/home" component={Home}></Route>
                </div>
            </Router>
        )
    }
}