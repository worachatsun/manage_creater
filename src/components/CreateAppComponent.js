import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Col, Button, Steps, message, Icon} from 'antd'
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
            title: 'Insert information',
            content: <InsertInformation firstPage={() => this.setState({current: 0})}/>,
            logo: 'edit'
        }, {
            title: 'Choose feature',
            content: <ChooseFeature />,
            logo: 'appstore'
        }, {
            title: 'Genarate App',
            content: <ExportApp />,
            logo: 'export'
        }]
    }
    
    state = {
        current: 0,
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
    render() {
        const { current } = this.state
        return (
            <div>
                <Header />
                <Row style={{marginTop: 30}}>
                    <Col span={20} offset={2}>
                        <Steps current={current}>
                            {this.steps.map(item => <Step key={item.title} icon={<Icon type={item.logo} />} title={item.title} />)}
                        </Steps>
                        <div className="steps-content">{this.steps[this.state.current].content}</div>
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
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { create_data: state.create.get('create_data') }
}

export default connect(mapStateToProps)(CreateAppComponent)