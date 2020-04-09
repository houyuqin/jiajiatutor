import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
export default class Message extends Component {
   constructor(){
       super();
       this.state={
           data:[],
           data1:[]
       }
       console.log(<a href={this.state.data[0]}></a>)
      
   }
   componentDidMount() {
    let id = this.props.match.params.id


    fetch(`http://148.70.183.184:8005/lianxi`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.data })
        console.log();
      })

  }
    render() {
        return (
            <div >
              <NavBar
                        style={{ backgroundColor: '#708090', color: 'white' }}
                        leftContent={[
                            <Link to='/'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../../img/z2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                        ]}
                    >自我练习</NavBar>
                    {
                        this.state.data.map((item,idx)=>(
                            <div style={{width:'100%',height:'70px',borderBottom:'2px solid white',padding:'10px'}} >
                                <div style={{float:'left',width:'50px',height:'70px'}}><img src={require('../../img/z4.png')} style={{height:'30px',width:'50px',marginTop:'20px'}}></img></div>
                               <div style={{lineHeight:5,overflow:'hidden',height:'50px',width:'87%'}} className='zit'><a href={item.src} >{item.title}</a></div>
                                </div>
                        ))
                    }
            </div>
        )
    }
}
