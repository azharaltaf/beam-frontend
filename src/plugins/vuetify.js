import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
var randomMC = require('random-material-color');

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: randomMC.getColor({ shades: ['400', '500', '600', '700', '800']}),
    secondary: '#4ecac2',
    accent: '#8c9eff',
    error: '#b71c1c',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})