import '../styles/App.scss'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'

export default () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/surveys"/>
        <Route path="/surveys/new"/>
      </Switch>
    </BrowserRouter>
  </div>
)




