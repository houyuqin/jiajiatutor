import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    Dimensions,
    ImageBackground,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
const {width,scale} = Dimensions.get('window');
const t=width;
const s = width / 640;

export default class Concat extends Component {
    constructor (){
        super()
        this.state = {
            shuru:'',
            content:[],
            content1:'',
            data:'',
            snum:'',
            tnum:'',
            kkkk:0,
            hh:0,
            wo:[{id:0,cont:'我的'},{id:2,cont:'你好啊'}],           
        }
    }
    content = (e) => {
        this.setState({
            shuru: e
        })    
    }
    componentDidMount(){     
        AsyncStorage.getItem('hdetail')
        .then(res=>{
            this.setState({
                data:JSON.parse(res)[0].name,
                snum:JSON.parse(res)[0].std
            })
            // console.log("你好吗");
            // console.log(this.state.snum);
        });
        AsyncStorage.getItem('tea')
        .then(res=>{
            this.setState({
                tnum:JSON.parse(res)
            })
            // console.log(this.state.tnum);
        });
        
        
        fetch('http://148.70.183.184:8003/chat')
            .then((res)=>res.json())
            .then((res)=>{    
                for(var i=0;i<res.length;i++)
                {
                    // console.log("asdf",res[2].teacher==this.state.tnum);
                    // console.log("asdf",this.state.tnum);
                    if(res[i].parents == this.state.snum && res[i].teacher == this.state.tnum)
                    {
                        var mm =  res[i].content;
                        var nn = mm.split(/@@/);
                        this.setState({
                            content:nn, 
                            hh:1 
                        })
                        // console.log("我是content",this.state.content);  
                    }
                }
           this.fa();     
            // this.fa();                 
        })
        if(this.state.hh == 0)
        {
            var a={}; 
            a.parents=this.state.tnum;
            a.teacher=this.state.snum;
            a.content='你好';
            fetch(`http://148.70.183.184:8003/chat${this.state.tnum}${this.state.snum}`, {
                method: "POST",
                headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
                },
                body: JSON.stringify(a)
            }).then(function(response) { 
                
            });      
        }

    }
    fa = () =>{ 
        //组合成@@
        var num = this.state.content[0];
        for(var i=1;i<this.state.content.length;i++)
        {
            num = num +'@@'+this.state.content[i];
        }
        var ee = this.state.shuru;
        var uu = 0;
        // console.log("我是num",num);
        // console.log("我是content",this.state.content)
        //插入
        for(var i=0;i<this.state.content.length;i++)
        {
            if(this.state.content[i] == '' && i%2!=0)
            {
                this.state.content[i] = ee;
                uu = 1;
            }
        }
        if(this.state.content.length%2==0 && uu==0)
        {
             num = num+'@@'+''+'@@'+ee;
        }
        else{
            num = num+'@@'+ee+'@@'+'';
        }
        // console.log("nn.",num);
        console.log("nn.length",num.length);
        
        // console.log("我是numm",this.state.content);
        //判断长度
        var nnn = num.split(/@@/);
        var nn =[];
        console.log("nnn",nnn);
        if(num.length>50)
        {
            for(var i=0;i<nnn.length;i++)
            {
                if(nnn[i+4])
                {
                    nn.push(nnn[i+4])
                    console.log("我执行了");
                }
                else if(nnn[i+4] == '')
                {
                    nn.push(nnn[i+4])
                    console.log("我执行");
                }
                
            }
            this.setState({
                content : nn,   
            })
        }
        else{
            console.log('jijijiji');
            this.setState({
                content : nnn, 
                kkkk:1  
            }) 
        }
        console.log("nn",nn);

        
        console.log("我是kkkk",this.state.kkkk);
        console.log("我是content",this.state.content);
        //再次合成@@
        var oo=this.state.content[0];
        for(var i=1;i<this.state.content.length;i++)
        {
            oo = oo +'@@'+this.state.content[i];
        }
        console.log("我是content",this.state.content);
        console.log("我是oo",oo);
        var m = '13345678900'; 
        var a={}; 
        a.parents=this.state.snum;
        a.teacher=this.state.tnum;
        a.content=oo;
        fetch(`http://148.70.183.184:8003/chat/${this.state.snum}/${this.state.tnum}`, {
            method: "POST",
            headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
        }).then(function(response) { 
            
        }); 
        // console.log('这是我',this.state.content);
    }
    render() {
        return (
            <View>
                <View style={{width:'100%',height:73*s,backgroundColor: '#708090',flexDirection:'row'}}>
                    <TouchableOpacity onPress={Actions.pop}>
                        <Icon style={{width:35*s,height:35*s,marginTop:20*s,marginLeft:20*s}} name='left'/>
                        {/* <Image style={{width:35*s,height:35*s,marginTop:20*s,marginLeft:20*s}} source={require('../../assets/cq/zuo.png')}/> */}
                    </TouchableOpacity>
                    <Text style={{fontSize:26*s,marginLeft:'30%',marginTop:20*s,color:'white'}}>与{this.state.data}的对话</Text>
                </View>
                <View style={{width:'100%',height:'87.8%',backgroundColor:'#e0e0e0'}}>
                    {/* <Text
                        style={[styles.shu1,{
                            width:this.state.len1,
                            
                        }]}
                    >{this.state.content[0]}</Text> */}
                    <View style={{flexDirection:'column',paddingTop:30*s}}>
                        {
                            this.state.content.map((item,i)=>{
                                // console.log("我是啦啦啦啦");
                                // console.log(i);
                                // console.log("我是item",item);
                                var widd = t-t/18 * item.length-20;
                                // console.log("我是widd",widd);
                                return(
                                        <View style={{alignSelf:'flex-start',flexDirection:'row',}}>
                                            {
                                                item !=''?

                                                (i%2==0?
                                                (widd>0? 
                                                    <Text
                                                    style={[styles.shu1,{
                                                        width:t/18 * item.length+8,
                                                        marginLeft:20*s
                                                    }]}
                                                    >{item}</Text> 
                                                    :
                                                    <Text
                                                    style={[styles.shu1,{
                                                        
                                                        marginLeft:20*s
                                                    }]}
                                                    >{item}</Text> )
                                                :
                                                    (widd>0? 
                                                    <Text
                                                    style={[styles.shu2,{
                                                        width:t/18 * item.length+8,
                                                        marginLeft:widd
                                                    }]}
                                                    >{item}</Text> 
                                                    :
                                                    <Text
                                                    style={[styles.shu2,{
                                                        
                                                        marginLeft:0
                                                    }]}
                                                    >{item}</Text>))
                                                    :<Text></Text>
                                            }
                                           
                                        </View>

                                          
                                )
                            })
                        }
                    </View>
                    
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput 
                        style={{
                            width:'70%',
                            height:60*s,
                            marginLeft:5*s,
                            fontSize:26*s,
                            paddingLeft:7*s,
                            borderRadius:14*s,
                            elevation: 2,
                        }}
                        placeholder="请输入内容"
                        placeholderTextColor='gray'
                        onChangeText={this.content}
                    />
                    <Image style={{width:40*s,height:40*s,marginLeft:5*s,marginTop:11*s}} source={require('../../assets/cq/jia.png')}/>
                    <Image style={{width:40*s,height:40*s,marginLeft:5*s,marginTop:11*s}} source={require('../../assets/cq/yuyin.png')}/>
                    <TouchableOpacity onPress={this.fa}>
                        <Text style={{ width: 80 * s, height: 50 * s,marginLeft:5*s, marginTop:5*s, borderRadius: 8, paddingLeft: 12 * s, fontSize: 25*s, color: 'white', paddingTop: 7 * s, backgroundColor: '#2f618b' }}>发送</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    shu1:{
        color:'white',
        fontSize:33*s,
        paddingTop:4*s,
        paddingBottom:4*s,
        paddingLeft:10*s,
        borderRadius:10*s,
        marginTop:20*s,
        position:'absolute',
        backgroundColor:'#2f618b',
    },
    shu2:{
        color:'#2f618b',
        fontSize:33*s,                      
        paddingTop:4*s,
        paddingBottom:4*s,
        paddingLeft:10*s,   
        borderRadius:10*s,
        marginTop:70*s,
        backgroundColor:'white',
    }
})
