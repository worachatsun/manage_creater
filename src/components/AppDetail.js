import React, {Component} from 'react'
import {Row, Col, Card, Button} from 'antd'
import Header from '../common/Header'
import DetailPage from './appDeatil/DetailPage'
import EditAppDetail from './appDeatil/EditAppDetail'

class AppDetail extends Component {
    state={
        current: 'detail'
    }

    toPage = to => {
        this.setState({current: to})
    }
    
    render() {
        return (
            <Row>
                <Header />
                <Row type={'flex'} justify={'center'} style={{marginTop: 30, marginBottom: 20}}>
                    <Col span={20}>
                        <Card>
                            {this.state.current==='detail'?
                                <DetailPage app={this.props.location.state.app} toPage={this.toPage} />
                            :   
                                <EditAppDetail app={this.props.location.state.app} toPage={this.toPage}/>
                            }
                        </Card>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default AppDetail