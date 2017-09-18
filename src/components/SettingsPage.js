import React, {Component} from 'react'
import {Row, Col, Card, Menu, Icon, Form, Input, Button} from 'antd'
import Header from '../common/Header'
import AccountSettingPage from './settingPage/AccountSettingPage'
import ProfileSettingPage from './settingPage/ProfileSettingPage'

class SettingsPage extends Component {
    state = {
        current: 0
    }

    handleClick = (e) => {
        this.setState({current: e.key-1})
    }

    render() {
        return (
            <div>
                <Header />
                <Row  style={{marginTop: 20}} type={'flex'} justify={'center'} gutter={16}>
                    <Col span={4}>
                        <Card>
                            <Row style={{borderBottom: '1px solid #ddd', paddingBottom: 5, marginBottom: 10, fontSize: 13, fontWeight: 'bold'}}>Settings</Row>
                            <Menu
                                onClick={this.handleClick}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                            >
                                <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span>Profile</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="idcard" />
                                    <span>Account</span>
                                </Menu.Item>
                            </Menu>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            {steps[this.state.current].content}
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const steps = [{
    content: <ProfileSettingPage />,
}, {
    content: <AccountSettingPage />,
}]

export default SettingsPage