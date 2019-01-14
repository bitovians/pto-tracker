import { Component } from 'can'

import APIInfo from '~/models/api-info'

import view from './authenticate.stache'

Component.extend({
  tag: 'pto-authenticate',
  view,
  ViewModel: {
    apiInfo: {
      Type: APIInfo
    },

    validToken: {
      default: true,
      type: 'boolean'
    },

    token: {
      get (lastSetValue) {
        if (lastSetValue) return lastSetValue
        return this.apiInfo.token
      }
    },

    authenticate (ev) {
      ev.preventDefault()
      if (this.apiInfo.isValidToken(this.token)) {
        this.validToken = true
        this.apiInfo.token = this.token
      } else {
        this.validToken = false
        document.querySelector('input#token').select()
      }
    }
  }
})
