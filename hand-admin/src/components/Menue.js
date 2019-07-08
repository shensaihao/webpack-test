import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Divider } from 'antd';
import './Menue.less'


const { SubMenu } = Menu;
export default class Menue extends Component {
    render() {
        return (
            <Menu style={{ width: 279 }} mode="vertical">
                <Menu.Item key="1" style={{ height: '58px', width: '100%',marginTop:'10px' }}>
                    <Link to='/home'>
                        <Icon type="home" style={{ fontSize: '18px' }} />
                        <span style={{ fontSize: '18px' }}>首页</span>
                    </Link>
                </Menu.Item>
                <Divider style={{ margin: '0px 0' }} />
                <SubMenu
                    key="sub1"
                    title={
                        <Link to='/registrationtest/agilemanagement'>
                            <Icon type="mail" />
                            <span>敏捷管理</span>
                        </Link>
                    }
                >
                    <Menu.ItemGroup>
                        <Menu.Item key="1"><Link to='/registrationtest/agilemanagement/1'><Icon type="mail" />代办事项</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/registrationtest/agilemanagement/2'><Icon type="mail" />活跃冲刺</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/registrationtest/agilemanagement/3'><Icon type="mail" />故事地图</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/registrationtest/agilemanagement/4'><Icon type="mail" />问题管理</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/registrationtest/agilemanagement/5'><Icon type="mail" />发布版本</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/registrationtest/agilemanagement/6'><Icon type="mail" />报告工作台</Link></Menu.Item>
                        <Menu.Item key="7"><Link to='/registrationtest/agilemanagement/7'><Icon type="mail" />设置</Link></Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <Link to='/registrationtest/apimanagement'>
                            <Icon type="appstore" />
                            <span>API管理</span>
                        </Link>
                    }
                >
                    <Menu.ItemGroup>
                        <Menu.Item key="1"><Icon type="mail" />总览</Menu.Item>
                        <Menu.Item key="2"><Icon type="mail" />发布</Menu.Item>
                        <Menu.Item key="3"><Icon type="mail" />API市场</Menu.Item>
                        <Menu.Item key="4"><Icon type="mail" />订阅</Menu.Item>
                        <Menu.Item key="5"><Icon type="mail" />统计分析</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <Link to='/registrationtest/wikimangement'>
                            <Icon type="setting" />
                            <span>WiKi管理</span>
                        </Link>
                    }
                >
                    <Menu.ItemGroup>
                        <Menu.Item key="9">WiKi空间</Menu.Item>
                    </Menu.ItemGroup>

                </SubMenu>
            </Menu>
        )
    }
}
