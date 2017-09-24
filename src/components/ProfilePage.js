import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getUserApp} from '../actions'
import {Row, Col, Card, Icon} from 'antd'
import Header from '../common/Header'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import NewspaperIcon from 'mdi-react/NewspaperIcon'

class ProfilePage extends Component {
    state = {
        loading: true
    }
    componentWillMount() {
        this.props.getUserApp(this.props.user._id).then(() => {
            this.setState({loading: false})
        })
    }

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
                                    <img style={{width: 200, height: 200, borderRadius: 6}} src={avatar} alt={'Profile'}/>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <div style={{marginTop: 10}}>
                                        <div style={{fontSize: '2em', fontWeight: 'bold'}}>{firstname} {lastname}</div>
                                        <div style={{fontSize: '1em', marginTop: -4, color: '#bbb'}}>{username}</div>
                                    </div>
                                    <div style={{marginTop: 5, paddingTop: 5, borderTop: '1px solid #ddd'}}><Icon type={'mail'}/> {email}</div>
                                    <div style={{marginTop: 5}}><Icon type={'environment-o'}/> {location}</div>
                                    <div style={{marginTop: 5}}><Icon type={'home'}/> {university}</div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={15}>
                        <Card loading={this.state.loading}>
                            <Row style={styles.appBorder} gutter={16}>
                                <Col>
                                    <div style={{fontSize: '2em', color: '#114B5F'}}>YOUR APPLICATION</div>
                                </Col>
                            </Row>
                            {this.props.all_user_app.map((app, index) => (
                                <Link key={index} to={{
                                    pathname: '/detail',
                                    state: { app }
                                }}>
                                    <Row style={index===this.props.all_user_app.length-1?styles.appWithoutBorder:styles.appBorder} gutter={16}>
                                        <Col>
                                            <img src={app.logo} alt={'logo'} style={{width: 75, height: 75}}/>
                                        </Col>
                                        <Col>
                                            <Row>                                            
                                                <Col>University name: {app.uni_name}</Col>
                                            </Row>
                                            <Row>                                            
                                                <Col>University abbreviation: {app.uni_abb}</Col>
                                            </Row>
                                            {app.uni_th_name===''?'':
                                                <Row>
                                                    <Col>ชื่อมหาวิทยาลัย: {app.uni_th_name}</Col>
                                                </Row>
                                            }
                                            {app.uni_th_abb===''?'':
                                                <Row>                                                
                                                    <Col>ชื่อย่อมหาวิทยาลัย: {app.uni_th_abb}</Col>
                                                </Row>
                                            }
                                        </Col>
                                        <Col>
                                            <Row type={'flex'}>                                            
                                                <Col style={{margin: 3}}><NewspaperIcon fill={app.features.news?'#FF5A5F':'#DDD'}/></Col>
                                                <Col style={{margin: 3}}><CalendarTextIcon fill={app.features.event?'#FF5A5F':'#DDD'}/></Col>
                                            </Row>
                                            <Row type={'flex'}>                                        
                                                <Col style={{margin: 3}}><WorkerIcon fill={app.features.career?'#FF5A5F':'#DDD'}/></Col>
                                                <Col style={{margin: 3}}><CoinIcon fill={app.features.donate?'#FF5A5F':'#DDD'}/></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Link>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const styles = {
    appBorder: {borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', paddingBottom: 10, marginBottom: 20, justifyContent: 'space-between'},
    appWithoutBorder: {display: 'flex', alignItems: 'center', justifyContent: 'space-between'}
}

const mapStateToProps = state => {
    return { 
        all_user_app: state.create.get('all_user_app'),
        user: state.auth.get('user'), 
        isLoggedIn: state.auth.get('isLoggedIn') }
}

export default connect(mapStateToProps, {getUserApp})(ProfilePage)