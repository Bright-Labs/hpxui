import "@babel/polyfill"
import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import VeeValidate from "vee-validate"
import router from "./router"

Vue.use(VeeValidate)

Vue.config.productionTip = false

// Don't need vuex quite yet, just use the store pattern for now

Vue.prototype.$store = {
  state: {
    accessKey: "",
    secretKey: "",
    prefix: "hpx",
    region: "us-west-2",
  },
}

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
