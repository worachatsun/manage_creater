import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Input, Card, Button} from 'antd'
import {Header} from '../common'

class SigninPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row style={{marginTop: 20}} type={'flex'} justify={'center'}>
                    <Col span={18}>
                        <Card title="Please Sign in">
                            <Row gutter={16}>
                                <Col span={14}>
                                    <Row style={{marginBottom: 10}}>Sign in to App maker</Row>
                                    <Row style={{marginBottom: 10}}>
                                        <Col><Input placeholder={'User ID*'}/></Col>
                                    </Row>
                                    <Row style={{marginBottom: 10}}>
                                        <Col><Input placeholder={'Password*'}/></Col>
                                    </Row>
                                    <Row style={{marginBottom: 10}} type={'flex'} justify={'space-between'}>
                                        <Col>Forget Password</Col>
                                        <Col><Button icon={'login'} type={'primary'}>Sign In</Button></Col>
                                    </Row>
                                </Col>
                                <Col span={10} style={{borderLeft: '1px solid #ddd', height: 30}}>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SigninPage