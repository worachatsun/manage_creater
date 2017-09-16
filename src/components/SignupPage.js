import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signUp} from '../actions'
import {Row, Col, Input, Card, Button, Form, Icon} from 'antd'
import Header from '../common/Header'
import UploadImage from './UploadImage'

class SignupPage extends Component {
    state = {
        confirmDirty: false,
      }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.avatar = this.props.avatar || ''
                this.props.signUp(values)
            }
        })
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    render() {
        const { getFieldDecorator } = this.props.form
        
        return (
            <div>
                <Header />
                <Row style={{marginTop: 20}} type={'flex'} justify={'center'}>
                    <Col span={18}>
                        <Card title="Please Sign up">
                            <Row gutter={16} type={'flex'} justify={'center'}>
                                <Col span={14}>
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Row type={'flex'} justify={'center'} style={{marginBottom: 15}}><UploadImage /></Row>
                                        <Row style={{marginBottom: 10}}>Sign up information</Row>
                                        <Row style={{borderBottom: '1px solid #ddd', marginBottom: 30}}>
                                            <Form.Item>
                                                    <Col >
                                                        {getFieldDecorator('username', {
                                                            rules: [{ required: true, message: 'Please input your username!' }],
                                                        })(
                                                            <Input placeholder={'Username'}/>
                                                        )}
                                                    </Col>                                                                                                
                                            </Form.Item>
                                            <Form.Item>                                                
                                                <Col >
                                                    {getFieldDecorator('password', {
                                                        rules: [{ 
                                                            required: true, message: 'Please input your password!' }
                                                        , {
                                                            validator: this.checkConfirm,
                                                        }],
                                                    })(
                                                        <Input type="password" placeholder={'Password'}/>
                                                    )}
                                                </Col>                                                
                                            </Form.Item>
                                            <Form.Item>                                                
                                                <Col >
                                                    {getFieldDecorator('confirm_password', {
                                                        rules: [{ 
                                                            required: true, message: 'Please input your Confirm password!' 
                                                        }, {
                                                            validator: this.checkPassword,
                                                        }],
                                                    })(
                                                        <Input type="password" placeholder={'Confirm password'}/>
                                                    )}
                                                </Col>                                                
                                            </Form.Item>
                                            <Form.Item>                                                
                                                <Col style={{marginBottom: -10}}>
                                                    {getFieldDecorator('email', {
                                                        rules: [{
                                                            type: 'email', message: 'The input is not valid E-mail!',
                                                        }, { 
                                                            required: true, message: 'Please input your email!' 
                                                        }],
                                                    })(
                                                        <Input placeholder={'Email'}/>
                                                    )}
                                                </Col>
                                                <Col style={{marginBottom: -10, color: '#ddd', fontSize: 10}}>This is using to confirm your ID*</Col>                                              
                                            </Form.Item>
                                        </Row>
                                        <Row style={{marginBottom: 10}}>Personal information</Row>
                                        <Row gutter={16} style={{marginBottom: 10, paddingBottom: 10}}>
                                            <Col span={12}>
                                                <Form.Item>                                                                                            
                                                        {getFieldDecorator('firstname', {
                                                            rules: [{ required: true, message: 'Please input your firstname!' }],
                                                        })(
                                                            <Input placeholder={'Firstname'}/>
                                                        )}                                                                 
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item>                                                                                            
                                                    {getFieldDecorator('lastname', {
                                                        rules: [{ required: true, message: 'Please input your lastname!' }],
                                                    })(
                                                        <Input placeholder={'Lastname'}/>
                                                    )}                                                            
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} >
                                                <Form.Item>                                                                                            
                                                    {getFieldDecorator('location', {
                                                        rules: [{ required: true, message: 'Please input your location!' }],
                                                    })(
                                                        <Input placeholder={'Loacation'}/>
                                                    )}                                                            
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} >
                                                <Form.Item>                                                                                            
                                                    {getFieldDecorator('university', {
                                                        rules: [{ required: true, message: 'Please input your university!' }],
                                                    })(
                                                        <Input placeholder={'University'}/>
                                                    )}                                                            
                                                </Form.Item>
                                            </Col>
                                            <Col span={24} >
                                                <Form.Item>                                                                                            
                                                    {getFieldDecorator('tel', {
                                                        rules: [{ required: true, message: 'Please input your telephone number!' }],
                                                    })(
                                                        <Input type={'number'} placeholder={'tel'}/>
                                                    )}                                                            
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Form.Item>
                                            <Row style={{marginBottom: 10}} type={'flex'} justify={'center'}>
                                                <Col><Button htmlType="submit" icon={'login'} type={'primary'}>Sign Up</Button></Col>
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

const mapStateToProps = state => {
    return { avatar: state.auth.get('avatar') }
}

export default connect(mapStateToProps, {signUp})(Form.create()(SignupPage))