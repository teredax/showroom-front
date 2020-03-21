import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { Scroll } from 'vuetify/lib/directives'
import 'vuetify/src/styles/main.sass'

Vue.use(Vuetify, {
  theme: {
    primary: '#E55A5A',
    secondary: '#212121',
    terciary: '#F2CF3E',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  directives: {
    Scroll
  },
  iconfont: 'mdi'
})

const opts = {}

export default new Vuetify(opts)