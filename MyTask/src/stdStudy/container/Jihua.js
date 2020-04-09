import React, { Component } from 'react'
import { NavBar, Carousel, DatePicker, List, TextareaItem } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}
let start = localStorage.getItem('start') || now
let end = localStorage.getItem('end') || now

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            data: [1, 2, 3],
            imgHeight: 156,
            date: new Date(start),
            date1: new Date(end),
            time: now,
            utcDate: utcNow,
            dpValue: null,
            customChildValue: null,
            visible: false,
            task: [],
            task1:JSON.parse(localStorage.getItem('task'))||[]
        };
    }
    start = (date) => {
        this.setState({
            date: date
        }, () => {
            localStorage.setItem('start', this.state.date)
        })
    }
    end = (date1) => {
        this.setState({
            date1: date1
        }, () => {
            localStorage.setItem('end', this.state.date1)
        })
    }
    add = () => {
        this.setState({
            task1:[...this.state.task1,this.state.task]
        },()=>{
            localStorage.setItem('task',JSON.stringify(this.state.task1))
        })
    }
    change=(e)=>{
       this.setState({
           task:e.target.value
       })

    }
    dell=(msg)=>{
        var task = this.state.task1[msg];
        var task1 = this.state.task1.splice(msg, 1);
        this.setState({
            task1: [...this.state.task1]
        }, () => {
            localStorage.setItem('task', JSON.stringify(this.state.task1));
        }
        ) 
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: [require('../../img/z6.jpg'), require('../../img/z5.jpg'), require('../../img/z4.jpg')],
            });
        }, 100);
    }
    render() {
        return (
            <div style={{backgroundColor:'#fafaf8'}}>
                <NavBar
                    style={{ backgroundColor: '#708090', color: 'white' }}
                    leftContent={[
                        <Link to='/'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../../img/z2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                    ]}
                >学习计划</NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    slideWidth='414px'
                >
                    {this.state.data.map((val, index) => (
                        <img
                            key={val}

                            src={this.state.data[index]}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        // </a>
                    ))}
                </Carousel>
                <div >
                    <div style={{ height: 30, width: 90 }}><h2>我的计划</h2></div>
                    <List className="date-picker-list" style={{ backgroundColor: 'white', marginTop: 10, borderBottom: '2px solid #3fcccb' }}>
                        <DatePicker
                            value={this.state.date}
                            onChange={(date) => this.start(date)}
                        >
                            <List.Item arrow="horizontal">开始时间</List.Item>
                        </DatePicker>

                    </List>
                    <List className="date-picker-list" style={{ backgroundColor: 'white', marginTop: 10, borderBottom: '2px solid #3fcccb' }}>
                        <DatePicker
                            value={this.state.date1}
                            onChange={(date1) => this.end(date1)}

                        >
                            <List.Item arrow="horizontal">结束时间</List.Item>
                        </DatePicker>

                    </List>

                    <div style={{ height: 50 }}>
                        <h3 style={{ textAlign: 'center' }}>My Plan</h3>
                        <div style={{  height: 50,width:'100%' }}>
                            <textarea style={{  height: '100px',width:'100%'}} placeholder="在此输入我的计划" id='text' name='text' onChange={(e)=>this.change(e)}></textarea>
                            <div style={{ height: 60, marginBottom: 20, width: '60%', margin: '0 auto'}}>
                           
                                <img src={require('../../img/z8.png')} style={{ height: 40, width: '20%', marginLeft: '40%' }} onClick={() => this.add()}></img>
                            </div>
                            <div><h2>需完成的计划：</h2></div>
                            {
                      this.state.task1.map((item,idx)=>(
                          <div style={{height:80,width:'96%',marginLeft:'10px',marginTop:'8px',paddingLeft:'10px',paddingTop:'5px',border:'1px solid #3fcccb',borderRadius:'8px',boxShadow: '3px 3px 2px rgb(174, 177, 179)'}}>
                              <div style={{height:50,width:'90%',float:'left',fontSize:'18px', overflow:'hidden'}}><p>{item}</p></div>
                          <div style={{height:40,width:40,marginLeft:'88%',marginTop:'-35px',float:'left' ,}}><img src={require('../../img/z9.png')} style={{ height: 25, width: 25, float:'right' }} onClick={() => this.dell(idx)}></img></div></div>
                      ))
                  }
                        </div>
                
                    </div>
                 
                </div>
               
            </div >
        )
    }
}

