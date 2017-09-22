import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Input, Card, Button, Form, Icon} from 'antd'
import {signIn} from '../actions'
import Header from '../common/Header'

class SigninPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.signIn(values)
            }
        })
    }
      
    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <Header />
                <Row style={{marginTop: 20}} type={'flex'} justify={'center'}>
                    <Col span={18}>
                        <Card title="Please Sign in">
                            <Row gutter={16} type={'flex'} justify={'center'}>
                                <Col span={14}>
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            <Row style={{marginBottom: 10}}>Sign in to App maker</Row>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: 'Please input your username!' }],
                                            })(
                                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder={'Username or email'} />
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: 'Please input your Password!' }],
                                            })(
                                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Row style={{marginBottom: 10}} type={'flex'} justify={'space-between'}>
                                                <Col></Col>
                                                <Col><Button htmlType="submit" icon={'login'} type={'primary'}>Sign In</Button></Col>
                                            </Row>
                                        </Form.Item>
                                    </Form>                                
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default connect(null, {signIn})(Form.create()(SigninPage))