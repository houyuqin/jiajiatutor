import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TeaStudy extends Component {
    render() {
        return (
            <View>
                <Text> textInComponentTEaStudy </Text>
            </View>
        )
    }
}


// import React, { Component } from 'react'
// import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
// import TeaRoute from './TeaRoute'
// import TeaTest from './TeaTest';
// import TeaTask from './TeaTask';
// import TeaReal from './TeaReal';
// import complete from './complete';
// import Content from './Content'
// import Video from './Video'

// export default class TeaStudy extends Component {

//     render() {
//         return (
//             <Router>                
//                 <div className="cteall">                        
//                         <Switch> 
//                             <Route exact path='/' component={TeaRoute}></Route>
//                             <Route path="/ctebuzhi" component={TeaTest}></Route>
//                             <Route path="/ctebigai" component={TeaTask}></Route>
//                             <Route path="/teareal" component={TeaReal}></Route>
//                             <Route path='/complete' component={complete}></Route>
//                             <Route path='/tasks/:id' component={Content}></Route>
//                             <Route path='/video' component={Video}></Route>
//                         </Switch>             
//                 </div>            
//             </Router>
//         )
//     }
// }
