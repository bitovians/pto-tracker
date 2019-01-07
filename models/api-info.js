import { DefineMap } from 'can'

const STORAGE_PROP = 'bitovians/api/token'

export default DefineMap.extend('APIInfo', {
  get isValid () {
    return (this.isValidToken(this.token) && this.url)
      ? this.url.includes('freshbooks') || this.url.includes('billingarm')
      : false
  },

  token: {
    default () {
      return window.localStorage.getItem(STORAGE_PROP)
    },
    set (token) {
      if (token) {
        window.localStorage.setItem(STORAGE_PROP, token)
        return token
      }
      window.localStorage.removeItem(STORAGE_PROP)
    }
  },

  url: {
    default: 'https://bitovi.freshbooks.com/api/2.1/xml-in'
  },

  isValidToken (token) {
    const TOKEN_VALIDATE = /\b[0-9a-f]{5,40}\b/
    return token && TOKEN_VALIDATE.test(token)
  }
})
