import React, { Component } from 'react'
import { Text, View,Dimensions,AsyncStorage } from 'react-native'
import { List, Radio, WhiteSpace } from '@ant-design/react-native';
import { NoticeBar ,Icon, InputItem} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

const RadioItem = Radio.RadioItem;
const {width} = Dimensions.get('window');
const s = width/640;

export default class wxinqing extends Component {
    constructor() {
        super();
        this.state = {
          part2Value: 1,
        };
    }
    baocun = ()=>{
        AsyncStorage.setItem('xinqingfabutea',JSON.stringify(this.state.part2Value),()=>{console.log('store success')});
        Actions.pop();
    }
    render() {
        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:75*s,alignItems:'center',backgroundColor:'#708090'}}>
                    <View style={{marginLeft:15*s}}><Icon name="left" style={{color:'black',color:'lightgray'}} onPress={Actions.pop}/></View>                    
                    <Text style={{fontSize:19,color:'white'}}>心情</Text>
                    <Text style={{marginRight:15*s,color:'white'}} onPress={()=>this.baocun()}>保存</Text>
                </View>
                <List style={{ marginTop: 12 }}>
                    <RadioItem
                        checked={this.state.part2Value === 1}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ part2Value: 1 });
                        }
                        }}
                    >
                        欢喜
                    </RadioItem>
                    <RadioItem
                        checked={this.state.part2Value === 2}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ part2Value: 2 });
                        }
                        }}
                    >
                        伤感
                    </RadioItem>
                    <RadioItem
                        checked={this.state.part2Value === 3}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ part2Value: 3 });
                        }
                        }}
                    >
                        激动
                    </RadioItem>
                    <RadioItem
                        checked={this.state.part2Value === 4}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ part2Value: 4 });
                        }
                        }}
                    >
                        担忧
                    </RadioItem>
                </List>
            </View>
        )
    }
}
