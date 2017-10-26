import ServiceBase from '../service-base'

export default class LoginService extends ServiceBase {
  async login (email, password) {
    return this.request({
      method: 'POST',
      url: 'login',
      data: { email, password }
    })
  }
}
