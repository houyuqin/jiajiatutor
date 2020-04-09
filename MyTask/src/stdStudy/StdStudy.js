import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Study from './container/Study';
import Jihua from './container/Jihua'
import Homework from './container/Homework'
import Video from './container/Video'
import MyStudy from './container/Mystudy'
import Content from './container/Content'
import Contents from './container/Contents'
export default class StuStudy extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path='/' component={Study}></Route>
                <Route  path='/jihua' component={Jihua}></Route>  
                <Route  path='/homework' component={Homework}></Route>  
                <Route  path='/video' component={Video}></Route>  
                <Route  path='/myStudy' component={MyStudy}></Route>  
                <Route path='/taskt/:id' component={Content}></Route>
                <Route path='/tasks/:id' component={Contents}></Route>
                </Switch>
                <Link to='/'></Link>
            </Router>

        )
    }
}
