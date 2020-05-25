import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, FlatList, AsyncStorage,TouchableOpacity,Alert } from 'react-native'
import { Icon, Carousel, DatePicker, List, Provider, TextareaItem } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class Jihua extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Date(),
            value1: undefined,
            list: ['2', '3', '4'],
            name:'',
            text:'',
            usr:''
        };
        this.onChange = value => {
            this.setState({ value });
        };
        this.onChange1 = value => {
            this.setState({ value1: value });
        };

    }
    text=(e)=>{
   this.setState({text:e})
    }
    componentDidMount(){
        AsyncStorage.getItem('std', (err, result) => {
            this.setState({ usr: JSON.parse(result) })
        fetch(`http://148.70.183.184:8006/stdmine/${this.state.usr}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                   this.setState({name:res.data[0].wusername})
                   
            })
        })

    }
    add=()=>{
       var body={};
       body.usr=this.state.usr;
       body.name=this.state.name;
       body.starttime=this.state.value;
       body.endtime=this.state.value1;
       body.jihua=this.state.text;
       if(body.endtime==undefined||body.jihua==undefined)
       {
           Alert.alert('您的信息不完善无法发布，请重新填入！')
       }
       else{
        fetch("http://148.70.183.184:8005/jihua", {
            method: "POST",
            headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(body)
          }).then((res)=>{
            Alert.alert('您的计划发布完毕！')
            
          }
          )
       }
     
    }
    render() {
        return (


            <View style={{ flex: 1 }}>
                {/* 轮播图 */}
                <View style={{ height: 320 * s }}>
                    <Carousel autoplay infinite>
                        <View style={styles.lunbo}>
                            <Image style={styles.lunimg} source={require('../../../assets/zx/lun3.jpg')}></Image>
                        </View>
                        <View style={styles.lunbo}>
                            <Image style={styles.lunimg} source={require('../../../assets/zx/lun2.jpg')}></Image>
                        </View>
                        <View style={styles.lunbo}>
                            <Image style={styles.lunimg} source={require('../../../assets/zx/lun1.jpg')}></Image>
                        </View>
                    </Carousel>
                </View>
                {/* 标题 */}
                <View style={styles.jihua}><Text style={{ fontSize: 22 }}>我的计划</Text></View>
                {/* 日期选择 */}
                {/* <View style={styles.date}> */}

                <Provider style={{height:30*s}}>
                    <View style={styles.date} >
                        <List >
                            <DatePicker
                                value={this.state.value}
                                onChange={this.onChange}
                            >
                                <List.Item arrow="horizontal"  >发布时间:</List.Item>
                            </DatePicker>
                        </List>
                    </View>
                    <View style={styles.date}>
                        <List>
                            <DatePicker
                                value={this.state.value1}
                                minDate={new Date()}
                                onChange={this.onChange1}

                            >
                                <List.Item arrow="horizontal" >截止时间:</List.Item>
                            </DatePicker>
                        </List>
                    </View>
                </Provider>
                {/* 计划 */}
               <View style={styles.plan}><Text>My Plan</Text></View>
                {/* 计划输入框 */}
                <View>
                    <List>
                        <TextareaItem
                            rows={6}
                            placeholder="在此输入我的计划"
                            placeholderTextColor='#8B7E66'
                            count={500}
                            style={{ paddingVertical: 5 }}
                            onChange={this.text}
                        />
                    </List>
                </View>
                {/* 对勾 */}
                <TouchableOpacity onPress={this.add} style={{ justifyContent: 'center', alignItems: 'center',marginTop:20*s,marginBottom:20*s }}>
                    <Image style={{ resizeMode: 'stretch', height: 60 * s, width: 60 * s }} source={require('../../../assets/zx/z8.png')}></Image>
                </TouchableOpacity>
               <View style={{justifyContent:'center',alignItems:'center'}}>
               <TouchableOpacity style={styles.tab} onPress={()=>Actions.Myjihua({'usr':this.state.usr})}><View><Text style={{fontSize:22}}>查看我的计划>></Text></View></TouchableOpacity>
               </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    lunbo: {
        height: 320 * s
    },
    lunimg: {
        resizeMode: 'stretch',
        height: 320 * s,
        width: '100%'
    },
    jihua: {
        height: 50 * s,
        width: '100%',
        justifyContent: 'center'
    },
    date: {
        width: '100%',
        height: 69 * s,
        marginTop: 20 * s,
        borderBottomWidth: 3,
        borderBottomColor: '#3fcccb'
    },
    plan: {
        width: '100%',
        height: 50 * s,
      marginTop:30*s,
        justifyContent: 'center',
        alignItems: 'center',
 

    },
    bold: {
        width: '95%',
        height: 80 * s,
        borderWidth: 3,
        borderColor: '#3fcccb',
        flexDirection: 'row',
        marginTop: 3
    },
    tab:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:40*s,
        width:250*s,
        borderColor:'#3fcccb',
        borderWidth:3,
        borderRadius:10*s,
        marginBottom:30*s
    }

})