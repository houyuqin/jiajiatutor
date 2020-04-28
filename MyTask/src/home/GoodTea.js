import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, AsyncStorage,ToastAndroid } from 'react-native'
import { Icon, Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class GoodTea extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            username:''
        }
    }
    componentDidMount(){
        fetch("http://148.70.183.184:8006/teamine")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res
            })  
        });
        AsyncStorage.getItem('std')
        .then(res=>{
            let std = JSON.parse(res);
            this.setState({username:std});
        });
        
    }
    selecttea=(phone)=>{
        let a={stdphone:this.state.username,teaphone:phone};
        fetch("http://148.70.183.184:8000/selectclass",{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('选择教师成功!');
                return res.json();
            }else{
                alert('您已选择该教师！');
            }
        });
    }
    render() {
        return (
            <View>
                <View  style={styles.nav}>
                    <Icon name="left" style={styles.left} onPress={Actions.home} />
                    <Text
                        style={styles.tit}
                    >优秀教师推荐</Text>
                </View>
                <ScrollView>
                <View>
                    {
                        this.state.data.map(item=>(
                            <View style={styles.one}>
                                <Image source={require('../../assets/hyq/000.png')} style={styles.tea}/>   
                                {/* <Image  source={{uri:'http://148.70.183.184:8000/images/'+item.teatouxiang}} style={styles.tea}></Image>    */}
                                <View style={{paddingTop:20*s}}>
                                    <Text style={styles.tch}>姓名：{item.wusername}</Text>
                                    <Text style={styles.tch}>性别：{item.wsex}</Text>
                                    <Text style={styles.tch}>年龄：{item.wage}</Text>
                                    <Text style={styles.tch}>毕业院校：{item.biyexuexiao}</Text>
                                    <Text style={styles.tch}>目前职业：{item.zhiwei}</Text>
                                    <Button 
                                        style={{backgroundColor:'#4a83bc'}} 
                                        onPress={()=>this.selecttea(item.wphonenumber)}>
                                        <Text style={{color:'#fff'}}>选择教师</Text>
                                    </Button>
                                </View>
                            </View>
                        ))
                    }
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    one:{
        width:'90%',
        marginLeft:'5%',
        height:300*s,
        flexDirection:'row',
        borderRadius: 30*s,
        borderColor: '#000',
        borderWidth: 1,
        marginBottom:20*s
    },
    tch:{
        color:'#4a83bc',
        fontSize:24*s,
        marginTop:5*s
    },
    tea:{
        marginTop:15*s,
        width:200*s,
        height: 260*s,
        marginLeft:40*s,
        marginRight:40*s
    },
    nav:{
        width:'100%',
        height:64*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#708090'
    },
    tit:{
        width:'62%',
        color:'#fff',
        fontSize:26*s
    },
    left:{
        width:'38%',
    },
})



//             <div style={{paddingLeft:10}}>
//                 {
//                     this.state.data.map(item=>(
//                         <div key={item} style={{width:'97%',height:195,paddingTop:'14px',paddingLeft:'15px',marginTop:'25px',borderRadius:'10px',border:'1px solid rgb(174, 177, 179)',boxShadow: '3px 3px 2px rgb(174, 177, 179)'}}>
                            
//                             <div style={{height:170}}>
//                                 <div style={{width:'45%',float:'left'}}>
//                                 <img src={item.teatouxiang} alt=''
//                                 style={{width:140,height:165}}/>
//                                 {/* <img src={item.head} alt=''
//                                 style={{width:140,height:165}}/> */}
//                                 </div>
//                                 <div style={{paddingTop:4,color:'rgb(26, 63, 87)',fontSize:'16px',}}>
//                                     <p>姓名：{item.wusername} </p>
//                                     <p>性别：{item.wsex}</p>
//                                     <p>年龄：{item.wage}岁</p>
//                                     <p>毕业学院：{item.biyexuexiao}</p>
//                                     <p>目前职位：{item.zhiwei}</p>
//                                 </div>
//                                 <button 
//                                 onClick={()=>this.selecttea(item.wphonenumber)}
//                                 style={{width:120,height:40,marginTop:'5px',border:'none',borderRadius:'7px',backgroundColor:'#5d93d0',fontSize:'16px',color:'white'}}>选择教师</button>
//                              </div>
//                         </div>
//                     ))
//                 }
//             </div>


//         </div>
//         )
//         }
   
// }
