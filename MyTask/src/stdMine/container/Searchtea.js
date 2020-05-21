import React, { Component } from 'react'
import { district } from 'antd-mobile-demo-data';
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
import { List, Radio, Picker, DatePicker, Provider } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';

const {width} = Dimensions.get('window');
const s = width/640;
const RadioItem = Radio.RadioItem;

const data = require('@bang88/china-city-data');

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
            leixing:"",
            value: []
          };
        this.onPress = () => {
          setTimeout(() => {
            this.setState({
              data: district,
            });
          }, 500);
        };
        this.onChange = value => {
          this.setState({ value })
        };
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
    // getValue4 = (e)=>{
    //     console.log(e);
    //     this.setState({
    //         address:e
    //     })
    // }
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
    }
    submit = ()=>{
        let a = this.state.value;
            a.join(',');
        console.log(this.state);
        let body = {
            std:this.state.std,
            name:this.state.name,
            class:this.state.class,
            address:a,
            kemu:this.state.kemu,
            sex:this.state.sex,
            time:this.state.time,
            salary:this.state.salary,
            price:this.state.price,
            request:this.state.request,
            leixing:this.state.leixing
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
            <View style={{flex:1}}>
                <TouchableOpacity 
                    onPress={Actions.fabuguo}
                    style={styles.cengjing}
                >
                    <Text>我发布过的寻找家教信息</Text>
                </TouchableOpacity>
                <Text style={styles.h}>请选择您家的家庭住址：</Text>
                    <Provider style={{height:30*s}}>
                        <View style={{
                            width: '100%',
                            height: 40 * s,
                            marginTop: 20 * s,
                            marginBottom:69*s,
                            borderWidth: 2,
                            borderColor: '#3fcccb'
                        }}>
                            <List>
                                <Picker
                                    data={data}
                                    cols={3}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                >
                                <List.Item 
                                    arrow="horizontal" 
                                    // onPress={this.onPress}
                                >
                                    省市选择
                                </List.Item>
                                </Picker>
                            </List>
                        </View>
                    </Provider>
                <View style={styles.bott}>
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
                    <Text style={styles.h}>3.请输入您需要家教的科目：</Text>
                    <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                    onChangeText={(Text)=>this.getValue7(Text)}/>
                    <List>
                    <Text style={styles.h}>5.您要找的家教的类型：</Text>
                    <RadioItem
                        checked={this.state.leixing === "周末"}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ leixing: "周末" });
                        }
                        }}
                    >
                        周末
                    </RadioItem>
                    <RadioItem
                        checked={this.state.leixing === "其他"}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ leixing: "其他" });
                            }
                        }}
                    >
                        其他
                    </RadioItem>
                </List>
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
                
                </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bott:{
        width:'100%',
        height:850*s
    },
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
    cengjing:{
        backgroundColor:'#00ff00',
        height:40*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
})
                    {/* <ModalDropdown 
                        options={['北京', '河北石家庄','河北衡水']} 
                        style={{height:40*s,width:'40%'}}
                    /> */}
                    {/* <Provider style={{height:30*s}}>
                    <View style={{
                            width: '100%',
                            height: 69 * s,
                            marginTop: 20 * s,
                            borderBottomWidth: 3,
                            borderBottomColor: '#3fcccb'
                        }}>
                        <List>
                            <DatePicker
                                value={this.state.value}
                                onChange={this.onChange}
                            >
                                <List.Item arrow="horizontal"  >发布时间:</List.Item>
                            </DatePicker>
                        </List>
                    </View>
                </Provider> */}