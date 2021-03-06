import "@babel/polyfill"
import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import VeeValidate from "vee-validate"
import router from "./router"
import hpx from "hpx"
import uuidv4 from "uuidv4"

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

let session_id = uuidv4()
Vue.prototype.$hpx = async function(event, version) {
  hpx(
    "http://d3heinlctv8z2v.cloudfront.net/1x1.gif",
    event,
    version,
    session_id,
    uuidv4(),
    true
  )
}

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")
