import React, { Component } from 'react'
import { Layout, Icon, Modal, Button, Card, Badge,Dropdown, Menu } from 'antd';
import Modals from '../../components/Modals'
import './Dashboard.less'

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
      <Menu.Item key="4">
        <a href=""><Icon type="export" />退出登录</a>
      </Menu.Item>
    </Menu>
  );
export default class Dashboard extends Component {
    state = {
        loading: false,
        visible: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading } = this.state;
        return (
            <Layout>
                <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" style={{ color: "white", fontSize: "28px" }}>
                        Choerodon
                    </div>
                    <Button type="link" ghost onClick={this.showModal} className="selectbtn">
                        选择项目
                        <Icon type="down" />
                    </Button>
                    <Modal
                        width='720px'
                        closable={false}
                        visible={visible}
                        title="选择"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        style={{position:"fixed",top:"60px",left:"350px"}}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                取消
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                打开
                            </Button>,
                        ]}
                    >
                        <Modals />
                    </Modal>
                    <div className="header-right">
                        <Icon type="appstore" />
                        <Icon type="chrome" />
                        <Badge count={1} style={{height:'14px',lineHeight:'14px',minWidth:'14px',padding:'0 0',right:'8px'}}>
                            <Icon type="bell">
                            </Icon>  
                        </Badge>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <Icon type="user" />
                        </Dropdown>
                    </div>
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
