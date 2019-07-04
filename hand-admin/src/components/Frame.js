import React, { Component } from 'react'
import { Layout, Breadcrumb, Drawer, Icon } from 'antd';
import Menue from './Menue'
import "./Frame.less"

const { Header, Content, Sider } = Layout;

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
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Drawer
                            title="主页"
                            placement="left"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <Menue />
                        </Drawer>
                        
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Content
            </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
