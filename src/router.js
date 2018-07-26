import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home.vue"
import Status from "./components/Status.vue"
import Create from "./components/Create.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/create",
      name: "create",
      component: Create,
    },
    {
      path: "/status",
      name: "status",
      component: Status,
    },
  ],
})
