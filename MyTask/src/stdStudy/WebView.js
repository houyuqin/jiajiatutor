import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';
export default class webView extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props.src)
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <WebView source={{ uri: 'http://www.ygjj.com/D445683.html' }} style={{ height: 200, width: 475 }} />
            </View>
        )
    }
}
