import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class StdMine extends Component {
    render() {
        return (
            <View>
                <Text> StdMine </Text>
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
// import Wodeshoucang from './container/Wodeshoucang';
// import Wodedingdan from './container/Wodedingdan';
// import Jiaoshipingjia from './container/Jiaoshipingjia';
// import Yonghufankui from './container/Yonghufankui';
// import Wodelaoshi from './container/Wodelaoshi'

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
//                         <Route path='/wodeshoucang' component={Wodeshoucang}></Route>

//                         <Route path='/wodelaoshi' component={Wodelaoshi}></Route>
                        
//                         <Route path='/wodedingdan' component={Wodedingdan}></Route>
//                         <Route path='/jiaoshipingjia' component={Jiaoshipingjia}></Route>
//                         <Route path='/yonghufankui/:id' component={Yonghufankui}></Route>
//                     </Switch>
//                 </div>
//             </Router>
//         )
//     }
// }
