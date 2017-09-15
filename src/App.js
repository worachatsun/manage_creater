import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { configureStore } from './store' 
import Router from './config/Router'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router />
      </Provider>
    )
  }
}

export default App
