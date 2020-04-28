import React, { Component } from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    Dimensions, 
    ScrollView, 
    AsyncStorage,
    Image
} from 'react-native'
import { Icon, Button } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Video from 'react-native-video';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Buy extends Component {
    constructor(){
        super();
        this.state={
            class:'',
            name:'',
            price:'',
            vedio:'',
            username:'',
            time:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('buy')
        .then(res=>{
            let buy = JSON.parse(res)
            console.log(buy.class);
            this.setState({class:buy.class});
            this.setState({name:buy.name});
            this.setState({price:buy.price});
            this.setState({vedio:buy.vedio});
        });

        AsyncStorage.getItem('std')
        .then(res=>{
            let std = JSON.parse(res);
            this.setState({username:std});
        });
    }
    bought=(time)=>{
        let a = {
            vedio:this.state.vedio,
            // name:this.state.name,
            class:this.state.class,
            price:this.state.price,
            time:time,
            usernum:this.state.username
        };
        console.log(a);
        fetch(`http://148.70.183.184:8000/bought`,{
            method:"POST",
            headers:{
                // "Accept":'application/json',
                'Content-Type':'text/plain'
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('付款成功！');
                return res.json(a);
            }else{
                alert('该视频已购买，请勿重复支付！');
            }
        })
        // .then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // });
    }
    tobuy=(time)=>{
        let a = {
            vedio:this.state.vedio,
            // name:this.state.name,
            class:this.state.class,
            price:this.state.price,
            time:time,
            usernum:this.state.username
        };
        console.log(a);
        fetch(`http://148.70.183.184:8000/tobuy`,{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(a)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('已加入待支付订单，请在‘我的’中查看！');
                return res.json(a);
            }else{
                // return Promise.reject(res.json())
                alert('该视频已加入待支付订单，请勿重复添加！');
            }
        })
        // .then((data)=>{
        //     console.log(data);
        // }).catch((err)=>{
        //     console.log(err);
        // });
    }

    render() {
        var today = new Date(),
        time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
         +'   '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        return (
            <View>
                
                    <View  style={styles.nav}>
                        <Icon name="left" style={styles.left} onPress={Actions.pop} />
                        <Text
                            style={styles.tit}
                        >购买</Text>
                    </View>
                <ScrollView>
                    <View style={{width:'100%'}}>
                        <Video 
                            source={this.state.vedio}
                            style={{width:'100%',height:400*s,marginBottom:20*s}}
                            paused={false}
                            muted
                            repeat={false} 
                        />
                        <Text style={styles.int}>课程科目：{this.state.class}</Text>
                        <Text style={styles.int}>课程名称：{this.state.name}</Text>
                        <Text style={styles.int}>订单生成时间：<Text ref={i=>this.time=i}>{time}</Text></Text>
                        <Text style={styles.int}>价钱：￥<Text style={{color:'red',fontSize:30*s}}>{this.state.price}</Text>元</Text>
                        <View style={styles.btns}>
                        <Button 
                            onPress={()=>this.tobuy(time)}
                            style={styles.btn}
                        >
                            <Text style={styles.btnf}>加入购物车</Text>
                        </Button>
                        <Button 
                            onPress={()=>this.bought(time)}
                            style={styles.btn}
                        >
                            <Text style={styles.btnf}>直接付款</Text>
                        </Button>
                    </View>
                    
                    <View style={styles.imgs}>
                    <Text style={{fontSize:30*s,marginTop:20*s}}>第三方支付</Text>
                        <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                        <Image source={require('../../assets/hyq/wechat.jpg')} style={styles.img}/>
                        <Image source={require('../../assets/hyq/zhifubao.jpg')} style={styles.img}/>
                    </View>
                </View>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    int:{
        fontSize:28*s,
        marginTop:7*s
    },
    btns:{
        flexDirection:'row',
        alignContent:'center',
        marginTop:100*s,
        marginBottom:30*s
    },
    btnf:{
        color:'white',
        fontSize: 28*s
    },
    btn:{
        width:'40%',
        height:60*s,
        marginLeft:'6.5%',
        backgroundColor:'rgb(110, 177, 224)'
    },
    img:{
        width:80*s,
        height:80*s
    },
    imgs:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20*s,
        paddingRight:20*s
    },
    nav:{
        width:'100%',
        height:73*s,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#708090'
    },
    tit:{
        width:'55%',
        color:'#fff',
        fontSize:26*s
    },
    left:{
        width:'45%',
        paddingLeft:20*s
    },
})