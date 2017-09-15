import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Card} from 'antd'
import NewspaperIcon from 'mdi-react/NewspaperIcon'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import MenuIcon from 'mdi-react/MenuIcon'

class ExportApp extends Component{
    render() {
        const { uni_name, uni_abb, uni_th_abb, uni_th_name, color } = this.props.create_data
        
        return(
            <Row>
                <Col span={10} style={{display: 'flex', justifyContent: 'center'}}>
                    <Row style={{height: 667, width: 375, border: '1px solid #ddd', justifyContent: 'flex-end'}}>
                        <Row style={{height: 20, backgroundColor: color}}></Row>
                        <div style={{height: 40, borderBottom: `1px solid ${color}`, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                            <div style={{marginLeft: 30}}></div>
                            <div style={{fontSize: 20, color: 'black'}}>News</div>
                            <div style={{marginRight: 11, marginTop: 5}}><MagnifyIcon /></div>
                        </div>
                        <div style={{width: '100%', maxHeight: 559, overflow: 'auto', paddingTop: 10}}>
                            <center>
                                <div style={{width: 355, height: 300, border: '1px solid #ddd', marginBottom: 10}}>
                                    <img alt={'demo'} src={require('../styles/images/livedemo.png')} style={{width: '100%', height: 230}}/>
                                    <div style={{width: '100%', height: 70, display: 'flex', alignItems: 'center', marginLeft: 20}}>
                                        <div style={{fontSize: 16}}>asdsa</div>
                                    </div>
                                </div>
                                <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                                    <img alt={'demo'} src={require('../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                                    <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                                        Justify
                                    </div>
                                </div>
                                <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                                <img alt={'demo'} src={require('../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                                    <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                                        Justify
                                    </div>
                                </div>
                                <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                                <img alt={'demo'} src={require('../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                                    <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                                        Justify
                                    </div>
                                </div>
                            </center>
                        </div>
                        <div style={{height: 40, justifyContent: 'space-around', alignItems: 'center', display: 'flex', position: 'absolute', width: '100%', bottom: 0, marginBottom: 4, backgroundColor: 'white'}}>
                            <div><NewspaperIcon style={{width: 22, height: 22}}/><div style={{fontSize: 10, marginTop: -5}}>NEWS</div></div>
                            <div><CalendarTextIcon style={{width: 22, height: 22}}/><div style={{fontSize: 10, marginTop: -5}}>EVENT</div></div>
                            <div><CoinIcon style={{width: 22, height: 22}}/><div style={{fontSize: 10, marginTop: -5}}>DOANTE</div></div>
                            <div><WorkerIcon style={{width: 22, height: 22}}/><div style={{fontSize: 10, marginTop: -5}}>CAREER</div></div>
                            <div><MenuIcon style={{width: 22, height: 22}}/><div style={{fontSize: 10, marginTop: -5}}>MENU</div></div>
                        </div>
                    </Row>
                </Col>
                <Col span={14}>
                    <Card>
                        <div style={styles.middleContent}>
                            <img alt={'Generate'} style={styles.imgStyle} src={this.props.logo}/>
                        </div>
                        <div style={styles.middleContent}>
                            <p style={{fontSize: '1.3em', marginTop: 20, fontWeight: 'bolder'}}>University name</p>
                            <p style={{marginTop: 10}}>{uni_name} ({uni_abb})</p>
                            <p style={{fontSize: '1.3em', marginTop: 20, fontWeight: 'bolder'}}>ซื่อภาษาไทย</p>
                            <p style={{marginTop: 10}}>{uni_th_name} ({uni_th_abb})</p>
                            <p style={{fontSize: '1.3em', marginTop: 20, fontWeight: 'bolder'}}>Color</p>
                            <div style={{width: 80, height: 25, backgroundColor: color, border: '1px solid #ddd', borderRadius: '5px 5px 5px 5px'}}/>
                        </div>
                    </Card>
                </Col>
            </Row>
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
        width: 100
    }
}

const mapStateToProps = state => {
    return { create_data: state.create.get('create_data'), logo: state.create.get('logo') }
}

export default connect(mapStateToProps)(ExportApp)