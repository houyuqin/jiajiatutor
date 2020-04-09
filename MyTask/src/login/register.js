// import React, { Component } from 'react'
// import {Tabs,NavBar,Icon} from 'antd-mobile'

// const tabs = [
//     { title: '注册为教师', sub: '1' },
//     { title: '注册为学生', sub: '2' }
// ];

// export default class register extends Component {
//     constructor(props) {  //构造函数
//         super(props);
//         this.state = {
//             user:'',
//             password:'',
//         }
//         this.userChange = this.userChange.bind(this);
//         this.passwordChange = this.passwordChange.bind(this);
//         this.submit = this.submit.bind(this);
//     }

//     userChange(e){
//         this.setState({ user : e.target.value })
//     }

//     passwordChange(e){
//         this.setState({ password : e.target.value })
//     }

//     submit(){
//         window.alert(this.state.user+'\n'+this.state.password);
//     }

//     render() {
//         return (
//             <div>
//                 <NavBar
//                     style={{backgroundColor:'#3fcccb',color:'#fff'}}
//                     rightContent={[
//                         <Icon key="0" type="search" style={{ color:'#fff',marginRight: '18px' }} />,
//                     ]}
//                 >佳+家教</NavBar>

//                 <Tabs tabs={tabs}
//                     initialPage={0}
//                     tabBarActiveTextColor='#3fcccb'
//                     tabBarUnderlineStyle={{border:'1px solid #3fcccb'}}
//                     onChange={(tab, index) => { console.log('onChange', index, tab); }}
//                     onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
//                     >
//                     <div style={{backgroundColor: '#eee'}}>
//                     <div>
//                     <h2>注册</h2>
//                     <input type='text' id='user' name='user' placeholder='用户名' onChange={this.userChange}/>
//                     <input type='password' id='pwd' name='pwd'placeholder='密码' onChange={this.passwordChange}/>
//                     <input type='submit' id='sub' value='登录' onClick={this.submit}/>
//                 </div> 
//                     </div>
//                 </Tabs>
//             </div>
//         )
//     }
    
// }
