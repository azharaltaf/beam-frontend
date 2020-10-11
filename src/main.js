import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './app.store.js'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-material-design-icons/styles.css'
import mixin from "./app.mixin.js";

import Default from './layouts/Default';

// Leaflet Begin

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

// Leaflet Ends

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('default-layout', Default);
Vue.mixin(mixin);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
})