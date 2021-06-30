import Vue from "vue"
import VueRouter from "vue-router"
import Layouts from "../components/layouts.vue"
import todo from "../components/todo.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Layouts",
        component: Layouts,
        children: [
            {
                path: "/todo/:id",
                name: "todo",
                component: todo,
            },
        ],
    },
]

const router = new VueRouter({
    routes,
})

export default router
