import React, { Component } from 'react'
import { Text, View,FlatList ,Dimensions} from 'react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class Jihuacontent extends Component {
    constructor(props)
    {
        super(props)
      this.state={
          content:''
      }
    }

    componentDidMount() {
        fetch(`http://148.70.183.184:8005/jihuacontent/${this.props.id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },

        }).then((res) => res.json())
            .then((res) => {
                
                this.setState({ content: res.data })
                console.log()
            })
    }

    render() {
        return (
            <View>
               <View style={{ width: '95%', backgroundColor: 'white', marginTop: 20 * s, marginLeft: 15 * s, borderRadius: 10, paddingTop: 20 * s, paddingLeft: 30 * s, paddingBottom: 20 * s ,borderColor:'#708090',borderWidth:2*s }}>
                        <FlatList
                            data={this.state.content}
                            renderItem={({ item }) => (
                                <View>
                                    <View style={{ width: '90%' }}>
                                        <Text style={{fontSize:25}}>我的计划：</Text>
                                        <Text style={{ fontSize: 22, marginTop: 20 * s }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.jihua}</Text>
                                    </View>
                                </View>
                            )}
                        ></FlatList>
                    </View>
            </View>
        )
    }
}
