import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Route} from 'react-router-dom'
import {Row, Col, Form, Input, Button} from 'antd'
import UploadImage from '../UploadImage'
import {updateAppData} from '../../actions'
import { BlockPicker } from 'react-color'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import NewspaperIcon from 'mdi-react/NewspaperIcon'

class EditAppDetail extends Component {
    state = {
        confirmDirty: false,
        logo: this.props.app.logo || '',
        redirect: false,
        color: this.props.app.color || '',
        color_block: false,
        news: this.props.app.features.news,
        event: this.props.app.features.event,
        donate: this.props.app.features.donate,
        career: this.props.app.features.career
    }

    setLogo = img => {
        this.setState({logo: img})
    }

    handleChangeComplete = (color) => {
        this.setState({color: color.hex})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { news, event, career, donate, logo, color } = this.state
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.logo = logo || ''
                values.color = color || ''
                values.features = {
                    news, event, career, donate
                }
                this.props.updateAppData(values, this.props.app._id).then(() => {
                    // this.props.toPage('detail')
                    this.setState({redirect: true})
                })
            }
        })
    }

    handleClose = () => {
        this.setState({ color_block: false })
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { uni_name, uni_abb, uni_th_name, uni_th_abb, color, createdAt, features, logo, updatedAt, android_download } = this.props.app

        if (this.state.redirect) {
            return (
                <Redirect to={'/profile'}/>
            )
        }

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Row style={{borderBottom: '1px solid #ddd', marginBottom: 15, fontSize: 20, paddingBottom: 5}}>Change application detail</Row>
                <Row gutter={16} style={{paddingBottom: 10}}>
                    <Col span={14}>
                        <div style={{marginBottom: 4}}>University name</div>
                        <Form.Item>
                            <Col >
                                {getFieldDecorator('uni_name', {
                                    initialValue: uni_name,
                                    rules: [{ required: true, message: 'Please input your university name!' }],
                                })(
                                    <Input placeholder={'University name'}/>
                                )}
                            </Col>                                                                                                
                        </Form.Item>
                        <div style={{marginBottom: 4}}>University abbreviation</div>
                        <Form.Item>                                                
                            <Col style={{marginBottom: -10}}>
                                {getFieldDecorator('uni_abb', {
                                    initialValue: uni_abb,
                                    rules: [{ 
                                        required: true, message: 'Please input your university abbreviation!' 
                                    }],
                                })(
                                    <Input placeholder={'University abbreviation'}/>
                                )}
                            </Col>
                        </Form.Item>
                        <div style={{marginBottom: 4}}>ชื่อมหาลัย</div>
                        <Form.Item>                                                                                            
                                {getFieldDecorator('uni_th_name', {
                                    initialValue: uni_th_name,
                                    rules: [{ required: true, message: 'Please input your university thai name!' }],
                                })(
                                    <Input placeholder={'ชื่อมหาลัย'}/>
                                )}                                                                 
                        </Form.Item>                        
                    </Col>
                    <Col span={10} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 25}}>
                        <UploadImage storeImage={this.setLogo} imageUrl={this.state.logo}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={14}>
                        <div style={{marginBottom: 4}}>ชื่อย่อมหาลัย</div>
                        <Form.Item>                                                                                            
                            {getFieldDecorator('uni_th_abb', {
                                initialValue: uni_th_abb,
                                rules: [{ required: true, message: 'Please input your university thai abbreviation!' }],
                            })(
                                <Input placeholder={'ชื่อย่อมหาลัย'}/>
                            )}                                                            
                        </Form.Item>
                    </Col>
                    <Col span={10} style={{paddingLeft: 50}}>
                        <div style={{marginBottom: 6}}>Color</div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div onClick={() => this.setState({color_block: !this.state.color_block})} style={{width: 100, height: 31, backgroundColor: this.state.color, border: '1px solid #ddd', borderRadius: '5px 5px 5px 5px'}}/>
                        </div>
                        {this.state.color_block?
                        <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ this.handleClose }/>
                            <BlockPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete }/>
                        </div>:''}
                    </Col>
                </Row>     
                <div style={{marginBottom: 6, marginTop: 30}}>Feature</div>       
                <Row type={'flex'} justify={'space-around'}>                                            
                    <div onClick={() => this.setState({news: !this.state.news})}>
                        <Col span={24} style={{margin: 3}}><NewspaperIcon fill={this.state.news?this.state.color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                        <Col span={24} style={{textAlign: 'center'}}>News</Col>
                    </div>
                    <div onClick={() => this.setState({event: !this.state.event})}>
                        <Col style={{margin: 3}}><CalendarTextIcon fill={this.state.event?this.state.color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                        <Col span={24} style={{textAlign: 'center'}}>Event</Col>
                    </div>
                    <div onClick={() => this.setState({career: !this.state.career})}>
                        <Col style={{margin: 3}}><WorkerIcon fill={this.state.career?this.state.color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                        <Col span={24} style={{textAlign: 'center'}}>Career</Col>
                    </div>
                    <div onClick={() => this.setState({donate: !this.state.donate})}>
                        <Col style={{margin: 3}}><CoinIcon fill={this.state.donate?this.state.color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                        <Col span={24} style={{textAlign: 'center'}}>Donate</Col>
                    </div>
                </Row>
                <Form.Item>
                    <Row style={{marginBottom: 10, marginTop: 20}} type={'flex'} justify={'center'}>
                        <Col><Button htmlType="submit" icon={'login'} type={'primary'}>Change application detail</Button></Col>
                    </Row>
                </Form.Item>
            </Form>
        )
    }
}

const styles = {
    popover: {
        position: 'absolute',
        zIndex: '2',
        marginTop: 12
    },
    cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
    }
}

export default connect(null, {updateAppData})(Form.create()(EditAppDetail))