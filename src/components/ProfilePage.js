import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Card, Icon} from 'antd'
import Header from '../common/Header'

class ProfilePage extends Component {
    render() {
        const { email, firstname, lastname, location, university, username, avatar } = this.props.user
        
        return (
            <div>
                <Header />
                <Row style={{marginTop: 20}} type={'flex'} justify={'center'} gutter={16}>
                    <Col span={7}>
                        <Card>
                            <Row gutter={16}>
                                <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                                    <img style={{width: 210, height: 200, borderRadius: 5}} src={avatar} alt={'Profile'}/>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <div style={{marginTop: 10}}>
                                        <div style={{fontSize: '2em', fontWeight: 'bold'}}>{firstname} {lastname}</div>
                                        <div style={{fontSize: '1em', marginTop: -4, color: '#bbb'}}>{username}</div>
                                    </div>
                                    <div style={{marginTop: 5, paddingTop: 5, borderTop: '1px solid #ddd'}}><Icon type={'mail'}/> {email}</div>
                                    <div style={{marginTop: 5}}><Icon type={'mail'}/> {location}</div>
                                    <div style={{marginTop: 5}}><Icon type={'mail'}/> {university}</div>
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

const mapStateToProps = state => {
    return { user: state.auth.get('user'), isLoggedIn: state.auth.get('isLoggedIn') }
}

export default connect(mapStateToProps)(ProfilePage)