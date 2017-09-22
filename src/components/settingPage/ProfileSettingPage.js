import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Form, Input, Button} from 'antd'
import UploadImage from '../UploadImage'
import {updateUserData} from '../../actions'

class ProfileSettingPage extends Component {
    state = {
        confirmDirty: false,
        logo: this.props.user.avatar || ''
    }

    setLogo = img => {
        this.setState({logo: img})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.avatar = this.state.logo || ''
                this.props.updateUserData(values, this.props.user._id)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const {email, avatar, firstname, lastname, location, tel, university, username} = this.props.user
        
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Row style={{borderBottom: '1px solid #ddd', marginBottom: 15, fontSize: 20, paddingBottom: 5}}>Change profile</Row>
                <Row gutter={16} style={{paddingBottom: 10}}>
                    <Col span={14}>
                        <div style={{marginBottom: 4}}>Username</div>
                        <Form.Item>
                            <Col >
                                {getFieldDecorator('username', {
                                    initialValue: username,
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input disabled placeholder={'Username'}/>
                                )}
                            </Col>                                                                                                
                        </Form.Item>
                        <div style={{marginBottom: 4}}>Email</div>
                        <Form.Item>                                                
                            <Col style={{marginBottom: -10}}>
                                {getFieldDecorator('email', {
                                    initialValue: email,
                                    rules: [{
                                        type: 'email', message: 'The input is not valid E-mail!',
                                    }, { 
                                        required: true, message: 'Please input your email!' 
                                    }],
                                })(
                                    <Input disabled placeholder={'Email'}/>
                                )}
                            </Col>
                            <Col style={{marginBottom: -10, color: '#ddd', fontSize: 10}}>This is using to confirm your ID*</Col>                                              
                        </Form.Item>
                        <div style={{marginBottom: 4}}>Firstname</div>
                        <Form.Item>                                                                                            
                                {getFieldDecorator('firstname', {
                                    initialValue: firstname,
                                    rules: [{ required: true, message: 'Please input your firstname!' }],
                                })(
                                    <Input placeholder={'Firstname'}/>
                                )}                                                                 
                        </Form.Item>
                        <div style={{marginBottom: 4}}>Lastname</div>
                        <Form.Item>                                                                                            
                            {getFieldDecorator('lastname', {
                                initialValue: lastname,
                                rules: [{ required: true, message: 'Please input your lastname!' }],
                            })(
                                <Input placeholder={'Lastname'}/>
                            )}                                                            
                        </Form.Item>
                    </Col>
                    <Col span={10} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 25}}>
                        <UploadImage storeImage={this.setLogo} imageUrl={this.state.logo}/>
                    </Col>
                </Row>
                <Row>
                    <div style={{marginBottom: 4}}>Location</div>
                    <Form.Item>                                                                                            
                        {getFieldDecorator('location', {
                            initialValue: location,
                            rules: [{ required: true, message: 'Please input your location!' }],
                        })(
                            <Input placeholder={'Loacation'}/>
                        )}                                                            
                    </Form.Item>
                    <div style={{marginBottom: 4}}>University</div>
                    <Form.Item>                                                                                            
                        {getFieldDecorator('university', {
                            initialValue: university,
                            rules: [{ required: true, message: 'Please input your university!' }],
                        })(
                            <Input placeholder={'University'}/>
                        )}                                                            
                    </Form.Item>
                    <div style={{marginBottom: 4}}>Telephone No.</div>
                    <Form.Item>                                                                                            
                        {getFieldDecorator('tel', {
                            initialValue: tel,
                            rules: [{ required: true, message: 'Please input your telephone number!' }],
                        })(
                            <Input type={'number'} placeholder={'tel'}/>
                        )}                                                            
                    </Form.Item>
                </Row>            
                <Form.Item>
                    <Row style={{marginBottom: 10}} type={'flex'} justify={'center'}>
                        <Col><Button htmlType="submit" icon={'login'} type={'primary'}>Change profile</Button></Col>
                    </Row>
                </Form.Item>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.auth.get('user') }
}

export default connect(mapStateToProps, {updateUserData})(Form.create()(ProfileSettingPage))