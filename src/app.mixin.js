import store from "./app.store.js";

const mixin = {
  methods: {
    $setLoader() {
      store.state.loader = true;
    },
    $disableLoader() {
      store.state.loader = false;
    },
  }
}

export default mixin 