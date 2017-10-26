import { observable, action } from 'mobx'
import LoginService from '../../services/login/login-service'

class LoginStore {
  constructor () {
    this.loginService = new LoginService()
  }
  @observable email = ''
  @observable password = ''
  @observable errorMessage = ''

  @action setEmail = (value) => {
    this.email = value
  }

  @action setPassword = (value) => {
    this.password = value
  }

  @action setErrorMessage = (value) => {
    this.errorMessage = value
  }

  @action login = async onSuccess => {
    const result = await this.loginService.login(this.email, this.password)
    if (result && result.success === true) {
      onSuccess()
    } else {
      this.setErrorMessage(result.message)
    }
  }
}
const getInstance = () => new LoginStore()
export { getInstance }
export default getInstance()
