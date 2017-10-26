import axios from 'axios'

const API = 'http://localhost:3030/'

export default class ServiceBase {
  async request (config) {
    try {
      if (typeof config.url === 'undefined' || config.url === '') {
        throw Error('Request: No Url defined')
      }
      config.url = `${API}${config.url}`
      if (!config.headers) {
        config.headers = {}
      }

      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json'
      }

      if (!config.method) {
        config.method = 'get'
      }

      const result = await axios(config)
      return {
        success: true,
        result: result.data
      }
    } catch ({response}) {
      return {
        success: false,
        message: response.data
      }
    }
  }
}
