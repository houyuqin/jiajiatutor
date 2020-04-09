import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
// import Home from './home/Home';
import TeaStudy from './teaStudy/TeaStudy';
import TeaMine from './teaMine/TeaMine';
import Apphome from './home/Apphome';

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab'
        };
      }
    
      render() {
        return (
            <div style={{ 
              position: 'fixed', 
              height: '100%', 
              width: '100%', 
              top: 0 }}
            >
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
            >
            <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/home1.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/home.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            //badge={1} 未读消息提示图标
            onPress={() => {
                this.setState({
                selectedTab: 'blueTab',
                });
            }}
            >
            {/* <Home/> */}

            <Apphome/>
            </TabBar.Item>
            <TabBar.Item
            icon={
                <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/学习1.png) center center /  21px 21px no-repeat' }}
                />
            }
            selectedIcon={
                <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/学习.png) center center /  21px 21px no-repeat' }}
                />
            }
            title="教学"
            key="Friend"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'greenTab',
                });
            }}
            >
            <TeaStudy/>
            </TabBar.Item>
            <TabBar.Item
            icon={
                <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/我的1.png) center center /  21px 21px no-repeat' }}
                />
            }
            selectedIcon={
                <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./img/我的.png) center center /  21px 21px no-repeat' }}
                />
            }
            title="我的"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
                this.setState({
                selectedTab: 'redTab',
                });
            }}
            data-seed="logId1"
            >
            <TeaMine/>
            </TabBar.Item>
        </TabBar>
        </div>
        )
    }
}