import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    success : false,
    loader: false,
    fullScreen: false,
}
const store = new Vuex.Store({ state });

export default store;
