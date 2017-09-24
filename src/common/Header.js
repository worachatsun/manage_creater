import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Affix, Icon, Popover, Row, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {signOut} from '../actions'

const content = signOut => (
    <div>
        <Row style={{borderBottom: '1px solid #ddd', marginBottom: 5, paddingBottom: 5}}>
            <Link to={'/profile'}>
                <span style={{color: '#FF5A5F'}}><Icon type="user" style={{marginRight: 10}}/>Profile</span>
            </Link>
        </Row>
        <Row style={{marginBottom: 3, marginTop: 3}}>
            <Link to={'/setting'} className={'link'}>
                <span style={{color: '#FF5A5F'}}><Icon type="setting" style={{marginRight: 10}}/>Settings</span>
            </Link>
        </Row>
        <Row>
            <Link to={'/'} onClick={() => signOut()} className={'link'}>
                <span style={{color: '#FF5A5F'}}><Icon type="logout" style={{marginRight: 10}}/>Sign out</span>
            </Link>
        </Row>
    </div>
)

const title = user => (
    <div>
        <div style={{fontSize: 15}}>{user.username}</div>
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
                            <span style={{padding: 6, backgroundColor: 'white', borderRadius: 6}}><Link to="/create" style={{color: '#FF5A5F'}}>CREATE APP</Link></span>
                            
                        :
                            <div/>
                        }
                    </div>
                    <div style={{marginRight: 50, marginLeft: 50, width: 30, backgroundColor: 'white', height: 30, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Icon type="rocket" style={{ fontSize: 16, color: '#FF5A5F' }}/>
                    </div>
                    <div style={{color: 'white', fontSize: 13, display: 'flex', alignItems: 'center'}}>
                        {this.props.isLoggedIn?
                            <Popover placement="bottom" content={content(this.props.signOut)} title={title(this.props.user)}>
                                <div style={{marginRight: 20, width: 30, backgroundColor: 'white', height: 30, borderRadius: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Avatar src={this.props.user.avatar} />
                                </div>
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
    return { user: state.auth.get('user'), isLoggedIn: state.auth.get('isLoggedIn') }
}


export default connect(mapStateToProps, {signOut})(Header)