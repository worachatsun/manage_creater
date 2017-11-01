import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Row, Col, Card, Button, Modal, Popover} from 'antd'
import Moment from 'react-moment'
import {downloadAndroid, deleteApp} from '../../actions'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import NewspaperIcon from 'mdi-react/NewspaperIcon'
import {API_URL} from '../../api'

// const content = (
//     <div>
//         <Button style={{margin: 10}}>.ipa</Button>
//         <a href={`${API_URL}/api/downloadIOS/${android_download}`} style={{margin: 10}}><Button style={{margin: 10}}>.xcodeproj</Button></a>
//     </div>
// )

class DetailPage extends Component {

    state = {
        redirect: false
    }

    onDownloadAndroid = () => {
        this.props.downloadAndroid(this.props.app._id)
    }

    showDeleteConfirm = () => {
        Modal.confirm({
            title: 'Are you sure delete this application?',
            content: 'If you delate this application, all of data will be delete.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: this.handleOk,
            onCancel() {
                console.log('Cancel')
            },
        })
    }

    handleOk = () => {
        this.props.deleteApp(this.props.app._id).then(() => {
            this.setState({redirect: true})
        })
        
    }
    
    render() {
        const { uni_name, uni_abb, uni_th_name, uni_th_abb, color, createdAt, features, logo, updatedAt, android_download } = this.props.app
        
        if (this.state.redirect) {
            return (
                <Redirect to={'/profile'}/>
            )
        }

        return (
            <div>
                <Row type={'flex'} justify={'space-between'} align={'center'} gutter={16}
                    style={{height: 50, borderBottom: '1px solid #ddd', marginBottom: 30}}>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <div style={{fontSize: '2em', textAlign: 'center', color: '#114B5F'}}>APPLICATION DETAIL</div>
                    </Col>
                    <Col span={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Button onClick={() => this.props.toPage('edit')} icon={'tool'} type={'primary'} style={{backgroundColor: '#FF5A5F', border: '1px solid #FF5A5F'}}>Edit application detail</Button>
                        <Button onClick={this.showDeleteConfirm} icon={'delete'} type={'danger'} style={{marginLeft: 5}}>Delete</Button>
                    </Col>
                </Row>
                <Row style={{borderBottom: '1px solid #ddd', paddingBottom: 30}}>
                    <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
                        <img src={logo} style={{height: 130, width: 130, backgroundColor: 'white', borderRadius: 5}}/>
                    </Row>
                    <Row style={{flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
                        <p style={{fontSize: '1em', color: '#FF5A5F'}}>{uni_abb}</p>
                        <p style={{fontSize: '1.5em', color: '#114B5F'}}>{uni_name}</p>
                        <div style={{backgroundColor: '#FF5A5F', height: 3, width: 40, marginBottom: 10, marginTop: 5}}/>
                    </Row>
                    <Row style={{ marginBottom: 10, marginTop: 10, flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Col span={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Row style={{fontSize: '1.5em', marginBottom: 10, marginTop: 10, color: '#FF5A5F'}}>University name</Row>
                            <Row style={{color: '#114B5F'}}>{uni_name}</Row>
                        </Col>
                        <Col span={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Row style={{fontSize: '1.5em', marginBottom: 10, marginTop: 10, color: '#FF5A5F'}}>University abbrevient</Row>
                            <Row style={{color: '#114B5F'}}>{uni_abb}</Row>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 10, marginTop: 10, flexDirection: 'row', display: 'flex' }}>
                        <Col span={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Row style={{fontSize: '1.5em', marginBottom: 10, marginTop: 10, color: '#FF5A5F'}}>ชื่อมหาลัย</Row>
                            <Row style={{color: '#114B5F'}}>{uni_th_name?uni_th_name:'ยังไม่มีชื่อไทย'}</Row>
                        </Col>
                        <Col span={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Row style={{fontSize: '1.5em', marginBottom: 10, marginTop: 10, color: '#FF5A5F'}}>ชื่อย่อมหาลัย</Row>
                            <Row style={{color: '#114B5F'}}>{uni_th_abb?uni_th_abb:'ยังไม่มีชื่อย่อไทย'}</Row>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: 10, marginTop: 10, flexDirection: 'row', display: 'flex' }}>
                        <Col span={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Row style={{fontSize: '1.5em', marginBottom: 10, marginTop: 10, color: '#FF5A5F'}}>Create At</Row>
                            <Row style={{color: '#114B5F'}}>Create At: <Moment format="YYYY/MM/DD" date={createdAt} /> <Moment fromNow>{updatedAt}</Moment></Row>
                        </Col>
                        <Col span={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Row style={{fontSize: '1.5em', marginBottom: 10, marginTop: 10, color: '#FF5A5F'}}>Color</Row>
                            <Row><div style={{backgroundColor: color, height: 50, width: 50, borderRadius: 25}}/></Row>
                        </Col>
                    </Row>
                </Row>
                <Row style={{borderBottom: '1px solid #ddd', marginBottom: 20, flexDirection: 'column', marginTop: 20}}>
                    <Row style={{flexDirection: 'column', display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                        <p style={{fontSize: '1.5em', color: '#114B5F'}}>FEATURE ENABLED</p>
                        <div style={{backgroundColor: '#FF5A5F', height: 3, width: 40, marginBottom: 10, marginTop: 5}}/>  
                    </Row>
                    <Row type={'flex'} justify={'space-around'} style={{marginBottom: 30, marginTop: 20}}>                                                                    
                        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                            <Row><NewspaperIcon fill={features.news?color:'#DDD'} style={{height: 100, width: 100}}/></Row>
                            <Row style={{textAlign: 'center'}}>News</Row>
                        </div>                    
                        <div>
                            <Row><CalendarTextIcon fill={features.event?color:'#DDD'} style={{height: 100, width: 100}}/></Row>
                            <Row style={{textAlign: 'center'}}>Event</Row>
                        </div>                 
                        <div>
                            <Row><WorkerIcon fill={features.career?color:'#DDD'} style={{height: 100, width: 100}}/></Row>
                            <Row style={{textAlign: 'center'}}>Career</Row>
                        </div>                 
                        <div>
                            <Row><CoinIcon fill={features.donate?color:'#DDD'} style={{height: 100, width: 100}}/></Row>
                            <Row style={{textAlign: 'center'}}>Donate</Row>
                        </div>                                 
                    </Row>
                </Row>
                <Row type={'flex'} justify={'center'} >
                    <a href={`${API_URL}/api/downloadAndroid/${android_download}`} style={{margin: 10}}><Button icon={'android-o'} type={'primary'} style={{backgroundColor: '#A4C639', border: '1px solid #A4C639'}} >Download Android (.apk)</Button></a>
                    {/* <Popover content={content} title={"Choose file type"}>
                        <Button style={{margin: 10}} icon={'apple-o'}>Download IOS</Button>
                    </Popover> */}
                    <a href={`${API_URL}/api/downloadIOS/${android_download}`} style={{margin: 10}}><Button icon={'apple-o'} >Download IOS (.xcodeproj)</Button></a>
                </Row>
            </div>
        )
    }
}

export default connect(null, {downloadAndroid, deleteApp})(DetailPage)