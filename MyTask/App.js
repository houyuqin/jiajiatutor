import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid, AsyncStorage } from 'react-native';
import {Router, Overlay, Scene, Tabs, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import TeaStudy from './src/teaStudy/TeaStudy';
import StdMine from './src/stdMine/StdMine';
import TeaMine from './src/teaMine/TeaMine';
import Login from './src/component/Login';
import Register from './src/component/Register';
import SwiperPage from './src/common/SwiperPage';
import Ad from './src/home/Ad';
import Course from './src/home/Course';
import GoodTea from './src/home/GoodTea';
import Player0 from './src/home/Player0';
import Question from './src/home/Question';
import Vedio from './src/home/Vedio';
import Buy from './src/home/Buy';

console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user){
				setLogin(true);
				SplashScreen.hide();
				
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
	
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
								<Scene 
									key='homePage'
									title='首页'
									hideNavBar
									// hideTabBar
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
									{/* <Scene key="complete" component={Complete}/> */}
									{/* <Scene key="content" component={Con}/>
									<Scene key="" component={}/>
									<Scene key="" component={}/> */}
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									hideNavBar
									// hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'blue'} 
											name='user'/>
										}
									title="用户中心"
								>
								<Scene key='teamine' hideNavBar component={TeaMine} />
								<Scene key='stdmine' hideNavBar hideTabBar title='我的发布' component={StdMine} />
								</Scene>
								
							</Tabs>
						</Scene>
					</Lightbox>

					<Scene initial={!isLogin} key="login" component={Login}/>
					<Scene key="register" component={Register}/>
				</Modal>
			</Overlay>
		</Router>
	);
};

export default App;