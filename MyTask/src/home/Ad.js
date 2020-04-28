import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView, Dimensions } from 'react-native'
import { Icon } from '@ant-design/react-native';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Ad extends Component {
    render() {
        return (
            <View>
                
                <View
                    style={{
                        width:'100%',
                        height:64*s,
                        backgroundColor:'#708090',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center'
                    }}

                >
                    <Text style={{color:'white',fontSize:20}}>广告</Text>
                </View>
                <ScrollView>
                <View style={styles.imgs}>
                    <Image source={require('../../assets/hyq/guanggao1.jpg')} 
                        alt=''
                        style={styles.img}
                    />
                    <Image source={require('../../assets/hyq/guanggao2.jpg')}
                        alt=''
                        style={styles.img}
                    />
                    <Image source={require('../../assets/hyq/guanggao3.jpg')}
                        alt=''
                        style={styles.img}
                    />
                    <Image source={require('../../assets/hyq/guanggao4.jpg')}
                        alt=''
                        style={styles.img}
                    /> 
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    imgs:{
        width:'100%',
        flexDirection:'column',
        flexWrap:'wrap'
    },
    img:{
        width:'100%',
        height: 260*s,
        marginTop:10*s
    }
});

// import React, { Component } from 'react'
// import { NavBar, Icon } from 'antd-mobile';

// export default class Ad extends Component{
    // rtn=()=>{
    //     this.props.history.go(-1);
    // }

//     render(){
//     return (
//         <div 
//         style={{width:'100%',height:736,}}>
//             <NavBar
                
//                 style={{backgroundColor:'rgb(50, 84, 107)'}}
//                 icon={<Icon type="left" />}
//                 onLeftClick={this.rtn}
//             >广告</NavBar>

            // <div style={{textAlign:'center',paddingTop:'10px'}}>
            // <img src='./img/guanggao1.jpg' 
            //     alt=''
            //     style={{width:'100%',float:'left'}}
            // />
            // <img src='./img/guanggao2.jpg' 
            //     alt=''
            //     style={{width:'100%',marginTop:'10px',float:'left'}}
            // />
            // <img src='./img/guanggao3.jpg' 
            //     alt=''
            //     style={{width:'100%',marginTop:'10px',float:'left'}}
            // />
            // <img src='./img/guanggao4.jpg' 
            //     alt=''
            //     style={{width:'100%',marginTop:'10px',float:'left'}}
            // />
                
            // </div>


            
//         </div>
//     )}
   
// }