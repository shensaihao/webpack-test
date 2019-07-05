import React, { Component } from 'react'
import { Result, Button } from 'antd';

const StatusMap = {
    '404': {
        title: '404',
        subTitle: 'Sorry, the page you visited does not exist.',
        extra: <Button type="primary" onClick={goBack}>返回</Button>,
    }
};
function goBack () {
    
}

export default class NotFound extends Component {
    state = {
        status: '404',
    };
    render() {
        const { status } = this.state;
        const resultProps = StatusMap[status];
        return (
            <div>
                <Result status={status} {...resultProps} />
            </div>
        );
    }
}
