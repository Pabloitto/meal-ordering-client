import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/app'

import 'bootstrap-css-only/css/bootstrap.css'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App} />
    </Router>
  ),
  document.getElementById('root')
)
