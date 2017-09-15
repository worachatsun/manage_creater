import React, {Component} from 'react'
import {Row, Col, Card} from 'antd'
import NewspaperIcon from 'mdi-react/NewspaperIcon'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import '../styles/css/index.css'

class ChooseFeature extends Component {
    state = {
        news: false,
        event: false,
        donate: false,
        career: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <Row gutter={6}>
                    <Col style={styles.middleContent} span={8}>
                        <div onClick={() => this.setState({news: !this.state.news})}>
                            <Card style={this.state.news?styles.selectedFeature:{}}>
                                <div style={styles.middleContent}>
                                    <NewspaperIcon className="icon-color" style={styles.imgStyle} />
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>NEWS</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={styles.middleContent} span={8}>
                        <div onClick={() => this.setState({event: !this.state.event})}>
                            <Card style={this.state.event?styles.selectedFeature:{}}>
                                <div style={styles.middleContent}>
                                    <CalendarTextIcon style={styles.imgStyle} />
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>EVENT</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={styles.middleContent} span={8}>
                        <div onClick={() => this.setState({donate: !this.state.donate})}>
                            <Card style={this.state.donate?styles.selectedFeature:{}}>
                                <div style={styles.middleContent}>
                                    <CoinIcon style={styles.imgStyle}/>
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>DONATE</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={6} style={{marginTop: 20}}>
                    <Col style={styles.middleContent} span={8}>
                    </Col>
                    <Col style={styles.middleContent} span={8}>
                        <div onClick={() => this.setState({career: !this.state.career})}>
                            <Card style={this.state.career?styles.selectedFeature:{}}>
                                <div style={styles.middleContent}>
                                    <WorkerIcon style={styles.imgStyle} />
                                </div>
                                <div style={styles.middleContent}>
                                    <p style={{fontSize: '1.3em', marginTop: 20}}>CAREER</p>
                                    <p style={{marginTop: 10}}>Type imformation of your University</p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col style={styles.middleContent} span={8}>
                    </Col>
                </Row>
            </div>
        )
    }
}

const styles = {
    middleContent: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column'
    },
    imgStyle: {
        height:100, 
        width: 100,
        color: 'red'
    },
    selectedFeature: {
        borderColor: '#FF5A5F',
        backgroundColor: '#FF5A5F',
        color: 'white'
    }
}

export default ChooseFeature