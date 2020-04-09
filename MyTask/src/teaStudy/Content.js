import React, { Component } from 'react'
import { NavBar, Icon, Tabs, Carousel, Button } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id
    fetch(`http://148.70.183.184:8005/chakan/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.data })

      })

  }
  componentUpdate(){
    let id = this.props.match.params.id
    fetch(`http://148.70.183.184:8005/tasks/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8'
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.data })
        console.log(this.state.data);
      })

  }
  judge=()=>{
    var aa=this.pingjia.value;
    var id1=this.props.match.params.id;
    fetch(`http://148.70.183.184:8005/pingjia/${id1}`, {
      method: "POST",
      headers: {
         'Content-Type': 'text/plain; charset=UTF-8'
      },
      body: JSON.stringify(aa)
    }).then(function(response) {
      // do sth
     
      alert('您的评论提交成功！若要永久删除请按下方删除键！')
      
    });   
  }
  delete=()=>{
    var aa=this.pingjia.value;
    var id1=this.props.match.params.id;
    fetch(`http://148.70.183.184:8005/tasks/${id1}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'text/plain; charset=UTF-8'
      },
  })
      .then((res) => res.json())
      .then((res) => {
          alert('任务永久删除成功!')
      })
  }
  render() {

    return (
      <div>
        <NavBar
          style={{ backgroundColor: '#708090', color: 'white' }}
          leftContent={[
            <Link to='/ctebigai'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../img/z2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
          ]}
        >查看全文</NavBar>
        {
          this.state.data.map((item, idx) => (
            <div style={{ border:'5px dotted  rgb(177, 174, 174)',fontSize:'25px'}}><p>{item.content}</p>
              <div style={{color:'blue',fontWeight:'bolder'}}><p>学生答案:{item.zuoye}</p></div>
            </div>
          ))
        }
<div className="cbu44">   
                        批改作业:
                        <textarea name="task" cols="40" rows="5" className="cren2" ref={i=>this.pingjia=i}></textarea>      
                    </div>
                  
                    <input type="submit" value="提交" className="cbuan" onClick={()=>this.judge()}/>
                    <input type="delete"  value="删除" style={{width:'70px',height:'35px',marginTop:'15px',marginLeft:'70%',borderRadius:'7px',backgroundColor:'rgb(125,179,201',fontSize:'18px',border:'none',float:'left',paddingLeft:'15px'}} onClick={()=>this.delete()}/>
      </div>
    )
  }
}
