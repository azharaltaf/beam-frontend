<template>
  <v-app id="app">
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
import VeeValidate from "vee-validate";
import Vue from "vue";
import sassStyles from '@/assets/styles/main.scss'
import AppEvents from  '@/config/event';
import moment from 'moment';

Vue.use(VeeValidate);

const default_layout = "default";

export default {
  components: {
    sassStyles,
    AppEvents
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    }
  },
  created () {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  },
}
</script>