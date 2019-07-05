import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu, Icon } from 'antd';


const { SubMenu } = Menu;
export default class Menue extends Component {
    render() {
        return (
            <Menu style={{ width: 200 }} mode="vertical">
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
                                    <Menu.Item key="1"><Icon type="mail" />代办事项</Menu.Item>
                                    <Menu.Item key="2"><Icon type="mail" />活跃冲刺</Menu.Item>
                                    <Menu.Item key="3"><Icon type="mail" />故事地图</Menu.Item>
                                    <Menu.Item key="4"><Icon type="mail" />问题管理</Menu.Item>
                                    <Menu.Item key="5"><Icon type="mail" />发布版本</Menu.Item>
                                    <Menu.Item key="6"><Icon type="mail" />报告工作台</Menu.Item>
                                    <Menu.Item key="7"><Icon type="mail" />设置</Menu.Item>
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
                                key="sub4"
                                title={
                                    <Link to='/registrationtest/wikimangement'>
                                        <Icon type="setting" />
                                        <span>WiKi管理</span>
                                    </Link>
                                }
                            >
                                <Menu.Item key="9">WiKi空间</Menu.Item>
                            </SubMenu>
                        </Menu>
        )
    }
}
