import React from 'react'
import Input from '../input'
import Form from '../form'
import { observer } from 'mobx-react'
import './login.css'

@observer
export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.loginStore = this.props.loginStore
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChangeEmail (email) {
    this.loginStore.setEmail(email)
  }
  handleChangePassword (password) {
    this.loginStore.setPassword(password)
  }
  handleSubmit () {
    this.loginStore.login(() => {
      console.log('Redirect')
    })
  }
  render () {
    const { email, password, errorMessage } = this.loginStore
    return (
      <div>
        <Form submitButtonText='Submit' onSubmit={this.handleSubmit}>
          <label className='login-error'>{errorMessage}</label>
          <Input
            type='email'
            label='Email'
            placeholder='Email'
            value={email}
            onChange={this.handleChangeEmail}
          />
          <Input
            type='password'
            label='Password'
            placeholder='Password'
            value={password}
            onChange={this.handleChangePassword}
          />
        </Form>
      </div>
    )
  }
}
