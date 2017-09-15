import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Input, Card, Button} from 'antd'
import {Header} from '../common'

class SignupPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row style={{marginTop: 20}} type={'flex'} justify={'center'}>
                    <Col span={18}>
                        <Card title="Please Sign up">
                            <Row gutter={16} type={'flex'} justify={'center'}>
                                <Col span={14}>
                                    <Row style={{marginBottom: 10}}>Sign up information</Row>
                                    <Row style={{borderBottom: '1px solid #ddd', marginBottom: 30}}>
                                        <Col><Input placeholder={'email'}/></Col>
                                        <Col style={{marginBottom: 10, color: '#ddd', fontSize: 10}}>This is using to confirm your ID*</Col>
                                        <Col style={{marginBottom: 10}}><Input placeholder={'password'}/></Col>
                                        <Col style={{marginBottom: 30}}><Input placeholder={'confirm Password'}/></Col>
                                    </Row>
                                    <Row style={{marginBottom: 10}}>Personal information</Row>
                                    <Row style={{marginBottom: 10}} gutter={16} style={{marginBottom: 10, paddingBottom: 10}}>
                                        <Col span={12}><Input placeholder={'First name'}/></Col>
                                        <Col span={12} style={{marginBottom: 10}}><Input placeholder={'Last name'}/></Col>
                                        <Col span={24} style={{marginBottom: 10}}><Input placeholder={'Loacation'}/></Col>
                                        <Col span={24} style={{marginBottom: 10}}><Input placeholder={'University'}/></Col>
                                        <Input.Group compact style={{marginBottom: 10}}>
                                            <Input style={{ width: '10%' }} defaultValue="08" />
                                            <Input style={{ width: '30%' }} placeholder={'Tel No.'} />
                                        </Input.Group>
                                    </Row>
                                    <Row style={{marginBottom: 10}} type={'flex'} justify={'center'}>
                                        <Col><Button icon={'login'} type={'primary'}>Sign Up</Button></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default SignupPage