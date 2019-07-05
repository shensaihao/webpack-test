import React, { Component } from 'react'
import { Layout, Drawer, Icon, Badge, Dropdown, Menu } from 'antd';
import Menue from './Menue'
import "./Frame.less"
import SelectButton from '../components/SelectButton'
import LeftSideBar from './LeftSideBar'
import Contents from './Content'

const { Header, Content, Sider } = Layout;

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

export default class Frame extends Component {
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
                <Header className="header">
                    <Icon className="menueIcon" onClick={this.showDrawer} type="menu" style={{ fontSize: '18px', color: 'white', float: 'left' }} />
                    <div className="logo" style={{ color: "white", fontSize: "28px" }}>
                        Choerodon
                    </div>
                    <SelectButton />
                    <div className="header-right">
                        <a href="">
                            <Icon type="appstore" />
                        </a>
                        <a href="">
                            <Icon type="chrome" />
                        </a>
                        <Badge count={1} style={{ height: '14px', lineHeight: '14px', minWidth: '14px', padding: '0 0', right: '8px' }}>
                            <a href="">
                                <Icon type="bell" />
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
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <LeftSideBar />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px',minHeight:'589px' }}>
                        <div className="title">
                        <div style={{fontSize:'24px',height:'80px',lineHeight:'80px'}}>代办事项</div>
                        <ul className='breadcrumb'>
                            <li>
                                <a href="">
                                    <Icon type="home" />
                                    <span>创建问题</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Icon type="user" />
                                    <span>创建冲刺</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <Icon type="user" />
                                    <span>刷新</span>
                                </a>
                                </li>
                        </ul>
                        </div>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Contents />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
