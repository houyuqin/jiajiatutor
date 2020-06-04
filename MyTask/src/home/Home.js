import React, { Component } from 'react';
import { 
    Text, 
    View, 
    ScrollView, 
    StyleSheet, 
    Dimensions,
    Image,
    TouchableOpacity, 
    Button,
    AsyncStorage
} from 'react-native';
import { Actions} from 'react-native-router-flux';
import { Carousel,Tabs } from '@ant-design/react-native';

const {width,scale} = Dimensions.get('window');
const s = width / 640;
const tabs = [
    {title:'教师推荐'},
    {title:'视频推荐'}
]
export default class Home extends Component {
    course=(select)=>{
        let ke = {kemu:select};
        AsyncStorage.setItem('kemu',JSON.stringify(ke))
        .then(()=>{
            console.log(ke);
            Actions.course();
        });
        
    }
    render() {
        return (
            <View>
                
                <View style={styles.tit}>
                        <Text style={styles.title}>佳+家教</Text>
                </View>
                <ScrollView>
                {/* 轮播图 */}
                <View>
                
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={2}
                    autoplay
                    infinite
                    afterChange={this.onHorizontalSelectedIndexChange}
                >
                    <View
                    style={styles.cra}
                    >
                        <Image 
                            source={require('../../assets/hyq/lunlun1.jpg')}
                            style={styles.cro} 
                        />
                    </View>
                    <View
                    style={styles.cra}
                    >
                        <Image 
                            source={require('../../assets/hyq/lunlun2.jpg')}
                            style={styles.cro} 
                        />
                    </View>
                    <View
                    style={styles.cra}
                    >
                        <Image 
                            source={require('../../assets/hyq/lunlun.jpg')}
                            style={styles.cro} 
                        />
                    </View>
                </Carousel>
                </View>

                {/* 分科 */}
                <View
                    style={styles.cou}
                >              
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('chinese')}
                    >
                        <Image 
                            source={require('../../assets/hyq/语文.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>语文</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('math')}
                    >
                        <Image 
                            source={require('../../assets/hyq/数学.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>数学</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('english')}
                    >
                        <Image 
                            source={require('../../assets/hyq/英语.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>英语</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('physical')}
                    >
                        <Image 
                            source={require('../../assets/hyq/物理.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>物理</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('chemistry')}
                    >
                        <Image 
                            source={require('../../assets/hyq/化学.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:10*s}}
                        />
                        <Text>化学</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('bios')}
                    >
                        <Image 
                            source={require('../../assets/hyq/生物.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>生物</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('political')}
                    >
                        <Image 
                            source={require('../../assets/hyq/政治.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>政治</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('history')}
                    >
                        <Image 
                            source={require('../../assets/hyq/历史.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>历史</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('geography')}
                    >
                        <Image 
                            source={require('../../assets/hyq/地理.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>地理</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={styles.course}
                        onPress={()=>this.course('exec')}
                    >
                        <Image 
                            source={require('../../assets/hyq/美术.png')}
                            style={{width:60*s,height:60*s,marginLeft:10*s,marginTop:20*s}}
                        />
                        <Text>美术</Text>
                    </TouchableOpacity> 
                </View>

                {/* 广告 */}
                <TouchableOpacity onPress={Actions.ad}>
                    <Image source={require('../../assets/hyq/add.jpg')} style={styles.ad} />
                </TouchableOpacity>

                {/* 推荐 */}
                <View style={{height:430*s}}>
                    <Tabs tabs={tabs}> 
                        <View style={styles.ooo}>
                            <View style={{flexDirection:'row'}}>
                            <Image style={styles.tea} source={require('../../assets/hyq/111.jpg')}/>   
                            <View style={{paddingTop:50*s}}>
                                <Text style={styles.tch}>姓名：吴金雅</Text>
                                <Text style={styles.tch}>年龄：23</Text>
                                <Text style={styles.tch}>毕业院校：河北师范大学</Text>
                                <Text style={styles.tch}>目前职业：物理教师</Text>
                            </View>
                            </View>
                            <TouchableOpacity onPress={Actions.goodtea}  style={{backgroundColor:'white',height:47*s,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#708090'}}>了解更多>>></Text>
                            </TouchableOpacity>
                            {/* <Button title='了解更多>>>' onPress={Actions.goodtea} /> */}
                        </View>
                        <View style={styles.ooo}>
                            <Image style={styles.ved} source={require('../../assets/hyq/vedio00.png')}/>
                            <TouchableOpacity onPress={Actions.vedio} style={{backgroundColor:'white',height:47*s,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#708090'}}>了解更多>>></Text>
                            </TouchableOpacity>
                        </View>
                    </Tabs>
                </View>
                {/* 问卷 */}
                <TouchableOpacity onPress={Actions.question} style={{height:215*s}}>
                    <Image source={require('../../assets/hyq/wenjuan.jpg')} />
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    tch:{
        color:'white',
        fontSize:24*s,
        marginTop:10*s
    },
    tea:{
        width:200*s,
        height: 250*s,
        marginLeft:40*s,
        marginRight:40*s,
        marginTop:25*s,
        marginBottom:25*s
    },
    ved:{
        width:'100%',
        height:300*s
    },
    ooo:{
        width:'100%',
        height: 350*s,
        backgroundColor:'#4a83ba'
    },
    tit:{
        height: 73*s,
        width: '100%',
        backgroundColor: '#708090',
        // backgroundColor: 'rgb(50, 84, 107)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        color: 'white',
        fontSize:35*s
    },
    cra:{
        width: '100%',
        height: 350*s
    },
    cro:{
        width: '100%',
        height: 350*s
    },
    cou:{
        width:'100%',
        height: 230*s,
        paddingTop: 10*s,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center'
    },
    course:{
        width:128*s,
        height:100*s,
        flexDirection:'column',
        alignItems:'center'
    },
    ad: {
        width:'100%',
        height: 220*s,
    },
})