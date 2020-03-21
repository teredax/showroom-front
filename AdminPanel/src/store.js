import { set, toggle } from '@/utils/vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    text: null,
    color: null,
    alert: false
  },
  mutations: {
    setDrawer: set('drawer'),
    toggleDrawer: toggle('drawer'),
    toggle_alert (state, alert) {
      state.text = alert.text
      state.color = alert.color
      state.alert = true
    },
    set_alert (state, value) {
      state.alert = value
    }
  }
})
