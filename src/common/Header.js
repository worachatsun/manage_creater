import React from 'react'
import {Affix, Icon} from 'antd'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Affix>
            <div style={{flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', padding: 10, backgroundColor: 'rgba(255, 90, 95, 0.8)'}}>
                <div style={{color: 'white', fontSize: 13}}>
                    <Link to="/" style={{marginRight: 20, color: 'white'}}>HOME</Link>
                    <Link to="/create" style={{color: 'white'}}>CREATE APP</Link>
                </div>
                <div style={{marginRight: 50, marginLeft: 50, width: 30, backgroundColor: 'white', height: 30, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Icon type="rocket" style={{ fontSize: 16, color: '#FF5A5F' }}/>
                </div>
                <div style={{color: 'white', fontSize: 13, display: 'flex', alignItems: 'center'}}>
                    <Link to='/profile' style={{marginRight: 20, color: 'white'}}>
                        <div style={{marginRight: 20, width: 30, backgroundColor: 'white', height: 30, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Icon type="rocket" style={{ fontSize: 16, color: '#FF5A5F' }}/>
                        </div>
                    </Link>
                    <Link to='/auth/signin' style={{marginRight: 20, color: 'white'}}><span style={{marginRight: 10}}>SIGN IN</span></Link>
                    <Link to='/auth/signup' style={{marginRight: 20, color: 'white'}}><span>SIGN UP</span></Link>
                </div>
            </div>
        </Affix>
    )
}

export {Header}