import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Affix, Icon, Popover, Row} from 'antd'
import {Link} from 'react-router-dom'
import {signOut} from '../actions'

const content = signOut => (
    <div>
        <Row style={{borderBottom: '1px solid #ddd', marginBottom: 5, paddingBottom: 5}}>
            <Link to={'/profile'}>
                <span style={{color: '#FF5A5F'}}><Icon type="user" style={{marginRight: 10}}/>PROFILE</span>
            </Link>
        </Row>
        <Row>
            <Link to={'/'} onClick={() => signOut()} className={'link'}>
                <span style={{color: '#FF5A5F'}}><Icon type="logout" style={{marginRight: 10}}/>SIGN OUT</span>
            </Link>
        </Row>
    </div>
)

class Header extends Component{
    render() {
        return (
            <Affix>
                <div style={{flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', padding: 10, backgroundColor: 'rgba(255, 90, 95, 0.8)'}}>
                    <div style={{color: 'white', fontSize: 13}}>
                        <Link to="/" style={{marginRight: 20, color: 'white'}}>HOME</Link>
                        {this.props.isLoggedIn?
                            <Link to="/create" style={{color: 'white'}}>CREATE APP</Link>
                        :
                            <div/>
                        }
                    </div>
                    <div style={{marginRight: 50, marginLeft: 50, width: 30, backgroundColor: 'white', height: 30, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon type="rocket" style={{ fontSize: 16, color: '#FF5A5F' }}/>
                    </div>
                    <div style={{color: 'white', fontSize: 13, display: 'flex', alignItems: 'center'}}>
                        {this.props.isLoggedIn?
                            <Popover content={content(this.props.signOut)} title="Your Profile">
                                <Link to='/profile' style={{marginRight: 20, color: 'white'}}>
                                    <div style={{marginRight: 20, width: 30, backgroundColor: 'white', height: 30, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <Icon type="rocket" style={{ fontSize: 16, color: '#FF5A5F' }}/>
                                    </div>
                                </Link>
                            </Popover>
                        :
                            <div>
                                <Link to='/auth/signin' style={{marginRight: 20, color: 'white'}}><span style={{marginRight: 10}}>SIGN IN</span></Link>
                                <Link to='/auth/signup' style={{marginRight: 20, color: 'white'}}><span>SIGN UP</span></Link>
                            </div>
                        }
                    </div>
                </div>
            </Affix>
        )
    }
}

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.get('isLoggedIn') }
}


export default connect(mapStateToProps, {signOut})(Header)