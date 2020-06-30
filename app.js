import { Component } from 'can'
import APIInfo from '~/models/api-info'
import TimeEntries from '~/models/time-entries'
import view from '~/app.stache'

import 'styles.less'

Component.extend({
  tag: 'bitovians-pto',
  view,
  ViewModel: {
    get isAuthenticated () {
      return this.apiInfo.isValid
    },

    apiInfo: {
      default () {
        return new APIInfo({})
      }
    },

    clearAPIToken(ev) {
      ev.preventDefault()
      this.apiInfo.token = undefined
    },

    timeEntries: {
      get (lastSet) {
        if (lastSet) return lastSet
        return new TimeEntries({ apiInfo: this.apiInfo })
      }
    }
  }
})
