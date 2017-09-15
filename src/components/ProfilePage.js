import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Input, Card, Button, Icon} from 'antd'
import {Header} from '../common'

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row style={{marginTop: 20}} type={'flex'} justify={'center'} gutter={16}>
                    <Col span={7}>
                        <Card>
                            <Row gutter={16}>
                                <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width: 210, height: 200, borderRadius: 5}} src={'http://www.clker.com/cliparts/7/4/c/4/1446118397610284725jobs.png'} alt={'Profile Image'}/>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <div style={{fontSize: '2em', fontWeight: 'bold', marginTop: 10}}>Steve Jobs</div>
                                    <div style={{marginTop: 5, paddingTop: 5, borderTop: '1px solid #ddd'}}><Icon type={'mail'}/> steve@jobs.com</div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={15}>
                        <Card>
                            <Row gutter={16}>
                                
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProfilePage