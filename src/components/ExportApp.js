import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Card} from 'antd'
import DemoMobileScreen from './mobileScreen/DemoMobileScreen'

class ExportApp extends Component{
    render() {
        const { uni_name, uni_abb, uni_th_abb, uni_th_name, color } = this.props.create_data
        
        return(
            <Row>
                <Col span={10} style={{display: 'flex', justifyContent: 'center'}}>
                    <DemoMobileScreen create_data={this.props.create_data} />
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