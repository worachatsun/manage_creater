import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import HomeComponent from '../components/HomeComponent'
import CreateAppComponent from '../components/CreateAppComponent'
import SigninPage from '../components/SigninPage'
import SignupPage from '../components/SignupPage'
import ProfilePage from '../components/ProfilePage'
import SettingsPage from '../components/SettingsPage'
import AppDetail from '../components/AppDetail'
import { checkUser } from '../actions'
import 'antd/dist/antd.css'

class Router extends Component {
    componentWillMount = () => {
        if(localStorage.getItem('key')){
            this.props.checkUser()
        } 
    }

    PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            this.props.isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/auth/signin',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )

    AuthRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            !this.props.isLoggedIn ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { from: props.location }
                }}/>
            )
        )}/>
    )

    render() {
        const { PrivateRoute, AuthRoute } = this

        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={HomeComponent}/>
                    <PrivateRoute path={'/create'} component={CreateAppComponent}/>
                    <PrivateRoute path={'/profile'} component={ProfilePage}/>
                    <PrivateRoute path={'/setting'} component={SettingsPage}/>
                    <AuthRoute path={'/auth/signin'} component={SigninPage}/>
                    <AuthRoute path={'/auth/signup'} component={SignupPage}/>
                    <PrivateRoute path={'/detail'} component={AppDetail} />
                </Switch>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.get('isLoggedIn') }
}

export default connect(mapStateToProps, {checkUser})(Router)