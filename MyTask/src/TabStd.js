import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
// import Home from './home/Home';
import Apphome from './home/Apphome';
import StdStudy from './stdStudy/StdStudy';
import StdMine from './stdMine/StdMine';

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
              title="学习"
              key="Friend"
              // dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
                  this.setState({
                  selectedTab: 'greenTab',
                  });
              }}
              >
              <StdStudy/>
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
              <StdMine/>
              </TabBar.Item>
          </TabBar>
          </div>
        )
    }
}
