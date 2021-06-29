import Vue from "vue"
import VueRouter from "vue-router"
import Layouts from "../components/layouts.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Layouts",
        component: Layouts,
    },
]

const router = new VueRouter({
    routes,
})

console.log(123)
export default router
