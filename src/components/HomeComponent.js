import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Button, Card} from 'antd'
import Header from '../common/Header'

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row style={{height: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderBottom: '1px solid #FF5A5F'}}>
                    <Row style={styles.mainContent}>
                        <Col style={{fontSize: '4em'}}>Making your <span style={{color: '#FF5A5F'}}>native</span> application</Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col>The ways to have your native application</Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col><Link to={'/create'}><Button style={styles.buttonColor} type="primary">Create an App</Button></Link></Col>
                    </Row>
                </Row>
                <Row style={{ backgroundImage: `url(${require('../styles/images/iphone-app.jpg')})`, backgroundSize: 'cover', height: 750, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Row style={styles.mainContent}>
                        <Col>
                            <div style={{color: 'white', fontSize: '3.5em'}}>Make app with just one finger</div>
                        </Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col style={{color: 'white'}}>The ways to have your native application</Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col><Link to={'/create'}><Button style={styles.buttonColor} type="primary">Create an App</Button></Link></Col>
                    </Row>
                </Row>
                <Row style={{marginTop: 30, borderBottom: '1px solic #ddd'}}>
                    <Row style={styles.middleContent}>
                        <Col>
                            <div style={{color: '#3C3C3C', fontSize: '3.5em'}}>How it works ?</div>
                        </Col>  
                    </Row>
                    <Row gutter={16} style={{padding: 30}}  type={'flex'} justify={'center'}>
                        <Col span={8}>
                            <Card>
                                <div style={styles.middleContent}>
                                    <img alt={'Insert'} style={styles.imgStyle} src={require('../styles/images/edit.png')}/>
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>INSERT YOUR INFORMATION</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <div style={styles.middleContent}>
                                    <img alt={'browse'} style={styles.imgStyle} src={require('../styles/images/browser.png')}/>
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>PICKING YOUR FEATURE</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{padding: 30}} type={'flex'} justify={'center'}>
                        <Col span={8}>
                            <Card>
                                <div style={styles.middleContent}>
                                    <img alt={'browse'} style={styles.imgStyle} src={require('../styles/images/browser.png')}/>
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>PICKING YOUR FEATURE</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <div style={styles.middleContent}>
                                    <img alt={'Generate'} style={styles.imgStyle} src={require('../styles/images/settings.png')}/>
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>GENERATE YOUR APP</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
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
    }
}

export default HomeComponent