import Vue from "vue"
import Vuex from "vuex"
import { getTodoList } from "../api/api"
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: [], //待办事项列表数据
        menuOpen: false, //移动端的时候菜单是否开启
    },
    getters: {
        getTodoList: state => {
            return state.todoList // 派生状态todoList
        },
    },
    mutations: {
        EDITTODE(state, data) {
            // 定义名为 EDITTODE函数用作改变todoList的值
            state.todoList = data
        },
        MENUOPEN(state) {
            // 定义名为 MENUOPEN函数用作改变menuOpen的值
            state.menuOpen = !state.menuOpen
        },
    },
    actions: {
        getTodo: ({
            //定义一个名字为getTodo的事件
            commit,
        }) => {
            return new Promise(resolve => {
                /**
			   *调用 getTodo这个函数的时候
			   会调用getTodoList这个ajax请求函数，
			   函数返回值后，在调用store.js里面的EDITTODE方法，并且把值传给它。
			   */
                getTodoList().then(res => {
                    commit("EDITTODE", res.data.todos)
                    resolve()
                })
            })
        },
        updateMenu: ({
            //定义一个名字为updateMenu的事件
            commit,
        }) => {
            commit("MENUOPEN") // 调用store.js里面的MENUOPEN方法
        },
    },
    modules: {},
})
