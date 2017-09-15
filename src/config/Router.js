import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import HomeComponent from '../components/HomeComponent'
import InsertInformation from '../components/InsertInformation'
import CreateAppComponent from '../components/CreateAppComponent'
import SigninPage from '../components/SigninPage'
import SignupPage from '../components/SignupPage'
import ProfilePage from '../components/ProfilePage'
import 'antd/dist/antd.css'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={HomeComponent}/>
                    <Route path={'/create'} component={CreateAppComponent}/>
                    <Route path={'/profile'} component={ProfilePage}/>
                    <Route path={'/auth/signin'} component={SigninPage}/>
                    <Route path={'/auth/signup'} component={SignupPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router