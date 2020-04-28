import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid, AsyncStorage , Dimensions} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import TeaStudy from './src/teaStudy/TeaStudy';
import Give from './src/teaStudy/Give';
import Videotea from './src/teaStudy/Video';
import TeaTask from './src/teaStudy/TeaTask';
import Content from './src/teaStudy/Content';
import StdMine from './src/stdMine/StdMine';
// import TeaMine from './src/teaMine/TeaMine';
import Login from './src/component/Login';
import Register from './src/component/Register';
import SwiperPage from './src/common/SwiperPage';
import Spassword from './src/component/Spassword';
import Tpassword from './src/component/Tpassword';
import Ad from './src/home/Ad';
import Course from './src/home/Course';
import GoodTea from './src/home/GoodTea';
import Player0 from './src/home/Player0';
import Question from './src/home/Question';
import Vedio from './src/home/Vedio';
import Buy from './src/home/Buy';
import Study from './src/stdStudy/container/Study'
import jihua from './src/stdStudy/container/Jihua'
import Homework from './src/stdStudy/container/Homework'
import MyStudy from './src/stdStudy/container/Mystudy'
import Video from './src/stdStudy/container/myVideo'
import Contentstd from './src/stdStudy/container/Content';
import Contents from './src/stdStudy/container/Contents';
import Myjihua from './src/stdStudy/container/Myjihua';
import Jihuacontent from './src/stdStudy/container/Jihuacontent';

import WWodeshoucang from './src/stdMine/container/Wodeshoucang'
import WWodedingdan from './src/stdMine/container/Wodedingdan';
import WWodejiaoshi from './src/stdMine/container/Wodelaoshi'
import Wjiaoshipingjia from './src/stdMine/container/Jiaoshipingjia'
import Wyijianfankui from './src/stdMine/container/Yonghufankui'
import shezhi from './src/stdMine/container/shezhi';
import Gerenziliao from './src/stdMine/container/Gerenziliao';
import tongzhi from './src/stdMine/container/tongzhi';

import TeaMine from './src/teaMine/TeaMine';
import WFabuzuoye from './src/teaMine/teacher/Fabuzuoye';
import WWodexuesheng from './src/teaMine/teacher/Wodexuesheng';
import WteaGerenziliao from './src/teaMine/teacher/teaGerenziliao';
import Wteatongzhi from './src/teaMine/teacher/teatongzhi';
import Wteayonghufankui from './src/teaMine/teacher/Yonghufankui';
import Wwodeshouyi from './src/teaMine/teacher/Wodeshouyi';
import Teashezhi from './src/teaMine/teacher/teashezhi';

import Quan from './src/quanzi/Quan';
import Fabu from './src/quanzi/Fabu';
import SwiperPage0 from './src/common/SwiperPage0';

import tHome from './src/teaHome/tHome';
import tContent from './src/teaHome/tContent';
import Zhoumo from './src/teaHome/Zhoumu'
import Other from './src/teaHome/Other'
import Jizhao from './src/teaHome/Jizhao'
import Fujin from './src/teaHome/Fujin'
import Concat from './src/teaHome/Concat';

console.disableYellowBox = true;
const {width} = Dimensions.get('window');
const s = width/640;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'login'){
					// console.log('11');
					Actions.reset('login');
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}else {
					if(Actions.currentScene == 'home'){
						// console.log('22');
						if(new Date().getTime()-now<2000){
							BackHandler.exitApp();
						}else{
							ToastAndroid.show('确定要退出吗',100);
							now = new Date().getTime();
							return true;
						}
					}else{
						Actions.pop();
						return true;
					}
				}
			}}
		>
			<Overlay>
				<Modal key="modal" hideNavBar>
					{/* 学生端 */}
					<Lightbox key="lightbox">
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* Home栏 */}
								<Scene key='homePage'
									title='首页'
									hideNavBar
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
								>
									<Scene key='home'  component={Home}/>
									<Scene key='ad' hideTabBar component={Ad} />
									<Scene key='course' hideTabBar component={Course}/>
									<Scene key='question' hideTabBar component={Question}/>
									<Scene key='goodtea' hideTabBar component={GoodTea}/>
									<Scene key='buy' hideTabBar component={Buy}/>
									<Scene key='player' hideTabBar component={Player0}/>
									<Scene key='vedio' hideTabBar component={Vedio}/>
								</Scene>
								{/* 学习 */}
								<Scene 
									key='goodsPage'
									//hideNavBar
									title='学习'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="file"
										/>
									}
									
								>
									<Scene key='Stustudy' hideNavBar component={Study}></Scene>
									<Scene key='jihua'
										title='学习计划'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={jihua} ></Scene>
									<Scene key='Myjihua'
										title='我的计划'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Myjihua} ></Scene>
									<Scene key='jihuacontent'
										title='计划内容'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Jihuacontent} ></Scene>
									<Scene key='homework'
										title='我的作业'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Homework} ></Scene>
									<Scene key='lianxi'
										title='自我练习'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={MyStudy} ></Scene>
									<Scene key='video'
										title='我的视频'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Video} ></Scene>
									<Scene key='content'
										title='查看详情'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Contentstd} ></Scene>
									<Scene key='contents'
										title='查看详情'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Contents} ></Scene>
								</Scene>
								{/* 圈子 */}
								<Scene
									key='quanzi'
									initial
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='compass'/>
										}
									title="圈子"
								>
									<Scene key='quan'
										title='社交圈子'
										initial
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center' }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Quan} 
									></Scene>
									<Scene key='fabu'
										title='发布动态'
										hideTabBar
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center',marginLeft:-30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Fabu} 
									></Scene>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									// hideNavBar
									// hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='user'/>
										}
									title="我的"
								>
								<Scene 
										key='stdmine' 
										title='个人中心' 
										component={StdMine}
										titleTextColor='white'
										navigationBarStyle={{backgroundColor:'#5d93c0'}}
										renderLeftButton={<View></View>}
										renderRightButton={
											<Icon style={{color:'white',marginRight:10*s,marginLeft:10*s}} name="bell" onPress={()=>Actions.tongzhi()}/>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white',backgroundColor:'#5d93c0'}}
									/>
									<Scene 
										key='wwodeshoucang' 
										title='我的收藏' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										component={WWodeshoucang}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
									/>
									<Scene 
										key='wwodedingdan' 
										title='我的订单' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
										component={WWodedingdan}
									/>
									<Scene 
										key='wwodejiaoshi' 
										title='我的教师' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
										component={WWodejiaoshi}
									/>
									
									<Scene 
										key='wzuoyepingjiaqingkuang' 
										title='作业评价情况' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
										component={Wjiaoshipingjia}
									/>
									<Scene 
										key='wyijianfankui' 
										title='意见反馈' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
										component={Wyijianfankui}
									/>
									<Scene
										key="wshezhi"
										title='设置' 
										hideNavBar
										component={shezhi}
									/>
									<Scene
										key="wgerenziliao"
										title='个人资料' 
										hideNavBar
										component={Gerenziliao}
									/>
									<Scene
										key="tongzhi"
										title='通知'
										component={tongzhi}
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
									/>
								</Scene>
								
							</Tabs>
						</Scene>
					</Lightbox>
					{/* 教师端 */}
					<Lightbox key="lightbox1">
						<Scene key="root">
							<Tabs 
								key='tabbar'
								//hideNavBar
								activeTintColor="red"
								inactiveTintColor="blue"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* Home栏 */}
								<Scene key='homePage'
									title='首页'
									//hideNavBar
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="home"
										/>
									}
								>
									<Scene key='thome'
										title='首页'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: 'rgb(29, 37, 110)' }}
										component={tHome} />
									<Scene key='tfujin'
										title='附近家教'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: 'rgb(29, 37, 110)' }}
										component={Fujin} />
									<Scene key='tzhoumo'
										title='周末家教'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: 'rgb(29, 37, 110)' }}
										component={Zhoumo} />
									<Scene key='tjizhao'
										title='急招家教'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: 'rgb(29, 37, 110)' }}
										component={Jizhao} />
									<Scene key='jobxiang'
										title='招聘详情'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: 'rgb(29, 37, 110)' }}
										component={tContent} />
									<Scene key='tother'
										title='其他兼职'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: 'rgb(29, 37, 110)' }}
										component={Other} />
									<Scene key='concat'
										title='联系我'
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -20 }}
										navigationBarStyle={{ backgroundColor: 'rgb(29, 37, 110)' }}
										component={Concat} />
								</Scene>
								{/* 学习 */}
								<Scene 
									key='goodsPage'
									hideNavBar
									title='学习'
									icon={
										({focused})=><Icon 
											color={focused?'red':'blue'} 
											name="file"
										/>
									}
									
								>
									<Scene key="teastudy" component={TeaStudy}/>
									<Scene key="give" hideNavBar hideTabBar hideDrawerButton component={Give}/>
									<Scene key="video" hideNavBar hideTabBar hideDrawerButton component={Videotea}/>
									<Scene key="teatask" hideNavBar hideTabBar hideDrawerButton component={TeaTask}/>
									<Scene key="teacontent" hideNavBar hideTabBar hideDrawerButton component={Content}/>
									
									
								</Scene>
								{/* 圈子 */}
								<Scene
									key='quanzi'
									initial
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='compass'/>
										}
									title="圈子"
								>
									<Scene key='quan'
										title='社交圈子'
										initial
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center' }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Quan} 
									></Scene>
									<Scene key='fabu'
										title='发布动态'
										hideTabBar
										titleStyle={{ color: 'white', flex: 1, textAlign: 'center',marginLeft:-30 }}
										navigationBarStyle={{ backgroundColor: '#708090' }}
										component={Fabu} 
									></Scene>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='user'/>
										}
									title="我的"
								>
									<Scene 
										key='teamine' 
										title='个人中心' 
										component={TeaMine}
										titleTextColor='white'
										navigationBarStyle={{backgroundColor:'#5d93c0'}}
										renderLeftButton={<View></View>}
										renderRightButton={
											<Icon style={{color:'white',marginRight:10*s,marginLeft:10*s}} name="bell" onPress={()=>Actions.wteatongzhi()}/>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white',backgroundColor:'#5d93c0'}}
									/>
									<Scene
										key="wgerenziliao"
										title='个人资料' 
										hideNavBar
										component={WteaGerenziliao}
									/>
									<Scene 
										key='wteawodeshouyi' 
										title='我的收益' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										component={Wwodeshouyi}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
									/>
									<Scene 
										key='wteawodexuesheng' 
										title='我的学生' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
										component={WWodexuesheng}
									/>
									<Scene 
										key='wteafabuzuoye' 
										title='发布作业' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										component={WFabuzuoye}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
									/>
									<Scene 
										key='wteayijianfankui' 
										title='意见反馈' 
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
										component={Wteayonghufankui}
									/>
									<Scene
										key="wteashezhi"
										title='设置' 
										hideNavBar
										component={Teashezhi}
									/>
									<Scene
										key="wteatongzhi"
										title='通知'
										component={Wteatongzhi}
										navigationBarStyle={{backgroundColor:'#708090'}}
										renderLeftButton={
											<View style={{marginLeft:15*s}}><Icon name="left" onPress={Actions.pop}/></View>
										}
										titleStyle={{flex:1,textAlign:'center',color:'white'}}
										renderRightButton={
											<View></View>
										}
									/>
								</Scene>
								
							</Tabs>
						</Scene>
					</Lightbox>
					<Scene key="swiperPage0" initial={!isLogin} component={SwiperPage0}/>
					<Scene key="swiperPage"  component={SwiperPage}/>
					<Scene key="login" component={Login}/>
					<Scene key="register" component={Register}/>
					<Scene key="spassword" component={Spassword}/>
					<Scene key="tpassword" component={Tpassword}/>
				</Modal>
			</Overlay>
		</Router>
	);
};

	

export default App;