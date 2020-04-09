import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GoodTea from './container/GoodTea'
import Ad from './container/Ad'
import Course from './container/Course'
import Vedio from './container/Vedio'
import Question from './container/Question'
import Buy from './container/Buy'
import Home from './Home'

export default class Apphome extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} ></Route>
                    <Route path='/goodtea' component={GoodTea}></Route> 
                    <Route path='/ad' component={Ad}></Route> 
                    <Route path='/course' component={Course}></Route> 
                    <Route path='/buy' component={Buy}></Route> 
                    <Route path='/vedio' component={Vedio}></Route> 
                    <Route path='/question' component={Question}></Route> 
                </Switch>
                <Link to='/'></Link>
            </Router>
        )
    }
}