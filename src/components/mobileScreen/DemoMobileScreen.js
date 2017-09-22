import React, {Component} from 'react'
import {Row, Col} from 'antd'
import CalendarTextIcon from 'mdi-react/CalendarTextIcon'
import CoinIcon from 'mdi-react/CoinIcon'
import WorkerIcon from 'mdi-react/WorkerIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import MenuIcon from 'mdi-react/MenuIcon'
import NewspaperIcon from 'mdi-react/NewspaperIcon'

class DemoMobileScreen extends Component {

    state = {
        onPage: 'News'
    }

    render() {
        const { uni_name, uni_abb, uni_th_abb, uni_th_name, color } = this.props.create_data
        const { onPage } = this.state
        
        return (
            <Row style={{height: 667, width: 375, border: '1px solid #ddd', justifyContent: 'flex-end'}}>
                <Row style={{height: 20, backgroundColor: color}}></Row>
                <div style={{height: 40, borderBottom: `1px solid ${color}`, justifyContent: 'space-between', alignItems: 'center', display: 'flex'}}>
                    <div style={{marginLeft: 30}}></div>
                    <div style={{fontSize: 20, color: 'black'}}>News</div>
                    <div style={{marginRight: 11, marginTop: 5}}><MagnifyIcon fill={color} /></div>
                </div>
                <div style={{width: '100%', maxHeight: 559, overflow: 'auto', paddingTop: 10}}>
                    <center>
                        <div style={{width: 355, height: 300, border: '1px solid #ddd', marginBottom: 10}}>
                            <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: '100%', height: 230}}/>
                            <div style={{width: '100%', height: 70, display: 'flex', alignItems: 'center', marginLeft: 20}}>
                                <div style={{fontSize: 16}}>asdsa</div>
                            </div>
                        </div>
                        <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                            <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                            <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                                Justify
                            </div>
                        </div>
                        <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                        <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                            <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                                Justify
                            </div>
                        </div>
                        <div style={{width: 355, height: 90, border: '1px solid #ddd', marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                        <img alt={'demo'} src={require('../../styles/images/livedemo.png')} style={{width: 130, height: '100%'}}/>
                            <div style={{width: 130, height: '100%', flex: 1, display: 'flex', alignItems: 'center', marginLeft: 15}}>
                                Justify
                            </div>
                        </div>
                    </center>
                </div>
                <div style={{height: 40, justifyContent: 'space-around', alignItems: 'center', display: 'flex', position: 'absolute', width: '100%', bottom: 0, marginBottom: 4, backgroundColor: 'white'}}>
                    <div onClick={() => this.setState({onPage: 'News'})}>
                        <NewspaperIcon fill={onPage==='News'?color:''} style={{width: 22, height: 22}}/>
                        <div style={{fontSize: 10, marginTop: -5}}><span style={onPage==='News'?{color}:{}}>NEWS</span></div>
                    </div>
                    <div onClick={() => this.setState({onPage: 'Event'})}>
                        <CalendarTextIcon fill={onPage==='Event'?color:''} style={{width: 22, height: 22}}/>
                        <div style={{fontSize: 10, marginTop: -5}}><span style={onPage==='Event'?{color}:{}}>EVENT</span></div>
                    </div>
                    <div onClick={() => this.setState({onPage: 'Donate'})}>
                        <CoinIcon fill={onPage==='Donate'?color:''} style={{width: 22, height: 22}}/>
                        <div style={{fontSize: 10, marginTop: -5}}><span style={onPage==='Donate'?{color}:{}}>DOANTE</span></div>
                    </div>
                    <div onClick={() => this.setState({onPage: 'Career'})}>
                        <WorkerIcon fill={onPage==='Career'?color:''} style={{width: 22, height: 22}}/>
                        <div style={{fontSize: 10, marginTop: -5}}><span style={onPage==='Career'?{color}:{}}>CAREER</span></div>
                    </div>
                    <div onClick={() => this.setState({onPage: 'Menu'})}>
                        <MenuIcon fill={onPage==='Menu'?color:''} style={{width: 22, height: 22}}/>
                        <div style={{fontSize: 10, marginTop: -5}}><span style={onPage==='Menu'?{color}:{}}>MENU</span></div>
                    </div>
                </div>
            </Row>
        )
    }
}

export default DemoMobileScreen