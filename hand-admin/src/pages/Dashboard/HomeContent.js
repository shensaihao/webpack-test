import React, { Component, Fragment } from 'react'
import { Card, Icon,Divider } from 'antd';
import './HomeContent.less'

export default class HomeContent extends Component {
    render() {
        return (
            <Fragment>
                <Card style={{ width: '415px', height: '410px', position: 'absolute', transition: 'all 0.2s ease-out 0s', zIndex: 2, touchAction: 'none', transform: 'translate3d(20px, 20px, 0px)', background: 'rgb(255, 255, 255)', overflow: 'hidden', cursor: 'inherit', }}>
                    <header>
                        <h1>
                            <Icon type="user" />
                            <span style={{marginLeft:'10px'}}>我的信息</span>
                        </h1>
                    </header>
                    <div style={{ pointerEvents: 'all', height: '100%' }}>
                        <div className="userInfo">
                            <dl>
                                <dt>
                                    <span>用户名</span>
                                </dt>
                                <dd>任国梅</dd>
                                <dt>
                                    <span>登录名</span>
                                </dt>
                                <dd>25375</dd>
                                <dt>
                                    <span>邮箱</span>
                                </dt>
                                <dd>guomei.reng@hand-china.com</dd>
                                <dt>
                                    <span>认证来源</span>
                                </dt>
                                <dd>
                                    <span>LDAP用户</span>
                                </dd>
                                <dt>
                                    <span>所属组织</span>
                                </dt>
                                <dd>上海汉得信息技术股份有限公司</dd>
                            </dl>
                            <Divider />
                            <nav >
                                <Icon type="arrow-right" />
                                <a href="">
                                    <span style={{marginLeft:'10px'}}>转至个人信息</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </Card>
                {/* <Card style={{ width: '415px', height: '410px', position: 'absolute', transition: 'all 0.2s ease-out 0s', zIndex: 2, touchAction: 'none', transform: 'translate3d(20px, 20px, 0px)', background: 'rgb(255, 255, 255)', overflow: 'hidden', cursor: 'inherit',left:'450px' }}>
                    <header>
                        <h1>
                        <Icon type="read" />
                        <span style={{marginLeft:'10px'}}>公告</span>
                        </h1>
                    </header>
                    <div >
                        <div style={{display: 'flex',justifyContent: 'center'}}>
                            <ul className="announcement-timeline">
                                <li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div>
                                    <div className="contents">
                                        <div className="time">
                                            <p>2019-07-02</p>
                                            <p>10:05:00</p>
                                        </div>
                                        <div className="title">
                                            <a>开源多云技术平台——Choerodon猪齿鱼发布0.18版本</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="circle-blue"></div>
                                    <div className="contents">
                                        <div className="time">
                                            <p>2019-06-21</p>
                                            <p>20:40:00</p>
                                        </div>
                                        <div className="title">
                                            <a>猪齿鱼平台升级公告</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="circle-blue"></div>
                                    <div className="contents">
                                        <div className="time">
                                            <p>2019-06-05</p>
                                            <p>10:00:00</p>
                                        </div>
                                        <div className="title">
                                            <a>开源多云技术平台——Choerodon猪齿鱼发布0.17版本</a>
                                        </div></div>
                                </li><li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div>
                                    <div className="contents">
                                        <div className="time">
                                            <p>2019-05-24</p>
                                            <p>16:15:00</p>
                                        </div>
                                        <div className="title">
                                            <a>猪齿鱼平台将于2019/05/24 升级</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div><div className="contents">
                                        <div className="time">
                                            <p>2019-04-30</p>
                                            <p>11:40:00</p>
                                        </div>
                                        <div className="title">
                                            <a>Gitlab维护升级</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div><div className="contents">
                                        <div className="time">
                                            <p>2019-04-26</p>
                                            <p>17:30:00</p>
                                        </div><div className="title">
                                            <a>猪齿鱼平台将于2019/04/26 升级</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div><div className="contents">
                                        <div className="time">
                                            <p>2019-03-22</p>
                                            <p>19:00:00</p>
                                        </div>
                                        <div className="title">
                                            <a>系统升级</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div><div className="contents">
                                        <div className="time">
                                            <p>2019-03-01</p>
                                            <p>17:00:00</p>
                                        </div>
                                        <div className="title">
                                            <a>Choerodon猪齿鱼发布0.14版本</a>
                                        </div></div>
                                </li><li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div><div className="contents">
                                        <div className="time">
                                            <p>2019-01-21</p>
                                            <p>10:30:40</p>
                                        </div>
                                        <div className="title">
                                            <a>Choerodon猪齿鱼发布0.13版本</a>
                                        </div>
                                    </div></li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="circle-blue">
                                    </div><div className="contents">
                                        <div className="time">
                                            <p>2019-01-16</p>
                                            <p>11:59:59</p>
                                        </div>
                                        <div className="title">
                                            <a>Gitlab临时维护</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div><div className="contents">
                                        <div className="time">
                                            <p>2019-01-11</p>
                                            <p>10:45:00</p>
                                        </div>
                                        <div className="title">
                                            <a>系统公告</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle">
                                    </div>
                                    <div className="circle-blue">
                                    </div>
                                    <div className="contents">null</div>
                                </li>
                            </ul>
                            <Divider style={{margin:'0 0'}}/>
                            <nav >
                                <i ></i>
                                <a href="">转至所有公告</a>
                            </nav>
                        </div>
                    </div>
                </Card> */}
            </Fragment>
        )
    }
}
