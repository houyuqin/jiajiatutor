import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions, Image,TouchableOpacity, AsyncStorage } from 'react-native'
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
            data:'',
            num:0,
            onecont:'',
            one:0,
            xing1:0,
            xing2:0,
            xing3:0,
            xing4:0,
            xing5:0,
            twocont:'',
            two:0,
            xing6:0,
            xing7:0,
            xing8:0,
            xing9:0,
            xing10:0,
            threecont:'',
            three:0,
            xing11:0,
            xing12:0,
            xing13:0,
            xing14:0,
            xing15:0,
            fourcont:'',
            four:0,
            xing16:0,
            xing17:0,
            xing18:0,
            xing19:0,
            xing20:0,
            yes:0
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('ping')
        .then(res=>{
            this.setState({data:JSON.parse(res)})
            console.log("我是data",this.state.data);
        });
        fetch('http://148.70.183.184:8003/ping')
            .then((res)=>res.json())
            .then((res)=>{    
                for(var i=0;i<res.length;i++)
                {
                    console.log(res[i].teacher == this.state.data)
                    
                    if(res[i].teacher == this.state.data)
                    {
                        this.setState({
                            yes:1,
                            num:res[i].num
                        })
                    }
                }
                            
        })
    }
    tt1 = () => {
        if(this.state.xing1%2 == 0)
        {
            this.setState({          
                onecont:'差',
                xing1:1,
                xing2:0,
                xing3:0,
                xing4:0,
                xing5:0,
                one:1
            }) 
        }
        else{
            this.setState({
                onecont:'',
                xing1:0,
                xing2:0,
                xing3:0,
                xing4:0,
                xing5:0,
                one:0
            }) 
        }
    }
    tt2 = () => {
        //选中
        if(this.state.xing2%2 == 0)
        {
            this.setState({
                onecont:'较差',
                xing2:1,
                xing1:1,
                xing3:0,
                xing4:0,
                xing5:0,
                one:2
            }) 
        }
        //取消
        else{
            this.setState({
                onecont:'差',
                xing1:1,
                xing2:0,
                xing3:0,
                xing4:0,
                xing5:0,
            }) 
        }
    }
    tt3 = () => {
        //选中
        if(this.state.xing3%2 == 0)
        {
            this.setState({
                onecont:'合格',
                xing2:1,
                xing1:1,
                xing3:1,
                xing4:0,
                xing5:0,
                one:3
            }) 
        }
        //取消
        else{
            this.setState({
                onecont:'较差',
                xing1:1,
                xing2:1,
                xing3:0,
                xing4:0,
                xing5:0,
            }) 
        }
    }
    tt4 = () => {
        //选中
        if(this.state.xing4%2 == 0)
        {
            this.setState({
                onecont:'良好',
                xing2:1,
                xing1:1,
                xing3:1,
                xing4:1,
                xing5:0,
                one:4
            }) 
        }
        //取消
        else{
            this.setState({
                onecont:'合格',
                xing1:1,
                xing2:1,
                xing3:1,
                xing4:0,
                xing5:0,
            }) 
        }
    }
    tt5 = () => {
        //选中
        if(this.state.xing5%2 == 0)
        {
            this.setState({
                onecont:'优秀',
                xing2:1,
                xing1:1,
                xing3:1,
                xing4:1,
                xing5:1,
                one:5
            }) 
        }
        //取消
        else{
            this.setState({
                onecont:'良好',
                xing1:1,
                xing2:1,
                xing3:1,
                xing4:1,
                xing5:0,
            }) 
        }
    }
    
    tt6 = () => {
        if(this.state.xing6%2 == 0)
        {
            this.setState({          
                twocont:'差',
                xing6:1,
                xing7:0,
                xing8:0,
                xing9:0,
                xing10:0,
                two:1,
            }) 
        }
        else{
            this.setState({
                twocont:'',
                xing6:0,
                xing7:0,
                xing8:0,
                xing9:0,
                xing10:0,
                two:0,
            }) 
        }
    }
    tt7 = () => {
        //选中
        if(this.state.xing7%2 == 0)
        {
            this.setState({
                twocont:'较差',
                xing6:1,
                xing7:1,
                xing8:0,
                xing9:0,
                xing10:0,
                two:2,
            }) 
        }
        //取消
        else{
            this.setState({
                twocont:'差',
                xing6:1,
                xing7:0,
                xing8:0,
                xing9:0,
                xing10:0,
            }) 
        }
    }
    tt8 = () => {
        //选中
        if(this.state.xing8%2 == 0)
        {
            this.setState({
                twocont:'合格',
                xing6:1,
                xing7:1,
                xing8:1,
                xing9:0,
                xing10:0,
                two:3,
            }) 
        }
        //取消
        else{
            this.setState({
                twocont:'较差',
                xing6:1,
                xing7:1,
                xing8:0,
                xing9:0,
                xing10:0,
            }) 
        }
    }
    tt9 = () => {
        //选中
        if(this.state.xing9%2 == 0)
        {
            this.setState({
                twocont:'良好',
                xing6:1,
                xing7:1,
                xing8:1,
                xing9:1,
                xing10:0,
                two:4,
            }) 
        }
        //取消
        else{
            this.setState({
                twocont:'合格',
                xing6:1,
                xing7:1,
                xing8:1,
                xing9:0,
                xing10:0,
            }) 
        }
    }
    tt10 = () => {
        //选中
        if(this.state.xing10%2 == 0)
        {
            this.setState({
                twocont:'优秀',
                xing6:1,
                xing7:1,
                xing8:1,
                xing9:1,
                xing10:1,
                two:5,
            }) 
        }
        //取消
        else{
            this.setState({
                twocont:'良好',
                xing6:1,
                xing7:1,
                xing8:1,
                xing9:1,
                xing10:0,
            }) 
        }
    }

    tt11 = () => {
        if(this.state.xing11%2 == 0)
        {
            this.setState({          
                threecont:'差',
                xing11:1,
                xing12:0,
                xing13:0,
                xing14:0,
                xing15:0,
                three:1,
            }) 
        }
        else{
            this.setState({
                threecont:'',
                xing11:0,
                xing12:0,
                xing13:0,
                xing14:0,
                xing15:0,
                three:0,
            }) 
        }
    }
    tt12 = () => {
        //选中
        if(this.state.xing12%2 == 0)
        {
            this.setState({
                threecont:'较差',
                xing12:1,
                xing11:1,
                xing13:0,
                xing14:0,
                xing15:0,
                three:2
            }) 
        }
        //取消
        else{
            this.setState({
                threecont:'差',
                xing11:1,
                xing12:0,
                xing13:0,
                xing14:0,
                xing15:0,
            }) 
        }
    }
    tt13 = () => {
        //选中
        if(this.state.xing13%2 == 0)
        {
            this.setState({
                threecont:'合格',
                xing12:1,
                xing11:1,
                xing13:1,
                xing14:0,
                xing15:0,
                three:3
            }) 
        }
        //取消
        else{
            this.setState({
                threecont:'较差',
                xing11:1,
                xing12:1,
                xing13:0,
                xing14:0,
                xing15:0,
            }) 
        }
    }
    tt14 = () => {
        //选中
        if(this.state.xing14%2 == 0)
        {
            this.setState({
                threecont:'良好',
                xing12:1,
                xing11:1,
                xing13:1,
                xing14:1,
                xing15:0,
                three:4
            }) 
        }
        //取消
        else{
            this.setState({
                threecont:'合格',
                xing11:1,
                xing12:1,
                xing13:1,
                xing14:0,
                xing15:0,
            }) 
        }
    }
    tt15 = () => {
        //选中
        if(this.state.xing15%2 == 0)
        {
            this.setState({
                threecont:'优秀',
                xing12:1,
                xing11:1,
                xing13:1,
                xing14:1,
                xing15:1,
                three:5
            }) 
        }
        //取消
        else{
            this.setState({
                threecont:'良好',
                xing11:1,
                xing12:1,
                xing13:1,
                xing14:1,
                xing15:0,
            }) 
        }
    }

    tt16 = () => {
        if(this.state.xing16%2 == 0)
        {
            this.setState({          
                fourcont:'差',
                xing16:1,
                xing17:0,
                xing18:0,
                xing19:0,
                xing20:0,
                four:1
            }) 
        }
        else{
            this.setState({
                fourcont:'',
                xing16:0,
                xing17:0,
                xing18:0,
                xing19:0,
                xing20:0,
                four:0
            }) 
        }
    }
    tt17 = () => {
        //选中
        if(this.state.xing17%2 == 0)
        {
            this.setState({
                fourcont:'较差',
                xing16:1,
                xing17:1,
                xing18:0,
                xing19:0,
                xing20:0,
                four:2
            }) 
        }
        //取消
        else{
            this.setState({
                fourcont:'差',
                xing16:1,
                xing17:0,
                xing18:0,
                xing19:0,
                xing20:0,
            }) 
        }
    }
    tt18 = () => {
        //选中
        if(this.state.xing18%2 == 0)
        {
            this.setState({
                fourcont:'合格',
                xing16:1,
                xing17:1,
                xing18:1,
                xing19:0,
                xing20:0,
                four:3
            }) 
        }
        //取消
        else{
            this.setState({
                fourcont:'较差',
                xing16:1,
                xing17:1,
                xing18:0,
                xing19:0,
                xing20:0,
            }) 
        }
    }
    tt19 = () => {
        //选中
        if(this.state.xing19%2 == 0)
        {
            this.setState({
                fourcont:'良好',
                xing16:1,
                xing17:1,
                xing18:1,
                xing19:1,
                xing20:0,
                four:4
            }) 
        }
        //取消
        else{
            this.setState({
                fourcont:'合格',
                xing16:1,
                xing17:1,
                xing18:1,
                xing19:0,
                xing20:0,
            }) 
        }
    }
    tt20 = () => {
        //选中
        if(this.state.xing20%2 == 0)
        {
            this.setState({
                fourcont:'优秀',
                xing16:1,
                xing17:1,
                xing18:1,
                xing19:1,
                xing20:1,
                four:5
            }) 
        }
        //取消
        else{
            this.setState({
                fourcont:'良好',
                xing16:1,
                xing17:1,
                xing18:1,
                xing19:1,
                xing20:0,
            }) 
        }
    }

    btn = () =>{
        var one = this.state.one;
        var two = this.state.two;
        var three = this.state.three;
        var four = this.state.four;
        // console.log(one,two,three,four);
        var zong = Math.round(((one + two + three)/3 + four)/2);
        var zong2 = Math.round((zong + this.state.num)/2);
        console.log(zong);
        console.log(this.state.yes);
        if(this.state.yes == 0)
        {
            var a ={};
            a.teacher = this.state.data;
            a.num = zong
            fetch("http://148.70.183.184:8003/ping", {
                    method: "POST",
                    headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then(function(response) { 
                    // do sth
                }); 
        }
        else{
            var a ={};
            a.teacher = this.state.data;
            a.num = zong2;
            console.log("执行")
            fetch(`http://148.70.183.184:8003/ping/${this.state.data}`, {
                    method: "POST",
                    headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then(function(response) { 
                    // do sth
            }); 
        }
        Actions.pop();
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'#e0e0e0'}}>
                <View style={{
                    flexDirection:'column',width:'94%',
                    height:290*s,backgroundColor:'white',
                    marginLeft:20*s,marginTop:20*s,borderRadius:8*s,
                    paddingLeft:30*s,paddingTop:10*s}}>
                    <View style={{marginTop:20*s,flexDirection:'row'}}>
                        <Text style={{marginTop:10*s,fontSize:30*s}}>教学方法</Text>
                        <View style={{marginLeft:30*s,marginTop:5*s,flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => this.tt1()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing1==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => this.tt2()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing2==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt3()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing3==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt4()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing4==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt5()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing5==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            
                            <Text style={{marginLeft:20*s,marginTop:8*s,fontSize:30*s,color:'#2f618b'}}>{this.state.onecont}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:20*s,flexDirection:'row'}}>
                        <Text style={{marginTop:10*s,fontSize:30*s}}>教学能力</Text>
                        <View style={{marginLeft:30*s,marginTop:5*s,flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => this.tt6()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing6==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => this.tt7()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing7==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt8()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing8==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt9()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing9==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt10()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing10==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            
                            <Text style={{marginLeft:20*s,marginTop:8*s,fontSize:30*s,color:'#2f618b'}}>{this.state.twocont}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:20*s,flexDirection:'row'}}>
                        <Text style={{marginTop:10*s,fontSize:30*s}}>教师素养</Text>
                        <View style={{marginLeft:30*s,marginTop:5*s,flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => this.tt11()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing11==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => this.tt12()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing12==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt13()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing13==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt14()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing14==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt15()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing15==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            
                            <Text style={{marginLeft:20*s,marginTop:8*s,fontSize:30*s,color:'#2f618b'}}>{this.state.threecont}</Text>
                        </View>
                    </View>   
                </View>
                <View style={{
                    flexDirection:'column',width:'94%',
                    height:300*s,backgroundColor:'white',
                    marginLeft:20*s,marginTop:20*s,borderRadius:8*s,
                    paddingLeft:30*s,paddingTop:10*s}}>
                    <View style={{marginTop:20*s,flexDirection:'row'}}>
                        <Text style={{marginTop:10*s,fontSize:30*s}}>综合评价</Text>
                        <View style={{marginLeft:30*s,marginTop:5*s,flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => this.tt16()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing16==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => this.tt17()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing17==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>   
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt18()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing18==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt19()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing19==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.tt20()}>
                                <Image style={{width:50*s,height:50*s}} source={this.state.xing20==0?require('../../../assets/cq/xingxing.png'):require('../../../assets/cq/xingxing1.png')}/>
                            </TouchableOpacity>
                            
                            <Text style={{marginLeft:20*s,marginTop:8*s,fontSize:30*s,color:'#2f618b'}}>{this.state.fourcont}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.btn()}>
                        <Text style={{width:200*s,height:50*s,marginLeft:'24%',marginTop:130*s,
                        fontSize:27*s,paddingLeft:75*s,paddingTop:4*s,color:'white',backgroundColor:'#2f618b',borderRadius:8*s
                        }}>发表评价</Text>
                    </TouchableOpacity>
                        
                    
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
