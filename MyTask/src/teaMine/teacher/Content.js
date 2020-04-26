import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel,Button } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


export default class Content extends Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
  
   
    fetch(`http://148.70.183.184:8005/xiangqing/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        },
    })
        .then((res) => res.json())
        .then((res) => {
            this.setState({ data:res.data.splice(res.data.length-1,1) })
         console.log(res.data.splice(res.data.length-1,1))
        })

}
// componentDidUpdate(){
//   let id = this.props.match.params.id
  
   
//   fetch(`http://148.70.183.184:8005/fabu/${id}`, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'text/plain; charset=UTF-8'
//       },
//   })
//       .then((res) => res.json())
//       .then((res) => {
//     //       this.setState({ data:res.data.splice(res.data.length-1,1) })
//     //    console.log(res.data.splice(res.data.length-1,1))
//     console.log(this.state.data)
//       })


// }

    render() {
    
        return (
        <div>
            <NavBar
                    style={{ backgroundColor: '#708090', color: 'white' }}
                    leftContent={[
                        <Link to='/fabuzuoye'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../../img/z2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                    ]}
                >查看全文</NavBar>
   {
      this.state.data.map((item,idx)=>(
        <div style={{border:'5px dotted  rgb(177, 174, 174)',fontSize:'25px'}}><h2>题目:{item.title}</h2><p>内容:{item.content}</p>
        </div>
       
      ))
    }
    
                   
        </div>
        
        )
    }
}
