import React, { Component } from 'react'
import { Layout, Icon, Badge,Dropdown, Menu,Divider } from 'antd';
import './Dashboard.less'
import SelectButton from '../../components/SelectButton'
import HomeCotent from './HomeContent'

const { Header, Content } = Layout;
const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href=""><Icon type="user" />个人信息</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href=""><Icon type="key" />修改密码</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href=""><Icon type="crown" />权限信息</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href=""><Icon type="experiment" />授权管理</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href=""><Icon type="message" />消息通知</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="5">
        <a href=""><Icon type="export" />退出登录</a>
      </Menu.Item>
    </Menu>
  );
export default class Dashboard extends Component {
    render() {
        return (
            <Layout style={{backgroundColor:'#fff'}}>
                <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" style={{ color: "white", fontSize: "24px" }}>
                        <a href="/home">Choerodon</a>
                    </div>
                    <SelectButton></SelectButton>
                    <div className="header-right">
                        <a href="">
                            <Icon type="appstore" />
                        </a>
                        <a href="">
                            <Icon type="chrome" />
                        </a>
                        <Badge count={1} style={{height:'14px',lineHeight:'14px',minWidth:'14px',padding:'0 0',right:'8px'}}>
                        <a href="">
                        <Icon type="bell"/>
                        </a>  
                        </Badge>
                        <Dropdown overlay={menu} trigger={['click']}>
                        <a href="">
                        <Icon type="user" />
                        </a>
                        </Dropdown>
                    </div>
                </Header>
                <Content style={{ marginTop: 48 }}>
                    <div style={{fontSize:'18px',margin:'10px 20px'}}>
                        <Icon type="home" style={{fontSize:'18px',marginRight:'20px'}}/>
                        首页
                    </div>
                    <Divider style={{margin:'0 0 30px 0'}}/>
                    <HomeCotent />
                </Content>
            </Layout>
        )
    }
}
