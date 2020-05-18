import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions, TouchableOpacity, AsyncStorage } from 'react-native'
import NaviBar from 'react-native-pure-navigation-bar';
import { Actions } from 'react-native-router-flux';
import Item from '@ant-design/react-native/lib/list/ListItem';
import { ThemeProvider } from '@ant-design/react-native/lib/style';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class tContent extends Component {
    constructor() {
        super()
        this.state = {
            data: '',
            hdeta:'',
            teacher1:'',
            teacher:[]
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('hdetail')
        .then(res=>{
            console.log(JSON.parse(res)[0].std);
            this.setState({data:JSON.parse(res)[0].std})
        });
        // console.log(this.state.data);
            fetch('http://148.70.183.184:8003/chat')
                .then((res)=>res.json())
                .then((res)=>{    
                    // console.log()
                    for(var i=0;i<res.length;i++)
                    {
                        // console.log("asdf",res[2].teacher==this.state.tnum);
                        // console.log("asdf",this.state.tnum);
                        if(res[i].parents == this.state.data)
                        {
                            if(this.state.teacher1=='')
                            {
                                var ff = res[i].teacher;
                                var fff = ff.split(/ /);
                            }
                            else{
                                var ff = this.state.teacher1 +','+ res[i].teacher;
                                var fff = ff.split(/,/);
                            }
                            console.log("我是ff",ff)
                            
                            console.log("我是fff",fff)
                            var mm =  res[i].content;
                            var nn = mm.split(/@@/);
                            this.setState({
                                content:nn,  
                                teacher:fff
                            })
                            // console.log("我是content",this.state.content);  
                        }
                    }                 
            })
    
        
    }
    it = (item) =>{
        AsyncStorage.removeItem('teaa');
        AsyncStorage.setItem('teaa',JSON.stringify(item)); 
        Actions.concatt();
    }
    // componentDidMount(){
    //     AsyncStorage.getItem('hdetail')
    //     .then(res=>{
    //         console.log(JSON.parse(res)[0].std);
    //         this.setState({data:JSON.parse(res)[0].std})
    //     });

    // }
    render() {
        return (
            <View>
                <View style={{flexDirection:'column',paddingTop:30*s}}>
                        {
                            this.state.teacher.map((item,i)=>{
                                console.log("我是item",item);
                                return(
                                    <TouchableOpacity onPress={()=>this.it(item)}>
                                        <Text style={{width:'100%',height:80*s,marginTop:4*s,fontSize:26*s,backgroundColor:'#e0e0e0'}}>
                                            与{item}的对话
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                </View>
                
                
                
                
                <Text style={{width:'100%',height:80*s,marginTop:4*s,fontSize:26*s,backgroundColor:'#e0e0e0'}}>
                    与张三的对话
                </Text>
                <Text style={{width:'100%',height:80*s,marginTop:4*s,fontSize:26*s,backgroundColor:'#e0e0e0'}}>
                    与张三的对话
                </Text>
               <View style={{flexDirection:'row'}}>
                   <TouchableOpacity onPress={()=>Actions.pop()} style={[styles.tab,{marginLeft:50*s}]}><Text style={styles.font}>返回</Text></TouchableOpacity>
                   <TouchableOpacity onPress={()=>Actions.concatt()} style={[styles.tab,{marginLeft:40*s}]}><Text style={styles.font}>消息</Text></TouchableOpacity>
                   
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    hfont:{
        fontSize:23
    },
    box:{
        width:'90%',
        backgroundColor:'white',
       
        marginTop:20*s,
        paddingLeft:20*s,
        paddingTop:30*s,
        paddingBottom:50*s
    },
    tab:{
        backgroundColor: '#2f618b' ,
        width:120*s,
        height:40*s,
        borderRadius:10*s,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30*s
    },
    font:{
      color:'white',
      fontSize:22
    }
})
