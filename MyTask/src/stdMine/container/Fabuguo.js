import React, { Component } from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    Dimensions,
    FlatList,
    TouchableOpacity,
    Image,
    AsyncStorage
} from 'react-native'
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width/640;
export default class Fabuguo extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
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
    componentDidUpdate(){
        fetch("http://148.70.183.184:8000/search")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    lookfor=(num)=>{
        fetch("http://148.70.183.184:8000/search/"+num)
        .then(res=>res.json())
        .then(res=>{
            // console.log(res.data)
            let body = res.data;
            AsyncStorage.setItem('hdetail',JSON.stringify(body))
            .then(res=>{
                console.log(JSON.stringify(body));
                Actions.jobxiangg();
            });
        })
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
    render() {
        return (
            <View>
                {/* <Text style={{fontSize:24*s}}>我发布过的家教信息:</Text> */}
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
            </View>
        )
    }
}
const styles = StyleSheet.create({
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