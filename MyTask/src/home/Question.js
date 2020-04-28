import React, { Component } from 'react'
import { ScrollView,Button,Text,View, StyleSheet,Input, TextInput, Dimensions } from 'react-native';
import { List, Radio, WhiteSpace,Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const RadioItem = Radio.RadioItem;
const {width,scale} = Dimensions.get('window');
const s = width / 640; 

export default class Question extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            one:"" ,// 定义选中的值，如果为空字符串，则默认不选中
            two:"",
            three:"",
            four:"",
            five:"",
            six:"",
        }
    }

    getValue5 = (e)=>{
        console.log(e);
        this.setState({
            five:e
        })
    }
    getValue6 = (e)=>{
        console.log(e);
        this.setState({
            six:e
        })
    }

    submit = ()=>{
        console.log(this.state)
        fetch("http://148.70.183.184:8000/question",{
            method:"POST",
            headers:{
                'Content-Type': 'text/plain; charset=UTF-8',
            },
            body:JSON.stringify(this.state)
        }).then((res)=>{ 
            if(res.status === 200){
                alert(JSON.stringify(this.state)+'提交成功！');
                return res.json();
            }else{
                ToastAndroid('该昵称已提交或提交字段过长！',ToastAndroid.SHORT);
            }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    render(){
        return (
            <View>
                <View  style={styles.nav}>
                    <Icon name="left" style={styles.left} onPress={Actions.home} />
                    <Text
                        style={styles.tit}
                    >问卷调查</Text>
                </View>
            <ScrollView>
                <List>
                    <Text style={styles.h}>1.您是否有过家教？</Text>
                    <RadioItem
                        checked={this.state.one === "有过家教"}
                        onChange={event => {
                            if (event.target.checked) {
                                this.setState({ one: "有过家教" });
                            }
                        }}
                    >
                        有过家教
                    </RadioItem>
                    <RadioItem
                        checked={this.state.one === "没有过家教"}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ one: "没有过家教" });
                        }
                        }}
                    >
                        没有过家教
                    </RadioItem>
                </List>
                <List style={{ marginTop:5*s }}>
                    <Text style={styles.h}>2.您的家教补习的科目？</Text>
                    <RadioItem
                        checked={this.state.two === '薄弱的科目'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ two: '薄弱的科目' });
                        }
                        }}
                    >
                        薄弱的科目
                    </RadioItem>
                    <RadioItem
                        checked={this.state.two === '喜欢的科目'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ two: '喜欢的科目' });
                        }
                        }}
                    >
                        喜欢的科目
                    </RadioItem>
                    <RadioItem
                        checked={this.state.two === '所有科目都补习'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ two: '所有科目都补习' });
                        }
                        }}
                    >
                        所有科目都补习
                    </RadioItem>
                </List>
                <List style={{ marginTop:5*s }}>
                    <Text style={styles.h}>3.您希望家教教师的学历？</Text>
                    <RadioItem
                        checked={this.state.three === '学历至少本科'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ three: '学历至少本科' });
                        }
                        }}
                    >
                        学历至少本科
                    </RadioItem>
                    <RadioItem
                        checked={this.state.three === '学历至少专科'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ three: '学历至少专科' });
                        }
                        }}
                    >
                        学历至少专科
                    </RadioItem>
                    <RadioItem
                        checked={this.state.three === '在职教师'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ three: '在职教师' });
                        }
                        }}
                    >
                        在职教师
                    </RadioItem>
                </List>
                <List style={{ marginTop:5*s }}>
                    <Text style={styles.h}>4.您有在辅导机构补习上课吗？</Text>
                    <RadioItem
                        checked={this.state.four === '有'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ four: '有' });
                        }
                        }}
                    >
                        有
                    </RadioItem>
                    <RadioItem
                        checked={this.state.four === '没有'}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ four: '没有' });
                        }
                        }}
                    >
                        没有
                    </RadioItem>
                </List>
                <Text style={styles.h}>5.关于家教，您还有何需求？</Text>
                <TextInput style={{width:'100%',backgroundColor:'#fff'}}
                onChangeText={(Text)=>this.getValue5(Text)}/>
                <Text style={styles.h}>6.您觉得佳+家教还有何不足？</Text>
                <TextInput style={{width:'100%',backgroundColor:'#fff',marginBottom:20*s}}
                onChangeText={(Text)=>this.getValue6(Text)}/>
                
                <Button 
                    onPress={()=>this.submit()}
                    title="提交"
                />
                <View style={{height:190}}></View>
            </ScrollView>          
        </View>
        )
     }
}
const styles = StyleSheet.create({
    nav:{
        width:'100%',
        height:64*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#708090'
    },
    tit:{
        width:'60%',
        color:'#fff',
        fontSize:26*s
    },
    left:{
        width:'40%',
    },
    h:{
        height: 50*s,
        fontSize: 24*s,
        backgroundColor:'#eee',
        paddingTop:10*s,
    },
    span:{
        fontSize:16*s
    }
})
