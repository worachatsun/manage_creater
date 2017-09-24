import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Card, Button} from 'antd'
import Moment from 'react-moment'
import {downloadAndroid} from '../actions'
import Header from '../common/Header'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import NewspaperIcon from 'mdi-react/NewspaperIcon'
import {API_URL} from '../api'

class AppDetail extends Component {

    onDownloadAndroid = () => {
        this.props.downloadAndroid(this.props.location.state.app._id)
    }
    
    render() {
        const { uni_name, uni_abb, uni_th_name, uni_th_abb, color, createdAt, features, logo, updatedAt, android_download } = this.props.location.state.app
        
        return (
            <Row>
                <Header />
                <Row type={'flex'} justify={'center'} style={{marginTop: 30}}>
                    <Col span={20}>
                        <Card>
                            <Row type={'flex'} justify={'space-around'} gutter={16}
                                style={{width: '100%', height: 100, borderBottom: '1px solid #ddd'}}>
                                <Col span={6} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <img src={logo} style={{height: 80, width: 80, backgroundColor: 'white', borderRadius: 5}}/>
                                </Col>
                                <Col span={15} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                                    <Row>
                                        <div style={{fontWeight: 'bold', fontSize: '1.5em', color: '#114B5F'}}>{uni_name}</div>
                                    </Row>
                                    <div style={{backgroundColor: '#FF5A5F', height: 3, width: 40, marginBottom: 5, marginTop: 5}}/>
                                    <Row>
                                        <div style={{fontSize: '1.2em'}}>{uni_abb}</div>    
                                    </Row>                                    
                                </Col>
                            </Row>
                            <Row style={{marginTop: 30, borderBottom: '1px solid #ddd'}}>                                
                                <Row style={{fontSize: '1.5em', fontWeight: 'bold'}}>University detail</Row>                                
                                <Row>{uni_name} ({uni_abb})</Row>
                                <Row>{uni_th_name} ({uni_th_abb})</Row>
                                <Row><Moment format="YYYY/MM/DD" date={createdAt} /> <Moment fromNow>{updatedAt}</Moment></Row>
                                <Row><div style={{backgroundColor: color, height: 20, width: 100}}/></Row>
                            </Row>
                            <Row>
                                <Row>Feature enabled</Row>   
                                <Row type={'flex'}>                                            
                                    <Col style={{margin: 3}}><NewspaperIcon fill={features.news?color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                                    <Col style={{margin: 3}}><CalendarTextIcon fill={features.event?color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                                    <Col style={{margin: 3}}><WorkerIcon fill={features.career?color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                                    <Col style={{margin: 3}}><CoinIcon fill={features.donate?color:'#DDD'} style={{height: 100, width: 100}}/></Col>
                                </Row>
                            </Row>
                            <Row>
                                <a href={`${API_URL}/api/downloadAndroid/${android_download}`}><Button icon={'android-o'}>Download</Button></a>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default connect(null, {downloadAndroid})(AppDetail)