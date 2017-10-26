import React, {Component} from 'react'
import {Row, Col} from 'antd'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import MenuIcon from 'mdi-react/MenuIcon'
import NewspaperIcon from 'mdi-react/NewspaperIcon'
import {EventPage, NewsPage, CareerPage, MenuPage} from './AllPage'

class DemoMobileScreen extends Component {

    state = {
        onPage: 0
    }

    render() {
        const { uni_name, uni_abb, uni_th_abb, uni_th_name, color } = this.props.create_data
        const { news, event, donate, career } = this.props.feature_choosed
        const { onPage } = this.state
        
        return (
            <Row style={{height: 667, width: 375, border: '1px solid #ddd', justifyContent: 'flex-end'}}>
                <Row style={{height: 20, backgroundColor: color}}></Row>
                <div style={{height: 40, borderBottom: `1px solid ${color}`, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                    <div style={{marginLeft: 30}}></div>
                    <div style={{fontSize: 20, color: 'black'}}>{page[onPage].title}</div>
                    <div style={{marginRight: 11, marginTop: 5}}><MagnifyIcon fill={color} /></div>
                </div>
                {page[onPage].content}
                <div style={{height: 40, justifyContent: 'space-around', alignItems: 'center', display: 'flex', position: 'absolute', width: '100%', bottom: 0, marginBottom: 4, backgroundColor: 'white'}}>
                    {
                        news?<div onClick={() => this.setState({onPage: 0})}>
                            <NewspaperIcon fill={onPage===0?color:''} style={{width: 22, height: 22}}/>
                            <div style={{fontSize: 10, marginTop: -5}}><span style={onPage===0?{color}:{}}>NEWS</span></div>
                        </div>:''
                    }
                    {
                        event?<div onClick={() => this.setState({onPage: 1})}>
                            <CalendarTextIcon fill={onPage===1?color:''} style={{width: 22, height: 22}}/>
                            <div style={{fontSize: 10, marginTop: -5}}><span style={onPage===1?{color}:{}}>EVENT</span></div>
                        </div>:''
                    }
                    {
                        donate?<div onClick={() => this.setState({onPage: 2})}>
                            <CoinIcon fill={onPage===2?color:''} style={{width: 22, height: 22}}/>
                            <div style={{fontSize: 10, marginTop: -5}}><span style={onPage===2?{color}:{}}>DOANTE</span></div>
                        </div>:''
                    }
                    {
                        career?<div onClick={() => this.setState({onPage: 3})}>
                            <WorkerIcon fill={onPage===3?color:''} style={{width: 22, height: 22}}/>
                            <div style={{fontSize: 10, marginTop: -5}}><span style={onPage===3?{color}:{}}>CAREER</span></div>
                        </div>:''
                    }
                    <div onClick={() => this.setState({onPage: 4})}>
                        <MenuIcon fill={onPage===4?color:''} style={{width: 22, height: 22}}/>
                        <div style={{fontSize: 10, marginTop: -5}}><span style={onPage===4?{color}:{}}>MENU</span></div>
                    </div>
                </div>
            </Row>
        )
    }
}

const page = [{
    content: <NewsPage />,
    title: 'News'
}, {
    content: <EventPage />,
    title: 'Event'
}, {
    content: <NewsPage />,
    title: 'Donate'
}, {
    content: <CareerPage />,
    title: 'Career'
}, {
    content: <MenuPage />,
    title: 'Menu'
}]

export default DemoMobileScreen