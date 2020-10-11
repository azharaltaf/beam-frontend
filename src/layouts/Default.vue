<template>
  <v-app id="app">
    <Loader />
    <v-container v-if="noScroll">
      <router-view/>
    </v-container>
    <v-container fluid v-else  @click="closeDrawer">
      
      <v-content>
        <router-view/>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  components:  {
    Loader
  },
  data() {
    return {
      renderNavBar: false,
      renderSideBar: false,
      renderContainer: false,
      noScroll: false
    }
  },
  updated() {
    if (this.$route && this.$route.meta) {
      this.renderNavBar = this.$route.meta.renderNavBar || false
      this.renderSideBar = this.$route.meta.renderSideBar || false
      this.noScroll = this.$route.meta.noScroll || false
    }
  },
  methods: {
    closeDrawer()
    {
        window.getApp.$emit('APP_DRAWER_CLOSED');
    }
  }
}
</script>