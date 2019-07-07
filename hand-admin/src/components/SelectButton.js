import React, { Component,Fragment } from 'react'
import { Icon, Modal, Button } from 'antd';
import Modals from './Modals'

export default class SelectButton extends Component {
    state = {
        loading: false,
        visible: false,
        selected:'选择项目'
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
            <Fragment>
                <Button type="link" ghost onClick={this.showModal} className="selectbtn">
                <span>{this.state.selected}</span>
                        <Icon type="down" />
            </Button>
            <Modal
                width='720px'
                closable={false}
                visible={visible}
                title="选择"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                style={{ position: "fixed", top: "60px", left: "350px" }}
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
            </Fragment>
        )
    }
}
