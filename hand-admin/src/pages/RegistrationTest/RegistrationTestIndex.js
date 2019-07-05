import React, { Component } from 'react'
import { Layout, Icon, Card, Badge,Dropdown, Menu, Drawer } from 'antd';
import SelectButton from '../../components/SelectButton'
import Menue from '../../components/Menue'
import './RegistrationTestIndex.less'

const { Header, Content, Footer } = Layout;
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
export default class RegistrationTestIndex extends Component {
    state = {
        visible: false
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <Layout>
                <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Icon className="menueIcon" onClick={this.showDrawer} type="menu" style={{ fontSize: '18px', color: 'white', float: 'left' }} />
                    <div className="logo" style={{ color: "white", fontSize: "28px" }}>
                        Choerodon
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
                    <Drawer
                        title="主页"
                        placement="left"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <Menue />
                    </Drawer>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                    <div style={{fontSize:'24px',margin:'10px 10px'}}>
                        <Icon type="home" style={{fontSize:'18px',marginRight:'20px'}}/>
                        首页
                    </div>
                    <Card>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
                    </Card>
                     
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}
