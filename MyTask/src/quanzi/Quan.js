import React, { Component } from 'react'
import { 
    Text, 
    View, 
    ScrollView, 
    ImageBackground, 
    Dimensions, 
    StyleSheet, 
    Button, 
    Image, 
    TextInput, 
    TouchableOpacity,
    Lightbox 
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

const {width} = Dimensions.get('window');
const s = width/640;

export default class Quan extends Component {
    constructor(){
        super();
        this.state={
            data:'',
            color1:'blue',
            color2:'blue',
            color3:'blue',
            color4:'blue',
        }
    }
    fabu=()=>{
        console.log(111);
        Actions.fabu();
    }
    message=()=>{
        console.log('评论');

    }
    heart1=()=>{
        if(this.state.color1=='blue'){
            this.setState({
                color1:'red'
            })
        }else{
            this.setState({
                color1:'blue'
            })
        }
        
    }
    heart4=()=>{
        if(this.state.color4=='blue'){
            this.setState({
                color4:'red'
            })
        }else{
            this.setState({
                color4:'blue'
            })
        }
        
    }
    heart3=()=>{
        if(this.state.color3=='blue'){
            this.setState({
                color3:'red'
            })
        }else{
            this.setState({
                color3:'blue'
            })
        }
        
    }
    heart2=()=>{
        if(this.state.color2=='blue'){
            this.setState({
                color2:'red'
            })
        }else{
            this.setState({
                color2:'blue'
            })
        }
        
    }
    render() {
        return (
            <View>
                <ImageBackground 
                    style={{width:'100%',height:970*s}}
                    source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3653802198,2630879977&fm=26&gp=0.jpg'}}
                >
                    <ScrollView>
                        <View style={styles.tit}>
                            <View style={styles.btns}>
                                <Text style={{marginRight:20*s}}>筛选动态：</Text>
                                <Button
                                    title='教师'
                                    onPress={this.tea}
                                />
                                <View style={{width:20*s}}></View>
                                <Button
                                    title='学生'
                                    onPress={this.std}
                                />
                            </View>
                            <View>
                                <Button
                                    title='发布动态'
                                    onPress={this.fabu}
                                />
                            </View>
                        </View>
                        <View style={styles.main}>
                            {/* 一个帖子 */}
                            <ImageBackground
                                style={styles.rect}
                                source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2301793017,3070111468&fm=26&gp=0.jpg'}}
                            >
                                <View style={styles.mine}>
                                    <Image 
                                        source={require('../../assets/hyq/000.png')}
                                        style={{width:70*s,height:70*s}}
                                    />
                                    <View style={{paddingTop:10*s,paddingLeft:30*s}}>
                                        <Text style={{fontSize:22*s}}>张三</Text>
                                        <Text>2020-4-27 15:42</Text>
                                    </View>
                                </View>
                                <View style={{paddingLeft:20*s,paddingTop:10*s}}>
                                    <Text style={{fontSize:24*s}}>我今天开始准备考研了</Text>
                                </View>
                                <View style={styles.imgs}>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:'70%'}}>
                                    <TouchableOpacity>
                                        <Icon 
											color={this.state.color1} 
                                            name="heart"
                                            onPress={()=>this.heart1()}
										/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:20*s}}>
                                        <Icon 
											color={'blue'} 
                                            name="message"
                                            onPress={()=>this.message()}
										/>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            {/* 又一个 */}
                            <ImageBackground
                                style={styles.rect}
                                source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2301793017,3070111468&fm=26&gp=0.jpg'}}
                            >
                                <View style={styles.mine}>
                                    <Image 
                                        source={require('../../assets/hyq/000.jpg')}
                                        style={{width:70*s,height:70*s}}
                                    />
                                    <View style={{paddingTop:10*s,paddingLeft:30*s}}>
                                        <Text style={{fontSize:22*s}}>李四</Text>
                                        <Text>2020-4-27 12:42</Text>
                                    </View>
                                </View>
                                <View style={{paddingLeft:20*s,paddingTop:10*s}}>
                                    <Text style={{fontSize:24*s}}>小企鹅很漂亮</Text>
                                </View>
                                <View style={styles.imgs}>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:'70%'}}>
                                    <TouchableOpacity>
                                        <Icon 
											color={this.state.color2} 
                                            name="heart"
                                            onPress={()=>this.heart2()}
										/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:20*s}}>
                                        <Icon 
											color={'blue'} 
                                            name="message"
                                            onPress={()=>this.message()}
										/>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <ImageBackground
                                style={styles.rect}
                                source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2301793017,3070111468&fm=26&gp=0.jpg'}}
                            >
                                <View style={styles.mine}>
                                    <Image 
                                        source={require('../../assets/hyq/000.jpg')}
                                        style={{width:70*s,height:70*s}}
                                    />
                                    <View style={{paddingTop:10*s,paddingLeft:30*s}}>
                                        <Text style={{fontSize:22*s}}>李四</Text>
                                        <Text>2020-4-27 12:42</Text>
                                    </View>
                                </View>
                                <View style={{paddingLeft:20*s,paddingTop:10*s}}>
                                    <Text style={{fontSize:24*s}}>小企鹅很漂亮</Text>
                                </View>
                                <View style={styles.imgs}>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:'70%'}}>
                                    <TouchableOpacity>
                                        <Icon 
											color={this.state.color3} 
                                            name="heart"
                                            onPress={()=>this.heart3()}
										/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:20*s}}>
                                        <Icon 
											color={'blue'} 
                                            name="message"
                                            onPress={()=>this.message()}
										/>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <ImageBackground
                                style={styles.rect}
                                source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2301793017,3070111468&fm=26&gp=0.jpg'}}
                            >
                                <View style={styles.mine}>
                                    <Image 
                                        source={require('../../assets/hyq/000.jpg')}
                                        style={{width:70*s,height:70*s}}
                                    />
                                    <View style={{paddingTop:10*s,paddingLeft:30*s}}>
                                        <Text style={{fontSize:22*s}}>李四</Text>
                                        <Text>2020-4-27 12:42</Text>
                                    </View>
                                </View>
                                <View style={{paddingLeft:20*s,paddingTop:10*s}}>
                                    <Text style={{fontSize:24*s}}>小企鹅很漂亮</Text>
                                </View>
                                <View style={styles.imgs}>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                    <Image source={require('../../assets/hyq/qq.jpg')} style={styles.img}/>
                                </View>
                                <View style={{flexDirection:'row',marginLeft:'70%'}}>
                                    <TouchableOpacity>
                                        <Icon 
											color={this.state.color4} 
                                            name="heart"
                                            onPress={()=>this.heart4()}
										/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{marginLeft:20*s}}>
                                        <Icon 
											color={'blue'} 
                                            name="message"
                                            onPress={()=>this.message()}
										/>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            
                        </View>  
                    </ScrollView>
                    
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    imgs:{
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:7*s,
        paddingRight:20*s
    },
    img:{
        width:90*s,
        height:90*s,
        marginLeft:10*s,
        marginTop:10*s
    },
    mine:{
        width:300*s,
        height:80*s,
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:20*s
    },
    rect:{
        width:'90%',
        marginTop:20*s,
        // height:200*s,
        marginLeft:'10%',
        paddingBottom:20*s
    },
    btns:{
        width:'80%',
        height:54*s,
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        paddingLeft:20*s
    },
    tit:{
        width:'90%',
        height:64*s,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'5%',
        borderColor:'blue',
        borderWidth:2*s,
        borderRadius:20*s
    },
    main:{
        width:'100%'
    }
})