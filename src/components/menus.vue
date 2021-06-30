<template>
    <div class="list-todos">
        <a
            @click="goList(item.id)"
            class="list-todo list activeListClass"
            v-for="(item, index) in items"
            :key="index"
        >
            <!-- v-for 列表渲染-->
            <span class="icon-lock" v-if="item.locked"></span>
            <!-- v-if 条件渲染-->
            <span class="count-list" v-if="item.count > 0">{{ item.count }}</span>
            {{ item.title }}
            <!-- 数据绑定，看模板语法-->
        </a>
        <a @click="addTodoList" class=" link-list-new">
            <!--新增菜单-->
            <span class="icon-plus"> </span>
            新增
        </a>
    </div>
</template>
<script>
import { getTodoList, addTodo } from "../api/api.js"
export default {
    data() {
        return {
            items: [], // 菜单数据
            todoId: "", // 默认选中id
        }
    },
    created() {
        getTodoList({}).then(res => {
            const TODOS = res.data.todos
            this.items = TODOS
            this.todoId = TODOS[0].id // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
        })
    },
    watch: {
        todoId(id) {
            this.$router.push({ name: "todo", params: { id: id } })
            //监听到用户的点击todoId的变化在跳转路由
        },
    },
    methods: {
        goList(id) {
            // 点击菜单时候,替换选中id
            this.todoId = id
        },
        addTodoList() {
            // 点击新增按钮时候
            // 调用新增菜单的接口，在接口调用成功在请求数据
            addTodo({}).then(res => {
                getTodoList({}).then(res => {
                    const TODOS = res.data.todos
                    this.items = TODOS
                    this.todoId = TODOS[TODOS.length - 1].id // 把菜单数据的默认的第一个对象的id赋值给默认选中的id
                    console.log(this.items)
                })
            })
        },
    },
}
</script>
<style lang="less">
@import "../common/style/menu.less";
</style>
