import React, { Component, Fragment } from 'react'
import { Icon, Menu, Divider } from 'antd';

export default class LeftSideBar extends Component {
    render() {
        return (
            <Fragment>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                        <div style={{fontSize:'18px',height:'56px',lineHeight:'56px',marginLeft:'16px'}}> 
                        <span>
                            <Icon type="dashboard" style={{marginRight:'10px'}}/>
                            敏捷管理
                        </span>
                        </div>
                        <Divider style={{ margin: '0px 0' }} />
                        <Menu.Item key="2"><span>
                            <Icon type="user" />
                            代办事项
                        </span></Menu.Item>
                        <Menu.Item key="3"><span>
                            <Icon type="user" />
                            活跃冲刺
                        </span></Menu.Item>
                        <Menu.Item key="4"><span>
                            <Icon type="user" />
                            故事地图
                        </span></Menu.Item>
                        <Menu.Item key="5"><span>
                            <Icon type="user" />
                            问题管理
                        </span></Menu.Item>
                </Menu>
            </Fragment>
        )
    }
}
