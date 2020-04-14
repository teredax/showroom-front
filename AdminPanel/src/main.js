import Vue from 'vue'
import vuetify from '@/plugins/vuetify' 
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueCookie from 'vue-cookies'
import Axios from 'axios'
import JsonExcel from 'vue-json-excel'
import Authentication from '@/components/Authentication'
import load from 'lodash'
import counter from 'vue-countup-v2'
import apexchart from 'vue-apexcharts'
import loadinganimation from '@/components/core/loading-animation'


const uri = ''
//const uri = 'http://192.168.0.115:3000'

const BPAPI = uri



Vue.component('downloadExcel', JsonExcel)
Vue.component('loading-animation', loadinganimation)
var auth = Authentication
var db = Axios
window.apexchart = apexchart
window.Counter = counter
window._ = load
window.authentication = auth
window.db = db
window.BAPI = BPAPI

/* db.settings({
  timestampsInSnapshots: true
}) */

/* eslint-disable */ 

Vue.config.productionTip = false
Vue.use(VueCookie)


new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
