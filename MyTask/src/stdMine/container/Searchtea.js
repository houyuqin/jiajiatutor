import React, { Component } from 'react'
import { 
    Text, 
    View, 
    ScrollView, 
    StyleSheet, 
    Dimensions, 
    TextInput, 
    Button, 
    AsyncStorage, 
    FlatList,
    TouchableOpacity,
    Image,
    ToastAndroid
} from 'react-native'
import { List, Radio, } from '@ant-design/react-native';

const {width} = Dimensions.get('window');
const s = width/640;
const RadioItem = Radio.RadioItem;

export default class Searchtea extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            std:"" ,// 定义选中的值，如果为空字符串，则默认不选中
            name:"",
            class:"",
            address:"",
            kemu:'',
            sex:'',
            time:'',
            salary:'',
            price:'',
            request:"",
            data:''
        }
    }
    getValue2 = (e)=>{
        console.log(e);
        this.setState({
            name:e
        })
    }
    getValue3 = (e)=>{
        console.log(e);
        this.setState({
            class:e
        })
    }
    getValue4 = (e)=>{
        console.log(e);
        this.setState({
            address:e
        })
    }
    getValue5 = (e)=>{
        console.log(e);
        this.setState({
           request:e
        })
    }
    getValue6 = (e)=>{
        console.log(e);
        this.setState({
           price:e
        })
    }
    getValue7 = (e)=>{
        console.log(e);
        this.setState({
           kemu:e
        })
    }
    componentDidMount(){
        AsyncStorage.getItem('std')
        .then(res=>{
            let std = JSON.parse(res);
            this.setState({std:std});
        });
        fetch("http://148.70.183.184:8000/search")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        })
        .then(res=>{
            console.log(this.state.data)
        });

    }
    delete=(num)=>{
        fetch(`http://148.70.183.184:8000/search/${num}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body:JSON.stringify({id:num})
            })
            .then((res)=>{ 
                if(res.status === 200){
                    alert('删除成功！');
                    return res.json();
                }else{
                    ToastAndroid('删除失败！',ToastAndroid.SHORT);
                }
            })
    }
    submit = ()=>{
        console.log(this.state)
        let body = {
            std:this.state.std ,// 定义选中的值，如果为空字符串，则默认不选中
            name:this.state.name,
            class:this.state.class,
            address:this.state.address,
            kemu:this.state.kemu,
            sex:this.state.sex,
            time:this.state.time,
            salary:this.state.salary,
            price:this.state.price,
            request:this.state.request
        }
        fetch("http://148.70.183.184:8000/search",{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(body)
        }).then((res)=>{ 
            if(res.status === 200){
                alert('提交成功！');
                return res.json();
            }else{
                ToastAndroid('提交失败！',ToastAndroid.SHORT);
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={styles.tit}>
                        请输入您想寻找家教的要求，
                        在对应的问题中回答并提交可视为你想要发布寻找上门家教的信息。
                        不必填写精准明确，拥有大概方位帮助教师辨别远近即可，以防被骗。
                    </Text>
                    <Text style={styles.h}>1.请输入您孩子的姓名（此项可不真实，方便教师联系时称呼）：</Text>
                    <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                    onChangeText={(Text)=>this.getValue2(Text)}/>
                    <Text style={styles.h}>2.请输入您孩子正接受教育的年级：</Text>
                    <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                    onChangeText={(Text)=>this.getValue3(Text)}/>
                    <Text style={styles.h}>3.请输入您家的家庭住址（可不详细至小区，到街道或可辨别标志物附近即可）：</Text>
                    <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                    onChangeText={(Text)=>this.getValue4(Text)}/>
                    <Text style={styles.h}>4.请输入您需要家教的科目：</Text>
                    <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                    onChangeText={(Text)=>this.getValue7(Text)}/>
                    <List>
                    <Text style={styles.h}>5.您要找的家教的性别：</Text>
                    <RadioItem
                        checked={this.state.sex === "男"}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ sex: "男" });
                            }
                        }}
                    >
                        男
                    </RadioItem>
                    <RadioItem
                        checked={this.state.sex === "女"}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ sex: "女" });
                        }
                        }}
                    >
                        女
                    </RadioItem>
                    <RadioItem
                        checked={this.state.sex === "男女不限"}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ sex: "男女不限" });
                        }
                        }}
                    >
                        男女不限
                    </RadioItem>
                </List>
                <List>
                    <Text style={styles.h}>6.您要找的家教的时间：</Text>
                    <RadioItem
                        checked={this.state.time === "长期"}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ time: "长期" });
                            }
                        }}
                    >
                        长期
                    </RadioItem>
                    <RadioItem
                        checked={this.state.time === "短期"}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ time: "短期" });
                        }
                        }}
                    >
                        短期
                    </RadioItem>
                </List>
                <List>
                    <Text style={styles.h}>7.您预计的工资结算间隔：</Text>
                    <RadioItem
                        checked={this.state.salary === "周结"}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ salary: "周结" });
                            }
                        }}
                    >
                        周结
                    </RadioItem>
                    <RadioItem
                        checked={this.state.salary === "日结"}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ salary: "日结" });
                        }
                        }}
                    >
                        日结
                    </RadioItem>
                    <RadioItem
                        checked={this.state.salary === "次结"}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ salary: "次结" });
                        }
                        }}
                    >
                        次结(不计时间，补课完成结算)
                    </RadioItem>
                </List>
                    <Text style={styles.h}>8.请输入您预计薪资（按小时结算，输入阿拉伯数字即可）：</Text>
                    <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                    onChangeText={(Text)=>this.getValue6(Text)}/>
                    <Text style={styles.h}>9.其他要求：</Text>
                    <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                    onChangeText={(Text)=>this.getValue5(Text)}/>


                <Button 
                    onPress={()=>this.submit()}
                    title="提交"
                />
                <View style={{height:60*s}}></View>
                <Text style={{fontSize:24*s}}>我发布过的家教信息:</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={{ alignItems: 'center' }} >
                            <View style={styles.box3}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '12%' }}><View style={styles.zh1}></View></View>
                                    <View style={styles.zh2}><Text style={{ fontSize: 25, fontWeight: "bold" }}>{item.kemu}</Text></View>
                                    <View style={styles.zh3}><Text style={{ color: '#00FF00', fontSize: 23 }}>{item.price}/小时</Text></View>
                                    <TouchableOpacity onPress={()=>this.delete(item.id)}>
                                        <Text 
                                        style={{
                                            fontSize:54*s,
                                            marginLeft:60*s,
                                            color:'red'
                                            }}>
                                                ×
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginLeft:'12%',marginTop:'3%'}}>
                                    <Text style={styles.zfont}>{item.addrss}</Text>
                                </View>
                                <View style={{marginLeft:'12%',marginTop:'3%',flexDirection:'row'}}>
                                   <View style={{width:'20%'}}><Text style={styles.zfont}>{item.salary}</Text></View>
                                   <View style={{width:'20%'}}><Text style={styles.zfont}>{item.time}</Text></View>
                                   <View style={{width:'40%'}}><Text style={styles.zfont}>{item.sex}</Text></View>
                                   <TouchableOpacity 
                                    style={{width:'10%',marginTop:-10*s}}  onPress={()=>this.lookfor(item.id)}>
                                       <Image style={styles.zimg} source={require('../../../assets/zx/right.png')} ></Image>
                                   </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    )}
                ></FlatList>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tit:{
        fontSize:26*s,
        marginTop:10*s,
        marginBottom:30*s,
        borderColor:"blue",
        borderWidth:2*s,
        width:'95%',
        marginLeft:'2.5%',
        borderRadius:25*s,
        paddingLeft:15*s,
        paddingBottom:15*s,
        paddingTop:15*s,
        paddingRight:15*s
    },
    h:{
        fontSize: 24*s,
        backgroundColor:'#eee',
        paddingTop:10*s,
    },
    box3: {
        height: 190 * s,
        width: '95%',
        backgroundColor: 'white',
        marginTop: 20 * s,
        borderRadius: 10 * s
    },
    zh1: {
        width: 20 * s,
        height: 20 * s,
        borderRadius: 10 * s,
        backgroundColor: '#00FF00',
        marginTop: 20 * s,
        marginLeft: 20 * s,

    },
    zh2: {
        width: '50%',
        marginTop: 10 * s,
    },
    zh3: {
        marginTop: 10 * s
    },
    zfont:{
        fontSize:16,
        color:'#2F4F4F'
    },
    zimg:{
        width:50*s,
        height:50*s,
        resizeMode:'stretch'
    }
})