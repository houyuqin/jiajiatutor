import React, { Component } from 'react'
import { Text, View ,Dimensions} from 'react-native'
import { List, Radio, WhiteSpace } from '@ant-design/react-native';
import { NoticeBar ,Icon, InputItem} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

const RadioItem = Radio.RadioItem;
const {width} = Dimensions.get('window');
const s = width/640;
export default class quanxian extends Component {
    constructor() {
        super(...arguments);
        this.state = {
          part1Value: 1,
          part2Value: 1,
        };
    }
    baocun = ()=>{
        console.log('baocun')
    }
    render() {
        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',height:75*s,alignItems:'center',backgroundColor:'#708090'}}>
                    <View style={{marginLeft:15*s}}><Icon name="left" style={{color:'black',color:'lightgray'}} onPress={Actions.pop}/></View>                    
                    <Text style={{fontSize:19,color:'white'}}>设置</Text>
                    <Text style={{marginRight:15*s}} onPress={()=>this.baocun()}>保存</Text>
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
                        公开
                    </RadioItem>
                    <RadioItem
                        checked={this.state.part2Value === 2}
                        onChange={event => {
                        if (event.target.checked) {
                            this.setState({ part2Value: 2 });
                        }
                        }}
                    >
                        私密
                    </RadioItem>
                </List>
            </View>
        )
    }
}
