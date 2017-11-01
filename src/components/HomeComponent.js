import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Button, Card} from 'antd'
import Header from '../common/Header'
import NewspaperIcon from 'mdi-react/NewspaperIcon'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Row style={{height: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', borderBottom: '2px solid #FF5A5F'}}>
                    <Row style={styles.mainContent}>
                        <Col style={{fontSize: '4em'}}>MAKING YOUR <span style={{color: '#FF5A5F'}}>NATIVE</span> APPLICATION</Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col style={{color: '#114B5F'}}>The ways to have your own native application for free</Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col><Link to={'/create'}><Button style={styles.buttonColor} type="primary">Create an App</Button></Link></Col>
                    </Row>
                    <img src={require('../styles/images/big_appaca.png')} style={{position: 'absolute', bottom: -1, left: 100}}/>
                </Row>
                <Row style={{marginTop: 30}}>
                    <Row gutter={16} style={{padding: 30, borderBottom: '1px solid #ddd', marginLeft: 100, marginRight: 100}}  type={'flex'} justify={'center'}>
                        <Col span={11}>
                            <div style={styles.middleContent}>
                                <img alt={'Insert'} style={{width: '60%', height: '60%'}} src={require('../styles/images/gauge.png')}/>
                            </div>
                        </Col>
                        <Col span={11} style={{display: 'flex', alignItems: 'center'}}>
                            <div>
                                <p style={{fontSize: '1em', color: '#FF5A5F'}}>FAST & RELIABLE</p>
                                <p style={{fontSize: '1.5em', color: '#114B5F'}}>BETTER PERFORMANCE</p>
                                <div style={{backgroundColor: '#FF5A5F', height: 3, width: 40, marginTop: 10}}/>
                                <p style={{marginTop: 20, color: '#424242'}}>
                                    We have better performance than other app maker because it’s not a “mobile web app”, an “HTML5 app”, or a “hybrid app”. 
                                    You will get a real mobile application. So native apps offer the fastest, most reliable and most responsive experience to you.
                                    This is unlikely to change in favor of web apps.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row style={{marginTop: 30, paddingBottom: 30}}>
                    <Row gutter={16} style={{padding: 30, marginLeft: 100, marginRight: 100}}  type={'flex'} justify={'center'}>
                        <Col span={11} style={{display: 'flex', alignItems: 'center'}}>
                            <div>
                                <p style={{fontSize: '1em', color: '#FF5A5F'}}>IPHONE & ANDROID</p>
                                <p style={{fontSize: '1.5em', color: '#114B5F'}}>CROSS-PLATFORM APPS</p>
                                <div style={{backgroundColor: '#FF5A5F', height: 3, width: 40, marginTop: 10}}/>
                                <p style={{marginTop: 20, color: '#424242'}}>
                                There are now more than 500 million iPhone's on the planet. 
                                Android is everywhere! In fact, over 80% of all smartphones in the world are controlled by that little green robot. 
                                We build both ios and android application for you. So want the chance to reach out to every one of them?
                                </p>
                            </div>
                        </Col>
                        <Col span={11}>
                            <div style={styles.middleContent}>
                                <img alt={'Insert'} style={{width: '90%', height: '90%'}} src={require('../styles/images/both-phone.png')}/>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row style={{marginTop: 30, backgroundColor: '#FF5A5F', paddingBottom: 50, paddingTop: 50}}>
                    <Row style={styles.middleContent}>
                        <Col style={styles.middleContent}>
                            <div style={{color: '#FFF', fontSize: '3em'}}>FOUR FEATURES YOU CAN CHOOSE</div>
                            <div style={{backgroundColor: '#114B5F', height: 3, width: 40, marginTop: 10}}/>
                        </Col>  
                    </Row>
                    <Row gutter={16} style={{padding: 30}}  type={'flex'} justify={'center'}>
                        <Col span={5}>
                            <Card style={{height: 230, display: 'flex', alignItems: 'center'}}>
                                <div style={styles.middleContent}>
                                    <div style={styles.feature}>
                                        <NewspaperIcon fill={'#114B5F'} style={{width: '100%', height: '100%'}} />
                                    </div> 
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20, color: '#FF5A5F'}}>NEWS</p>
                                    <p style={{marginTop: 10, maxWidth: 270, textAlign: 'center'}}>You can announce news of your univercity of faculty to your alumni.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={5}>                            
                            <Card style={{height: 230, display: 'flex', alignItems: 'center'}}>
                                <div style={styles.middleContent}>
                                    <div style={styles.feature}>
                                        <CalendarTextIcon fill={'#114B5F'} style={{width: '100%', height: '100%'}} />
                                    </div> 
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20, color: '#FF5A5F'}}>EVENT</p>
                                    <p style={{marginTop: 10, maxWidth: 270, textAlign: 'center'}}>You can create event for alumni to join university event.</p>
                                </div>
                            </Card>          
                        </Col>
                        <Col span={5}>
                            <Card style={{height: 230, display: 'flex', alignItems: 'center'}}>
                                <div style={styles.middleContent}>
                                    <div style={styles.feature}>
                                        <CoinIcon fill={'#114B5F'} style={{width: '100%', height: '100%'}} />
                                    </div> 
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20, color: '#FF5A5F'}}>DONATE</p>
                                    <p style={{marginTop: 10, maxWidth: 270, textAlign: 'center'}}>You can create donation event for alumni to donate your university.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col span={5}>
                            <Card style={{height: 230, display: 'flex', alignItems: 'center'}}>
                                <div style={styles.middleContent}>
                                    <div style={styles.feature}>
                                        <WorkerIcon fill={'#114B5F'} style={{width: '100%', height: '100%'}} />
                                    </div> 
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20, color: '#FF5A5F'}}>CAREER</p>
                                    <p style={{marginTop: 10, maxWidth: 270, textAlign: 'center'}}>Alumni can post news about hiring for jobs.</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Row>
                <Row style={{marginTop: 30, backgroundColor: '#FFFFFF', paddingBottom: 50, paddingTop: 50}}>
                    <Row style={styles.middleContent}>
                        <Col style={styles.middleContent}>
                            <div style={{color: '#114B5F', fontSize: '3em'}}>ONLY THREE STEPS YOU NEED</div>
                            <div style={{backgroundColor: '#FF5A5F', height: 3, width: 40}}/>
                        </Col>  
                    </Row>
                    <Row gutter={16} style={{padding: 30}}  type={'flex'} justify={'center'}>
                        <Col span={7}>
                            <div style={styles.middleContent}>
                                <div style={styles.circle}>
                                    <img alt={'Insert'} style={styles.imgStyle} src={require('../styles/images/edit.png')}/>
                                </div>
                            </div>
                            <div style={styles.middleContent}>
                                <p style={{fontSize: '1.3em', marginTop: 20}}>INSERT YOUR INFORMATION</p>
                                <p style={{marginTop: 10, maxWidth: 270, textAlign: 'center'}}>Insert your university detail, upload logo and choosing your theme color.</p>
                            </div>
                        </Col>
                        <Col span={7}>                            
                            <div style={styles.middleContent}>
                                <div style={styles.circle}>
                                    <img alt={'browse'} style={styles.imgStyle} src={require('../styles/images/settings.png')}/>
                                </div>
                            </div>
                            <div style={styles.middleContent}>
                                <p style={{fontSize: '1.3em', marginTop: 20}}>PICKING YOUR FEATURE</p>
                                <p style={{marginTop: 10, maxWidth: 270, textAlign: 'center'}}>There are four features that you can choose. First is news, event, career, donate.</p>
                            </div>            
                        </Col>
                        <Col span={7}>
                            <div style={styles.middleContent}>
                                <div style={styles.circle}>
                                    <img alt={'browse'} style={styles.imgStyle} src={require('../styles/images/browser.png')}/>
                                </div> 
                            </div>
                            <div style={styles.middleContent}>
                                <p style={{fontSize: '1.3em', marginTop: 20}}>GENERATE YOUR APPLICATION</p>
                                <p style={{marginTop: 10, maxWidth: 270, textAlign: 'center'}}>Checking your information and generate your application.</p>
                            </div>
                        </Col>
                    </Row>
                </Row>
                <Row style={{ backgroundImage: `url(${require('../styles/images/iphone-app.jpg')})`, backgroundSize: 'cover', height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Row style={styles.mainContent}>
                        <Col>
                            <div style={{color: 'white', fontSize: '3.5em'}}>WHAT ARE YOU WAITING FOR ?</div>
                        </Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col style={{color: 'white', fontSize: '2.5em'}}>Come to join us.</Col>
                    </Row>
                    <Row style={styles.mainContent}>
                        <Col><Link to={'/create'}><Button style={styles.buttonColor} type="primary">Create an App</Button></Link></Col>
                    </Row>
                </Row>
                <Row style={{height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid #ddd', marginLeft: 100, marginRight: 100}}>
                    <Row>
                        <img src={require('../styles/images/logo_sit_kmutt.png')} style={{width: 300, height: 50}}/>
                    </Row>
                    <Row style={{color: '#ddd', marginLeft: 5, paddingLeft: 10, borderLeft: '1px solid #ddd'}}>
                        <Col>This is using for senior project</Col>
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
        height: 25, 
        width: 25,
    },
    circle: {
        height: 60, 
        width: 60,
        border: '1px solid #FF5A5F',
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 0px 32px -9px rgba(255,89,95,1)'
    },
    feature: {
        height: 60, 
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default HomeComponent