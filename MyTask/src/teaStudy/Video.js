
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
import NaviBar from 'react-native-pure-navigation-bar';
import { Actions } from 'react-native-router-flux';
import RadioModal from 'react-native-radio-master';
const { width, scale } = Dimensions.get('window');
const s = width / 640;


export default class TeaStudy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initItem: '',
            initId: '0',
        };
    }
    //选择科目
    selected(data) {
    this.setState({ initId: data.id, initItem: data.item })
    }
 
    //点击发布
    add=()=>{
        console.log(this.state.initItem)
    }
    render() {
        return (
            <View>

                {/* <NaviBar
                    style={{ color: 'white', backgroundColor: 'black' }}
                    backgroundColor='black'
                    color='white'
                    title={'上传视频'}
                    onLeft={() => Actions.teastudy()}
                /> */}
                <View>
                    <View style={{
                        width: '95%', height: 700 * s, backgroundColor: 'white', marginTop: 20 * s, marginLeft: 15 * s,
                        borderRadius: 10, paddingTop: 20 * s, paddingLeft: 30 * s
                    }}>
                        <View style={{ width: '90%', height: 200 * s, borderBottomWidth: 1, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <View><Text style={{ fontSize: 17 }}>视频科目：</Text></View>


                            <View  style={{flex:1,flexDirection:'row',width:'100%'}}>
                                <RadioModal
                                    selectedValue={this.state.initId+1}
                                    onValueChange={(id,item) => this.selected({id,item})}
                                    style={{
                                        flexDirection: 'column',
                                        flexWrap: 'wrap',
                                        alignItems: 'flex-start',
                                        flex:1,
                                        backgroundColor: '#ffffff', padding: 5, marginTop: 10,
                                        width:'20%'
                                    }}
                                >
                                    <Text value="0">bios</Text>
                                    <Text value="1" >chemistry</Text>
                                    <Text value="2">chinese</Text>
                                    <Text value="3">english</Text>
                                    <Text value="4">geography</Text>
                                    <Text value="5" >history</Text>
                                    <Text value="6">math</Text>
                                    <Text value="7">painting</Text>
                                    <Text value="8">physical</Text>
                                    <Text value="9">political</Text>
                                </RadioModal>
                            </View>

                        </View>
                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 10 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>视频名称：</Text>
                            <View style={{ width: '70%', height: 80 * s, marginTop: -10 * s, paddingLeft: 20 * s, fontSize: 17 }}>
                                <TextInput
                                    placeholder="请输入视频名称"
                                    onChangeText={this.userhandle}
                                />
                            </View>
                        </View>


                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>价格：    ￥</Text>
                            <View style={{ width: '50%', height: 80 * s, marginTop: -10 * s, paddingLeft: 10 * s, fontSize: 17 }}>
                                <TextInput
                                    placeholder="请输入价格"
                                    onChangeText={this.userhandle}
                                />
                            </View>

                        </View>
                        <View style={{ width: '90%', height: 70 * s, borderBottomWidth: 1, marginTop: 25 * s, borderBottomColor: 'rgb(204, 202, 202)', flexDirection: 'row', }}>
                            <Text style={{ fontSize: 17 }}>上传视频：</Text>
                            <View style={{ width: '50%', height: 80 * s, marginTop: -10 * s, paddingLeft: 20 * s, fontSize: 17 }}>
                                <TextInput
                                    placeholder="请输入价格"
                                    onChangeText={this.userhandle}
                                />
                            </View>

                        </View>

                        <TouchableOpacity onPress={this.add}>
                            <Text style={{ width: 80 * s, height: 50 * s, marginTop: 20 * s, marginLeft: 440 * s, borderRadius: 13, paddingLeft: 12 * s, fontSize: 16, color: 'white', paddingTop: 7 * s, backgroundColor: '#2f618b' }}>发布</Text>
                        </TouchableOpacity>
                    </View>





                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        justifyContent: "space-between"
    },
    radioContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    innerStyle: {
        height: 50
    }
});
