import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import { Select, Input, Tabs, Table } from 'antd';

const { Option } = Select;
const { Search } = Input;
const { TabPane } = Tabs;


const columns1 = [
    { title: '名称', dataIndex: 'name', key: 'name',render: (text,record) => <Link to={record.url} props={text}>{text}</Link>, },
    { title: '编码', dataIndex: 'code', key: 'code' },
    { title: '类型', dataIndex: 'type', key: 'type' },
  ];

  const data1 = [
    {
      key: 1,
      name: '2019研发中心实习生组',
      code: 'training',
      type: '敏捷项目',
      url:'/internshipgroup/index'
    },
    {
      key: 2,
      name: '注册的组织测试',
      code: 'org-qebh68zd9k',
      type: '组织',
      url:'/registrationtest/index'
    }
  ];

  const columns2 = [
    { title: '名称', dataIndex: 'name', key: 'name',render: (text,record) => <Link to={{pathname: record.url,query: record.name}}>{text}</Link>, },
    { title: '编码', dataIndex: 'code', key: 'code' },
    { title: '类型', dataIndex: 'type', key: 'type' },
  ];

  const data2 = [
    {
      key: 1,
      name: '注册的组织测试',
      code: 'org-qebh68zd9k',
      type: '组织',
      url:'/registrationtest/index'
    },
    {
        key: 2,
        name: 'Choerodon',
        code: 'choerodon',
        type: '组织',
        children:[
            {
                key: 5,
                name: '2019研发中心实习生组',
                code: 'training',
                type: '敏捷项目',
                url:'/internshipgroup/index'
            }
        ]
      },
  ];

function callback(key) {
    console.log(key);
}

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

export default class Modals extends Component {
    
    render() {
        return (
            <Fragment>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="组织"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="all">所有组织</Option>
                    <Option value="register">注册的组织测试</Option>
                    <Option value="choerodon">Choerodon</Option>
                </Select>
                <Search
                    placeholder="搜索组织和项目"
                    onSearch={value => console.log(value)}
                    style={{ width: 200, marginLeft: '30px' }}
                />
                <Tabs defaultActiveKey="1" onChange={callback} style={{paddingBottom:'100px'}}>
                    <TabPane tab="最近" key="1">
                        <Table
                            size='middle'
                            pagination={false}
                            columns={columns1}
                            dataSource={data1}
                        />
                    </TabPane>
                    <TabPane tab="全部" key="2">
                    <Table
                            size='middle'
                            pagination={false}
                            columns={columns2}
                            dataSource={data2}
                        />
                    </TabPane>
                </Tabs>
            </Fragment>
        )
    }
}
