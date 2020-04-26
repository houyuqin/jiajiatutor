import React, { Component } from 'react'
import { Text, View ,Dimensions, ScrollView} from 'react-native'
const {width} = Dimensions.get('window');
const s = width/640;

let wusername = '';
export default class Jiaoshipingjia extends Component {
    constructor(){
        super();
        this.state = {
            data:[],   
            data1:[]
        }
    }
    componentDidMount(){
        fetch('http://148.70.183.184:8005/tasks')
            .then((res) => res.json())
            .then((res) => {
                this.setState({data:res.data}) 
            })   
        //学生登录的手机号 
        fetch('http://148.70.183.184:8006/teamine/${usr}')//
            .then((res) => res.json())
            .then((res) => {
                this.setState({data1:res.data})
                wusername= this.state.data1[0].wusername;
            })  
    }
    render() {
        return (
            <ScrollView>
                 {
                    this.state.data.map((item)=>(
                        <View style={{width:610*s,fontSize:18,padding:10*s,margin:12*s,borderRadius:10*s,backgroundColor:'white'}} key={item.wphonenumber}>
                            <Text>教师：{item.author}</Text>
                            <Text style={{wordWrap:'break-word'}}>评价内容：{item.pingjia}</Text>
                            <Text></Text>
                            <View style={{borderLeftWidth:5*s,paddingLeft:5*s}}><Text style={{color:'red'}}>@{wusername}</Text></View>
                            <View style={{borderLeftStyle:'solid',paddingLeft:5*s,borderLeftWidth:5*s,flexDirection:'row'}}>
                                <Text style={{fontSize:15}}>提交了任务名为</Text>
                                <Text style={{color:'red',fontSize:15}}>{item.title}</Text> 
                                <Text>的任务作业</Text>
                            </View>
                            <Text style={{color:'gray',fontSize:15,marginLeft:350*s}}>{item.time}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}
///////////////////////////////////////////
export default class Jiaoshipingjia extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#fafaf8',height:'100%',}}>
                <NavBar
                style={{backgroundColor:'white',color:'black'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >学生情况</NavBar>
                <p style={{paddingTop:'10px',textIndent:'2em',fontSize:'15px',fontWeight:'bold'}}>学生学业情况</p>
                <List style={{margin:'10px',border:'1px solid rgb(250, 198, 101)'}}>
                    <TextareaItem
                        style={{padding:'10px'}}
                        placeholder="作业提交情况"
                        rows={5}
                        count={100}
                    />
                </List>
                <button className='stdmineyonghufankuibutton'>提交</button>           
            </div>
        )
    }
}