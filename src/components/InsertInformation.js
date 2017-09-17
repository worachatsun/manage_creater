import React, {Component} from 'react'
import { connect } from 'react-redux'
import {storeCreateData, storeLogo} from '../actions'
import {Row, Col, Form, Icon, Input, message} from 'antd'
import { BlockPicker } from 'react-color'
import UploadImage from './UploadImage'

class InsertInformation extends Component {
    state = {
        color_block: false,
        uni_name: this.props.create_data.uni_name,
        uni_abb: this.props.create_data.uni_abb,
        uni_th_name: this.props.create_data.uni_th_name,
        uni_th_abb: this.props.create_data.uni_th_abb,
        color: this.props.create_data.color
    }

    handleChangeComplete = (color) => {
        this.setState({color: color.hex})
    }

    componentWillUnmount() {
        const { uni_abb, uni_name, uni_th_abb, uni_th_name, color } = this.state
        if(uni_abb === ''| uni_name === ''){
            this.props.toPage(0)
            message.error('Please insert University name and abbreviation')
        }
        else
            this.props.storeCreateData({uni_abb, uni_name, uni_th_abb, uni_th_name, color})
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleClose = () => {
        this.setState({ color_block: false })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16} push={8}>
                        <Row><Col style={{fontSize: '2em', marginBottom: 10}}>University information</Col></Row>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                <Row>
                                    <Col>University name</Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={16}><Input onChange={e => this.setState({uni_name: e.target.value})} value={this.state.uni_name} prefix={<Icon type="home" style={{ fontSize: 13 }} />} placeholder="University name" /></Col>
                                    <Col span={8}><Input onChange={e => this.setState({uni_abb: e.target.value})} value={this.state.uni_abb} prefix={<Icon type="home" style={{ fontSize: 13 }} />} placeholder="Abbreviation" /></Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col>ชื่อภาษาไทย</Col>
                                </Row>
                                <Row gutter={16}>
                                    <Col span={16}><Input onChange={e => this.setState({uni_th_name: e.target.value})} value={this.state.uni_th_name} prefix={<Icon type="home" style={{ fontSize: 13 }} />} placeholder="ชื่อไทย" /></Col>
                                    <Col span={8}><Input onChange={e => this.setState({uni_th_abb: e.target.value})} value={this.state.uni_th_abb} prefix={<Icon type="home" style={{ fontSize: 13 }} />} placeholder="ชื่อย่อภาษาไทย" /></Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        <div style={{marginRight: 10}}>Color: </div>
                                        <div onClick={() => this.setState({color_block: !this.state.color_block})} style={{width: 80, height: 25, backgroundColor: this.state.color, border: '1px solid #ddd', borderRadius: '5px 5px 5px 5px'}}/>
                                    </div>
                                    {this.state.color_block?
                                    <div style={ styles.popover }>
                                        <div style={ styles.cover } onClick={ this.handleClose }/>
                                        <BlockPicker color={ this.state.color } onChangeComplete={ this.handleChangeComplete }/>
                                    </div>:''}
                                </Col>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col style={styles.middleContent} span={8} pull={16}>
                        <Row><Col style={{fontSize: '2em', marginBottom: 10}}>University logo</Col></Row>
                        <UploadImage storeImage={this.props.storeLogo} />
                    </Col>
                </Row>
            </div>
        )
    }
}

const styles = {
    buttonColor: {
        backgroundColor: '#FF5A5F', 
        borderColor: '#FF5A5F'
    },
    mainContent: {
        margin: 20
    },
    middleContent: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column'
    },
    imgStyle: {
        height:100, 
        width: 100
    },
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

const mapStateToProps = state => {
    return { create_data: state.create.get('create_data'), logo: state.create.get('logo') }
}

export default connect(mapStateToProps, { storeCreateData, storeLogo })(InsertInformation)