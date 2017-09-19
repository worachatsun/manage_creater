import React, {Component} from 'react'
import {connect} from 'react-redux'
import {changePassword} from '../../actions'
import {Row, Col, Card, Menu, Icon, Form, Input, Button} from 'antd'

class AccountSettingPage extends Component {
    state = {
        confirmDirty: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.changePassword(values, this.props.user._id)
            }
        })
    }

    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newPassword')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback()
        }
    }

    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback()
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Row style={{borderBottom: '1px solid #ddd', marginBottom: 15, fontSize: 20, paddingBottom: 5}}>Change password</Row>
                <Row>
                    <Form.Item>                                                                                            
                            {getFieldDecorator('oldPassword', {
                                rules: [{ required: true, message: 'Please input your firstname!' }],
                            })(
                                <Input type="password" placeholder={'Old password'}/>
                            )}                                                                 
                    </Form.Item>
                    <Form.Item>                                                
                        <Col >
                            {getFieldDecorator('newPassword', {
                                rules: [{ 
                                    required: true, message: 'Please input your password!' }
                                , {
                                    validator: this.checkConfirm,
                                }],
                            })(
                                <Input type="password" placeholder={'New password'}/>
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
                        <Row style={{marginBottom: 10}} type={'flex'} justify={'center'}>
                            <Col><Button htmlType="submit" icon={'login'} type={'primary'}>Change password</Button></Col>
                        </Row>
                    </Form.Item>
                </Row>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth.get('user') }
}

export default connect(mapStateToProps, {changePassword})(Form.create()(AccountSettingPage))