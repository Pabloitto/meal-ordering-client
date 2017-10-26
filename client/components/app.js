import React from 'react'
import Login from './login/login'
import LoginStore from '../stores/login/login-store'

export default () => {
  return (<div className='container'>
    <Login loginStore={LoginStore} />
  </div>)
}
