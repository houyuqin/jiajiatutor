import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class TeaMine extends Component {
    render() {
        return (
            <View>
                <Text> textInComponentTeaMIne </Text>
            </View>
        )
    }
}

// import React, { Component } from 'react'
// import {HashRouter as Router,Route,Switch} from 'react-router-dom';
// import Shezhi from './container/shezhi'
// import StdMine from './container/stdmine'
// import Tongzhi from './container/tongzhi'
// import Gerenziliao from './container/Gerenziliao';
// import Wodeshouyi from './container/Wodeshouyi';
// import Yonghufankui from './container/Yonghufankui';
// import Wodelaoshi from './container/Wodelaoshi'
// import Fabuzuoye from './container/Fabuzuoye'
// import Content from './container/Content'

// export default class tiaozhuan extends Component {
//     render() {
//         return (
//             <Router>
//                 <div style={{height:'100%'}}>
//                     <Switch>
//                         <Route exact path='/' component={StdMine}></Route>
//                         <Route path='/stdmineshezhi' component={Shezhi}></Route>
//                         <Route path='/tongzhi' component={Tongzhi}></Route>
//                         <Route path='/gerenziliao' component={Gerenziliao}></Route>
//                         <Route path='/wodeshouyi' component={Wodeshouyi}></Route>
//                         <Route path='/wodelaoshi' component={Wodelaoshi}></Route>
//                         <Route path='/yonghufankui/:id' component={Yonghufankui}></Route>
//                         <Route path='/fabuzuoye' component={Fabuzuoye}></Route>  
//                         <Route path='/fabu/:id' component={Content}></Route>        
//                     </Switch>
//                 </div>
//             </Router>
//         )
//     }
// }
