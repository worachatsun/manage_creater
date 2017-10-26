import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Row, Col, Button, Steps, message, Icon, Spin} from 'antd'
import {saveAppInfo} from '../actions'
import Header from '../common/Header'
import InsertInformation from './InsertInformation'
import ChooseFeature from './ChooseFeature'
import ExportApp from './ExportApp'
import '../styles/css/index.css'
const Step = Steps.Step

class CreateAppComponent extends Component {
    constructor(props) {
        super(props)
        this.steps = [{
            title: 'Insert university information',
            content: <InsertInformation toPage={page => this.setState({current: page})}/>,
            logo: 'edit'
        }, {
            title: 'Choose feature',
            content: <ChooseFeature toPage={page => this.setState({current: page})}/>,
            logo: 'appstore'
        }, {
            title: 'Genarate application',
            content: <ExportApp />,
            logo: 'export'
        }]
    }
    
    state = {
        current: 0,
        redirect: false,
        loading: false
    }

    storeCreateInfo = create_info => {
        this.setState(create_info)
    }

    next() {
        const current = this.state.current + 1
        this.setState({ current })
    }
    prev() {
        const current = this.state.current - 1
        this.setState({ current })
    }

    done = () => {
        const { feature_choosed, logo, create_data, user } = this.props

        this.setState({loading: true})
        this.props.saveAppInfo({feature_choosed, logo, create_data, createdBy: user._id}).then(() => {
            message.success('Processing complete!')
            this.setState({redirect: true, loading: false})
        })
    }

    render() {
        const { current } = this.state

        if (this.state.redirect) {
            return (
                <Redirect to={'/profile'}/>
            )
        }
        
        return (
            <div>
                <Header />
                <Row style={{marginTop: 30}}>
                    <Col span={20} offset={2}>
                        <Steps current={current}>
                            {this.steps.map(item => <Step key={item.title} icon={<Icon type={item.logo} />} title={item.title} />)}
                        </Steps>
                        <Spin spinning={this.state.loading} size="large" tip="Waiting for generate your application..." delay={300} >
                            <div className="steps-content">{this.steps[this.state.current].content}</div>
                        </Spin>
                        <div className="steps-action" style={{display: 'flex', justifyContent: 'center'}}>
                            {
                                this.state.current > 0
                                &&
                                <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            }
                            {
                                this.state.current < this.steps.length - 1
                                &&
                                <Button type="primary" onClick={() => this.next()}>Next</Button>
                            }
                            {
                                this.state.current === this.steps.length - 1
                                &&
                                <Button type="primary" onClick={this.done}>Done</Button>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        create_data: state.create.get('create_data'),
        feature_choosed: state.create.get('feature_choosed'),
        logo: state.create.get('logo'),
        user: state.auth.get('user')
    }
}

export default connect(mapStateToProps, {saveAppInfo})(CreateAppComponent)